import React, {useEffect, useState} from 'react';
import MainLayout from "../../layouts/MainLayout";
import styles from "./basket.module.scss"
import BasketOrder from "../../components/BasketOrder/basket-order";
import {connect, useDispatch, useSelector} from "react-redux";
import {RootState, store} from "../../redux/store";
import {changeBasket, getBasket} from "../../redux/basket-reducer";
import BasketList from "../../components/BasketList";
import Button from "../../modules/Button/Button";
import {useRouter} from "next/router";

interface IBasketPage{
  getBasket: (id_customer: string)=> void,
  changeBasket: (id_customer: number) => void
}

const BasketPage: React.FC<IBasketPage> = ({getBasket, changeBasket}) => {

  useEffect(()=> {
    isLogin && user.name && getBasket(user?.id_customer);
  }, [])

  const user = useSelector((state: RootState) => state.user.user)
  const router = useRouter()
  const basketList = useSelector((state: RootState) => state.basket.data)
  const isLogin = useSelector((state: RootState) => state.user.isLogin)

  const basketSum = basketList.reduce(
    (accumulator: any, currentValue: { price: any }) =>
      accumulator + currentValue.price, 0)

  return (
    <MainLayout>
      { isLogin && user.name ?
      <div className={basketList.length === 0 ? styles.empty_wrapper :styles.wrapper}>
        <div className={styles.list}>
          <BasketList basketList={basketList} delItem={changeBasket}/>
        </div>
        <div className={styles.order}>
          <BasketOrder count={basketList.length} price={basketSum}/>
        </div>
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

export default connect((state: RootState) => ({}),
  {getBasket, changeBasket})(BasketPage);