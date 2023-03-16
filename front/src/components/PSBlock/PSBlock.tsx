import React from 'react';
import styles from "./PSBlock.module.scss";
import Image from "next/image";

const PsBlock = () => {
  return (
    <div className={styles.photo_block}>
      <div className={styles.photo_block__left}>
        <p>Приобретайте игры на любимые консоли без проблем и переплат</p>
      </div>
      <div className={styles.photo_block__center}>
        <Image width={580} height={360} src={"/img/ps.png"}/>
      </div>
      <div className={styles.photo_block__right}>
        <p>
          Игры на PS4/PS5. PS.Plus Essential/Extra/Deluxe. Аккаунты.
          <br/>
          Честные цены. Быстрый доступ. Минимальные усилия.
        </p>
      </div>
    </div>
  );
};

export default PsBlock;