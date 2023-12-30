let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

let DENOMINATIONS =[["PENNY", 1], ["NICKEL", 5], ["DIME", 10], ["QUARTER", 25], ["ONE", 100], ["FIVE", 500], ["TEN", 1000], ["TWENTY",2000], ["ONE HUNDRED", 10000]]

function checkCashRegister(price, cash, cid) {
  let amountToReturn = Math.round(cash*100) - Math.round(price*100);
  let cashOnHand = {};
  let cashToGive = {};

  cid.forEach((denomination)=>{    
    cashOnHand[denomination[0]] = denomination[1]
  })
  let index = DENOMINATIONS.length-1;
  while(index >= 0){
   console.log(amountToReturn,DENOMINATIONS[index][1])
    index--
  }
}



checkCashRegister(19.5, 20,cid);
