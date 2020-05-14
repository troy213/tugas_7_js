var arr = [0,1,2,3,4,5,6,7,8,9];

console.log("perulangan biasa:");
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("perulangan for-of:");
for(let x of arr){
  console.log(x);
}
