
//contact modal 
$("#contactBtn").on("click", function(){
    $("#contactModal").modal("toggle");

});


count = 0
for(var i = 0; i < 6; i++){
    count ++
    var buttonData= $("<button>").text("Order").addClass("orderBtn").attr("id", "ramen" + count)
    

}
$(".btnDataHolder").append(buttonData)



// $(".priceData").append(buttonData)
// var name = $("#btnData" + count).parent().find(".name").text();
// var price = $("#btnData" + count).parent().find("#price").text();

//dynamically adding buttons 

//make it so each button's value is grabbed individually to orderHolder
$(document.body).on("click",".orderBtn", function(){
    
    // $(".orderHolder").append(name + price);
});


