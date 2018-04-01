function runCode6() {
    var color2, code2, age;
    color2 = prompt("Enter the color you like");
    code2 = prompt("Enter the code either 1 or 2");
    age =  prompt("Enter the age in years");

    vehicle(color2, code2, age);

    function vehicle(color2, code2, age) {

        switch(code2) {
            case "1" :
                var checked_age = checkage(age);
                alert("a" + " " + color2 + " " + checked_age + " " + "car");
                break;
            
            case "2" :
                checked_age = checkage(age);
                alert("a" + " " + color2 + " " + checked_age + " " + "motorbike");
                break;
                
        }
    }

    function checkage(age) {
        if(age <= "4") 
            var x1 = 'new';
        else
            x1 = 'old';

        return x1;

    }
}