import React, {useState} from 'react';
import styles from "./basket-order.module.scss"
import Button from "../../modules/Button/Button";
import {connect, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {getGames} from "../../redux/games-reducer";
import {createOrder} from "../../redux/basket-reducer";
import {useRouter} from "next/router";
import {Alert} from "antd";

interface IBasketOrder {
  price?: number;
  count?: number;
  createOrder: (id_customer: string) => void;
}

const BasketOrder: React.FC<IBasketOrder> = ({price=0, count=0, createOrder}) => {
  const router = useRouter()
  const user = useSelector((state: RootState) => state.user.user)
  const [alert, setAlert] = useState(false)
  const createOrderInBasket = () => {
    createOrder(user.id_customer?.toString()!)
    setAlert(true)
    setTimeout(() => {
      router.push("/").then(r => ({}))
    }, 1000)
  }
  return (
    <div className={styles.wrapper}>
      <Button text={"Оформить"} onCLick={createOrderInBasket}/>
      <div className={styles.modal}>
        <div className={styles.modal__price}>Итого: {price} ₽</div>
        <div className={styles.modal__count}>Количество товаров: {count}</div>
      </div>
      { alert && <Alert message="Заказ оформлен" type="success" />}
    </div>
  );
};

export default connect((state: RootState) => ({}),
  {createOrder})(BasketOrder);