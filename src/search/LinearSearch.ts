import './demo.extensions';


Array.prototype.linear_search = function(required_number: number): number | undefined {
  for (let i = 0; i < this.length; i++){
    if (this[i] === required_number){
      return i;
    }
  }
}


const arr: Array<number> = [];

for (let i = 1; i <= 1000000; i++){
  arr.push(i);
}

const startTime = Date.now();
const index = arr.linear_search(999999);
const endTime = Date.now();


console.log(`Required index: ${index}.`);
console.log(`Time taken: ${endTime - startTime}.`);
