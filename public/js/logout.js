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
let locationCity = localStorage.setItem("location",`button.innerText`);

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
      localStorage.setItem("location",button.innerText);
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


document.getElementById("cart").addEventListener("click", () => {
  
})


// login 


var arrow = document.getElementById("image11")
arrow.addEventListener("click", showdata)
var toggle = false
function showdata() {

    if (toggle) {
        toggle = false
        document.getElementById("logindata").style.display = "none";
        // arrow.style.transform = "rotate(" + 0 + "deg)"
    } else {
        toggle = true
        document.getElementById("logindata").style.display = "block";
        // arrow.style.transform = "rotate(" + 0 + "deg)"
    }
}

    // <---------------------Cart Page------------------------>
    var cartData=JSON.parse(localStorage.getItem('addnik'))||[];
    console.log(cartData);


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