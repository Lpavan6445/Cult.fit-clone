

// <----------NavbarDropDown----------------->
var spet = document.getElementById("spet")
var toggle = false;
//  <-----------------Eatfit dropDown topleft------------------>
spet.addEventListener("click", function () {
    var headDropDown = document.getElementById("headDropDown")
    var droparrow = document.getElementById("dropdown-arrow")

    if (toggle) {
        headDropDown.style.display = "none"
        toggle = false
        droparrow.style.transform = "rotate(" + 180 + "deg)"
    } else {
        headDropDown.style.display = "flex"
        toggle = true
        droparrow.style.transform = "rotate(" + 0 + "deg)"
    }

})
// ----------------------- nav bar Ends <------>


let track = document.querySelector(".caursoleUi")
let slides = Array.from(track.children)
let nextbtn = document.querySelector(".indicator--right");
let prevbtn = document.querySelector(".indicator--left")
let dotsNav = document.querySelector(".buttons_nav")

let dots = Array.from(dotsNav.children)

let slideWidth = slides[0].getBoundingClientRect().width;

let slidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}
slides.forEach(slidePosition)

let moveSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove("curent_slide");;
    targetSlide.classList.add("curent_slide");
}

// let updatedDots = (currentDot,targetDot) => {
//     currentDot.classList.remove("curent_slide");;

//     targetDot.classList.add("curent_slide");
// } 


prevbtn.addEventListener('click', e => {

    let currentSlide = track.querySelector('.curent_slide');

    let prevSlide = currentSlide.previousElementSibling;



    moveSlide(track, currentSlide, prevSlide)
})

nextbtn.addEventListener('click', e => {

    let currentSlide = track.querySelector('.curent_slide');

    let nextSlide = currentSlide.nextElementSibling;

    //  let currentDot =dotsNav.querySelector('.curent_slide');

    //  let  nextDot = currentDot.nextElementSibling;

    moveSlide(track, currentSlide, nextSlide)

    // updatedDots(currentDot,nextDot) 
})

dotsNav.addEventListener('click', e => {
    let targetDot = e.target.closest('button')

    if (!targetDot) return;

    let currentSlide = track.querySelector('.curent_slide');
    let currentDot = dotsNav.querySelector('.curent_slide');

    let targetIndex = dots.findIndex(dot => dot == targetDot)

    let targetSlide = slides[targetIndex];

    moveSlide(track, currentSlide, targetSlide)

    //    currentDot.classList.remove('.curent-slide');

    //    targetDot.classList.add('curent_slide');

})


let span1 = document.getElementsByTagName('span1');
	let products = document.getElementsByClassName('live_pro')
	let product_page1 = Math.ceil(products.length/4);
	let j= 0;
	let movePer1 = 25.34;
	let maxMove1 = 100;
	// mobile_view	
	// let mob_view = window.matchMedia("(max-width: 768px)");
	// if (mob_view.matches)
	//  {
	//  	movePer = 50.36;
	//  	maxMove = 504;
	//  }

	let right_mover1 = ()=>{
		j = j + movePer1;
		if (products == 1){j = 0; }
		for(const i of products)
		{
			if (j > maxMove1){j = j - movePer1;}
			i.style.left = '-' + j + '%';
		}

	}
	let left_mover1 = ()=>{
		j = j - movePer1;
		if (j<=0){j = 0;}
		for(const i of products){
			if (product_page1>1){
				i.style.left = '-' + j + '%';
			}
		}
	}
	span1[1].onclick = ()=>{right_mover1();}
	span1[0].onclick = ()=>{left_mover1();}








// ------------------------------------second
    

let span = document.getElementsByTagName('span2');
	let product = document.getElementsByClassName('live_img')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 120;
	// mobile_view	
	// let mob_view = window.matchMedia("(max-width: 768px)");
	// if (mob_view.matches)
	//  {
	//  	movePer = 50.36;
	//  	maxMove = 504;
	//  }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}


