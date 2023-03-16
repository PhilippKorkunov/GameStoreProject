import {createOrderApi, delElFromBasket, getBasketApi} from "../api/api";
import date from "async-validator/dist-types/validator/date";

const ADD_ITEM = "basket/ADD_ITEM";
const DEL_ITEM = "basket/DEL_ITEM";
const SET_BASKET= "BASKET/SET_BASKET";

export interface IGame{
  id_product: number,
  title: string,
  price: number,
  id_order: number,
  id_customer: number
}
export interface BasketState{
  data: IGame[]
}

// interface basketState {
//   items: Map<string, IGame>
// }

const initialState: BasketState = {
  data: []
}

const shopReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // case ADD_ITEM: {
    //   let newItem = {
    //     id: action.id,
    //     src: action.src,
    //     title: action.title,
    //     platform: action.platform,
    //     price: action.price
    //   }
    //   return {
    //     ...state,
    //     items: state.items.set(newItem.id, newItem)
    //   }
    // }
    //
    case DEL_ITEM: {
      return {
        ...state,
        data: state.data.filter(it => it.id_order !== action.id_order)
      }
    }
    case SET_BASKET:
      return {
        ...state,
        data: action.data
      }

    default:
      return (state);
  }
}

export const addItemToBasket = (id: number, src: string, title: string, platform: string, price: number) =>
  ({type: ADD_ITEM, id, src, title, platform, price})

export const delItemFromBasket = (id_order: number) =>
  ({type: DEL_ITEM, id_order})

export const setBasket = (data: BasketState) => ({type: SET_BASKET, data})

export const getBasket = (id_customer: string) => async (dispatch: (arg0: { type: string; data: BasketState; }) => void) => {
  let response = await getBasketApi(id_customer);
  dispatch(setBasket(response?.data))
}

export const changeBasket = (id_order: number) => async (dispatch: (arg0: { type: string; id_order: number; }) => void) => {
  await delElFromBasket(id_order.toString());
  dispatch(delItemFromBasket(id_order))
}

export const createOrder = (id_customer: string) => async () => {
  const response = await createOrderApi(id_customer)
  console.log(response)
}

export default shopReducer;
