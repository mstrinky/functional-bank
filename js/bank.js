document.getElementById('submit').addEventListener('click',function(){
   const emailFiled=document.getElementById('email');
   const userEmail=emailFiled.value;
//    console.log(userEmail);
   const passwordFiled=document.getElementById('password');
   const userPassword=passwordFiled.value;
//    console.log(userPassword);
   if ( userEmail == 'rinky@gmail.com' && userPassword == 'secret'){
        window.location.href='bank.html';
   }
})