let span3 = document.getElementsByTagName('span3');
	let prod = document.getElementsByClassName('live_pic')
	let prod_page1 = Math.ceil(prod.length/4);
	let k = 0;
	let movePer2 = 25.34;
	let maxMove2 = 55;
	let right_mover2 = ()=>{
		k = k + movePer2;
		if (prod == 1){k = 0; }
		for(const i of prod)
		{
			if (k > maxMove2){k = k - movePer2;}
			i.style.left = '-' + k + '%';
		}

	}
	let left_mover2 = ()=>{
		k = k - movePer2;
		if (k<=0){k = 0;}
		for(const i of prod){
			if (prod_page1>1){
				i.style.left = '-' + k + '%';
			}
		}
	}
	span3[1].onclick = ()=>{right_mover2();}
	span3[0].onclick = ()=>{left_mover2();}


// ------------------- format ----------------------
let span4 = document.getElementsByTagName('span4');
	let prod1 = document.getElementsByClassName('live_pic2')
	let prod_page2 = Math.ceil(prod1.length/4);
	let m = 0;
	let movePer3 = 25.34;
	let maxMove3 = 65;
	let right_mover3 = ()=>{
		m = m + movePer3;
		if (prod1 == 1){m = 0; }
		for(const i of prod1)
		{
			if (m > maxMove3){m = m - movePer3;}
			i.style.left = '-' + m + '%';
		}

	}
	let left_mover3 = ()=>{
		m = m - movePer3;
		if (m<=0){m = 0;}
		for(const i of prod1){
			if (prod_page2>1){
				i.style.left = '-' + m + '%';
			}
		}
	}
	span4[1].onclick = ()=>{right_mover3();}
	span4[0].onclick = ()=>{left_mover3();}






let span5 = document.getElementsByTagName('span5');
	let prod3 = document.getElementsByClassName('product2')
	let prod3_page = Math.ceil(prod3.length/2);
	let n = 0;
	let movePer4 = 20.34;
	let maxMove4 = 60;
	// mobile_view	
	// let mob_view = window.matchMedia("(max-width: 768px)");
	// if (mob_view.matches)
	//  {
	//  	movePer4 = 50.36;
	//  	maxMove4 = 504;
	//  }

	let right_mover4 = ()=>{
		n = n + movePer4;
		if (prod3 == 1){l = 0; }
		for(const i of prod3)
		{
			if (n > maxMove4){n = n - movePer4;}
			i.style.left = '-' + n + '%';
		}

	}
	let left_mover4 = ()=>{
		n = n - movePer4;
		if (n<=0){n = 0;}
		for(const i of prod3){
			if (prod3_page>1){
				i.style.left = '-' + n + '%';
			}
		}
	}
	span5[1].onclick = ()=>{right_mover4();}
	span5[0].onclick = ()=>{left_mover4();}



    // ------------------- five ---------------
    let span6 = document.getElementsByTagName('span6');
	let prod4 = document.getElementsByClassName('product3')
	let prod4_page = Math.ceil(prod4.length/2);
	let p = 0;
	let movePer5 = 20.34;
	let maxMove5 = 45;
	// mobile_view	
	// let mob_view = window.matchMedia("(max-width: 768px)");
	// if (mob_view.matches)
	//  {
	//  	movePer4 = 50.36;
	//  	maxMove4 = 504;
	//  }

	let right_mover5 = ()=>{
		p = p + movePer5;
		if (prod4 == 1){p = 0; }
		for(const i of prod4)
		{
			if (p > maxMove5){p = p - movePer5;}
			i.style.left = '-' + p + '%';
		}

	}
	let left_mover5 = ()=>{
		p = p - movePer5;
		if (p<=0){p = 0;}
		for(const i of prod4){
			if (prod4_page>1){
				i.style.left = '-' + p + '%';
			}
		}
	}
	span6[1].onclick = ()=>{right_mover5();}
	span6[0].onclick = ()=>{left_mover5();}





