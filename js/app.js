//contact modal 
$("#contactBtn").on("click", function () {
    $("#contactModal").modal("toggle");

});

$("#ourStoryP").hide();

$("#mainInfo").on("click", function(){
    $("#ourStoryP").fadeIn("slow");
    $("#ourStoryHeader").hide();
});



const ramenName = {
    miso: "Miso Ramen",
    spicy: "Spicy Ramen",
    house: "House Ramen",
    supreme: "Supreme Ramen",
    normal: "Normal Ramen"
}

const ramenImg ={
    miso:"<img src='./assets/images/ramen1.jpg' alt='ramen with greens'>",
    spicy: "<img src='./assets/images/ramen2.jpg' alt='ramen with egg and naruto'>",
    house: "<img src='./assets/images/ramen3.jpg' alt= 'ramen with egg and pork'>",
    supreme: "<img src='./assets/images/ramen4.jpg' alt='ramen with beef'>",
    normal:  "<img src='./assets/images/ramen5.jpg' alt='ramen with red sauce'>"
}



const ramenInfo={
    miso: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spicy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    house: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    supreme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    normal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}

const ramenPrice = {
    miso: "<p id='price1'> 12.99 </p>",
    spicy: "<p id='price2'> 13.99 </p>",
    house: "<p id='price3'> 14.99 </p>",
    supreme: "<p id='price4'> 12.99 </p>",
    normal: "<p id='price5'> 11.99 </p>"
}

const orderButton ={
    miso: "<button class='orderBtn' id= '1'>Order</button>",
    spicy: "<button class='orderBtn'  id= '2'>Order</button>",
    house: "<button class='orderBtn'  id= '3'>Order</button>",
    supreme: "<button class='orderBtn' id= '4'>Order</button>",
    normal: "<button class='orderBtn' id= '5'>Order</button>"
}

const ramenMenu = {
    ramenOne: ["1", ramenName.miso, ramenImg.miso, ramenInfo.miso, ramenPrice.miso, orderButton.miso],
    ramenTwo: ["2", ramenName.spicy, ramenImg.spicy, ramenInfo.spicy, ramenPrice.spicy, orderButton.spicy],
    ramenThree: ["3", ramenName.house, ramenImg.house , ramenInfo.house, ramenPrice.house, orderButton.house],
    ramenFour: ["4", ramenName.supreme, ramenImg.supreme, ramenInfo.supreme, ramenPrice.supreme, orderButton.supreme],
    ramenFive: ["5", ramenName.normal, ramenImg.normal, ramenInfo.normal, ramenPrice.normal, orderButton.normal]
}


for (let i = 0; i < 7; i++) {

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
    console.log(getInfo)
    const getPrice= $(this).parent().parent().find("p").text()
    // $(".modal-body").append("<br>").append("#", getInfo, "-", getPrice, "<button class='deleteOrder'+ id ='deleteBtn" + getInfo +"'>" + "X</button>", "<br>");
    $(".modal-body").append("<br>").append("#", getInfo, "-", getPrice, "<button class='deleteOrder'+ id ='deleteBtn" + getInfo +"'>" + "X</button>", "<br>");

    priceArr.push(parseFloat(getPrice))

//credit below to https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php
    total = priceArr.reduce(function(a, b){
        return a + b;
    },0);

    $("#totalHere").html("Total: " + total)
    $("#orderModal").modal("toggle");

    //include option to clear the order  and/or delete an item ---still in progress---
    $("#deleteBtn" + getInfo).on("click", function(){
        $(".modal-body").remove("<p>");
    })
});


