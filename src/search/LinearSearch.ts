import './demo.extensions'


export default function linear_search(haystack: number[], needle: number): number | void {
  for (let i = 0; i < haystack.length; i++){
    if (haystack[i] === needle){
      return i;
    }
  }
}

const arr: Array<number> = [2, 3, 4, 5, 5, 10]

arr.getIndex()
