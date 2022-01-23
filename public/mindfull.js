// <----------NavbarDropDown----------------->
var spet = document.getElementById("spet")
       var toggle = false;
      //  <-----------------Eatfit dropDown topleft------------------>
       spet.addEventListener("click",function(){
           var headDropDown = document.getElementById("headDropDown")
           var droparrow = document.getElementById("dropdown-arrow")
           
           if(toggle){
            headDropDown.style.display = "none"
            toggle = false
            droparrow.style.transform = "rotate("+180+"deg)"
           }else{
            headDropDown.style.display = "flex"
            toggle = true
            droparrow.style.transform = "rotate("+0+"deg)"
           }
          
       })
// <------>

var totalimages1 = [
    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/00a5f2c0-5e37-45fb-b869-f880d17d5763",
        name: "Covid Recovery",
        dis: "It's time to say goodbye to the physical and mental stress brought upon by this virus. This program focuses on bringing stability back into the body through gentle stretches and a sense of peace into the mind through deep meditation. The sessions in these series have low-intensity movements that do not challenge the lung capacity and help reset the body for recovery."
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/8e929664-cd36-4b5d-8c6c-ca135c678a84",
        name: "Running Programs",
        dis: "Running Programs"
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/f5e214b7-243b-4fec-b821-8e6400d49213",
        name: "5 Min Meditation",
        dis: "Panic? Anxiety? We have you all covered with these short 5 minute meditations. Dive in!"
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/936125f4-ffc8-4e52-943b-efe9d068b758",
        name: "Sleep Stories",
        dis: "Say goodbye to sleepless nights! Created by Dr.Shyam Bhat, these stories will help you relax to drift into a peaceful and deep sleep.",
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/c86a5d9a-e631-4f51-83eb-5231a27335ac.jpg",
        name: "Focus Meditation",
        dis: "It's the present that matters! Created by Dr.Shyam Bhat, this meditation series will help you bring your attention to the present moment by improving focus and concentration.",
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/8acb1c22-4cde-45ae-b2f9-14042fdd408c.jpg    ",
        name: "Beat the Stress Program",
        dis: "Say no to stress with this series! The various packs will help you manage stressful thoughts and feel more relaxed.    ",
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/94cf3985-f59e-48b3-88b3-fb1fef54d39a    ",
        name: "30 Minutes Yoga Nidra",
        dis: "This will be a half an hour audio-led Yoga NIdra class by Divya Rolla. Yoga Nidra is a powerful practise which has a profound effect on your body and mind. This practise will relax a person on all 3 levels physically, mentally and emotionally. It is one of the most easily accessible ways to reduce stress.",
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/3f6bf321-5c8d-4f12-adbf-5dd60b4f3fec    ",
        name: "Difficult Emotions",
        dis: "This pack by Prasiddha Ramarao addresses the fact that strong emotions do not have to be scary. Emotions often tell us that we need to take care of ourselves, so denying or suppressing them harms rather than helps us. This series explores six common emotions _ often seen as difficult or troublesome _ utilising different techniques to work through them. Please",
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/3d8bf8ac-64bf-4fc0-80b0-dc64ba6a831e    ",
        name: "Relationship Healing",
        dis: "This meditation pack on Relationships created by Spiritual Coach ModMonk Anshul will take you on a journey of bonding with yourself and will help in building a bridge of love, forgiveness, and acceptance with everyone around you.    ",
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/a5748b24-ddea-429e-8dea-51fa60c258c6",
        name: "Walking Meditation",
        dis: "A guide to walking mindfully, transforming the simple act of walking by staying present in the moment- created by Dr Shyam Bhat    ",
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/3aadf32b-c5a4-422a-b648-fa715eb409ed.jpg",
        name: "Yoga - Endurance",
        dis: "This pack is a capsulated practice to building physical endurance through a flow-based approach to yoga asanas. One will see improved physical and mental endurance when practiced regularly    ",
    },


]

