const svgMath = require('./util/math')

const SVGMatic = function () {
  this.canvas = null

  function getFinalTransform () {}

  function getCanvasBounds () {
    if (!this.canvas) {
      return
    } else {
      let viewBox = this.canvas.getAttribute('viewBox')
      if (!viewBox) {
        const width = this.canvas.getAttribute('width').replace('px', '')
        const height = this.canvas.getAttribute('height').replace('px', '')
        viewBox = {width, height}
      }
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

  return wrappedElement
}

svgMatic.addTransformOrigin = function () {}

svgMatic.addTranslation = function () {}


module.exports = SVGMatic
