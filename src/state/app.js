const initialState = {
  displayTitle: "",
  infoPageVisable: false,
  detailPageVisable: false,
  chosenArtwork: {
    title: "",
    featuredImage: "",
    technique: "",
    year: "",
  },
  chosenArtWorkImages: [],
  imagesOnDisplay: [],
  randomWidth: [],
  randomHeight: [],
  hoveredImageIndex: 0,
  indexPointerActive: false,
  mouse: {
    x: 0,
    y: 0,
  },
  chosenImageIndex: 0,
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

// iv.2) set images on display array
const SET_IMAGES_ON_DISPLAY = "SET_IMAGES_ON_DISPLAY"
export const setImagesOnDisplay = imagesOnDisplay => ({
  type: SET_IMAGES_ON_DISPLAY,
  imagesOnDisplay,
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

// vi) update image index on hover
const SET_IMAGE_INDEX = "SET_IMAGE_INDEX"
export const setImageIndex = index => ({
  type: SET_IMAGE_INDEX,
  index,
})
// vii) show index pointer
const ACTIVATE_INDEX_POINTER = "ACTIVATE_INDEX_POINTER"
export const activateIndexPointer = show => ({
  type: ACTIVATE_INDEX_POINTER,
  show /* true/false */,
})

// vii.1 set mouse cords
const SET_MOUSE_CORDS = "SET_MOUSE_CORDS"
export const setMouseCords = (x, y) => ({
  type: SET_MOUSE_CORDS,
  x,
  y,
})

// chosen image index in detail page
const INCREMENT_IMAGE_INDEX = "INCREMENT_IMAGE_INDEX"
export const incrementImageIndex = () => ({
  type: INCREMENT_IMAGE_INDEX,
})
const DECREMENT_IMAGE_INDEX = "DECREMENT_IMAGE_INDEX"
export const decrementImageIndex = () => ({
  type: DECREMENT_IMAGE_INDEX,
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
      return {
        ...state,
        chosenArtWorkImages: action.images,
        chosenImageIndex: 0,
      }
    case SET_IMAGES_ON_DISPLAY:
      return { ...state, imagesOnDisplay: action.imagesOnDisplay }
    case FILL_XCORD_ARRAY:
      return { ...state, randomWidth: action.randomWidth }
    case FILL_YCORD_ARRAY:
      return { ...state, randomHeight: action.randomHeight }
    case SET_IMAGE_INDEX:
      return {
        ...state,
        hoveredImageIndex: action.index,
        indexPointerActive: true,
      }
    case ACTIVATE_INDEX_POINTER:
      return { ...state, indexPointerActive: action.show }
    case SET_MOUSE_CORDS:
      return {
        ...state,
        mouse: {
          x: action.x,
          y: action.y,
        },
      }
    case INCREMENT_IMAGE_INDEX:
      if (state.chosenImageIndex > state.chosenArtWorkImages.length - 2) {
        return { ...state, chosenImageIndex: 0 }
      } else {
        return { ...state, chosenImageIndex: state.chosenImageIndex + 1 }
      }
    case DECREMENT_IMAGE_INDEX:
      if (state.chosenImageIndex === 0) {
        return {
          ...state,
          chosenImageIndex: state.chosenArtWorkImages.length - 1,
        }
      } else {
        console.log(state.chosenArtWorkImages.length)
        return { ...state, chosenImageIndex: state.chosenImageIndex - 1 }
      }
    default:
      return state
  }
}
