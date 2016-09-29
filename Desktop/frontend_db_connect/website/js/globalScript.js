




if( $.cookie('cookieLogginStatus') == 'true'){
    $("#navMyPage").show();

    // Read cookie
    var crntUser = $.cookie('cookieUser');

    //decodes a string data encoded using base-64
    crntUser = atob(crntUser);

    //parses to Object the JSON string
    crntUser = JSON.parse(crntUser);

    // Show message and logged in user
    var name = crntUser.firstName + " " + crntUser.lastName;

    // Show personal information in account setttings
    showAccountInformation(crntUser);

    $("#SignUpLogin").hide();
    $("#notificationAndUsername").show();
    $('#userName').text(name);
}else{
    $("#SignUpLogin").show();
    $("#notificationAndUsername").hide();
    $("#navMyPage").hide();
}



function showAccountInformation(data){
    $('#acc-firstName').text(data.firstName);
    $('#acc-lastName').text(data.lastName);
    $('#acc-address').text(data.address);
    $('#acc-postCode').text(data.postalCode);
    $('#acc-city').text(data.city);
    $('#acc-country').text(data.country);
    $('#acc-email').text(data.email);
    $('#acc-confemail').text(data.email);
    $('#telephone-num').text(data.teleNbr);
    $("#selectbasic").val('Sweden');
    $('#company').text(data.company);

    $('#acc-password').attr("placeholder",data.password);

    $('#disabledregistrationPersonalCodeNumber').attr("placeholder", data.persNbr);

   
    if(data.gender == "Male"){
        $( "#disabledradios-0" ).prop( "checked", true );
    } else {
        $( "#disabledradios-1" ).prop( "checked", true );
    }
}





$(document).ready(function() {
    
    // When login button is pressed
    $("#loginSubmit").click(function(){
        var myEmail = $('#myemail').val();
        var myPassword =  $('#mypassword').val();
        var userExists = false;
        var crntUser = {};


        var myEmailAdmin = $('#myemail').val();
        var myPasswordAdmin =  $('#mypassword').val();
        var adminExists = false;
        var crntAdmin = {};

        //Get all users
        $.ajax({
            url: "http://192.168.40.50:8080/Testicon-Backend/api/users/"
             //url: "http://localhost:8080/Testicon-Backend/api/users/"
        }).then(function(data, status, jqxhr) {
            
            
            // Loop through all users and check with entered email and password
            $.each( data, function( intValue, currentUser ) {
                
                if(myEmail == currentUser.email && myPassword == currentUser.password){
                    userExists = true;
                    crntUser = currentUser;
                    return false;
                }
          
            });
        
            if(userExists){                         
                alert("Welcome ");
                //converts the object to JSON string
                crntUser = JSON.stringify(crntUser);
                
      
                //creates a base-64 encoded ASCII string
                crntUser = btoa(crntUser);
                                
                
                //save the encoded user to cookie
                $.cookie('cookieUser', crntUser);
               

                $.cookie('cookieLogginStatus', 'true');

                
                //Go to my page
                window.location.href = 'my-page.html';     
            }
                  
        });


        //Get all admins
        $.ajax({
            url: "http://192.168.40.50:8080/Testicon-Backend/api/admins/"
             
        }).then(function(data, status, jqxhr) {
            
            
            // Loop through all users and check with entered email and password
            $.each( data, function( intValue, currentAdmin ) {
                
                if(myEmailAdmin == currentAdmin.email && myPasswordAdmin == currentAdmin.password){
                    adminExists = true;
                    crntAdmin = currentAdmin;
                    return false;
                }
          
            });
        
            if(adminExists){                         
                alert("Welcome ");
           
                var adminName = crntAdmin.firstName + " " + crntAdmin.lastName;                
                

                //save admin name to cookie
                $.cookie('cookieadmin', adminName,  { path: '/' } );
               

                //Go to admin page
                window.location.href = '../admin-panel/index.html';
                
            }

        
           
        });

 
       
               
    }); 

    // Log out
    $("#logout").click(function(){
        $.removeCookie('cookieUser');
        $("#navMyPage").hide();
        $.cookie('cookieLogginStatus', 'false');

        window.location.href = 'index.html';
    });
});


