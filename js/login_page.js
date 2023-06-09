const loginButton = document.querySelector(".login_btn");
const loginPopUp = document.querySelector(".popup-box");
const crossButton = document.querySelector(".cross_btn");
// const otpVerifyButton = document.querySelector(".otp-button");
const continueButton = document.querySelector(".continue");
const signUpButton = document.querySelector(".sign-up-button");
const createNewAccountButton = document.querySelector(".create-account-button");

const persnolAccount = document.querySelector(".personal-account");
const myBizAccount = document.querySelector(".mybiz-account");
const myBizPersnolAccount = document.querySelector(".my-biz-personal-account");
const myBizMyBizAccount = document.querySelector(".my-biz-mybiz-account");

const myBizSection = document.querySelector(".mybizz-section");
const persnolAccountSection = document.querySelector(".personal-account-section");
const otpSection = document.querySelector(".otp-section");
const signUpSection = document.querySelector(".sign-up-section");
const congratsMessageSection = document.querySelector(".congrats-section");

// const verifyInput = document.querySelector(".login-credentials-btn");
const nameForSignUpInput = document.getElementById('name-signup');
const emailForSignUpInput = document.getElementById('email-signup');
const passwordForSignUpInput = document.getElementById('password-signup');
const mobileForSignUpInput = document.getElementById('mobile-signup');
const otpInput = document.querySelector('.otp-input');


const errorDisplayOnSignUpPage = document.getElementById('error-signup');
const errorDisplayOnSigninPage = document.getElementById('error-signin');
const errorDisplayOnOTPPage = document.getElementById('error-otp');

const errorMsg = document.querySelector('.error_msg');

const backClick = document.getElementById('back-click');
const blackBackground = document.querySelector('.black_background')


const messageDisplayForUserExist = document.querySelector(".message-display");
messageDisplayForUserExist.classList.add("blue_background")
const userNameDisplay = document.querySelector('.user-name-display');
const signOutButton = document.querySelector('.sign_out');
const verifier = document.querySelector('#verifier');
const sender = document.querySelector('#sender');
const numberInput = document.querySelector('#number');
const clickLoginButton = document.querySelector('.click_login_btn');





let userArray = JSON.parse(localStorage.getItem("user")) ?? [];

let name_to_display =localStorage.getItem("username") ?? "";
if(name_to_display!==""){
userNameDisplay.innerText=`Hi, ${name_to_display}`;
clickLoginButton.style.display="none";
}else{
  userNameDisplay.innerTex="";
  clickLoginButton.style.display="block";
}


if(!userArray){
  userArray=[];
}
let userId;

function reset() {
    nameForSignUpInput.value = "";
    emailForSignUpInput.value = "";
    passwordForSignUpInput.value = "";
    mobileForSignUpInput.value = "";
    numberInput.value = "";
    errorDisplayOnSignUpPage.innerText = "";
    errorDisplayOnSigninPage.innerText = "";
    // errorDisplayOnOTPPage.innerText = "";
    loginPopUp.style.backgroundColor = "white"

 
    nameForSignUpInput.style.borderColor = "black";
    emailForSignUpInput.style.borderColor = "black";
    mobileForSignUpInput.style.borderColor = "black";
    passwordForSignUpInput.style.borderColor = "black";
    numberInput.style.borderColor = "black";
    // otpInput.style.borderColor = "black";

    loginPopUp.style.height="550px";


}

function login() {
  blackBackground.style.display="block";
  loginPopUp.style.display = "block";
  myBizSection.classList.add("hidden");
  persnolAccountSection.classList.remove("hidden");
  otpSection.classList.add("hidden");
  signUpSection.classList.add("hidden");
  crossButton.classList.remove('hidden');
}

function disappear() {
  reset();
  loginPopUp.style.display = "none";
  blackBackground.style.display="none";
  congratsMessageSection.classList.add('hidden');
  crossButton.classList.remove('hidden');
  document.getElementsByClassName('n-conf')[0].style.display = 'none';
  document.getElementById('verificationcode').value="";

  // verifier.style.display="none";
  // sender.style.display="block";
  
  
  
}

