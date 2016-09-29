


// Read admin cookie
var adminName = $.cookie('cookieadmin');


$('#adminName').text(adminName);

 

$(document).ready(function() {


  //Get all providers
  $.ajax({
      url: "http://192.168.40.50:8080/Testicon-Backend/api/providers/"
      //url: "http://localhost:8080/Testicon-Backend/api/users/"
  }).then(function (data, status, jqxhr) {

      $.each(data, function (intValue, currentProvider) {


       

          var rowId = intValue + 1;
          var providerName = currentProvider.company;
          var providerId = currentProvider.id.orgNbr;
          var providerCountry = currentProvider.id.country;
          var providerStatus = " ";
          var providerTeleNbr = currentProvider.teleNbr;
          var providerEmail = currentProvider.email;
          var providerGracePeriod = currentProvider.gracePeriod;


          if (intValue < 4) {
              var rowHTML = '<tr>' +
                  '<td>' + rowId + '</td>' +
                  '<td>' + providerName + '</td>' +
                  '<td>' + providerId + '</td>' +
                  '<td>' + providerCountry + '</td>' +
                  '</tr>';

              $('#providerTable').append(rowHTML);
          }

           var rowHTML =   '<tr>' +
                                    '<td>' + rowId + '</td>' +
                                    '<td>' + providerName + '</td>' +
                                    '<td>' + providerId + '</td>' +
                                    '<td>' + providerCountry + '</td>' +
                                    '<td>' + providerStatus + '</td>' +
                                    '<td>' + providerTeleNbr + '</td>' +
                                    '<td>' + providerEmail + '</td>' +
                                    '<td>' + providerGracePeriod + '</td>' +
                                '</tr>';



          $('#AllTestProviders').append(rowHTML);



      });

  }); // End Ajax call

  //Get all Test Centers
  $.ajax({
      url: "http://192.168.40.50:8080/Testicon-Backend/api/testcenters/"
    
  }).then(function (data, status, jqxhr) {

      $.each(data, function (intValue, currentTestcenter) {
         
         

          var rowId = intValue + 1;
          var centerName = currentTestcenter.company;
          var centerId = currentTestcenter.testCenterId;
          var centerAddress = currentTestcenter.address;
          var centerPostalCode = currentTestcenter.postalCode;
          var centerCity = currentTestcenter.city;
          var centerState = currentTestcenter.stateProvince;
          var centerCountry = currentTestcenter.country;
          var centerStatus = ((currentTestcenter.active == 1) ? 'Open' : 'Closed');
          var centerSeats = currentTestcenter.maxSeats;
          var centerTeleNbr = currentTestcenter.teleNbr;
          var centerEmail = currentTestcenter.email;

          if (intValue < 4) {
              var rowHTML = '<tr>' +
                  '<td>' + rowId + '</td>' +
                  '<td>' + centerName + '</td>' +
                  '<td>' + centerId + '</td>' +
                  '<td>' + centerStatus + '</td>' +
                  '</tr>';

              $('#testCenterTable').append(rowHTML);
          }

          var rowHTML =   '<tr>' +
                                    '<td>' + rowId + '</td>' +
                                    '<td>' + centerName + '</td>' +
                                    '<td>' + centerId + '</td>' +
                                    '<td>' + centerAddress + '</td>' +
                                    '<td>' + centerPostalCode + '</td>' +
                                    '<td>' + centerCity + '</td>' +
                                    '<td>' + centerState + '</td>' +
                                    '<td>' + centerCountry + '</td>' +
                                    '<td>' + centerStatus + '</td>' +
                                    '<td>' + centerSeats + '</td>' +
                                    '<td>' + centerTeleNbr + '</td>' +
                                    '<td>' + centerEmail + '</td>' +
                                '</tr>';

          $('#AlltestCenters').append(rowHTML);

      });

  }); // End Ajax call

 

  //Get all tests
  $.ajax({
      url: "http://192.168.40.50:8080/Testicon-Backend/api/tests/"
      //url: "http://localhost:8080/Testicon-Backend/api/users/"
  }).then(function (data, status, jqxhr) {

      $.each(data, function (intValue, currentTest) {
      

          var rowId = intValue + 1;
          var testProvider = currentTest.provider.company;
          var testProviderCountry = currentTest.provider.id.country;
          var testId = currentTest.testId;
          var testName = currentTest.name;
          var testCenter = "";
          var testStatus = ((currentTest.active == 1) ? 'Available' : 'Not available');
          var testDuration = currentTest.duration;
          var testPrice = currentTest.price;
          var testAbout = currentTest.about;
          var testGracePeriod = currentTest.gracePeriod;
          
          if (intValue < 5) {
              if (testStatus == 'Available') {
                  var rowHTML = '<tr>' +
                      '<td>' + rowId + '</td>' +
                      '<td>' + testName + '</td>' +
                      '<td>' + testId + '</td>' +
                      '<td>' + testProvider + '</td>' +
                      '</tr>';

                  $('#testTable').append(rowHTML);
              }
          }

          var rowHTML =   '<tr>' +
                                    '<td>' + rowId + '</td>' +
                                    '<td>' + testProvider + '</td>' +
                                    '<td>' + testProviderCountry + '</td>' +
                                    '<td>' + testId + '</td>' +
                                    '<td>' + testName + '</td>' +
                                    '<td>' + testCenter + '</td>' +
                                    '<td>' + testStatus + '</td>' +
                                    '<td>' + testDuration + '</td>' +
                                    '<td>' + testPrice + '</td>' +
                                    '<td>' + testAbout + '</td>' +
                                    '<td>' + testGracePeriod + '</td>' +
                                '</tr>';

          $('#AlltestTable').append(rowHTML);


      });

  }); // End Ajax call


  //Get all users
  $.ajax({
      url: "http://192.168.40.50:8080/Testicon-Backend/api/users/"
      //url: "http://localhost:8080/Testicon-Backend/api/users/"
  }).then(function (data, status, jqxhr) {

      $.each(data, function (intValue,currentUser) {


          // Show only 4 items on dashboard
          if(intValue < 4){

              var rowId = intValue + 1;
              var userId = currentUser.userId;
              var userFirstName = currentUser.firstName;
              var userLastName = currentUser.lastName;

              var rowHTML =   '<tr>' +
                                    '<td>' + rowId + '</td>' +
                                    '<td>' + userId + '</td>' +
                                    '<td>' + userFirstName + '</td>' +
                                    '<td>' + userLastName + '</td>' +
                                '</tr>';

              $('#userTable').append(rowHTML);
          }


            var rowId = intValue + 1;
            var userId = currentUser.userId;
            var userFirstName = currentUser.firstName;
            var userLastName = currentUser.lastName;
            var userEmail = currentUser.email;
            var userAddress = currentUser.address;
            var userPostalCode = currentUser.postalCode;
            var userCity = currentUser.city;
            var userState = currentUser.stateProvince;
            var userCountry = currentUser.country;
            var userPersonalNbr = currentUser.persNbr;
            var userGender = currentUser.gender;
            var userTeleNbr = currentUser.teleNbr;
            var userCompany = currentUser.company;

            var rowHTML =   '<tr>' +
                                  '<td>' + rowId + '</td>' +
                                  '<td>' + userId + '</td>' +
                                  '<td>' + userFirstName + '</td>' +
                                  '<td>' + userLastName + '</td>' +
                                  '<td>' + userEmail + '</td>' +
                                  '<td>' + userAddress + '</td>' +
                                  '<td>' + userPostalCode + '</td>' +
                                  '<td>' + userCity + '</td>' +
                                  '<td>' + userState + '</td>' +
                                  '<td>' + userCountry + '</td>' +
                                  '<td>' + userPersonalNbr + '</td>' +
                                  '<td>' + userGender + '</td>' +
                                  '<td>' + userTeleNbr + '</td>' +
                                  '<td>' + userCompany + '</td>' +
                              '</tr>';

            $('#AlluserTable').append(rowHTML);



      });

  }); // End Ajax call



});

