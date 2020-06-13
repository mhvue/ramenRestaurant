//contact modal 
$("#contactBtn").on("click", function () {
    $("#contactModal").modal("toggle");

});


const ramenMenu = {
    ramenOne: ["1", "Miso Ramen", "<img src='./assets/images/ramen1.jpg'>", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.","<p id='price1'> 12.99 </p>", "<button class='orderBtn' id= '1'>Order</button>"],
    ramenTwo: ["2", "Spicy Ramen", "<img src='./assets/images/ramen2.jpg'>", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "<p id='price2'> 13.99 </p>", "<button class='orderBtn'  id= '2'>Order</button>"],
    ramenThree: ["3", "House Ramen", "<img src='./assets/images/ramen3.jpg'>", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "<p id='price3'> 14.99 </p>", "<button class='orderBtn'  id= '3'>Order</button>"],
    ramenFour: ["4", "Supreme Ramen", "<img src='./assets/images/ramen4.jpg'>", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.","<p id='price4'> 12.99 </p>", "<button class='orderBtn' id= '4'>Order</button>"],
    ramenFive: ["5", "Normal Ramen", "<img src='./assets/images/ramen5.jpg'>", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "<p id='price5'> 11.99 </p>", "<button class='orderBtn' id= '5'>Order</button>"]
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

//credit below to https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php
    total = priceArr.reduce(function(a, b){
        return a + b;
    },0);

    $("#totalHere").html("Total: " + total)
    $("#orderModal").modal("toggle");
    
});


