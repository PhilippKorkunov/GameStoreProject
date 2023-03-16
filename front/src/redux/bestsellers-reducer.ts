
export interface BestSellersState {
  data: {
    id: number,
    src: string,
    title: string
  }[]
}

const initialState: BestSellersState = {
  data: [
    {id: 1, src: "/img/cyberpank.png", title: "Cyberpunk 2077"},
    {id: 2, src: "/img/fifa22.png", title: "Fifa 22"},
    {id: 3, src: "/img/godOfWar.png", title: "God Of War"},
    {id: 4, src: "/img/spiderman.png", title: "Spider Man"}
  ]
}

export const bestsellersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return (state);
  }
}

export default bestsellersReducer