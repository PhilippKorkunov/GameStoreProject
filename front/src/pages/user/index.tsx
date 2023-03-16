import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Descriptions, List, Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import Button from "../../modules/Button/Button";
import {logout} from "../../redux/user-reducer";
import styles from "./user.module.scss"
import {useRouter} from "next/router";

const UserPage = () => {

  const dispatch = useDispatch()

  const user = useSelector((state: RootState) => state.user.user)
  const isLogin = useSelector((state: RootState) => state.user.isLogin)
  const router = useRouter();
  const data = [
    `Имя: ${user?.name ? user?.name : ""}`,
    `Фамилия: ${user?.surname ? user?.surname : ""}`,
    `Отчество: ${user?.patronymic ? user?.patronymic : ""}`,
    `Электронная почта: ${user?.email ? user?.email : ""}`,
  ];
  return (
    <MainLayout>
      { isLogin ?
      <div style={{padding: "20px"}}>
        <List
          header={<div><strong>Личный кабинет</strong></div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
        <Button text={"Выйти"} className={styles.button} onCLick={() => dispatch(logout())}/>
      </div> :
        <div className={styles.block}>
          <div style={{fontSize: 20, marginBottom: 10}}>
          Вы не авторизованы
          </div>
          <Button text={"Войти"} onCLick={() => router.push("/auth")}/>
        </div>
      }
    </MainLayout>
  );
};

export default UserPage;