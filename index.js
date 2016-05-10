module.exports = function (segments, d) {
  d = d || 0

  return segments.map(function (segment) {
    // Special processing for ARC:
    // [cmd, rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
    // don't touch flags and rotation
    if (segment[0].toLowerCase() === 'a') {
      segment[1] = +segment[1].toFixed(d)
      segment[2] = +segment[2].toFixed(d)
      segment[6] = +segment[6].toFixed(d)
      segment[7] = +segment[7].toFixed(d)
      return segment
    }

    return segment.map(function (val, i) {
      if (!i) return val
      return +val.toFixed(d)
    })
  })
}
