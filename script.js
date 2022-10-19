const menuItems = ["Ramen,5.20", "Tea,2.00", "Coffee,3.50"];
var order = [];
function add(item) {
    order.push(item);
    edit("items",getMenuFormat()+"Order Price: "+orderCost()+"<br>CurrentItems: "+orderList());
}
function getCost(string) {
    return string.split(',')[1];
}
function getName(string) {
    return string.split(',')[0];
}
function getFormat(string) {
    return getName(string) + ": $" + getCost(string);
}
function getMenuFormat() {
    var string = "";
    for(let i=0; i<menuItems.length; i++) {
        string += i+") "+ getFormat(menuItems[i])+"<br>";
    }
    return string;
}
function edit(id,string) {
    document.getElementById(id).innerHTML = string;
}
function orderCost() {
    var cost = 0;
    array1.forEach(element => cost += getCost(element));
    return cost;
}
function orderList() {
    var name = "";
    array1.forEach(element => name += getName(element)+", ");
    return name;
}
function addUpdate(item) {
    add(item);
    edit(getMenuFormat()+"Order Price: "+orderCost()+"<br>CurrentItems: "+orderList());
}