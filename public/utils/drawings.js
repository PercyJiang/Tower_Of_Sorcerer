/**
 * Bring an image from the images directory based on its index
 * @param {int} n The image index
 */
const bringImage = (n) => {
    let img = new Image()
    img.src = 'images/' + n + '.png'
    return img
}

/**
 * Draw a specific part of image onto a specific location on canvas
 * @param {int} n The big image index
 * @param {int} x The horizontal location of image in big image
 * @param {int} y The vertial location of image in big image
 * @param {int} i The horizontal location on canvas
 * @param {int} j The vertical location on canvas
 */
const drawImage = (n, x, y, i, j) => {
    let img = new Image()
    img.src = 'images/' + n + '.png'
    ctx.drawImage(img, x * PS, y * PS, PS, PS, PS * j + left_shift, PS * i, PS, PS)
}