function loginFields() {
  myBizSection.classList.add("hidden");
  persnolAccountSection.classList.remove("hidden");
  // otpSection.classList.add("hidden");
  signUpSection.classList.add("hidden");
  congratsMessageSection.classList.add('hidden');
  crossButton.classList.remove('hidden');
}

function myBizz() {
  myBizSection.classList.remove("hidden");
  persnolAccountSection.classList.add("hidden");
  // otpSection.classList.add("hidden");
  signUpSection.classList.add("hidden");
  congratsMessageSection.classList.add('hidden');
  crossButton.classList.remove('hidden');
}

function signUpFields() {
  myBizSection.classList.add("hidden");
  persnolAccountSection.classList.add("hidden");
  // otpSection.classList.add("hidden");
  signUpSection.classList.remove("hidden");
  congratsMessageSection.classList.add('hidden');
  crossButton.classList.remove('hidden');
  errorDisplayOnSignUpPage.innerText="";
  messageDisplayForUserExist.classList.remove('blue-background');
  messageDisplayForUserExist.innerText = "";


}

function backClickFunction(){
  reset();
  myBizSection.classList.add("hidden");
  persnolAccountSection.classList.remove("hidden");
  // otpSection.classList.add("hidden");
  signUpSection.classList.add("hidden");
  congratsMessageSection.classList.add('hidden');
  crossButton.classList.remove('hidden');
  errorDisplayOnSigninPage.innerText = "";
}

function createAccount(e){
    e.preventDefault();

    if(nameForSignUpInput.value == ""){
        errorDisplayOnSignUpPage.innerText = "*Please enter your name";
        nameForSignUpInput.style.borderColor = "red"
        emailForSignUpInput.style.borderColor = "black"
        mobileForSignUpInput.style.borderColor = "black"
        passwordForSignUpInput.style.borderColor = "black"
        return;
    }

    if(emailForSignUpInput.value == ""){
        errorDisplayOnSignUpPage.innerText = "*Please enter your email";
        nameForSignUpInput.style.borderColor = "black"
        emailForSignUpInput.style.borderColor = "red"
        mobileForSignUpInput.style.borderColor = "black"
        passwordForSignUpInput.style.borderColor = "black"
        return;
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailForSignUpInput.value)){
      errorDisplayOnSignUpPage.innerText = "*invalid email";
      nameForSignUpInput.style.borderColor = "black"
      emailForSignUpInput.style.borderColor = "red"
      mobileForSignUpInput.style.borderColor = "black"
      passwordForSignUpInput.style.borderColor = "black"
      return;
    }

    if(mobileForSignUpInput.value == ""){
      errorDisplayOnSignUpPage.innerText = "*Please enter your mobile";
      nameForSignUpInput.style.borderColor = "black"
      emailForSignUpInput.style.borderColor = "black"
      mobileForSignUpInput.style.borderColor = "red";
      passwordForSignUpInput.style.borderColor = "black"
      return;
    }
    else if(mobileForSignUpInput.value%1!==0 ){
      errorDisplayOnSignUpPage.innerText = "*Please enter numbers only";
      nameForSignUpInput.style.borderColor = "black"
      emailForSignUpInput.style.borderColor = "black"
      mobileForSignUpInput.style.borderColor = "red"
      passwordForSignUpInput.style.borderColor = "black"
      return;
    }else if(!mobileForSignUpInput.value.startsWith("+91")){
      errorDisplayOnSignUpPage.innerText = "*Please enter mobile with country code +91";
      nameForSignUpInput.style.borderColor = "black"
      emailForSignUpInput.style.borderColor = "black"
      mobileForSignUpInput.style.borderColor = "red"
      passwordForSignUpInput.style.borderColor = "black"
      return;
    }
    else  if(mobileForSignUpInput.value.length!==13){
      errorDisplayOnSignUpPage.innerText = "*Please enter 10 digits mobile number";
      nameForSignUpInput.style.borderColor = "black"
      emailForSignUpInput.style.borderColor = "black"
      mobileForSignUpInput.style.borderColor = "red"
      passwordForSignUpInput.style.borderColor = "black"
      return;
    }

    if(passwordForSignUpInput.value == ""){
        errorDisplayOnSignUpPage.innerText = "*Please set your password";
        nameForSignUpInput.style.borderColor = "black"
        emailForSignUpInput.style.borderColor = "black"
        mobileForSignUpInput.style.borderColor = "black"
        passwordForSignUpInput.style.borderColor = "red"
        return;
    }

        let userObject = {
            name : nameForSignUpInput.value,
            email : emailForSignUpInput.value,
            password : passwordForSignUpInput.value, 
            mobile : mobileForSignUpInput.value,
            id : Date.now()
        }



    userArray.push(userObject);
    localStorage.setItem("user", JSON.stringify(userArray));

    congratsMessageSection.classList.remove('hidden');
    myBizSection.classList.add("hidden");
    persnolAccountSection.classList.add("hidden");
    otpSection.classList.add("hidden");
    signUpSection.classList.add("hidden");
    crossButton.classList.add('hidden');
    loginPopUp.style.backgroundColor = "transparent"
    loginPopUp.style.boxShadow = "none"
    
    
    setTimeout(()=>{
     
   disappear();
      
    },2000)

  

}

