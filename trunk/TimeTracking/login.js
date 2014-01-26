 //Create signinCallback button
 //Verify if the user is login and call app.js
 function signinCallback(result) {
          if (result['access_token']) {
              document.querySelector('#signinButton').setAttribute('style', 'display:none');
			  document.querySelector('#desconectar').setAttribute('style', 'display:block');
			  
			  var appscript = document.createElement('script');
	          appscript.type = 'text/javascript';
	          appscript.async = true;
	          appscript.src = 'app.js';
	          var app = document.getElementsByTagName('script')[0];
	          app.parentNode.insertBefore(appscript, app);
			  
              loadProfileInfo();
          } else if (result['error']) {
             console.log(result);
			 document.querySelector('#desconectar').setAttribute('style', 'display:none');
			 
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

//Logout
function logout() 
{
     document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://127.0.0.1:8000/TimeTracking/index.html";
        
}