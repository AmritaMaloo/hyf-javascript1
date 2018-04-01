function runCode14() {
    function foo (func) {
        // What to do here? 
        alert("I am a function which has a function  argument (func) inside, that is  " + func);
        func();
            
    }

    function bar () {
        var add1 = 4 + 5;
        alert('Hello, I am bar!');
    }

    foo(bar);
}