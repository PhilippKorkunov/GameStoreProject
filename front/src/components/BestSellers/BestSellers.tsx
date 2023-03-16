import React from 'react';
import {Image, Layout} from "antd";
import styles from "./best-sellers.module.scss"
import {GetStaticProps} from "next";
import Link from "next/link";
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'


const BestSellers: React.FC = () => {
  const bestSellersData = useSelector((state:RootState) => state.bestsellers.data)
  return (
    <Layout.Content style={{padding: 16}}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h3 className={styles.text_title}>BEST SELLERS</h3>
          <p className={styles.text_paragraph}>
            Топ игры по продажам за последнюю неделю.
            <br/>
            Не упусти и ты возможность сыграть в них
          </p>
        </div>
        {bestSellersData.map((it: any, key: number) => {
          return (
            <div className={styles.img} key={key}>
              <Image
                className={styles.img_img}
                width={200}
                height={250}
                src={it.src}
              />
              <div className={styles.img_label}>{it.title}</div>
              <div className={styles.img_link}>
                <Link className={styles.img_link_text} href={"/shop"}>В магазин</Link>
              </div>
            </div>
          )
        })}
      </div>
    </Layout.Content>
  )
    ;
};

// export const getStaticProps: GetStaticProps = async () => {
//   return {props: {data: bestSellersData}}
// };

export default BestSellers;