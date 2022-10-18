const menu = ["Ramen,5.20", "Tea,2.00", "Coffee,3.50"];
var order = [];
function add(var item) {
    order.push(item);
}
function getCost(var string) {
    var i=0;
    for(i; string[i]==","; i++);
    return parseInt(string.subString(i+1));
}
function getName() {
    var i=0;
    for(i; string[i]==","; i++);
    return string.subString(0,i);
}
function getFormat(var string) {
    return getName(string) + ": $" + getCost(string);
}
function getMenuFormat() {
    var string = "";
    for(let i=0; i<menu.length; i++) {
        menu += getFormat(menu[i])+"<br>";
    }
}
function edit(var id,var string) {
    document.getElementById(id).innerHTML = string;
}
edit("menu",getMenuFormat())