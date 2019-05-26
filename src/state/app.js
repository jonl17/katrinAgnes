const initialState = {
  displayTitle: "",
  infoPageVisable: false,
}

/* action creator */

// i) display titles on hover
const TOGGLE_DISPLAY_TITLE = "TOGGLE_DISPLAY_TITLE"
export const toggleDisplayTitle = displayTitle => ({
  type: TOGGLE_DISPLAY_TITLE,
  displayTitle,
})

// ii) show the information page
const SHOW_INFO_PAGE = "SHOW_INFO_PAGE"
export const showInfoPage = infoPageVisable => ({
  type: SHOW_INFO_PAGE,
  infoPageVisable,
})

/* the reducer */

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO_PAGE:
      return { ...state, infoPageVisable: action.infoPageVisable }
    case TOGGLE_DISPLAY_TITLE:
      return { ...state, displayTitle: action.displayTitle }
    default:
      return state
  }
}
