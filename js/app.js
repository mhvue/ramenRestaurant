//contact modal 
$("#contactBtn").on("click", function () {
    $("#contactModal").modal("toggle");

});


const ramenMenu = {
    ramenOne: ["1", "Miso Ramen", "pic", "afjakakjal", 12.99,"<button id= '1'>Order</button>"],
    ramenTwo: ["2", "Spicy Ramen", "pic", "afjakakjal", 13.99, "<button id= '2'>Order</button>"],
    ramenThree: ["3", "House Ramen", "pic", "afjakakjal", 14.99, "<button id= '3'>Order</button>"],
    ramenFour: ["4", "Supreme Ramen", "pic", "afjakakjal", 15.99, "<button id= '4'>Order</button>"],
    ramenFive: ["5", "Normal Ramen", "pic", "afjakakjal", 12.99, "<button id= '5'>Order</button>"]
}

for (let i = 0; i < 6; i++) {

    const menuRow =
        $("#dataRow1").append(
            $("<td>").append(ramenMenu.ramenOne[i])
        )
    const menuRowTwo =
        $("#dataRow2").append(
            $("<td>").append(ramenMenu.ramenTwo[i])
        )
    const menuRowThree =
        $("#dataRow3").append(
            $("<td>").append(ramenMenu.ramenThree[i])
        )
    const menuRowFour=
        $("#dataRow4").append(
            $("<td>").append(ramenMenu.ramenFour[i])
        )
    const menuRowFive=
        $("#dataRow5").append(
            $("<td>").append(ramenMenu.ramenFive[i])
        )

    $(".menuTable").append(menuRow, menuRowTwo, menuRowThree, menuRowFour, menuRowFive);

}


//make it so each button's value is grabbed individually to orderHolder
$("button").on("click", function () {
    //console.log("click")
    //console.log(this)
    const getInfo = $(this).attr("id")
    $(".modal-body").append("<br>").append( getInfo)
    $("#orderModal").modal("toggle");
    console.log(getInfo)
  
});