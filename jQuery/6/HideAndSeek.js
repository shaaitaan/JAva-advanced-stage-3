var background = ["yellow", "green", "red", "pink"];

$(document).ready(function () {
    var count = 0;
    $("div").click(function () { 
        $(this).css("background-color", background[count]);
        count++;
    });
});
var stored; 

function detach(){
    if(stored){
        stored.appendTo( "body" ); 
        stored = null;
    }else{
        stored = $("table").detach();
    }
}