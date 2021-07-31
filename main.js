names=[];
function submit() {
 var display_names = [];
 for (var j=1; j<=4; j++) {
    var name = document.getElementById("name"+j).value; 
    names.push(name);
 }
 var len =names.length;
 for (var k=0; k<len; k++){
     display_names.push("<h4> NAME- "+ names[k] + "</h4>");
 }

document.getElementById("display_name_with_commas").innerHTML=  display_names;
var remove_comma= display_names.join(" ")
document.getElementById("display_name_without_commas").innerHTML=  remove_comma;
document.getElementById("submit_btn").style.display="none";
document.getElementById("sort_btn").style.display= "inline-block";
}

function sorting() {
    names.sort();
    var display_sort=[];
    for (var a=0; a<len; a++){
        display_sort.push("<h4> NAME- "+ names[k] + "</h4>");
    }
    var remove_comma= display_sort.join(" ");
    
    document.getElementById("display_name_without_commas").innerHTML=  remove_comma;
}