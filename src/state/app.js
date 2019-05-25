const initialState = {
  displayTitle: "",
}

/* action creator */

const TOGGLE_DISPLAY_TITLE = "TOGGLE_DISPLAY_TITLE"
export const toggleDisplayTitle = displayTitle => ({
  type: TOGGLE_DISPLAY_TITLE,
  displayTitle,
})

/* the reducer */

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DISPLAY_TITLE:
      return { ...state, displayTitle: action.displayTitle }
    default:
      return state
  }
}
