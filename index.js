function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    startNum = parseInt(startBlock, 10);
    endNum = parseInt(endBlock, 10);
    tripRange = Math.abs(startNum - endNum);
    return (blockRange >= tripRange ? `within range by ${blockRange - tripRange}` : `${tripRange - blockRange} blocks out of range`)
  }
}

function produceTipCalculator(tipPercent) {
  return function(fare) {
    return tipPercent * fare
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
