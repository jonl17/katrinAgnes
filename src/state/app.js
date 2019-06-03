const initialState = {
  displayTitle: "",
  infoPageVisable: false,
  detailPageVisable: false,
  chosenArt: {},
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

// iii) show the detail page
const SHOW_DETAIL_PAGE = "SHOW_DETAIL_PAGE"
export const showDetailPage = detailPageVisable => ({
  type: SHOW_DETAIL_PAGE,
  detailPageVisable,
})

/* the reducer */

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DISPLAY_TITLE:
      return { ...state, displayTitle: action.displayTitle }
    case SHOW_INFO_PAGE:
      return { ...state, infoPageVisable: action.infoPageVisable }
    case SHOW_DETAIL_PAGE:
      return { ...state, detailPageVisable: action.detailPageVisable }
    default:
      return state
  }
}
