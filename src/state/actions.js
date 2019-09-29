/* action creator */

// i) display titles on hover
export const TOGGLE_DISPLAY_TITLE = "TOGGLE_DISPLAY_TITLE"
export const toggleDisplayTitle = displayTitle => ({
  type: TOGGLE_DISPLAY_TITLE,
  displayTitle,
})

// ii) show the information page
export const SHOW_INFO_PAGE = "SHOW_INFO_PAGE"
export const showInfoPage = infoPageVisable => ({
  type: SHOW_INFO_PAGE,
  infoPageVisable,
})

// iii) show the detail page
export const SHOW_DETAIL_PAGE = "SHOW_DETAIL_PAGE"
export const showDetailPage = detailPageVisable => ({
  type: SHOW_DETAIL_PAGE,
  detailPageVisable,
})

// iv) set chosen artwork
export const CHOOSE_ARTWORK = "CHOOSE_ARTWORK"
export const chooseArtwork = chosenArtwork => ({
  type: CHOOSE_ARTWORK,
  chosenArtwork,
})
// iv) set chosen artwork
export const SET_ARTWORK_IMAGES = "SET_ARTWORK_IMAGES"
export const setArtWorkImages = images => ({
  type: SET_ARTWORK_IMAGES,
  images,
})

// iv.2) set images on display array
export const SET_IMAGES_ON_DISPLAY = "SET_IMAGES_ON_DISPLAY"
export const setImagesOnDisplay = imagesOnDisplay => ({
  type: SET_IMAGES_ON_DISPLAY,
  imagesOnDisplay,
})

// v.1) fill random width pixel array
export const FILL_XCORD_ARRAY = "FILL_XCORD_ARRAY"
export const fillXcordArray = randomWidth => ({
  type: FILL_XCORD_ARRAY,
  randomWidth,
})
// v.2) fill random height pixel array
export const FILL_YCORD_ARRAY = "FILL_YCORD_ARRAY"
export const fillYcordArray = randomHeight => ({
  type: FILL_YCORD_ARRAY,
  randomHeight,
})

// vi) update image index on hover
export const SET_IMAGE_INDEX = "SET_IMAGE_INDEX"
export const setImageIndex = index => ({
  type: SET_IMAGE_INDEX,
  index,
})
// vii) show index pointer
export const ACTIVATE_INDEX_POINTER = "ACTIVATE_INDEX_POINTER"
export const activateIndexPointer = show => ({
  type: ACTIVATE_INDEX_POINTER,
  show /* true/false */,
})

// vii.1 set mouse cords
export const SET_MOUSE_CORDS = "SET_MOUSE_CORDS"
export const setMouseCords = (x, y) => ({
  type: SET_MOUSE_CORDS,
  x,
  y,
})

// chosen image index in detail page
export const INCREMENT_IMAGE_INDEX = "INCREMENT_IMAGE_INDEX"
export const incrementImageIndex = () => ({
  type: INCREMENT_IMAGE_INDEX,
})
export const DECREMENT_IMAGE_INDEX = "DECREMENT_IMAGE_INDEX"
export const decrementImageIndex = () => ({
  type: DECREMENT_IMAGE_INDEX,
})

export const SET_SHIFTZONE_SIZE = "SET_SHIFTZONE_SIZE"
export const setShiftzoneSize = (height, width) => ({
  type: SET_SHIFTZONE_SIZE,
  height,
  width,
})

// responsiveness actions

export const SET_SCREEN_SIZE = "SET_SCREEN_SIZE"
export const setScreenSize = width => ({
  type: SET_SCREEN_SIZE,
  width,
})

export const SET_FOCUSED_IMAGE_INDEX = "SET_FOCUSED_IMAGE_INDEX"
export const setFocusedImageIndex = index => ({
  type: SET_FOCUSED_IMAGE_INDEX,
  index,
})
