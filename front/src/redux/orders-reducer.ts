export interface IOrder {
  data: {
    id: number,
    src: string,
    title: string,
    platform: string,
    price: number
  }[]
}

const initialState: IOrder = {
  data: []
}

const ordersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return (state);
  }
}


export default ordersReducer;