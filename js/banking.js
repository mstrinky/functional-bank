document.getElementById('btn-deposit').addEventListener('click',function(){
   const depositFiled = document.getElementById('deposit-field');

   const depositAmount = depositFiled.value ;
    const presentDepositAmount = parseFloat(depositAmount);

//    console.log(depositAmount); 

//    get current deposit 

const depositTotal = document.getElementById('deposit-total');

const depositTotalText = depositTotal.innerText;
const previousDepositAmount =parseFloat(depositTotalText);

depositTotal.innerText= presentDepositAmount + previousDepositAmount;

// depositTotal.innerText = depositAmount;
// console.log(depositTotalText);

// update balance 
const balanceTotal= document.getElementById('balance-total');
 const balanceTotalText= balanceTotal.innerText;   
 //  .innerText নিলাম কারণ ্ এটা span  বা h4 আর্থ্্যা ং text এর মধ্যে আছে । যদি input এর মধ্যে থাকতো তাহলে .value নিতাম ।
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText =  previousBalanceTotal + presentDepositAmount ;

// clear deposit field 
depositFiled.value = '';
})

// handle withdraw button 

document.getElementById('btn-withdraw').addEventListener('click',function(){
   // console.log('clicked'); 
   const withdrawField = document.getElementById('withdraw-field');

   withdrawAmountText = withdrawField.value;
   const withdrawAmount = parseFloat(withdrawAmountText);
   // input এর ভিতরে যে লেখাটা আছে সেটাকে ধরার জন্য .value use করব ।
   // console.log('withdrawField');

   // update withdraw total 

   const withdrawTotal = document.getElementById('withdraw-total');
   const withdrawTotalText = withdrawTotal.innerText;
   const previousWithdrawAmount = parseFloat(withdrawTotalText);
     withdrawTotal.innerText = previousWithdrawAmount +  withdrawAmount ;
   //   update balance after withdraw 
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
 balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


   // clear withdraw input field 
   withdrawField.value ='';
})