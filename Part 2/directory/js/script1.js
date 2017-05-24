

$(document).ready(function () {
    
    $("#mySearch").keypress(function(e) {
        $("h1").hide();
        $("#container p").hide();
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
            
            $("#container").append('<ul id="list" data-role="listview"></ul>');
                
                for(var i=0;i<matchedRecords.length;i++)
                 {    
                    $("#list")
                        .append("<li><img src=" + matchedRecords[i].ImagePath +">" +matchedRecords[i].name+"<li>");
                        /*.append("<li>" + matchedRecords[i].title + "</li>")
                        .append("<li>" + matchedRecords[i].name + "</li>");
                      */
        
                    $("#list").listview();
                 }
          
           /* $("#list" '<li>').append("<li><img src=" + matchedRecords[0].ImagePath +"> +"+ matchedRecords[0].title+matchedRecords[0].name +" <li>");
            $("#list").listview();
        
        */
        });
}
     
    
        
        


   	
    





