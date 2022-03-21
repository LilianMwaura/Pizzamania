var price, crust_price, topping_price;
let total = 0;
function Getpizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}
// proceed to the next step button
$(document).ready(function () {
    $("button.proceed").click(function (event) {
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function () {
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));

        if( psize == "large"){
            price = 1200;
            console.log("The price is Ksh." +price);
          }
          else if( psize == "medium"){
            price = 850;
            console.log("The price is Ksh." +price);
          }
          else if( psize == "small"){
            price = 600;
            console.log("The price is Ksh." +price);
          }
          else{
            price = 0;
          }
        switch (pcrust) {
            case "0":
                crust_price = 0;
                break;
            case "Crispy":
                crust_price = 200;
                break;
            case "Stuffed":
                crust_price = 250;
                break;
            case "Gluten-free":
                crust_price = 180;
                break;
            default:
                console.log("No price");
        }
        let topping_value = ptopping.length * 50;
        console.log("toppins value" + topping_value);
