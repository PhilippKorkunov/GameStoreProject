import {getUser} from "../api/api";


const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

export interface IUser {
  id_customer?: number;
  name?: string;
  surname?: string;
  patronymic?: string;
  email: string;
  password: string;
}

export interface UserState {
  user?: IUser;
  isLogin: boolean
}

const initialState: UserState = {
  user: undefined,
  isLogin: false
}

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: {...action.data},
        isLogin: true
      }
    case LOGOUT:
    return {
        ...state,
        user: undefined,
        isLogin: false
    }
    default:
      return (state);
  }
}

export const login = (data: IUser) => {
  return ({type: LOGIN, data})
}

export const logout = () => ({type: LOGOUT})

export const setUser = (email: string, password: string, isAdmin: boolean) => async (dispatch: (arg0: { data: IUser; type: string }) => void) => {
  let response = await getUser(email, password, isAdmin)
  console.log(response)
  dispatch(login(response?.data[0]))
}

export default userReducer;