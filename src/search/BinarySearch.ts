import './demo.extensions'

Array.prototype.binary_search = function(required_number: number): number | void  {

let low = 0;
  let high = this.length;

  while (low < high){
    const midIndex = Math.floor(low + (high - low) / 2);
    const midNumber = this[midIndex];

    // found number just return it
    if (midNumber === required_number){
      return midIndex;

      // the number is less than required_number set low index to midIndex
    } else if (midNumber < required_number){
      low = midIndex + 1;
    }else{
      // the number is greater than required_number set high index to midIndex
      high = midIndex;
    }
  }

}

const arr: Array<number> = [];

for (let i = 1; i <= 1000000; i++){
  arr.push(i);
}
const startTime = Date.now();
const index = arr.binary_search(999999);
const endTime = Date.now();

console.log(`Required index: ${index}.`);
console.log(`Time taken: ${endTime - startTime}.`);

