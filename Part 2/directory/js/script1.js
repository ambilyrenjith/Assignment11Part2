
$(document).ready(function () {
    $("#mySearch").keypress(function(e) {
        var v = callMeOnKeyPress(e.key);
    });
});



function callMeOnKeyPress(inputData) {
    var matchedRecords = [];

    $.getJSON('data/employee.json', 
              
        function (dataset) {

            $.each(dataset, function() {
                $.each(this, function(key, value) {
                   if ((value.name).toLowerCase().indexOf(inputData) >= 0)
                       {
                           matchedRecords.push(value);
                       }
                });
            });
        
        }).done(function() {
            console.log("success");
            var v = matchedRecords;
         });
}

