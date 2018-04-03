function runCode18() {
    var string1 = prompt("Enter a string");
    echoString(string1);

    function echoString(str1) {

        var echoarray = [];
        
        var j = 0;

        for( var i = 0; i < str1.length ; i++ ) {
            
            echoarray.push(str1.substring(i));
            echoarray.push("\n");
                

                
        }

        alert(echoarray);
        

    }
}