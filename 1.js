let arr = [1, 2, 4, 6, , 68, 3, 98, 4];
let max = 0;
let max2 = 0;

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] > max) {
    max2 = max;
    max = arr[i];

    // }else if(arr[i]> max2&& arr[i]<max ){
    //   max2=arr[i];
    // }
  }
}

console.log(max);
console.log(max2);
