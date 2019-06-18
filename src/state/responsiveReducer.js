import { SET_SCREEN_SIZE } from "./actions"

const initialState = {
  windowWidth: 0,
  device: `browser`,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCREEN_SIZE:
      var device = ""
      if (action.width > 950) {
        device = `browser`
      }
      if (action.width < 950 && action.width > 500) {
        device = `tablet`
      }
      if (action.width < 500) {
        device = `mobile`
      }
      return { ...state, windowWidth: action.width, device: device }
    default:
      return state
  }
}
