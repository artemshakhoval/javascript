$(document).ready(function () {     
    $("input[name=send]").click(function() { 
    let action = $("select[name=action]").val(); 
    
    let firstNumber = $("input[name=first]").val() * 1; 
    
    let secondNumber = $("input[name=second]").val() * 1; 
    
    let result; 
    
    if (action == '+') { 
        result = firstNumber + secondNumber; 
    } else if (action == '-'){ 
        result = firstNumber - secondNumber; 
    } else if (action == '*'){ 
        result = firstNumber * secondNumber; 
    } else if (action == '/'){ 
        result = firstNumber / secondNumber; 
    }
    $("input[name=result]").val(result); 
    });
});  