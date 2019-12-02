const svgMath = require('./util/math')

const SVGMatic = function () {
  this.canvas = null

  function getCanvasBounds () {
    if (!this.canvas) {
      return
    } else {
      const bbox = canvas.getBoundingClientRect()
      const cx = bbox.x + bbox.width / 2
      const cy = bbox.y + bbox.height / 2
      return {
        x: bbox.x,
        y: bbox.y,
        w: bbox.width,
        h: bbox.height,
        cx, cy
      }
    }
  }

  function getElementBounds (element) {
    const canvasBounds = getCanvasBounds()
    const elementBounds = element.getBoundingClientRect()
    const x = elementBounds.x - canvasBounds.x
    const y = elementBounds.y - canvasBounds.y
    const cx = x + elementBounds.width / 2
    const cy = y + elementBounds.height / 2
    return {
      w: elementBounds.width,
      h: elementBounds.height,
      x, y, cx, cy
    }
  }

  function getRoot (element) {
    const parentElement = element.parentElement
    if (parentElement && parentElement instanceof SVGElement) {
      return getRoot(parentElement)
    } else {
      return element
    }
  }
}

const svgMatic = SVGMatic.prototype

svgMatic.wrap = function (selector) {
  const wrappedElement = {}

  const element = document.querySelector(selector)
  this.canvas = getRoot(element)

  wrappedElement.element = element
  wrappedElement.root = this.canvas
  wrappedElement.bounds = getElementBounds(element)

  return wrappedElement
}

svgMatic.addTransformOrigin = function () {}

svgMatic.addTranslation = function () {}


module.exports = SVGMatic
