// Returns the width of a percent of total width, as an integer
export default function getWidthAsPercentOfTotalWidth(percent, totalWidth) {
  return parseInt(totalWidth * (percent / 100), 10);
}
