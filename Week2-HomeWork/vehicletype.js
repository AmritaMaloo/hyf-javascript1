function runCode4() {
    var color1, code1;
    color1 = prompt("Enter the color you like");
    code1 = prompt("Enter the code either 1 or 2");

    vehicleType(color1, code1);

    function vehicleType( color1, code1) {

        switch(code1) {
            case "1" :
                alert("a" + " " + color1 + " " + "car");
                break;
            case "2" :
                alert("a" + " " + color1 + " " + "motorbike");
                break;
                
        }
    }
}