var totalimages2 = [
    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/2688cb1e-3533-484e-b2dc-e83017199315.jpg",
        name: "Meditation - Foundation",
        dis: "Get started with meditation! This series will guide you through the basic skills of meditation and help you explore mindfulness.",
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/54117647-b2c9-4800-9370-18fb650fe4ba",
        name: "Yoga- Pranayama",
        dis: "This Pranayama series contains breath practices which have the potential to effect the gross body.",
    },
    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/e93f2cc8-7572-4559-ba11-6642e9dc98f5.jpg",
        name: "Stress Reduction Meditation",
        dis: "Say no to stress with this series! The various packs created by Dr. Shyam Bhat will help you manage stressful thoughts and feel more relaxed.",
    },
    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/5992b24c-f970-4beb-a4fe-8f0e265b67d9",
        name: " 30 Minutes Pranayama",
        dis: " Rolla. Breath is life. Most people breathe using a small portion of their lung capacity. Regular practise of these Pranayama sessions will help the practitioner develop a healthy breathing habit which will in-turn help one achieve peace of mind and",
    },
    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/b1bc9e1e-22f2-4e93-90ed-73703dcc973d",
        name: " Yoga for Relaxation and Stress Relief",
        dis: "A series which will guide you through asana, pranayama and savasana addressing the body, mind and breath",
    },
    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/83a5a31b-68f8-4acd-b6ff-d7bb8430ecd5",
        name: " Meditation for Kids",
        dis: "his series led by Prasiddha Ramarao would serve as a wonderful start for your child's meditation journey. The language is simple and engaging and something that would captures a child's imagination",
    },
    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/95593272-76b9-4776-bd98-23934db3fc1b",
        name: "Falling into Sleep",
        dis: "If you've been struggling to catch some shut eye lately, meditating before bed might help. Insomnia is an unhealthy condition that plagues far too many people. Our radical lifestyle changes have significantly altered our sleep patterns, turning many of us into daytime zombies. Meditation to the rescue! Sleep meditation is a powerful tool that can help us fall",
    },
    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/57ee03e5-6515-4892-9729-718edbc7505f",
        name: "Saying Yes to Life",
        dis: "The meditation sessions in this pack helps us take a closer look at our default responses to life's invitations for growth. Saying “yes” to life means a lot of things in a lot of different circumstances. The basic thing that unifies all of these circumstances is to take a risk in the direction of opening oneself up and being vulnerable — to not knowing, to not being able to control an outcome. It means trusting yourself and",
    },
    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/206bf7fd-de2b-4ab8-9783-6b94acbab483.jpg",
        name: " Sleep Meditation",
        dis: "Say goodbye to sleepless nights! Created by Dr.Shyam Bhat, this series will help you relax to drift into a peaceful and deep sleep.",
    },
    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/2e8dffed-4d9c-4eed-9bad-f5b577ab1fef",
        name: "7 days of Happiness",
        dis: "Spiritual coach ModMonk Anshul guides you through a beautiful journey of creating and enhancing your inner peace and happiness. Being happy is the basic right of every individual as we are innately happy beings, we just forget how to access that feeling and get stuck in a maze that makes us feel falsely worried, lonely, and unhappy. This pack is carefully crafted to help you climb the ladder of your inner subconscious to access",
    },
    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/7fc199ea-0457-4d03-bd93-add35aa3a64c",
        name: "Meditation - Yoga Nidra",
        dis: "This series uses the pre-meditative practices of Yoga Nidra to help deepen relaxation. You are bound to wake up refreshed!",
    },
]

let cards =  document.querySelector(".card1")

totalimages1.forEach(function(items){

    let dis1 = document.createElement("div")
    dis1.classList.add("dis1")

let div1 =  document.createElement("div")

let div2 = document.createElement("div")


let img = document.createElement("img")
img.src = items.img
img.classList.add("imgS")

div1.append(img)

let tit =  document.createElement("h2")
tit.innerText =items.name

let dis =  document.createElement("p")
dis.innerText= items.dis
dis.style.fontSize="13px"


 div2.append(tit,dis)

 dis1.append(div1,div2)

 cards.append(dis1)
}) ;

let cards2 =  document.querySelector(".card2")
totalimages2.forEach(function(items){

   let dis2 = document.createElement("div")
   dis2.classList.add("dis2")

let div1 =  document.createElement("div")

let div2 = document.createElement("div")


let img = document.createElement("img")
img.src = items.img
img.classList.add("imgS")

div1.append(img)

let tit =  document.createElement("h2")
tit.innerText =items.name

let dis =  document.createElement("p")
dis.innerText= items.dis
dis.style.fontSize="13px"


 div2.append(tit,dis)

 dis2.append(div1,div2)

 cards2.append(dis2)
}) ;



