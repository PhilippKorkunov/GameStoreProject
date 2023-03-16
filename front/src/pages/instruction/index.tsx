import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import styles from "./instruction.module.scss"
import Link from "next/link";

const AuthPage = () => {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <div className={styles.about_title}>
            <h1>Кто мы?</h1>
          </div>
          <div className={styles.about_text}>
              Мы команда интузиастов, готовых помочь вам наслаждаться играми на любимой консоли.
              Как вы наверное знаете, в российском PS Store в настоящее время нельзя купить игры,
              а потому приходится пользоваться обходными путями, создавать иностранные аккаунты,
              привязывать иностранные кошельки.
              Мы хотим помочь вам и сделать процесс покупки наиболее
              быстрым и простым.
          </div>
        </div>
        <div className={styles.instr}>
          <div className={styles.instr_title}>
            <h1>Что нужно делать?</h1>
          </div>
          <div className={styles.instr_text}>
            <ol type="1" className={styles.instr_text_list}>
              <li>1. Выберите любимую игру(ы) или подписку в нашем
                <Link href={"/shop"}> магазине</Link>
              </li>
              <li>2. Добавьте в <Link href={"/basket"}>корзину</Link> и формите заказ</li>
              <li>3. Мы создадим для вас аккаунт и добавим в него ваш заказ</li>
              <li>4. Доступ к аккаунту с играми направим вам на электронную почту</li>
              <li>5. Наслаждайтесь игрой!</li>
            </ol>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AuthPage;