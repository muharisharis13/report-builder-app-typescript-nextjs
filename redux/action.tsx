import * as StringTypes from "./stringTypes";

export const SET_USERDATA = (data: any) => {
  return {
    type: StringTypes.GET_USERDATA,
    value: { ...data },
  };
};
