const numberList = [5, 7, 3, 8, 2, 9, 1]
let lowestNumber = 1000
let sortedNumbers = []

for (i=0; i<numberList.length; i++){
  console.log(numberList[i]);
    for (j= 0; j<numberList.length; j++){
    if (numberList[i] < lowestNumber){
        console.log("....", numberList[j])
   
    }
   
} }
console.log(lowestNumber);