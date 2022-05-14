import * as StringType from "./stringTypes";
import moment from "moment";

const initialState = {
  userData: null,
  contentCover: {
    mainTitle: "Main Title global",
    typeOfReport: "Type Of Report",
    date: moment(new Date()).format("dd, MMM yyyy"),
    smallLogo:
      "https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    imageMain:
      "https://images.unsplash.com/photo-1648614009917-84831416abb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    bg: "",
  },
  contentSummary: {
    narasi:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, eum.",
  },
  arrSlide: [],
  typeSlide: "",
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case StringType.GET_USERDATA:
      return {
        ...state,
        userData: action.value,
      };
    case StringType.SET_CONTENT_COVER:
      return {
        ...state,
        contentCover: action.value,
      };
    case StringType.SET_CONTENT_SUMMARY:
      return {
        ...state,
        contentSummary: action.value,
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

    default:
      return state;
  }
};

export { reducer };
