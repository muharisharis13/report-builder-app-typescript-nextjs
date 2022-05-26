import * as StringTypes from './stringTypes'

export const SET_USERDATA = (data: any) => {
  return {
    type: StringTypes.GET_USERDATA,
    value: { ...data }
  }
}

export const SET_CONTENT_COVER = (data: any) => {
  return {
    type: StringTypes.SET_CONTENT_COVER,
    value: { ...data }
  }
}
export const SET_CONTENT_SUMMARY = (data: any) => {
  return {
    type: StringTypes.SET_CONTENT_SUMMARY,
    value: { ...data }
  }
}
export const SET_ARR_SLIDE = (data: any) => {
  return {
    type: StringTypes.SET_ARR_SLIDE,
    value: data
  }
}
export const SET_TYPE_SLIDE = (data: any) => {
  return {
    type: StringTypes.SET_TYPE_SLIDE,
    value: data
  }
}

export const SET_ARR_SLIDE_CONTENT = (data: any) => {
  return {
    type: StringTypes.SET_ARR_SLIDE_CONTENT,
    value: data
  }
}
export const SET_KEY_SLIDE = (data: any) => {
  return {
    type: StringTypes.SET_KEY_SLIDE,
    value: data
  }
}