// function userVerify() {
//   let flag = false;
//   if(verifyInput.value == ""){
//     errorDisplayOnSigninPage.innerText = "*Please enter email or mobile";
//     verifyInput.style.borderColor = "red"
//     return;
//   }

//   if(verifyInput.value%1==0 && verifyInput.value.length!==10){
//     errorDisplayOnSigninPage.innerText = "*Please enter 10 digit mobile number";
//     verifyInput.style.borderColor = "red"
//     return;
//   }

//   if(verifyInput.value%1!==0 && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(verifyInput.value)){
//     errorDisplayOnSigninPage.innerText = "*Please enter valid email Id";
//     verifyInput.style.borderColor = "red"
//     return;
//   }

 


//   for (let i = 0; i < userArray.length; i++) {
//     if (userArray[i].email == verifyInput.value || userArray[i].mobile==verifyInput.value) {
//         userId=userArray[i].id;
//       flag = true;
//       break;
//     }
//   }

//   if (flag) {
//     myBizSection.classList.add("hidden");
//     persnolAccountSection.classList.add("hidden");
//     otpSection.classList.remove("hidden");
//     signUpSection.classList.add("hidden");
//     crossButton.classList.remove('hidden');
//   } else {
//     crossButton.classList.remove('hidden');
//     messageDisplayForUserExist.innerText = "User not found. Please Sign Up";
//     messageDisplayForUserExist.classList.add('red-background');
//     messageDisplayForUserExist.classList.remove('green-background');
//     myBizSection.classList.add("hidden");
//     persnolAccountSection.classList.add("hidden");
//     otpSection.classList.add("hidden");
//     congratsMessageSection.classList.add('hidden');
//     signUpSection.classList.remove("hidden");

//   }
  
//   reset();
// }

function onLoad(){

}

// function loginAccount(){

//   if(otpInput.value == "") {
//      errorDisplayOnOTPPage.innerText = "*Please enter otp";
//      otpInput.style.borderColor = "red"
//      return;
//   }
//   if(otpInput.value%1!==0){
//     errorDisplayOnOTPPage.innerText = "*Please enter numbers only";
//     otpInput.style.borderColor = "red"
//     return;
//   }
//   if(otpInput.value.length!==4){
//     errorDisplayOnOTPPage.innerText = "*Invalid Otp";
//     otpInput.style.borderColor = "red"
//     return;
//   }

//     userArray.map((val) => {
//       let user_name_display =val.name;
      
//         if(val.id==userId){
//           localStorage.setItem("username", val.name);
          
//           name_to_display =localStorage.getItem("username");
//              userNameDisplay.innerText=`Hi, ${name_to_display}`
//         }
//     })
    
//     disappear();
// }

function userNameClick(){

  signOutButton.classList.remove('hidden')

}

