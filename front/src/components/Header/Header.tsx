import React from 'react';
import styles from "./header.module.scss"
import Link from "next/link";
import {useRouter} from "next/router";

const Header = () => {

  const router = useRouter()

  return (
    <div className={styles.header}>
      <div className={styles.top}></div>
      <div className={styles.bottom}>
        <div className={styles.header_title}>
          <h3 onClick={() => router.push("/")} className={styles.title}>
            <span className={styles.title__start}>Games</span>Novel
          </h3>
        </div>
        <div className={styles.menu}>
          <ul className={styles.menu__items}>
            <li className={styles.menu__items_item}>
              <Link className={styles.menu__items_item_link} href={"/"}>Главная</Link>
            </li>
            <li className={styles.menu__items_item}>
              <Link className={styles.menu__items_item_link} href={"/shop"}>Магазин</Link>
            </li>
            <li className={styles.menu__items_item}>
              <Link className={styles.menu__items_item_link} href={"/instruction"}>Инструкция</Link>
            </li>
            <li className={styles.menu__items_item}>
              <Link className={styles.menu__items_item_link} href={"/basket"}>Корзина</Link>
            </li>
            <li className={styles.menu__items_item}>
              <Link className={styles.menu__items_item_link} href={"/user"}>Аккаунт</Link>
            </li>
            <li className={styles.menu__items_item}>
              <Link className={styles.menu__items_item_link} href={"/auth"}>Авторизация</Link>
            </li>
          </ul>
        </div>
        <div className={styles.mobile_menu}>
          <ul className={styles.mobile_menu__items}>
            <li className={styles.mobile_menu__items_item}>
              <Link className={styles.mobile_menu__items_item_link} href={"/"}>Главная</Link>
            </li>
            <li className={styles.mobile_menu__items_item}>
              <Link className={styles.mobile_menu__items_item_link} href={"/shop"}>Магазин</Link>
            </li>
            <li className={styles.mobile_menu__items_item}>
              <Link className={styles.mobile_menu__items_item_link} href={"/instruction"}>Инструкция</Link>
            </li>
          </ul>
          <ul>
            <li className={styles.mobile_menu__items_item}>
              <Link className={styles.mobile_menu__items_item_link} href={"/basket"}>Корзина</Link>
            </li>
            <li className={styles.mobile_menu__items_item}>
              <Link className={styles.mobile_menu__items_item_link} href={"/user"}>Аккаунт</Link>
            </li>
            <li className={styles.mobile_menu__items_item}>
              <Link className={styles.mobile_menu__items_item_link} href={"/auth"}>Авторизация</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;