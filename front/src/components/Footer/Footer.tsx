import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import styles from "./footer.module.scss"
import {useRouter} from "next/router";
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const Footer = () => {
  const isAdmin = useSelector((state: RootState) => state.admin.isAdmin)
  const router = useRouter()
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer_top__left}>
          <h3 onClick={() => router.push("/")} className={styles.title}><span className={styles.title__start}>Games</span>Novel</h3>
        </div>
        <div className={styles.footer_top__right}>
          <ul className={styles.list}>
            <li className={styles.item}><Link href={"/"}>Главная</Link></li>
            <li className={styles.item}><Link href={"/shop"}>Магазин</Link></li>
            <li className={styles.item}><Link href={"/instruction"}>Инструкция</Link></li>
            <li className={styles.item}><Link href={"/basket"}>Корзина</Link></li>
            <li className={styles.item}><Link href={"/auth"}>Авторизация</Link></li>
            {isAdmin && <li className={styles.item}><Link href={"/admin"}>Администрирование</Link></li>}
          </ul>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.copyright}>
          <span>GamesNovel © 2022</span>
        </div>
        <div className={styles.links}>
          <a href="https://web.telegram.org"  target="_blank" title={"Telegram"}>
            <FontAwesomeIcon icon={faTelegram} className={styles.links_item}/>
          </a>
          <a href="https://vk.com/"  target="_blank" title={"Vk"}>
            <FontAwesomeIcon icon={faVk} className={styles.links_item}/>
          </a>
          <a href="https://discord.com/" target="_blank" title={"Discord"}>
            <FontAwesomeIcon icon={faDiscord} className={styles.links_item}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;