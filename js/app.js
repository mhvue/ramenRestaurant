//contact modal 
$("#contactBtn").on("click", function () {
    $("#contactModal").modal("toggle");

});


const ramenMenu = {
    ramenOne: ["1", "Miso Ramen", "pic", "afjakakjal", 12.99],
    ramenTwo: ["2", "Spicy Ramen", "pic", "afjakakjal", 13.99],
    ramenThree: ["3", "House Ramen", "pic", "afjakakjal", 14.99],
    ramenFour: ["4", "Supreme Ramen", "pic", "afjakakjal", 15.99],
    ramenFive: ["5", "Normal Ramen", "pic", "afjakakjal", 12.99],
}

for (let i = 0; i < 10; i++) {

    const menuRow =
        $("#dataRow1").append(
            $("<td>").text(ramenMenu.ramenOne[i])
        )
    const menuRowTwo =
        $("#dataRow2").append(
            $("<td>").text(ramenMenu.ramenTwo[i])
        )
    const menuRowThree =
        $("#dataRow3").append(
            $("<td>").text(ramenMenu.ramenThree[i])
        )
    const menuRowFour=
        $("#dataRow4").append(
            $("<td>").text(ramenMenu.ramenFour[i])
        )
    const menuRowFive=
    $("#dataRow5").append(
        $("<td>").text(ramenMenu.ramenFive[i])
    )


    $(".menuTable").append(menuRow, menuRowTwo, menuRowThree, menuRowFour, menuRowFive);


}





//make it so each button's value is grabbed individually to orderHolder
$(document.body).on("click", ".orderBtn", function () {
    console.log("click")

    // $(".orderHolder").append(name + price);
});