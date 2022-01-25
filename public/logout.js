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
        // var cartData=JSON.parse(localStorage.getItem('addnik'))||[];
        // console.log(cartData);
        var storedata;
        var eatdata ;
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
  
                 var response = axios.get(`https://cult-fit-clone-w13.herokuapp.com/cart/store`)
                  .then(function(response){
                      storedata =response.data;
                      myFuncN(storedata,"store")
                  }).catch(function (error) {
                      console.log(error);
                  })
               
                  var response = axios.get(`https://cult-fit-clone-w13.herokuapp.com/cart/eat`)
                  .then(function(response){
                      eatdata =response.data
                  }).catch(function (error) {
                      console.log(error);
                  })
             }
           
         });
      // myFuncN(cartData)
      let scrollN;
      let divN;
      let buttonCart;
      let psize;
      var res
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
                  axios.delete(`https://cult-fit-clone-w13.herokuapp.com/cart/store/${nik["_id"]}`)
                  
                    res = axios.get(`https://cult-fit-clone-w13.herokuapp.com/cart/store`)
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
                  axios.delete(`https://cult-fit-clone-w13.herokuapp.com/cart/eat/${nik["_id"]}`)
                  
                   res = axios.get(`https://cult-fit-clone-w13.herokuapp.com/cart/eat`)
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
              document.getElementById("logindata").style.display = "flex";
              // arrow.style.transform = "rotate(" + 0 + "deg)"
          }
      }
          }