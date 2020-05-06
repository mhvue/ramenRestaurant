//contact modal 
$("#contactBtn").on("click", function(){
    $("#contactModal").modal("toggle");

});

//make it so each button's value is grabbed individually to orderHolder
$("#orderOne").on("click", function(){
    console.log($("#btnData").parent().find(".name").text());
});



