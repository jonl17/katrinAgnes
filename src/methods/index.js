/* METHODS */

export const generateRandomPixels = (limit, length) => {
  var pixels = []
  for (let i = 0; i < length; i++) {
    pixels.push(randInt(limit))
  }

  return pixels
}

/* helper */
function randInt(limit) {
  return Math.floor(Math.random() * (limit - +0))
}
