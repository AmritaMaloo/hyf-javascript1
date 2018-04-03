function runCode1() {
    var a, b, c;
    a = prompt("Enter value one ");
    b = prompt("Enter value 2" );
    c = prompt("Enter value 3");
    var total = sum (a, b, c);
    alert(total);

    function sum (a, b, c) {

        return (+a + +b + +c);
    }

}

