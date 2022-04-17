import * as StringType from "./stringTypes";

const initialState = {
  userData: null,
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case StringType.GET_USERDATA:
      return {
        ...state,
        userData: action.value,
      };

    default:
      return state;
  }
};

export { reducer };
