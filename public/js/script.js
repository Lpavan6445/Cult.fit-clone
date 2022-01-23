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
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
let cityTitle = document.querySelector(".city-title");
let cityLocation = document.getElementById("open-modal-search-location");
// let city = JSON.parse(localStorage.getItem("location"));


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
      // console.log(button.innerText)
      // console.log(cityLocation)
      cityLocation.innerText = `${button.innerText}`
      localStorage.setItem("location", JSON.stringify(button.innerText));
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}



// login pop up start
const open = document.getElementById("open");
const modal_container = document.getElementById("modal-container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
    modal_container.classList.add('show');
})

close.addEventListener("click", () => {
    modal_container.classList.remove('show');
})


let continueBtn = document.getElementById("continue-btn");

let debounceId;

document.getElementById("mobile").addEventListener("input", () => {
    debouce(value, 100);
});

function value() {
    let search = document.getElementById("mobile").value;
    if(search.length === 10){
        continueBtn.className = "continue-btn-true";
        continueBtn.addEventListener("click", openOtp)
    }else {
        continueBtn.className = "continue-btn-false";
    }
}

function debouce(func, delay) {

clearTimeout(debounceId);
debounceId = setTimeout(() => {
    func()
}, delay)
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
closeBtn.setAttribute("id", "close")
closeBtn.className = "close-button-login";
closeBtn.innerHTML = "&times;"
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
otpDiv.append(firstDiv, secondDiv, thirdDiv, fourDiv, fiveDiv, sixDiv, optInput)
let otpContinueBtn = document.createElement("button");
otpContinueBtn.innerText = "Confirm";
otpContinueBtn.className = "continue-btn-true";
var otpz =Math.floor(100000 +Math.random() *900000) 
alert(`otp: ${otpz}`)

otpContinueBtn.addEventListener("click", () => {
  console.log(otpz,+optInput.value)
  if(+optInput.value === otpz){
    console.log(optInput.value)
    window.location.href = "logout.html"
  }else{
    alert("Enter Currect Otp")
  }
 
})

//    console.log(optInput);

let otpCall = document.createElement("div");
otpCall.className = "otp-call-div";
otpCall.innerText = "GET OTP ON CALL";
let resendOtp = document.createElement("div");
resendOtp.className = "resend-otp";
resendOtp.innerText = "Didn't receive OTP?"
let resendOtpBtn = document.createElement("button");
resendOtpBtn.className = "resendOtpBtn";
resendOtpBtn.innerText = "RESEND"

resendOtp.append(resendOtpBtn)
let trouble = document.createElement("anchor");
trouble.className = "trouble";
trouble.innerText = "Having trouble logging in?"

modalotpDiv.append(titleOtpContainer, otpDetails, otpDiv, otpContinueBtn, otpCall, resendOtp);
document.getElementById("modallogin").append(modalotpDiv)

}



// cart popup

var cartData = JSON.parse(localStorage.getItem('addnik')) || [];
console.log(cartData);


let cart=document.getElementById("cartNik")
var toggle = false;
cart.addEventListener("click",function (){
   if(toggle){
       toggle = false;
        chiDiv.style.display = "none"
   }else{
       toggle = true;
       chiDiv.style.display = "block"
   }
 
});
myFuncN(cartData)
function myFuncN(cartData){
document.getElementById("chiDiv").innerHTML=null
 let divN = document.createElement("div")
divN.setAttribute("id", "divspi");

let pN = document.createElement("p");
pN.textContent = "Your Cart";
pN.id="pN"

divN.append(pN)



// ==================================================

let divFlexN = document.createElement("div");
divFlexN.setAttribute("id", "divFlexN")


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

let Np4Div = document.createElement("div")
Np4Div.style.marginLeft = "50px"
let Np4 = document.createElement("p")
Np4.textContent = "Cultgear"
Np4Div.append(Np4)

divFlexN.append(Np1Div, Np2Div, Np3Div, Np4Div)

divN.append(divFlexN)

let scrollN=document.createElement("div")
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
        cartData.splice(index, 1)
        myFuncN(cartData)
        localStorage.setItem("addnik", JSON.stringify(cartData))
    })
    
    let pprod = document.createElement("p");
    pprod.textContent = nik.name
    pprod.id = "pprod"


    let psize = document.createElement("p");
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
var hamburger = document.getElementById("hamburgericon")
hamburger.addEventListener("click",()=>{
    var dropNav = document.getElementById("dropdownNav")
    dropNav.style.display="flex"
    
    console.log("clicking")
})
var cross = document.getElementById("cross")
cross.addEventListener("click",()=>{
    var dropNav = document.getElementById("dropdownNav")
    dropNav.style.display="none"
    
    console.log("clicking")
})
var arrow = document.getElementById("image11")
    arrow.addEventListener("click", showdata)
    var toggle = false
    function showdata() {

        if (toggle) {
            toggle = false
            console.log("clicking")
            document.getElementById("logindata").style.display = "none";
            // arrow.style.transform = "rotate(" + 0 + "deg)"
        } else {
            toggle = true
            console.log("clicking")
            document.getElementById("logindata").style.display = "flex";
            // arrow.style.transform = "rotate(" + 0 + "deg)"
        }
    }
    