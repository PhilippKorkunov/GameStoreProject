import React from 'react';
import styles from "./under-header.module.scss"
import cx from "classnames"
import Button from "../../modules/Button/Button";
import {useRouter} from "next/router";

const UnderHeader = () => {
  const router = useRouter()

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>GamesNovel</h1>
        <p className={cx(styles.paragraph, styles.paragraph__first)}>Сервис для покупки ваших любимых игр для PS4/PS5</p>
        <p className={cx(styles.paragraph, styles.paragraph__second)}>Наслаждайтесь игрой не смотря на обстоятельства</p>
        <Button onCLick={() => router.push("/shop")} className={styles.button} text={"В магазин"}/>
      </div>
    </div>
  );
};

export default UnderHeader;