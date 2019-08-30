
$("form").submit(function(event){
    event.preventDefault();
    var usrIn = $("#input").val();
    $("#result").val(reverseString(usrIn))
})




function reverseString (string) {

    var newString = ""
    
    for (var i = string.length-1 ; i >= 0; i--) {
    
      newString += string[i]
    }
    
    return newString;
    
    
    
    }