function signOutFunction(){
 
  signOutButton.classList.add('hidden');
  localStorage.removeItem("username");
  userNameDisplay.innerText="";
  clickLoginButton.style.display="block"

}

window.onclick= function(e){
  if(e.target==blackBackground){
    blackBackground.style.display="none";
  }
}



loginButton.addEventListener("click", login);

crossButton.addEventListener("click", disappear);

persnolAccount.addEventListener("click", loginFields);

myBizAccount.addEventListener("click", myBizz);

myBizPersnolAccount.addEventListener("click", loginFields);

myBizMyBizAccount.addEventListener("click", myBizz);

// continueButton.addEventListener("click", userVerify);

signUpButton.addEventListener("click", signUpFields);

createNewAccountButton.addEventListener("click", createAccount);

// otpVerifyButton.addEventListener("click", loginAccount);

backClick.addEventListener("click", backClickFunction);

userNameDisplay.addEventListener("click", userNameClick)

signOutButton.addEventListener("click", signOutFunction)



   
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBLI85y1LQWDk454mydHQSqfOdqLvEWsuc",
authDomain: "firstproject-3765c.firebaseapp.com",
projectId: "firstproject-3765c",
storageBucket: "firstproject-3765c.appspot.com",
messagingSenderId: "900984540763",
appId: "1:900984540763:web:71eab12d7584433685397e",
measurementId: "G-DY3LHEM9R4"
};

firebase.initializeApp(firebaseConfig);

render();
function render(){
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')
recaptchaVerifier.render();

}

function phoneAuth(){

  if(numberInput.value==""){
    errorMsg.innerText="please enter mobile number"
    setTimeout(()=>{
      errorMsg.innerText=""
    },2000);
    return;
  }
else if(!numberInput.value.startsWith("+91")){
  errorMsg.innerText="please enter mobile number with country code +91"
  setTimeout(()=>{
    errorMsg.innerText=""
  },2000);
  return;
}
else if(numberInput.value.length!=13){
  errorMsg.innerText="please enter 10 digit mobile number"
  setTimeout(()=>{
    errorMsg.innerText=""
  },2000);
  return;
}


  let flag=false;
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i].email == numberInput.value || userArray[i].mobile==numberInput.value) {
        userId=userArray[i].id;
      flag = true;
      break;
    }
  }

  if (flag) {
    myBizSection.classList.add("hidden");
    persnolAccountSection.classList.add("hidden");
    signUpSection.classList.add("hidden");
    otpSection.classList.remove("hidden");

var number = document.getElementById('number').value;
console.log(number)
firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
   window.confirmationResult = confirmationResult;
   coderesult = confirmationResult;
   console.log(coderesult)
  //  document.getElementById('sender').style.display = 'none';
   document.getElementById('verifier').style.display = 'block';
}).catch(function(error){
   alert(error.message);

})
}
else{
      messageDisplayForUserExist.innerText = "User not found. Please Sign Up";
      messageDisplayForUserExist.classList.add('blue-background');
      myBizSection.classList.add("hidden");
      persnolAccountSection.classList.add("hidden");
      otpSection.classList.add("hidden");
      congratsMessageSection.classList.add('hidden');
      signUpSection.classList.remove("hidden");
}
}

function codeverify(){
var code = document.getElementById('verificationcode').value;
console.log(code)
coderesult.confirm(code).then(function(){

   document.getElementsByClassName('n-conf')[0].style.display = 'none';
  


   userArray.map((val) => {
    let user_name_display =val.name;
    
      if(val.id==userId){
        localStorage.setItem("username", val.name);
        
        name_to_display =localStorage.getItem("username");
           userNameDisplay.innerText=`Hi, ${name_to_display}`
           clickLoginButton.style.display="none";
      }
   })
   
   disappear();
}).catch(function(){
   document.getElementsByClassName('n-conf')[0].style.display = 'block';
   setTimeout(()=>{
    document.getElementsByClassName('n-conf')[0].style.display = 'none';
    document.getElementById('verificationcode').value="";
   },2000)
})



}
