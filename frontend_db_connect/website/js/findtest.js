
var tests = [];

$(document).ready(function () {

    // Fill list with providers

    $('#selectedTestDetails').hide();
    $('#paymentTable').hide();
    
    
    //Get all tests
    $.ajax({
        url: "http://192.168.40.50:8080/Testicon-Backend/api/tests/"
        //url: "http://localhost:8080/Testicon-Backend/api/users/"
    }).then(function (data, status, jqxhr) {

        $.each(data, function (intValue, currentTest) {
            
            tests.push(currentTest);
          
            var testStatus = ((currentTest.active == 1) ? 'Available' : 'Not Available');

            testName = currentTest.name;
            testId = currentTest.testId;
            testCenterName = ""; //getTestcenterName(currentTest);
            testCenterLocation = "";    
            providerName = currentTest.provider.company;
            testDate = "";
            testTime = "";
           

            
           
                
            var rowHTML =   '<tr id=' +  testId + '>' +  
                                '<td>' + testName + '</td>' +
                                '<td>' + testId + '</td>' +
                                '<td>' + testCenterName + '</td>' +
                                '<td>' + testCenterLocation + '</td>' +
                                '<td id="provderId">' + providerName + '</td>' +
                                '<td>' + testDate + '</td>' +
                                '<td>' + testTime + '</td>' +
                                '<td>' + testStatus + '</td>' +
                            '</tr>';

            $('#allTests').append(rowHTML);


            var htmlProviders =   '<option value="' + (intValue + 1) + ' " >' + providerName + '</option>' ;

            $('#selectbasic').append(htmlProviders);

        });         

    });

});

/*
// Select provider and show all test beloning to the provider
$(document).ready(function(){
    $('#selectbasic').change(function() {
    
    var provider = $("#selectbasic option:selected").text();


  });  
});
*/


/*
$('#selectbasic').change( function(e) { 
   var letter = $("#selectbasic option:selected").text();;
     if (letter === 'ALL') {
         $ ('#allTests tr').show ();
     }
     else {
         $('#allTests tr').each( function(rowIdx,tr) {
             $(this).hide().find('td').each( function(idx, td) {
                 if( idx === 0 || idx === 1) {
                     var check = $(this).text();
                     if (check && check.indexOf(letter) == 0) {
                         $(tr).show();
                     }
                 }
             });             

         });
     }             
 });
*/

/*
$("#selectbasic").change(function(){

    $("#allTests").find("tr").each(function(){
        
        if($(this).text() != $("#selectbasic option:selected").text()) $(this).hide();
        else $(this).show();
    });
});
*/




$(document).on("click", "#allTests tr", function(e) {
    $('#selectedTestDetails').show(); 
     $('#paymentTable').show();  
    
    var id = $(this).attr('id');

    $.each(tests, function (intValue, currentTest) {
            if(currentTest.testId == id){
                
                var testName = currentTest.name;
                var testId = currentTest.testId;
                var testCenterName = "";
                var testLocation = "";
                var testDate = "";
                var testStartTime = "";
                var testDuration = currentTest.duration;
                var testProvider = currentTest.provider.company;
                var testDetails = currentTest.about;
                var testPrice = currentTest.price;


                $('#testName').text(testName);
                $('#testId').text(testId);
                $('#testCenterName').text(testCenterName);
                $('#testLocation').text(testLocation);
                $('#testDate').text(testDate);
                $('#testStartTime').text(testStartTime);
                $('#testDuration').text(testDuration);
                $('#testProvider').text(testProvider);
                $('#testDetails').text(testDetails);
                $('#testPrice').text(testPrice);
                $('#totalPrice').text(testPrice);
     
            }

    });


}); 

   




