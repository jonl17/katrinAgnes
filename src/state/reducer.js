import {
  TOGGLE_DISPLAY_TITLE,
  SHOW_INFO_PAGE,
  SHOW_DETAIL_PAGE,
  CHOOSE_ARTWORK,
  SET_ARTWORK_IMAGES,
  SET_IMAGES_ON_DISPLAY,
  FILL_XCORD_ARRAY,
  FILL_YCORD_ARRAY,
  SET_IMAGE_INDEX,
  ACTIVATE_INDEX_POINTER,
  SET_MOUSE_CORDS,
  INCREMENT_IMAGE_INDEX,
  DECREMENT_IMAGE_INDEX,
  SET_SHIFTZONE_SIZE,
} from "./actions"

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
  shiftZoneSize: {
    height: 400,
    width: 700,
  },
}

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
        indexPointerActive: true,
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
        return { ...state, chosenImageIndex: state.chosenImageIndex - 1 }
      }
    case SET_SHIFTZONE_SIZE:
      return {
        ...state,
        shiftZoneSize: {
          height: action.height,
          width: action.width,
        },
      }
    default:
      return state
  }
}
