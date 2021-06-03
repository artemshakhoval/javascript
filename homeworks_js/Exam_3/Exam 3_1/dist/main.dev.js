"use strict";

// MENU BURGER
// $( document ).ready(function(){
//   $( "#menu-toggle" ).click(function(){ 
//   $( ".menu__list" ).slideToggle();
//   $( ".menu__list" ).addClass("active");
//   })
// });
// LIST ACTIVE
// $('.list__item').click(function() {
//   if($(this).hasClass('active') == true) {
//       $(this).removeClass('active');
//   }
//   else {
//       $('.list__item.active').removeClass('active');
//       $(this).addClass('active');
//   }
// });
// FILTRATION
// $('.list__filtered .filtered__link').on('click', function() {
//   $('.list__filtered .filtered__item').removeClass('active');
//   $(this).parent('filtered__item').addClass('active'); 
//   let item = $(this).attr('data-filter'); 
//   if (item == 'all') {
//     $('.content__images .images__container').show(); 
//   } else { 
//     $('.content__images .images__container').hide();
//     $('.content__images .images__container[data-filter="' + item + '"]').show(); 
//   }
// });
// FORM VALIDATION
// $(document).ready(function(){
//   let validName = false;
//   let validEmail = false;
//   $("form").submit(function(event){
//     event.preventDefault();
//     let name = $("#name").val();
//     let email = $("#email").val();
//     $(".error").remove();
//     if(name == "") {
//       $('#name').after('<span class="form__error">Enter a valid name</span>');
//       validName = false;
//     } else {
//       validName = true;
//     }
//     if(email == "") {
//       $('#email').after('<span class="form__error">Enter a valid email</span>');
//       validEmail = false;	
//     } else {
//       validEmail = true;	
//     }
//     if(validName == true && validEmail == true) {
//       $("form").unbind('submit').submit();
//     }
//   });
// });
// SLICK-SLIDER
$(document).ready(function () {
  $('.works__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true
  });
}); // Transition

$(".nav__link").on('click', function () {
  var wrapperSection = $(this).attr('href');
  var wrapperSectionPosition = $(wrapperSection).offset().top;
  $('html, body').animate({
    scrollTop: wrapperSectionPosition
  }, 1000);
});
$(".contacts__arrow").on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
}); // MAP

function initMap() {}

initMap = function initMap() {
  var myLatLng = {
    lat: 46.96092520489327,
    lng: 32.020104540237384
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
    disableDefaultUI: true,
    mapTypeControl: true,
    styles: [{
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [{
        "saturation": 36
      }, {
        "color": "#000000"
      }, {
        "lightness": 40
      }]
    }, {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#000000"
      }, {
        "lightness": 16
      }]
    }, {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }, {
        "weight": 1.2
      }]
    }, {
      "featureType": "administrative.country",
      "elementType": "geometry",
      "stylers": [{
        "hue": "#ffcf00"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "simplified"
      }, {
        "color": "#ff0000"
      }]
    }, {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#997c2a"
      }, {
        "visibility": "off"
      }]
    }, {
      "featureType": "landscape.man_made",
      "elementType": "labels.text",
      "stylers": [{
        "color": "#f2ab53"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 21
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 29
      }, {
        "weight": 0.2
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 18
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "on"
      }, {
        "weight": "1.48"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#854343"
      }, {
        "visibility": "off"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#ce7b2f"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 16
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 19
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry.stroke",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#efc759"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#25586f"
      }, {
        "lightness": 17
      }]
    }]
  });
  var image = new google.maps.MarkerImage("./source/img/marker.png", new google.maps.Size(130, 130), new google.maps.Point(0, 0), new google.maps.Point(22, 32));
  var marker = new google.maps.Marker({
    position: myLatLng,
    icon: image,
    map: map
  });
};