
interface Array<T>{
  getIndex(): void
}

Array.prototype.getIndex = function() {
  console.log(this)
}

