document.getElementById('btn-deposit').addEventListener('click',function(){
   const depositFiled = document.getElementById('deposit-field');
   const depositAmount = depositFiled.value ;
//    console.log(depositAmount); 

//    get current deposit 

const depositTotal = document.getElementById('deposit-total');
const depositTotalText = depositTotal.innerText;
depositTotal.innerText = depositAmount;
// console.log(depositTotalText);

// clear deposit field 
depositFiled.value = '';
})