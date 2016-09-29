loadData();

// Load user data from index page and show bookings in the table
function loadData() {
    
    // Read cookie
    var crntUser = $.cookie('cookieUser');

  
  
    //decodes a string data encoded using base-64
    crntUser = atob(crntUser);
    
    //parses to Object the JSON string
    crntUser = JSON.parse(crntUser);
    
    // Show user name
    var name = crntUser.firstName + " " + crntUser.lastName;
    $('#userName').text(name);

    // Show bookings in the table
    showBookings(crntUser);

    // Show personal information in account setttings
    showAccountInformation(crntUser);

    return true;
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


// Show bookings in the table
function showBookings(data){

    $.each( data.bookings, function( intValue, currentBooking ) {
        // Do work with currentBooking
          
        var paymentStatus = ((currentBooking.paid == 1) ? 'Paid' : 'Not paid');
        var rowHTML =   '<tr>' +  
                            '<td>' + currentBooking.provider.company + '</td>' +
                            '<td>' + currentBooking.provider.id.orgNbr + '</td>' +
                            '<td>' + currentBooking.test.name + '</td>' +
                            '<td>' + currentBooking.startTime + '</td>' +
                            '<td>' + currentBooking.testCenter.city + '</td>' +
                            '<td>' + paymentStatus + '</td>' +
                            '<td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-sm" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p></td>' +
                            '<td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-sm" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>' +      
                            '<td><button class="btn btn-sm btn-primary" data-toggle="tooltip" title="Pay Now">Pay Now</button></td>' +
						  '</tr>';

        $('#bookingsTable').append(rowHTML);                  

    })
}




