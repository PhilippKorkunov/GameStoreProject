import React, {useEffect, useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import styles from "./shop.module.scss";
import Fuse from "fuse.js"
import cx from "classnames"
import Link from "next/link";
import type {RootState} from '../../redux/store'
import {useSelector, useDispatch, connect} from 'react-redux'
import Game from "../../components/ShopPage/Game/Game";
import {getGames} from "../../redux/games-reducer";

const ShopPage: React.FC<{getGames: () => void}> = ({getGames}) => {

  useEffect(() => {
    getGames();
  }, [])

  const gamesList = useSelector((state: RootState) => state.games.data)
  const [games, setData] = useState(gamesList);
  const searchData = (pattern: string) => {
    if (!pattern) {
      setData(games);
      return;
    }

    const fuse = new Fuse(games, {
      keys: ["title"],
    });

    const result = fuse.search(pattern);
    const matches: any[] = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setData(matches);
    }
  };

  return (
    <MainLayout>
      <div className={cx(styles.shop)}>
        <div className={styles.top}>
          <div className={styles.search}>
            <label className={styles.search__label} htmlFor="site-search">Найти:</label>
            <input type="text" className={styles.search__input}
                   onChange={(e) => searchData(e.target.value)}
                   id="site-search" placeholder={"Поиск в магазине"}/>
          </div>
          <div className={styles.link_to_basket}>
            <Link className={styles.link_to_basket__link} href={"/basket"}>
              В корзину
            </Link>
          </div>
        </div>
        <div className={styles.games}>
          {gamesList.map((it: { id_product: React.Key | null | undefined; images: string[]; title: string; price: number; }) =>
            <Game key={it.id_product} id={it.id_product as number}
                  src={it.images[0]} title={it.title}
                  price={it.price} isBasket={false}
            />
          )}
        </div>

      </div>
    </MainLayout>
  );
};

export default connect((state: RootState) => ({}),
  {getGames})(ShopPage);