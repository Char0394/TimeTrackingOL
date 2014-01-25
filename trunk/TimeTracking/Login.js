 //Create signinCallback button
 function signinCallback(result) {
          if (result['access_token']) {
              document.querySelector('#signinButton').setAttribute('style', 'display:none');
              loadProfileInfo();
          } else if (result['error']) {
             console.log(result);
          }
      } 
//End create signinCallback button
//Start button
(function () {
          var po = document.createElement('script');
          po.type = 'text/javascript';
          po.async = true;
          po.src = 'http://apis.google.com/js/client:plusone.js';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(po, s);
      })();
//End button