// --------------------------cards section-------------------//







var totalimages1 = [
    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/4237c1b8-1f59-40c7-814b-76c8a710d314",
        name: "Covid Recovery",
        dis: "It's time to say goodbye to the physical and mental stress brought upon by this virus. This program focuses on bringing stability back into the body through gentle stretches and a sense of peace into the mind through deep meditation. The sessions in these series have low-intensity movements that do not challenge the lung capacity and help reset the body for recovery."
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/a9e0327d-8882-4bc0-a3f3-01be11daf295",
        name: "Running Programs",
        dis: "Running Programs"
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/242290e4-3a59-463c-9c7b-e21bd14b434e",
        name: "5 Min Meditation",
        dis: "Panic? Anxiety? We have you all covered with these short 5 minute meditations. Dive in!"
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/936125f4-ffc8-4e52-943b-efe9d068b758",
        name: "Sleep Stories",
        dis: "Say goodbye to sleepless nights! Created by Dr.Shyam Bhat, these stories will help you relax to drift into a peaceful and deep sleep.",
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/db8fdf60-64c0-4938-9d9a-4fac5fb076d9",
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
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/19d81eab-d659-44d8-8466-52a2fb6744c2",
        name: "Meditation - Foundation",
        dis: "Get started with meditation! This series will guide you through the basic skills of meditation and help you explore mindfulness.",
    },

    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/57054865-0ce0-4572-976a-19b19385f48d",
        name: "Yoga- Pranayama",
        dis: "This Pranayama series contains breath practices which have the potential to effect the gross body.",
    },
    {
        img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_212,ar_0.82,c_fill/dpr_2/image/diy/867fb6bd-d196-45c3-bad8-13a066ff4af1",
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

let cards = document.querySelector(".card1")

totalimages1.forEach(function (items) {

    let dis1 = document.createElement("div")
    dis1.classList.add("dis1")

    let div1 = document.createElement("div")

    let div2 = document.createElement("div")


    let img = document.createElement("img")
    img.src = items.img
    img.classList.add("imgS")

    div1.append(img)

    let tit = document.createElement("h2")
    tit.innerText = items.name

    let dis = document.createElement("p")
    dis.innerText = items.dis
    dis.style.fontSize = "13px"


    div2.append(tit, dis)

    dis1.append(div1, div2)

    cards.append(dis1)
});

let cards2 = document.querySelector(".card2")
totalimages2.forEach(function (items) {

    let dis2 = document.createElement("div")
    dis2.classList.add("dis2")

    let div1 = document.createElement("div")

    let div2 = document.createElement("div")


    let img = document.createElement("img")
    img.src = items.img
    img.classList.add("imgS")

    div1.append(img)

    let tit = document.createElement("h2")
    tit.innerText = items.name

    let dis = document.createElement("p")
    dis.innerText = items.dis
    dis.style.fontSize = "13px"


    div2.append(tit, dis)

    dis2.append(div1, div2)

    cards2.append(dis2)
});


// -        -----------------------------------       FAQS -------------->


function first() {
    document.getElementById("text2").innerHTML = "";
    document.getElementById("text3").innerHTML = "";
    document.getElementById("text4").innerHTML = "";
    document.getElementById("text5").innerHTML = "";
    document.getElementById("text6").innerHTML = "";
    document.getElementById("text7").innerHTML = "";
    document.getElementById("text1").innerHTML = `<p>Everyone goes through challenging situations in life,
     and while you may have successfully navigated through other difficulties you’ve faced, Therapy provides 
     the extra support when you most need it. In fact, therapy is for people who have enough
     self-awareness to realize they need a helping hand, and that is something to be admired.</p>
     <h3>Do you find this helpful? YES   NO</h3>
     `
}
function second() {
    document.getElementById("text1").innerHTML = "";
    document.getElementById("text3").innerHTML = "";
    document.getElementById("text4").innerHTML = "";
    document.getElementById("text5").innerHTML = "";
    document.getElementById("text6").innerHTML = "";
    document.getElementById("text7").innerHTML = "";
    document.getElementById("text2").innerHTML = `<p>The first session is about building trust. Therapy works 
    best when you can trust your Therapist and vice versa. We, therefore, use the first session to
     understand your problems better and define a goal based journey on what to expect from therapy and by when.</p>
     <h3>Do you find this helpful? YES   NO</h3>`
}
function third() {
    document.getElementById("text1").innerHTML = "";
    document.getElementById("text2").innerHTML = "";
    document.getElementById("text4").innerHTML = "";
    document.getElementById("text5").innerHTML = "";
    document.getElementById("text6").innerHTML = "";
    document.getElementById("text7").innerHTML = "";
    document.getElementById("text3").innerHTML = `<p>A Therapists' goal is to help patients make decisions and clarify their feelings in order
     to solve problems without any medication. A Psychiatrist, on the other hand, helps diagnose mental health issues, and prescribes medicines if needed. However, 
    Therapists often works in tandem with a Psychiatrist to provide comprehensive care as needed by any user.</p>
    <h3>Do you find this helpful? YES   NO</h3>`
}
function four() {
    document.getElementById("text1").innerHTML = "";
    document.getElementById("text2").innerHTML = "";
    document.getElementById("text3").innerHTML = "";
    document.getElementById("text5").innerHTML = "";
    document.getElementById("text6").innerHTML = "";
    document.getElementById("text7").innerHTML = "";
    document.getElementById("text4").innerHTML = `<p>A Therapy pack helps with continuity of your wellness journey,
     without having to bother about booking sessions one at a time. Your Therapist will recommend the number of sessions that you might need to address your challenges. 
    We recommend you buy a pack only after a discussion with the therapist. </p>
    <h3>Do you find this helpful? YES   NO</h3>`
}
function five() {
    document.getElementById("text1").innerHTML = "";
    document.getElementById("text2").innerHTML = "";
    document.getElementById("text3").innerHTML = "";
    document.getElementById("text4").innerHTML = "";
    document.getElementById("text6").innerHTML = "";
    document.getElementById("text7").innerHTML = "";
    document.getElementById("text5").innerHTML = `<p>Here’s how you can book a therapy session from the cure.fit app: Log into the cure.fit app From the bottom
     of the To-Do page, pick mind.fit Pick 1 on 1 therapy Pick a preferred center and time slot Make a payment That’s all!</p>
     <h3>Do you find this helpful? YES   NO</h3>`
}
function six() {
    document.getElementById("text1").innerHTML = "";
    document.getElementById("text2").innerHTML = "";
    document.getElementById("text3").innerHTML = "";
    document.getElementById("text4").innerHTML = "";
    document.getElementById("text5").innerHTML = "";
    document.getElementById("text7").innerHTML = "";
    document.getElementById("text6").innerHTML = `<p>Only your assigned Therapist and/or assigned Psychiatrist will have access to your medical data until you provide
     explicit access to any other professional</p>  <h3>Do you find this helpful? YES   NO</h3>`
} function seven() {
    document.getElementById("text1").innerHTML = "";
    document.getElementById("text2").innerHTML = "";
    document.getElementById("text3").innerHTML = "";
    document.getElementById("text4").innerHTML = "";
    document.getElementById("text5").innerHTML = "";
    document.getElementById("text6").innerHTML = "";
    document.getElementById("text7").innerHTML = `<p>Absolutely! We ensure none of your medical/psychiatric information is shared with anyone but your
     Therapist and Psychiatrist. All the information you share with us is completely safe and secure with us</p>
     <h3>Do you find this helpful? YES   NO</h3>`
}
 // <--------------RigthDropDown--------------->
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
   // let buttonCart = document.createElement("button")
   // buttonCart.setAttribute("id", "buttonCart")

// <--------------RigthDropDown--------------->
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