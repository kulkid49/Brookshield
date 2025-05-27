// Navbar fixed 
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      document.getElementById("navbar_top").classList.add("fixed-top");

      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");

      document.body.style.paddingTop = "0";
    }
  });
});

// Client Section Slider
$(document).ready(function() {
  $('.our-client').slick({
   infinite: true,
     autoplay: true,
     autoplaySpeed: 0,
     speed: 5000,
  //    cssEase: 'linear',
     pauseOnHover: true,
     pauseOnFocus: true,
     slidesToShow: 6,
     slidesToScroll: 1,
     dots: false,
     arrows: false,
     responsive: [
     {
     breakpoint: 1199.5,
     settings: {
       slidesToShow: 4,
       slidesToScroll: 1,
     }
   },
   {
     breakpoint: 991.5,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 1,
       dots: false,
     }
   },
   {
     breakpoint: 767.5,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
       dots: false,
     }
   }
 ]
 });
});

//footer dropdown

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".language-toggle");
  const selector = document.querySelector(".language-selector");
  const selectedLang = document.querySelector(".selected-language");

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    selector.classList.toggle("active");
  });

  document.querySelectorAll(".language-dropdown li").forEach((item) => {
    item.addEventListener("click", function () {
      selectedLang.textContent = item.getAttribute("data-lang");
      selector.classList.remove("active");
    });
  });

  document.addEventListener("click", function () {
    selector.classList.remove("active");
  });
});

