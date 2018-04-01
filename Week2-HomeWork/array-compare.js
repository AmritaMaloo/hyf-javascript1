function runCode15() {
    var x = [1, 2, 3];
    var y = [1, 2, 3];
    var z = y;

    /*x == y, x === y and z == y and z == x? */

    var is_same =  arrayCompare(x, y);
    alert("Arrays x and y are " + is_same);
    var is_same1 = arrayCompare2(x, y);
    alert("Arrays x and y are strictly " + is_same1);
    var is_same2 = arrayCompare(z, y);
    alert("Arrays z and y are " + is_same2);
    var is_same3 = arrayCompare(z, x);
    alert("Arrays z and x are " + is_same3);

    function arrayCompare(lox, loy) {
        if(lox.length == loy.length) {
            for (var i = 0; i < lox.length; i++) {

                if(lox[i] == loy[i])   {
                continue;
                } else {
                    return false;
                    break;
                }
                            
            }
            return true;
        

        } else {
            return false;
        }

    

    }

    function arrayCompare2(lox1, loy1) {

        if(lox1.length == loy1.length) {
            for (var j = 0; j < lox1.length; j++) {

                if(lox1[j] === loy1[j])   {
                    continue;
                } else {
                    return false;
                    break;
                }
                        
            }
            return true;


        } else {
        return false;
        }
    }
}