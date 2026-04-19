(function() {
    "use strict";

   /*======AOS function and init=====*/
  function aosInit() {
    AOS.init({
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);
    
})();
