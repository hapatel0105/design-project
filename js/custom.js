"use strict";const headerSticky=e=>{const t=document.querySelector(e);if(t){const e=t.querySelector(".navbar-brand img");window.addEventListener("scroll",(()=>{window.pageYOffset>150?(t.classList.add("is-sticky"),e&&(e.src="./images/logo.png")):(t.classList.remove("is-sticky"),e&&(e.src="./images/logo-default.png"))}))}};headerSticky(".header");const navToggle=document.querySelector(".toggle-wrap");navToggle.addEventListener("click",(function(){navToggle.classList.toggle("active")}));var swiper=new Swiper(".product-carousel",{spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},992:{slidesPerView:3,spaceBetween:20},1200:{slidesPerView:4}}}),swiper2=(swiper=new Swiper(".gallery-thumb",{loop:!0,slidesPerView:3,freeMode:!0,watchSlidesProgress:!0}),new Swiper(".gallery-slider",{loop:!0,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:swiper}})),testimonialCarousel=new Swiper(".testimonial-carousel",{freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},breakpoints:{0:{slidesPerView:1},992:{slidesPerView:2,spaceBetween:40},1200:{slidesPerView:2,spaceBetween:80}}}),dealCarousel=(testimonialCarousel=new Swiper(".testimonial2-slider",{spaceBetween:30,freeMode:!0,autoplay:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},992:{slidesPerView:2},1200:{slidesPerView:3}}}),new Swiper(".deal-carousel",{spaceBetween:30,slidesPerView:1,autoplay:!0,freeMode:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}));testimonialCarousel=new Swiper(".headphone-products",{freeMode:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:80},767:{slidesPerView:2,spaceBetween:40},992:{slidesPerView:3,spaceBetween:30},1200:{slidesPerView:4,spaceBetween:30}}});(new WOW).init({mobile:!1});const backTotop=function(){window.scrollY;var e=document.querySelector(".back-top");if(e){window.addEventListener("scroll",(function(){window.scrollY>=800?e.classList.add("back-top-show"):e.classList.remove("back-top-show")})),e.addEventListener("click",(()=>window.scrollTo({top:0,behavior:"smooth"})))}}(),productQuantity=e=>{document.querySelectorAll(e).forEach((e=>{const t=e.querySelector(".qty-plus"),n=e.querySelector(".qty-minus"),o=e.querySelector(".qty-count");let s=1;t.addEventListener("click",(()=>{s++,s=s<10?"0"+s:s,o.value=s})),n.addEventListener("click",(()=>{s>1&&(s--,s=s<10?"0"+s:s,o.value=s)}))}))};productQuantity(".cart-quanty");let removeBtns=document.querySelectorAll(".remove");removeBtns.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),this.closest(".cart_item").remove()}))}));const checkoutShipping=e=>{const t=document.querySelector(e),n=document.querySelectorAll("#billform-dirrentswitch");t&&n.forEach((e=>{e.addEventListener("click",(e=>{toggleSlide(t)}))}))};checkoutShipping("#checkoutCouponform1"),new PureCounter({selector:".purecounter",delay:200}),new VenoBox({selector:".my-video-links",autoplay:!0,maxWidth:"1000px"});let multipleElements=document.querySelectorAll(".deal-countdown");simplyCountdown(multipleElements,{year:2024,words:{days:{singular:"day",plural:"days"},hours:{singular:"hour",plural:"hrs"},minutes:{singular:"min",plural:"min"},seconds:{singular:"sec",plural:"sec"}},plural:!0,inline:!1,enableUtc:!1,onEnd:function(){},zeroPad:!0,countUp:!0}),window.onload=function(){var e=document.getElementById("preloader");e.style.transition="opacity 0.2s ease",e.style.opacity=0,document.body.style.overflow="visible"},document.body.onload=function(){setTimeout((function(){const e=document.getElementById("preloader");e.classList.contains("done")||e.classList.add("done")}),1e3)};