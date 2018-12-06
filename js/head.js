function scrollFooter(scrollY, heightFooter) {

  if (scrollY >= heightFooter) {
    $('footer').css({
      'bottom': '-17px'
    });
  }
  else {
    $('footer').css({
      'bottom': '-' + heightFooter + 'px'
    });
  }
}

$(window).load(function () {
  var windowHeight = $(window).height(),
    footerHeight = $('footer').height(),
    heightDocument = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

  // Definindo o tamanho do elemento pra animar
  $('#scroll-animate, #scroll-animate-main').css({
    'height': heightDocument + 'px'
  });

  // Definindo o tamanho dos elementos header e conteúdo
  $('header').css({
    'height': windowHeight + 'px'
    // 'line-height': windowHeight + 'px'
  });

  $('.wrapper-parallax').css({
    'margin-top': windowHeight + 'px'
  });

  scrollFooter(window.scrollY, footerHeight);

  // ao dar rolagem
  // window.onscroll = function () {

  //   var scroll = window.scrollY;

  //   $('#scroll-animate-main').css({
  //     'top': '-' + scroll + 'px'
  //   });

  //   $('header').css({
  //     'background-position-y': 50 - (scroll * 100 / heightDocument) + '%'
  //   });

  //   scrollFooter(scroll, footerHeight);
  // }
  

  function throttle(callback, limit) {
    var wait = false;                 // Initially, we're not waiting
    return function () {              // We return a throttled function
      if (!wait) {                  // If we're not waiting
        callback.call();          // Execute users function
        wait = true;              // Prevent future invocations
        setTimeout(function () {  // After a period of time
          wait = false;         // And allow future invocations
        }, limit);
      }
    }
  }

  function callback() {
    var scroll = window.scrollY;

    $('#scroll-animate-main').css({
      'top': '-' + scroll + 'px'
    });

    $('header').css({
      'background-position-y': 50 - (scroll * 100 / heightDocument) + '%'
    });

    scrollFooter(scroll, footerHeight);
  }

  window.addEventListener("scroll", throttle(callback, 5));
});



// set up the base pattern
// var pattern = Trianglify({
//   height: window.innerHeight,
//   width: window.innerWidth,
//   x_colors: ['#2b2e4a', '#252840', '#53354a', '#252840', '#2b2e4a'],
//   y_colors: ['#2b2e4a', '#252840', '#53354a', '#252840', '#2b2e4a'],
//   variance: 10,
//   seed: '666',
//   cell_size: 160
// });

// // // canvas
// // document.body.appendChild(pattern.canvas())

// // svg
// document.body.appendChild(pattern.svg())



//         // // png
//         // var png = document.createElement('img')
//         // png.src = pattern.png()
//         // document.body.appendChild(png)

function drawCanvas() {
  var canvas = document.getElementById('bg'),
    context = canvas.getContext('2d'),
    pattern = Trianglify({
      cell_size: 90,
      variance: 1,
      width: window.innerWidth,
      height: window.innerHeight,
      x_colors: ['#000', '#E53935', '#ff8a80', '#E53935', '#000']
    });
  pattern.canvas(canvas);
}

window.addEventListener('DOMContentLoaded', drawCanvas, false);

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
