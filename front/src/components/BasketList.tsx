import React, {useEffect, useState} from 'react';
import {BasketState, delItemFromBasket, IGame} from "../redux/basket-reducer";
import Game from "./ShopPage/Game/Game";
import {useDispatch} from "react-redux";

interface IBasketList {
  basketList: IGame[];
  delItem: (id_order: number) => void;
}

const   BasketList: React.FC<IBasketList> = ({basketList, delItem}) => {
  return (
    <>
      {basketList.map(it =>
        <Game id={it.id_customer} title={it.title} price={it.price}
              isBasket={true} delItem={delItem} idOrder={it.id_order}/>
      )}
    </>
  );
};

export default BasketList;