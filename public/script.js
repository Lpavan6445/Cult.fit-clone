

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("mouseover", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// Location pop up card
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
let cityTitle = document.querySelector(".city-title");
let cityLocation = document.getElementById("open-modal-search-location");
// let city = JSON.parse(localStorage.getItem("location"));

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});


overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log(button.innerText)
    // console.log(cityLocation)
    cityLocation.innerText = `${button.innerText}`;
    localStorage.setItem("location", JSON.stringify(button.innerText));
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// login pop up start
const open = document.getElementById("open");
const modal_container = document.getElementById("modal-container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

var signIn =document.getElementById("signin")
signIn.addEventListener("click", () => {
  console.log("clicked")
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

let continueBtn = document.getElementById("continue-btn");

let debounceId;

document.getElementById("mobile").addEventListener("input", () => {
  debouce(value, 100);
});

function value() {
  let search = document.getElementById("mobile").value;
  if (search.length === 10) {
    continueBtn.className = "continue-btn-true";
    continueBtn.addEventListener("click", openOtp);
  } else {
    continueBtn.className = "continue-btn-false";
  }
}

function debouce(func, delay) {
  clearTimeout(debounceId);
  debounceId = setTimeout(() => {
    func();
  }, delay);
}

function openOtp() {
  let search = document.getElementById("mobile").value;
  document.getElementById("modallogin").innerHTML = null;
  let modalotpDiv = document.createElement("modal-otp-div");
  modalotpDiv.className = "modal-otp-div";
  let titleOtpContainer = document.createElement("div");
  titleOtpContainer.className = "title-otp-container";
  let titleOtpContainerInner = document.createElement("div");
  titleOtpContainerInner.className = "titleContainerInner";
  let backImage = document.createElement("img");
  backImage.src = "https://static.cure.fit/assets/images/back-arrow-pink.svg";
  let EnterOtp = document.createElement("span");
  EnterOtp.className = "enter-otp";
  EnterOtp.innerText = "Enter OTP";
  let closeBtn = document.createElement("button");
  closeBtn.setAttribute("id", "close");
  closeBtn.className = "close-button-login";
  closeBtn.innerHTML = "&times;";
  titleOtpContainerInner.append(backImage, EnterOtp);
  titleOtpContainer.append(titleOtpContainerInner);
  let otpDetails = document.createElement("div");
  otpDetails.className = "otp-details";
  let otpDetailsBodyText = document.createElement("p");
  otpDetailsBodyText.className = "otp-details-body-text";
  otpDetailsBodyText.innerText = "Please enter the code we just sent to";
  let number = document.createElement("p");
  number.className = "otp-details-body-text";
  number.innerText = `${search} to proceed`;
  otpDetails.append(otpDetailsBodyText, number);

  let otpDiv = document.createElement("div");
  otpDiv.className = "otp-div";
  let firstDiv = document.createElement("div");
  let secondDiv = document.createElement("div");
  let thirdDiv = document.createElement("div");
  let fourDiv = document.createElement("div");
  let fiveDiv = document.createElement("div");
  let sixDiv = document.createElement("div");
  firstDiv.className = "single-div";
  secondDiv.className = "single-div";
  thirdDiv.className = "single-div";
  fourDiv.className = "single-div";
  fiveDiv.className = "single-div";
  sixDiv.className = "single-div";
  let optInput = document.createElement("input");
  let optValue = optInput.value;
  optInput.setAttribute("id", "otpInputValue");
  // let otp = document.getElementById("otpInputValue").value;
  // console.log(otp)
  // console.log(optValue)
  // let xvalue = document.getElementById("otpInputValue")
  // xvalue.addEventListener("input", () => {
  //     console.log(xvalue.value)
  // })
  optInput.className = "otp-input";
  optInput.type = "number";
  optInput.maxLength = 6;
  // if(document.getElementById("otpInputValue").value.length === 6){
  //     optInput.className = "otp-input-2"
  // }
  otpDiv.append(
    firstDiv,
    secondDiv,
    thirdDiv,
    fourDiv,
    fiveDiv,
    sixDiv,
    optInput
  );
  let otpContinueBtn = document.createElement("button");
  otpContinueBtn.innerText = "Confirm";
  otpContinueBtn.className = "continue-btn-true";
  var otpz = Math.floor(100000 + Math.random() * 900000);
  alert(`otp: ${otpz}`);

  otpContinueBtn.addEventListener("click", () => {
    console.log(otpz, +optInput.value);
    if (+optInput.value === otpz) {
      console.log(optInput.value);
      window.location.href = "logout.html";
    } else {
      alert("Enter Currect Otp");
    }
  });

  //    console.log(optInput);

  let otpCall = document.createElement("div");
  otpCall.className = "otp-call-div";
  otpCall.innerText = "GET OTP ON CALL";
  let resendOtp = document.createElement("div");
  resendOtp.className = "resend-otp";
  resendOtp.innerText = "Didn't receive OTP?";
  let resendOtpBtn = document.createElement("button");
  resendOtpBtn.className = "resendOtpBtn";
  resendOtpBtn.innerText = "RESEND";

  resendOtp.append(resendOtpBtn);
  let trouble = document.createElement("anchor");
  trouble.className = "trouble";
  trouble.innerText = "Having trouble logging in?";

  modalotpDiv.append(
    titleOtpContainer,
    otpDetails,
    otpDiv,
    otpContinueBtn,
    otpCall,
    resendOtp
  );
  document.getElementById("modallogin").append(modalotpDiv);
}

const gmailBtn = document.querySelector(".inner-social-media-continue");
gmailBtn.addEventListener("click", openGmail);
// document.getElementById("modallogin").innerHTML = null;
// let closeBtn = document.createElement("button");
// let closeBtnDiv = document.createElement("div");
// closeBtnDiv.className = closebtn;
// closeBtn.className = close;
// closeBtn.innerHTML = "&times";
// <div class="closebtn">
//   <button id="close" class="close-button-login">
//     &times;
//   </button>
// </div>;
// closeBtnDiv.append(closebtn);
// document.getElementById("modallogin").append(closeBtnDiv);

function openGmailModal() {
  console.log("Hi there");
  let closeBtn = document.createElement("button");
  let closeBtnDiv = document.createElement("div");
  closeBtnDiv.setAttribute("id", "closeBtnDiv");
  closeBtn.setAttribute("id", "closeBtn");

  closeBtn.className = close;
  closeBtn.addEventListener("click", () => {
    modal_container.classList.remove("show");
  });

  closeBtn.textContent = "X";
  closeBtnDiv.append(closeBtn);

  let imgDiv = document.createElement("div");
  imgDiv.setAttribute("id", "imgDivGmail");
  let image = document.createElement("img");
  image.setAttribute("id", "imageGmail");
  image.src = "https://static.cure.fit/assets/images/curefit_login_logo.svg";
  let image2 = document.createElement("img");
  image2.src = "https://static.cure.fit/assets/images/cult_name.svg";
  image2.setAttribute("id", "image2Gmail");
  imgDiv.append(image, image2);

  // Google Btn  sign in
  let googleBtnDiv = document.createElement("div");
  googleBtnDiv.setAttribute("id", "googleBtnDiv");

  // var auth = document.getElementById("googleBtnDiv")

  googleBtnDiv.addEventListener("click",function () {
    console.log("clicking")
      window.location.href = "http://localhost:2345/google"
  })
  let googleBtn = document.createElement("button");
  googleBtn.setAttribute("id", "googleBtn");
  let innerGoogleBtnDiv = document.createElement("div");
  innerGoogleBtnDiv.setAttribute("id", "innerGoogleBtnDiv");
  let innerGoogleBtnDivImage = document.createElement("img");
  innerGoogleBtnDivImage.src =
    "https://static.cure.fit/assets/images/google-logo.svg";
  innerGoogleBtnDivImage.setAttribute("id", "innerGoogleBtnDivImage");
  let innerGoogleBtnDivText = document.createElement("div");
  innerGoogleBtnDivText.textContent = "Sign In With Google";
  innerGoogleBtnDivText.setAttribute("id", "innerGoogleBtnDivText");
  innerGoogleBtnDiv.append(innerGoogleBtnDivImage, innerGoogleBtnDivText);
  googleBtn.append(innerGoogleBtnDiv);
  googleBtnDiv.append(googleBtn);

  // facebook btn sign in

  let faceBtnDiv = document.createElement("div");
  faceBtnDiv.setAttribute("id", "faceBtnDiv");

  let faceBtn = document.createElement("button");
  faceBtn.setAttribute("id", "faceBtn");
  let innerfaceBtnDiv = document.createElement("div");
  innerfaceBtnDiv.setAttribute("id", "innerfaceBtnDiv");
  let innerfaceBtnDivImage = document.createElement("img");
  innerfaceBtnDivImage.src =
    "https://static.cure.fit/assets/images/facebook.svg";
  innerfaceBtnDivImage.setAttribute("id", "innerfaceBtnDivImage");
  let innerfaceBtnDivText = document.createElement("div");
  innerfaceBtnDivText.textContent = "Sign In With facebook";
  innerfaceBtnDivText.setAttribute("id", "innerfaceBtnDivText");
  innerfaceBtnDiv.append(innerfaceBtnDivImage, innerfaceBtnDivText);
  faceBtn.append(innerfaceBtnDiv);
  faceBtnDiv.append(faceBtn);

  // Email login

  let emailBtnDiv = document.createElement("div");
  emailBtnDiv.setAttribute("id", "emailBtnDiv");

  let emailBtn = document.createElement("button");
  emailBtn.addEventListener("click", emailSignIn);
  emailBtn.setAttribute("id", "emailBtn");
  let inneremailBtnDiv = document.createElement("div");
  inneremailBtnDiv.setAttribute("id", "inneremailBtnDiv");
  let inneremailBtnDivImage = document.createElement("img");
  inneremailBtnDivImage.src = "https://static.cure.fit/assets/images/email.png";
  inneremailBtnDivImage.setAttribute("id", "inneremailBtnDivImage");
  let inneremailBtnDivText = document.createElement("div");
  inneremailBtnDivText.textContent = "Sign In With Email";
  inneremailBtnDivText.setAttribute("id", "inneremailBtnDivText");
  inneremailBtnDiv.append(inneremailBtnDivImage, inneremailBtnDivText);
  emailBtn.append(inneremailBtnDiv);
  emailBtnDiv.append(emailBtn);

  let descriptionDiv = document.createElement("div");
  descriptionDiv.setAttribute("id", "descriptionDiv");
  let p1 = document.createElement("p");
  p1.setAttribute("id", "descriptionDivP1");
  p1.textContent = "* By Continueing You Agree to the Terms and";
  let p2 = document.createElement("p");
  p2.setAttribute("id", "desscriptionDivP2");
  p2.textContent = "Services and Privacy Policy";
  descriptionDiv.append(p1, p2);
  document
    .getElementById("modallogin")
    .append(
      closeBtnDiv,
      imgDiv,
      googleBtnDiv,
      faceBtnDiv,
      emailBtnDiv,
      descriptionDiv
    );
}
function openGmail() {
  // let search = document.getElementById("mobile").value;

  document.querySelector(".modallogin").innerHTML = null;
  // document.getElementById("modallogin").innerHTML = null;
  openGmailModal();
}
let emailSignInOtp = Math.floor(100000 + Math.random() * 900000);

function emailSignIn() {
  console.log("hi");
  document.querySelector(".modallogin").innerHTML = null;
  let emailSignInDiv = document.createElement("div");
  emailSignInDiv.setAttribute("id", "emailSignInDiv");
  let backImg = document.createElement("img");
  backImg.setAttribute("id", "backImg");
  backImg.src = "https://static.cure.fit/assets/images/back-arrow-pink.svg";
  emailSignInDiv.append(backImg);
  backImg.addEventListener("click", () => {
    document.getElementById("modallogin").innerHTML = null;
    openGmailModal();
  });

  let imgDiv = document.createElement("div");
  imgDiv.setAttribute("id", "imgDivGmail");
  let image = document.createElement("img");
  image.setAttribute("id", "imageGmail");
  image.src = "https://static.cure.fit/assets/images/curefit_login_logo.svg";
  let image2 = document.createElement("img");
  image2.src = "https://static.cure.fit/assets/images/cult_name.svg";
  image2.setAttribute("id", "image2Gmail");
  imgDiv.append(image, image2);

  let emailSignInH2Div = document.createElement("div");
  emailSignInH2Div.setAttribute("id", "emailSignInH2Div");
  let h2 = document.createElement("h2");
  h2.setAttribute("id", "emailSignInH2");
  h2.textContent = "Login to account";
  emailSignInH2Div.append(h2);

  let emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.setAttribute("id", "emailInput");
  emailInput.placeholder = "Email";

  let emailContinue = document.createElement("div");
  emailContinue.setAttribute("id", "emailContinue");

  let emailSignInContinue = document.createElement("button");
  emailSignInContinue.setAttribute("id", "emailSignInContinue");
  emailSignInContinue.textContent = "Continue";
  emailSignInContinue.addEventListener("click", () => {
    Email.send({
      Host: "smtp.mailtrap.io",
      Username: "c0fdd26b6428af",
      Password: "a7674dc1ad0aec",
      To: emailInput.value,
      From: "cult@fit.com",
      Subject: "Cultfit signIn",
      Body: `OTP : ${emailSignInOtp}`,
    }).then((msg) => alert("The email successfully sent"));
    getEmailSignInOtp(emailInput);
  });
  emailContinue.append(emailSignInContinue);
  document
    .getElementById("modallogin")
    .append(
      emailSignInDiv,
      imgDiv,
      emailSignInH2Div,
      emailInput,
      emailContinue
    );
}

// Email sign In Otp modal

function getEmailSignInOtp(emailInput) {
  console.log("hi");
  let search = document.getElementById("emailInput").value;
  document.getElementById("modallogin").innerHTML = null;
  let modalotpDiv = document.createElement("modal-otp-div");
  modalotpDiv.className = "modal-otp-div";
  let titleOtpContainer = document.createElement("div");
  titleOtpContainer.className = "title-otp-container";
  let titleOtpContainerInner = document.createElement("div");
  titleOtpContainerInner.className = "titleContainerInner";
  let backImage = document.createElement("img");
  backImage.src = "https://static.cure.fit/assets/images/back-arrow-pink.svg";
  backImage.addEventListener("click", emailSignIn);
  let EnterOtp = document.createElement("span");
  EnterOtp.className = "enter-otp";
  EnterOtp.innerText = "Enter OTP";
  let closeBtn = document.createElement("button");
  closeBtn.setAttribute("id", "close");
  closeBtn.className = "close-button-login";
  closeBtn.innerHTML = "&times;";
  titleOtpContainerInner.append(backImage, EnterOtp);
  titleOtpContainer.append(titleOtpContainerInner);
  let otpDetails = document.createElement("div");
  otpDetails.className = "otp-details";
  let otpDetailsBodyText = document.createElement("p");
  otpDetailsBodyText.className = "otp-details-body-text";
  otpDetailsBodyText.innerText = "Please enter the code we just sent to";
  let number = document.createElement("p");
  number.className = "otp-details-body-text";
  number.innerText = `${search} to proceed`;
  otpDetails.append(otpDetailsBodyText, number);

  let otpDiv = document.createElement("div");
  otpDiv.className = "otp-div";
  let firstDiv = document.createElement("div");
  let secondDiv = document.createElement("div");
  let thirdDiv = document.createElement("div");
  let fourDiv = document.createElement("div");
  let fiveDiv = document.createElement("div");
  let sixDiv = document.createElement("div");
  firstDiv.className = "single-div";
  secondDiv.className = "single-div";
  thirdDiv.className = "single-div";
  fourDiv.className = "single-div";
  fiveDiv.className = "single-div";
  sixDiv.className = "single-div";
  let optInput = document.createElement("input");
  let optValue = optInput.value;
  optInput.setAttribute("id", "otpInputValue");
  // let otp = document.getElementById("otpInputValue").value;
  // console.log(otp)
  // console.log(optValue)
  // let xvalue = document.getElementById("otpInputValue")
  // xvalue.addEventListener("input", () => {
  //     console.log(xvalue.value)
  // })
  optInput.className = "otp-input";
  optInput.type = "number";
  optInput.maxLength = 6;
  // if(document.getElementById("otpInputValue").value.length === 6){
  //     optInput.className = "otp-input-2"
  // }
  otpDiv.append(
    firstDiv,
    secondDiv,
    thirdDiv,
    fourDiv,
    fiveDiv,
    sixDiv,
    optInput
  );
  let otpContinueBtn = document.createElement("button");
  otpContinueBtn.innerText = "Confirm";
  otpContinueBtn.className = "continue-btn-true";
  var otpz = Math.floor(100000 + Math.random() * 900000);

  otpContinueBtn.addEventListener("click", () => {
    console.log(emailSignInOtp, +optInput.value);
    if (+optInput.value === emailSignInOtp) {
      console.log(optInput.value);
      window.location.href = "logout.html";
    } else {
      alert("Enter Currect Otp");
    }
  });

  //    console.log(optInput);

  let otpCall = document.createElement("div");
  otpCall.className = "otp-call-div";
  otpCall.innerText = "GET OTP ON CALL";
  let resendOtp = document.createElement("div");
  resendOtp.className = "resend-otp";
  resendOtp.innerText = "Didn't receive OTP?";
  let resendOtpBtn = document.createElement("button");
  resendOtpBtn.className = "resendOtpBtn";
  resendOtpBtn.innerText = "RESEND";

  resendOtp.append(resendOtpBtn);
  let trouble = document.createElement("anchor");
  trouble.className = "trouble";
  trouble.innerText = "Having trouble logging in?";

  modalotpDiv.append(
    titleOtpContainer,
    otpDetails,
    otpDiv,
    otpContinueBtn,

    resendOtp
  );
  document.getElementById("modallogin").append(modalotpDiv);
}
let cart=document.getElementById("cartNik")
var toggle = false;
 cart.addEventListener("click",function (){
  console.log("clicked")
     if(toggle){
         toggle = false;
          chiDiv.style.display = "none"
     }else{
         toggle = true;
         chiDiv.style.display = "block"

         var response = axios.get(`http://localhost:2345/cart/store`)
          .then(function(response){
              storedata =response.data;
              myFuncN(storedata,"store")
          }).catch(function (error) {
              console.log(error);
          })
       
          var response = axios.get(`http://localhost:2345/cart/eat`)
          .then(function(response){
              eatdata =response.data
          }).catch(function (error) {
              console.log(error);
          })
     }
   
 });
var storedata;
var eatdata ;

// myFuncN(cartData)
let scrollN;
let divN;
let buttonCart;
let psize;
function myFuncN(cartData,type){
  document.getElementById("chiDiv").innerHTML=null
    divN = document.createElement("div")
  divN.setAttribute("id", "divspi");

  let pN = document.createElement("p");
  pN.textContent = "Your Cart";
  pN.id="pN"

  divN.append(pN)



  // ==================================================

  let divFlexN = document.createElement("div");
  divFlexN.setAttribute("id", "divFlexN")

  let Np4Div = document.createElement("div")
  Np4Div.style.marginLeft = "50px"
  let Np4 = document.createElement("p")
  Np4.textContent = "Store"
 
  Np4Div.append(Np4)

  let Np1Div = document.createElement("div")
  Np1Div.style.marginLeft = "27px"
  let Np1 = document.createElement("p");
  Np1.textContent = "labtests"

  Np1Div.append(Np1)
   
  

  let Np2Div = document.createElement("div")
  Np2Div.style.marginLeft = "50px"
  let Np2 = document.createElement("p")
  Np2.textContent = "Eatfit"
 
  Np2Div.append(Np2)

  let Np3Div = document.createElement("div")
  Np3Div.style.marginLeft = "50px"
  let Np3 = document.createElement("p")
  Np3.textContent = "Wholefit"
  Np3Div.append(Np3)

  

  divFlexN.append(Np4Div,Np2Div, Np3Div, Np1Div)

  divN.append(divFlexN)

  Np2.addEventListener("click", function(){
      // scrollN.style.display="none"
      // myFuncN(eatdata)
      myFuncN(eatdata,"eat")
      // scrollN2.style.display="block"
  })
  Np4.addEventListener("click",function (){
      // scrollN.style.display="none"
      myFuncN(storedata,"store")
      // scrollN.style.display="block"
  })
  if(type === "store"){
      storecart(cartData)
  }else if(type === "eat"){
      eatcart(cartData)
  }
  
}
function storecart(cartData){
scrollN=document.createElement("div")
  scrollN.setAttribute("id","scrollN")

divN.append(scrollN)
 let buttonCart = document.createElement("button")
  buttonCart.setAttribute("id", "buttonCart")
  buttonCart.style.cursor = "pointer";
  buttonCart.addEventListener("click",function(){
      window.location.href="cartpage.html"
  })
 var Total=0;
 var quantity=0;
  cartData.forEach(function(nik,index){
      console.log(nik);
      Total += (+nik.price);
      quantity++;
        let countcart = 1;

 
       
      // ===================================

      let disDiv = document.createElement("div");
      disDiv.setAttribute("id", "disDiv")
     
      // =====================

      let disDivCon = document.createElement("div");
      disDivCon.setAttribute("id", "disDivCon")
      // =============================

      let con1 = document.createElement("div");

      let imgcART = document.createElement("img");
      imgcART.src = nik.image1
      imgcART.setAttribute("id", "imgcART")

      con1.append(imgcART)


      // =============================
      let con2 = document.createElement("div");

      let deleteProd = document.createElement("img")
      deleteProd.id ="deleteProd"
       deleteProd.src = "https://static.cure.fit/assets/images/modal-close.svg"
       deleteProd.addEventListener("click", function (index) {
          console.log(nik["_id"])
          axios.delete(`http://localhost:2345/cart/store/${nik["_id"]}`)
          
          var res = axios.get(`http://localhost:2345/cart/store`)
          .then(function(res){
              storedata = res.data
             myFuncN(storedata,"store")
          }).catch(function (error) {
              console.log(error);
          })
      })
      
      let pprod = document.createElement("p");
      pprod.textContent = nik.name
      pprod.id = "pprod"


      psize = document.createElement("p");
      psize.textContent = nik.color;
      psize.id="psize"

      let collection = document.createElement("div")
      collection.style.display = "flex"
      collection.style.marginRight = "30px"



      let pprice = document.createElement("p");
      pprice.textContent =nik.price

      let quant = document.createElement("div")
      quant.setAttribute("id", "quant")

      let minus = document.createElement("img")
      minus.src = "https://static.cure.fit/assets/images/minus.svg"
      minus.style.width = "15px";
      minus.style.marginLeft = "10px"
      minus.style.cursor = "pointer"
      minus.addEventListener("click", countfunc)

      function countfunc() {
          if (countcart == 0) {
              return
          }
          else {
              countcart--
              Total -= (+nik.price);
              quantity--;
               buttonCart.textContent = `${quantity} items • ${Total}`;
              console.log(countcart);
              countshow.textContent = countcart
          }

      }

      let countshow = document.createElement("p")
      countshow.textContent = countcart
      countshow.setAttribute("id", "countshow")


      let plus = document.createElement("img")
      plus.src = "https://static.cure.fit/assets/images/plus.svg";
      plus.style.width = "15px"
      plus.style.cursor ="pointer"
      plus.addEventListener("click", countfunc2);


      function countfunc2() {
          console.log(countcart);
          countcart++
            Total += (+nik.price);
            quantity++;
          buttonCart.textContent = `${quantity} items  •${Total}`;

          countshow.textContent = countcart

      }

      let hr = document.createElement("hr")

      quant.append(minus, countshow, plus)

      collection.append(pprice, quant)

      con2.append(deleteProd,pprod, psize, collection)


      disDivCon.append(con1, con2)

      disDiv.append(disDivCon, hr)

      scrollN.append(disDiv)


      document.getElementById("chiDiv").append(divN)

  });

  // let buttonCart = document.createElement("button")
  // buttonCart.setAttribute("id", "buttonCart")
  buttonCart.textContent = `${quantity} items  •${Total}`;
   document.getElementById("chiDiv").append(buttonCart)

}
//  <----------------Eat----------------->

function eatcart(cartData){
scrollN=document.createElement("div")
scrollN.setAttribute("id","scrollN")

divN.append(scrollN)
  buttonCart = document.createElement("button")
  buttonCart.setAttribute("id", "buttonCart")
  buttonCart.style.cursor = "pointer";
  buttonCart.addEventListener("click",function(){
      window.location.href="cartpage.html"
  })
 var Total=0;
 var quantity=0;
  cartData.forEach(function(nik,index){
      console.log(nik);
      Total += (+nik.price);
      quantity++;
        let countcart = 1;

 
       
      // ===================================

      let disDiv = document.createElement("div");
      disDiv.setAttribute("id", "disDiv")
     
      // =====================

      let disDivCon = document.createElement("div");
      disDivCon.setAttribute("id", "disDivCon")
      // =============================

      let con1 = document.createElement("div");

      let imgcART = document.createElement("img");
      imgcART.src = nik.strMealThumb
      imgcART.setAttribute("id", "imgcART")

      con1.append(imgcART)


      // =============================
      let con2 = document.createElement("div");

      let deleteProd = document.createElement("img")
      deleteProd.id ="deleteProd"
       deleteProd.src = "https://static.cure.fit/assets/images/modal-close.svg"
       deleteProd.addEventListener("click", function (index) {
          console.log(nik["_id"])
          axios.delete(`http://localhost:2345/cart/eat/${nik["_id"]}`)
          
          var res = axios.get(`http://localhost:2345/cart/eat`)
          .then(function(res){
              eatdata = res.data
             myFuncN(eatdata,"eat")
          }).catch(function (error) {
              console.log(error);
          })
      })
      
      let pprod = document.createElement("p");
      pprod.textContent = nik.strMeal
      pprod.id = "pprod"


      // let psize = document.createElement("p");
      // psize.textContent = nik.color;
      // psize.id="psize"

      let collection = document.createElement("div")
      collection.style.display = "flex"
      collection.style.marginRight = "30px"



      let pprice = document.createElement("p");
      pprice.textContent =nik.price

      let quant = document.createElement("div")
      quant.setAttribute("id", "quant")

      let minus = document.createElement("img")
      minus.src = "https://static.cure.fit/assets/images/minus.svg"
      minus.style.width = "15px";
      minus.style.marginLeft = "10px"
      minus.style.cursor = "pointer"
      minus.addEventListener("click", countfunc)

      function countfunc() {
          if (countcart == 0) {
              return
          }
          else {
              countcart--
              Total -= (+nik.price);
              quantity--;
               buttonCart.textContent = `${quantity} items • ${Total}`;
              console.log(countcart);
              countshow.textContent = countcart
          }

      }

      let countshow = document.createElement("p")
      countshow.textContent = countcart
      countshow.setAttribute("id", "countshow")


      let plus = document.createElement("img")
      plus.src = "https://static.cure.fit/assets/images/plus.svg";
      plus.style.width = "15px"
      plus.style.cursor ="pointer"
      plus.addEventListener("click", countfunc2);


      function countfunc2() {
          console.log(countcart);
          countcart++
            Total += (+nik.price);
            quantity++;
          buttonCart.textContent = `${quantity} items  •${Total}`;

          countshow.textContent = countcart

      }

      let hr = document.createElement("hr")

      quant.append(minus, countshow, plus)

      collection.append(pprice, quant)

      con2.append(deleteProd,pprod, psize, collection)


      disDivCon.append(con1, con2)

      disDiv.append(disDivCon, hr)

      scrollN.append(disDiv)


      document.getElementById("chiDiv").append(divN)
  
  });
  buttonCart.textContent = `${quantity} items  •${Total}`;
   document.getElementById("chiDiv").append(buttonCart)

  }