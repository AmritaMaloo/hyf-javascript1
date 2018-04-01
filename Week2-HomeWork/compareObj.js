function runCode13() {
    var obj1 = {
        a: 1,
        b: "this is the letter b",
        c: {
          foo: "what is a foo anyway",
          bar: [1, 2, 3, 4]
        }
      };
      
      var obj2 = {
        a: "1",
        b: "this is the letter b",
        c: {
          foo: "what is a foo anyway",
          bar: [1, 2, 3, 4]
        }
      };

      
    Object.is = function (ob1, ob2) {
    
        for (var p in ob1) {
            
            if (ob1.hasOwnProperty(p) !== ob2.hasOwnProperty(p)) return false;
        
            switch (typeof (ob1[p])) {
                
                case 'object':
                    if (!Object.is(ob1[p], ob2[p])) return false;
                    break;
                
                default:
                    if (ob1[p] != ob2[p]) return false;
                    
                    
            }
        }
        
        for (var p in ob2) {
            if (typeof (ob1[p]) == 'undefined') return false;
        }
    return true;
    }

    alert("The two objects are " + (Object.is(obj1, obj2)));  

    
    
}