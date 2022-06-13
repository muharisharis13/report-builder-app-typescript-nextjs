import * as StringType from "./stringTypes";

const initialState = {
  userData: null,
  arrSlide: [],
  typeSlide: [],
  arrSlideContent: [],
  key: "",
  btnSave: () => null,
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case StringType.GET_USERDATA:
      return {
        ...state,
        userData: action.value,
      };
    case StringType.SET_ARR_SLIDE:
      return {
        ...state,
        arrSlide: action.value,
      };
    case StringType.SET_TYPE_SLIDE:
      return {
        ...state,
        typeSlide: action.value,
      };
    case StringType.SET_ARR_SLIDE_CONTENT:
      return {
        ...state,
        arrSlideContent: action.value,
      };
    case StringType.SET_KEY_SLIDE:
      return {
        ...state,
        key: action.value,
      };
    case StringType.SET_BTN_SAVE:
      return {
        ...state,
        btnSave: action.value,
      };

    default:
      return state;
  }
};

export { reducer };
