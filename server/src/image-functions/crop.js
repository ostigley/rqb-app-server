import Canvas from 'canvas'  //canvas manipulation outside of the browser

const Image = Canvas.Image

export default (drawing, width, height, percentage = 0.9) => {
  let clueData
  let canvas = new Canvas(width, height * (1-percentage))
  let ctx = canvas.getContext('2d')
  let sx = 0
  let sy = height * percentage
  let sWidth = width
  let sHeight = height * (1-percentage)
  let dx = 0
  let dy = 0
  let dWidth = sWidth;
  let dHeight = sHeight;

  let imageObj = new Image
  imageObj.onload = () => {
    ctx.drawImage( imageObj, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }
  imageObj.src = drawing
  clueData = canvas.toDataURL()
  return clueData
}