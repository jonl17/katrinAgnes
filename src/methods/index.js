/* METHODS */

/*
  generates array of random numbers
  ---------------------------------
  limit is the scope in which random numbers should be
  length is size of array
  if fixed is true then last og third last should be fixed
*/
export const generateRandomPixels = (limit, length, setFixed) => {
  var pixels = []
  for (let i = 0; i < length; i++) {
    pixels.push(randInt(limit))
  }
  if (setFixed) {
    pixels[pixels.length - 1] = -100
    if (pixels.length > 3) pixels[pixels.length - 3] = 400
  }
  return pixels
}

/* helper */
function randInt(limit) {
  return Math.floor(Math.random() * (limit - +0))
}

export const initializeImagesOnDisplayArray = imagesList => {
  var imagesOnDisplay = []
  for (var i = 0; i < imagesList.length; i++) {
    /* sets the first two images on display */
    if (i < 1) imagesOnDisplay.push({ image: imagesList[i], display: `block` })
    else imagesOnDisplay.push({ image: imagesList[i], display: `none` })
  }
  return imagesOnDisplay
}

export const incrementImagesOnDisplayArray = (index, imagesList) => {
  var i = 0
  if (imagesList.length > 1) {
    imagesList[index].display = `none`
    if (index === imagesList.length - 1) {
      index = 0
      for (i = index; i < imagesList.length; i++) {
        if (imagesList[i].display === `none`) imagesList[i].display = `block`
        return imagesList
      }
    }
    for (i = index + 1; i < imagesList.length; i++) {
      if (imagesList[i].display === `none`) imagesList[i].display = `block`
      return imagesList
    }
  }
  return imagesList
}
