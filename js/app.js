//contact modal 
$("#contactBtn").on("click", function () {
    $("#contactModal").modal("toggle");

});


const ramenMenu = {
    ramenOne: ["1", "Miso Ramen", "pic", "afjakakjal","<p id='price1'> 12.99 </p>", "<button class='orderBtn' id= '1'>Order</button>"],
    ramenTwo: ["2", "Spicy Ramen", "pic", "afjakakjal", "<p id='price2'> 13.99 </p>", "<button class='orderBtn'  id= '2'>Order</button>"],
    ramenThree: ["3", "House Ramen", "pic", "afjakakjal", "<p id='price3'> 14.99 </p>", "<button class='orderBtn'  id= '3'>Order</button>"],
    ramenFour: ["4", "Supreme Ramen", "pic", "afjakakjal","<p id='price4'> 12.99 </p>", "<button class='orderBtn' id= '4'>Order</button>"],
    ramenFive: ["5", "Normal Ramen", "pic", "afjakakjal", "<p id='price5'> 11.99 </p>", "<button class='orderBtn' id= '5'>Order</button>"]
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

const priceArr = []
let total;
$(".orderBtn").on("click", function () {
    const getInfo = $(this).attr("id");
    const getPrice= $(this).parent().parent().find("p").text()
    
  
    $(".modal-body").append("<br>").append(getInfo, "-", getPrice);
   
    priceArr.push(parseInt(getPrice))
    console.log(priceArr)


    total = priceArr.reduce(function(a, b){
        return a + b;
    },0);


    $("#totalHere").html(total)
    $("#orderModal").modal("toggle");
    
  
});


//need to add in the ability to add cost of menu item(s) and total it in the modal 