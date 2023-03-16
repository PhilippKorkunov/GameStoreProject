import React from 'react';
import {useDispatch} from "react-redux";
import MainLayout from "../../layouts/MainLayout";
import styles from "../auth/auth.module.scss";
import {Field, Form, Formik} from "formik";
import {showAdminPage} from "../../redux/admin-reducer";
import cx from "classnames";
import Button from "../../modules/Button/Button";
import {validateHeaderName} from "http";
import {addUser} from "../../api/api";
import {useRouter} from "next/router";

const Reg = () => {

  const router = useRouter()
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
      <div className={styles.form}>
        <div className={styles.header}>
          <h2>Регистрация</h2>
        </div>
        <Formik initialValues={{
          name: "",
          surname: "",
          patronymic: "",
          email: "",
          password: "",
        }} onSubmit = { async (values, {resetForm}) => {
          await addUser(values.surname, values.name, values.patronymic, values.email, values.password)
          await router.push("/user")
          resetForm()
        }}>
          {({errors, touched}) => (
            <Form>
              <Field name="name"
                     validate={validatePassword}
                     placeholder={"Имя"}
                     className={cx(styles.field)}>
              </Field>
              {errors.name && touched.name && (
                <div className={styles.errors}>{errors.name}</div>
              )}
              <Field name="surname"
                     validate={validatePassword}
                     placeholder={"Фамилия"}
                     className={cx(styles.field)}>
              </Field>
              {errors.surname && touched.surname && (
                <div className={styles.errors}>{errors.surname}</div>
              )}
              <Field name="patronymic"
                     placeholder={"Отчество"}
                     className={cx(styles.field)}>
              </Field>
              {errors.surname && touched.surname && (
                <div className={styles.errors}>{errors.patronymic}</div>
              )}
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
              <div className={styles.button}>
                <Button text={"Зарегистрироваться"} type={"submit"}/>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </MainLayout>
  )
};

export default Reg;