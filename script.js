function calculate(event){
    event.preventDefault();
    let value1 = parseFloat(document.getElementById("Value1").value);
    let value2 = parseFloat(document.getElementById("Value2").value);
    let operation = document.getElementById("Case").value;
    let result;

    switch (operation) {
        case "1":
            result = value1 + value2;
            break;
        case "2":
            if(value1 > value2){
                result = value1 - value2;
            }
            else{
                result =  value2 - value1;
            }
            break;
        case "3":
            result = value1*value2;
            break;
        case "4":
            if(value2 == 0){
                result = "Undefined";
            }
            else{
                result = value1 / value2;
            }
            break;
        default:
            result = "Invalid Selection";
            break;
    }
    document.getElementById("result").innerText = "Result: " + result;
}