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
