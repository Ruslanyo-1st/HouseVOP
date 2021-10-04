function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

    // video-opacity
    const button = document.getElementById('video__button');
    const bg = document.getElementById('video__wrap');
    
    button.addEventListener('click', function() {
      bg.style.opacity = 0;
    });

// play-button
    $('.video__body').parent().click(function () {

        if($(this).children(".video__body").get(0).paused){       
       $(this).children(".video__body").get(0).play();   
      $(this).children(".video__button").fadeOut();
      
          }else{      
       $(this).children(".video__body").get(0).pause();
      
        $(this).children(".video__button").fadeIn();
      
          }
      
      });
