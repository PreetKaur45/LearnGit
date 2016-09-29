


$(document).ready(function() {
    
    // When login button is pressed
    $("#submit").click(function(){
        
         //Go to index
        window.location.href = 'index.html';         
    }); 

    // Log out
    $("#logout").click(function(){
        $.removeCookie('cookieAdmin', { path: '/' });

     
      
    });
});


