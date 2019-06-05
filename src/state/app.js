const initialState = {
  displayTitle: "",
  infoPageVisable: false,
  detailPageVisable: false,
  chosenArtwork: {
    title: "",
    featuredImage: "",
  },
  chosenArtWorkImages: [],
  randomWidth: [],
  randomHeight: [],
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

// iv) set chosen artwork
const CHOOSE_ARTWORK = "CHOOSE_ARTWORK"
export const chooseArtwork = chosenArtwork => ({
  type: CHOOSE_ARTWORK,
  chosenArtwork,
})
// iv) set chosen artwork
const SET_ARTWORK_IMAGES = "SET_ARTWORK_IMAGES"
export const setArtWorkImages = images => ({
  type: SET_ARTWORK_IMAGES,
  images,
})

// v.1) fill random width pixel array
const FILL_XCORD_ARRAY = "FILL_XCORD_ARRAY"
export const fillXcordArray = randomWidth => ({
  type: FILL_XCORD_ARRAY,
  randomWidth,
})
// v.2) fill random height pixel array
const FILL_YCORD_ARRAY = "FILL_YCORD_ARRAY"
export const fillYcordArray = randomHeight => ({
  type: FILL_YCORD_ARRAY,
  randomHeight,
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
    case CHOOSE_ARTWORK:
      return { ...state, chosenArtwork: action.chosenArtwork }
    case SET_ARTWORK_IMAGES:
      return { ...state, chosenArtWorkImages: action.images }
    case FILL_XCORD_ARRAY:
      return { ...state, randomWidth: action.randomWidth }
    case FILL_YCORD_ARRAY:
      return { ...state, randomHeight: action.randomHeight }
    default:
      return state
  }
}
