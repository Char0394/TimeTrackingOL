 //Create signinCallback button
 //Verify if the user is login and call app.js
 function signinCallback(result) {
          if (result['access_token']) {
              document.querySelector('#signinButton').setAttribute('style', 'display:none');
			  document.querySelector('#desconectar').setAttribute('style', 'display:block');
			  
			  CallUserProfile();
			  //Call app.js
			  var appscript = document.createElement('script'); 
	          appscript.type = 'text/javascript';
	          appscript.async = true;
	          appscript.src = 'app.js';
	          var app = document.getElementsByTagName('script')[0];
	          app.parentNode.insertBefore(appscript, app);
			
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
     document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://127.0.0.1:8020/TimeTracking/TimeTracking/trunk/TimeTracking/index.html";
        
}

//Call User Profile Info 
function CallUserProfile() {
      gapi.client.load('oauth2', 'v2', function() 
	  {
           gapi.client.oauth2.userinfo.get().execute(function(resp) {
          // Shows user email
          console.log(resp.email);
        })
      });

      gapi.client.load('plus', 'v1', function() 
	  {
         gapi.client.plus.people.get( {'userId' : 'me'} ).execute(function(resp) 
		 {
          // Shows profile information
		 // alert("Welcome "+ resp.displayName);
		 var dn = resp.displayName;
		  document.getElementById('dn').innerHTML="Welcome "+dn;
          //console.log(resp);
		  
        })
      });
}