const ADD_ADMIN_PAGE = "admin/ADD_ADMIN_PAGE";

export interface IAdmin {
  isAdmin: boolean;
}

const initialState: IAdmin = {
  isAdmin: false
}

const adminReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ADMIN_PAGE: {
      return {
        ...state,
        isAdmin: action.value
      }
    }
    default:
      return (state);
  }
}

export const showAdminPage = (value: boolean) =>
  ({type: ADD_ADMIN_PAGE, value})

export default adminReducer;