import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import styles from "./auth.module.scss";
import {Field, Form, Formik} from "formik";
import Button from "../../modules/Button/Button";
import cx from "classnames"
import {connect, useDispatch, useSelector} from "react-redux";
import {showAdminPage} from "../../redux/admin-reducer";
import Link from 'next/link';
import {RootState} from "../../redux/store";
import {logout, setUser} from "../../redux/user-reducer";
import {useRouter} from "next/router";

const AuthPage: React.FC<{
  setUser: (email: string,
            password: string,
            isAdmin: boolean) => void
}> = ({setUser}) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const isLogin = useSelector((state: RootState) => state.user.isLogin)
  const validateEmail = (value: string) => {
    if (!value) {
      return "Обязательное поле";
    } else {
      if (!/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]/.test(value)) {
        return "Неверный email"
      }
    }
  }

  const validatePassword = (value: string) => {
    if (!value) {
      return "Обязательное поле"
    }
  }

  return (
    <MainLayout>
      {!isLogin ?
        <div className={styles.form}>
          <div className={styles.header}>
            <h2>Авторизация</h2>
          </div>
          <Formik initialValues={{
            email: "",
            password: "",
            isAdmin: false,
          }} onSubmit={async (values, {resetForm}) => {
            setUser(values.email, values.password, values.isAdmin)
            await router.push("/user")
            dispatch(showAdminPage(values.isAdmin))
            resetForm()
          }}>
            {({errors, touched}) => (
              <Form>
                <Field name="email"
                       validate={validateEmail}
                       placeholder={"Электронная почта"}
                       className={cx(styles.field)}>
                </Field>
                {errors.email && touched.email && (
                  <div className={styles.errors}>{errors.email}</div>
                )}

                <Field name="password"
                       type="password"
                       validate={validatePassword}
                       placeholder={"Пароль"}
                       className={cx(styles.field)}>
                </Field>
                {errors.password && touched.password && (
                  <div className={styles.errors}>{errors.password}</div>
                )}
                <label className={styles.checkbox}>
                  <Field type="checkbox" name="isAdmin"/>
                  <span className={styles.checkbox__text}>Войти как администратор</span>
                </label>
                <div className={styles.button}>
                  <Button text={"Авторизоваться"} type={"submit"}/>
                </div>
              </Form>
            )}
          </Formik>
          <br/>
          <div className={styles.link}>Нет аккаунта? <Link href={"/registration"}>Зарегистрироваться</Link></div>
        </div> :
        <div className={styles.form}>
          <div style={{fontSize: 20}}>
            Вы авторизованы
          </div>
          <div className={styles.button}>
            <Button text={"Выйти"} onCLick={() => dispatch(logout())}/>
          </div>
        </div>
      }
    </MainLayout>
  );
};

export default connect((state: RootState) => ({}),
  {setUser})(AuthPage);