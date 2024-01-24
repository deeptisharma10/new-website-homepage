

// on ready function
jQuery(document).ready(function ($) {
  // header fix for Position fixed
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 150) {
      $("header").addClass("header-fixed animated fadeInDown");
    } else {
      $("header").removeClass("header-fixed animated fadeInDown");
    }
  });
});



(function () { // wrap code in IIFE to keep it from global scope
  let links = document.querySelectorAll('.trigger-link'); // grab all <a> tags that trigger the image gallery
  let imageContainer = document.querySelector('.gallery-container'); // grab the div that will contain the images
  // let imagesCollection = document.querySelectorAll('.gallery-container .gallery-img');
  let imgCol = document.querySelectorAll('.gallery-container .img-col');
  function displayImage(imgs, album) { // function to check the data-album attr and check against the button that was clicked
    imgs.forEach((image) => {
      if (image.dataset.album == album) {
        image.classList.remove('hide');
      } else {
        image.classList.add('hide');
      }
    });
  }
  function activeLink(links, linkname) { // function to check the data-album attr and check against the button that was clicked
    links.forEach((link) => {
      if (link.textContent.includes(linkname)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }


  links.forEach((link) => { // loop through <a> tags and create click event on each 
    link.addEventListener('click', (e) => {
      e.preventDefault();

      switch (link.textContent) { // check name of link clicked 
        case "commercial": // link 1 text
          displayImage(imgCol, 'commercial'); //display images from commercial
          activeLink(links, 'commercial');          
          break;
          
          case "editorial": // link 2 text
          displayImage(imgCol, 'editorial'); //display images from editorial
          activeLink(links, 'editorial');          
          break;
          
          case "all": // // link 3 text - display all images at once
        activeLink(links, 'all');          
        imgCol.forEach((col) => {
            col.classList.remove('hide');
          });
          break;
      }

    });
  });

})();




document.addEventListener("DOMContentLoaded", () => {
  const labels = document.querySelectorAll(".form label");

  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, index) =>
          `<span style="transition-delay:${index * 50}ms">${letter}</span>`
      )
      .join("");
  });
});




// wow js
// wow = new WOW({
//   boxClass: "wow", // default
//   animateClass: "animated", // default
//   offset: 0, // default
//   mobile: true, // default
// });
// wow.init();

//slick slider
// $(".slick_slider").slick({
//   speed: 1000,
//   infinite: true,
//   arrows: false,
//   // prevArrow: (`<button class="btn btn-sm rounded-circle border prev-btn"><i class="fas fa-chevron-left"></i></button>`),
//   // nextArrow: (`<button class="btn btn-sm rounded-circle border next-btn"><i class="fas fa-chevron-right"></i></button>`),
//   dots: true,
//   autoplay: true,
//   gap:10,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 900,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     }
//   ],
// });

// data fn to show copyright year
// document.getElementById("year").innerText = new Date().getFullYear();



$(".parent-slider").slick({

    
  dots: false,
  infinite: true,
  autoplay: false,
  arrows: true,
  autoplaySpeed: 7000,
  slidesToShow: 4,
  slidesToScroll: 1,
  accessibility: false,
  

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


$(".sec-slider").slick({

    
  dots: true,
  infinite: true,
  autoplay: false,
  arrows: false,
  autoplaySpeed: 7000,
  slidesToShow: 4,
  slidesToScroll: 4,
  accessibility: false,
  // variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});