//1
function countToFifty() {
 for(let i = 1; i <= 50; i++){
     console.log(i)
 } 
}

//2
function countFromOne(number){
  for(let x = 1; x <= number; x++){
   console.log(x)   
  }
}

//3
function threeAndFiveInFifty(){
  for(let n = 1; n <=50 ; n++){
      if (n % 3 == 0 || n % 5 == 0){
          console.log(n)
      }
  }
}

//4
function threeAndFive(num){
  for(let j = 1; j <= num; j++){
      if(j % 3 == 0 || j % 5 == 0){
          console.log(j)
      }
  }
}

//5
function triple(arrNum) {
    const tripledNum = []
    for (let i = 0; i < arrNum.length; i++){
        tripledNum[i] = arrNum[i] * 3
    }
    return tripledNum
}
