import MainLayout from "../layouts/MainLayout";
import UnderHeader from "../components/UnderHeader/UnderHeader";
import BestSellers from "../components/BestSellers/BestSellers";
import PSBlock from "../components/PSBlock/PSBlock";
import {connect} from "react-redux";
import {RootState} from "../redux/store";
import {getGames} from "../redux/games-reducer";
import React, {useEffect} from "react";
import {getBasket} from "../redux/basket-reducer";

const Index: React.FC<{getGames: ()=> void}> = ({getGames}) => {
  useEffect(()=> {
    getGames();
    getBasket("1");
  }, [])
  return (
    <MainLayout>
      <>
        <UnderHeader/>
        <PSBlock/>
        <BestSellers/>
      </>
    </MainLayout>
  )
}

export default connect((state: RootState) => ({}),
  {getGames, getBasket})(Index);