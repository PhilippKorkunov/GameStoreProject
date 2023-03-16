import {getGamesApi} from "../api/api";


const SET_GAMES = "games/SET_GAMES"

export interface GamesState {
  data: {
    id_product: number,
    title: string,
    price: number,
    id_category: number,
    images: string[],
    description: string
  }[]
}

const initialState: GamesState = {
  // data: [
  //   {id: 1, src: "/img/cyberpank.png", title: "Cyberpunk 2077", platform: "PS4/PS5", price: 2990},
  //   {id: 2, src: "/img/fifa22.png", title: "Fifa 22", platform: "PS4/PS5", price: 2990},
  //   {id: 3, src: "/img/godOfWar.png", title: "God Of War", platform: "PS4/PS5", price: 2990},
  //   {id: 4, src: "https://upload.wikimedia.org/wikipedia/ru/archive/d/dd/20220225123944%21Spider_Man_PS4_cover.jpg", title: "Spider Man", platform: "PS4/PS5", price: 2990},
  //   {id: 5, src: "/img/cyberpank.png", title: "Cyberpunk 2077", platform: "PS4/PS5", price: 2990},
  //   {id: 6, src: "/img/fifa22.png", title: "Fifa 22", platform: "PS4/PS5", price: 2990},
  //   {id: 7, src: "/img/godOfWar.png", title: "God Of War", platform: "PS4/PS5", price: 2990},
  //   {id: 8, src: "/img/spiderman.png", title: "Spider Man", platform: "PS4/PS5", price: 2990},
  //   {id: 9, src: "/img/cyberpank.png", title: "Cyberpunk 2077", platform: "PS4/PS5", price: 2990},
  //   {id: 10, src: "/img/fifa22.png", title: "Fifa 22", platform: "PS4/PS5", price: 2990},
  //   {id: 11, src: "/img/godOfWar.png", title: "God Of War", platform: "PS4/PS5", price: 2990},
  //   {id: 12, src: "/img/spiderman.png", title: "Spider Man", platform: "PS4/PS5", price: 2990},
  // ]
  data: []
}


export const gamesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_GAMES:
      return {
        ...state,
        data: action.data
      }
    default:
      return (state);
  }
}

export const setGames = (data: GamesState) => ({type: SET_GAMES, data})

export const getGames = () => async (dispatch: (arg0: { type: string; data: GamesState; }) => void) => {
  let response = await getGamesApi()
  dispatch(setGames(response?.data))
}
export default gamesReducer