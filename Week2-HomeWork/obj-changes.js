function runCode16() {

    var o1 = { foo: 'bar' };
    var o2 = { foo: 'bar' };
    var o3 = o2;
    


/*Show that changing `o2` changes `o3` (or not) and changing ~~`o2` changes `o3.
*/


objectpass(o2, o3);

    function objectpass(op2, op3) {
        var propValue1;
        var propValue2;
        var array_op2 = [];
        var array_op3 = [];
        for(var propName1 in op2) {
            propValue1 =  op2[propName1];
            array_op2.push([propName1, propValue1], "\n");
        }
        for(var propName2 in op3) {
            propValue2 = op3[propName2];
            array_op3.push([propName2, propValue2], "\n");
        }

        alert("first object  is " + "\n" + array_op2 + "\n" + "second is  O3 is" + "\n" + array_op3);
        

    }
       

    var onemore = prompt("enter one more property e.g. 'flowername' to o2");
    o2.flower = onemore;
    objectpass(o2, o3);

    
   o2.flower = prompt("Let's change the value of flower e.g.", 7);
  
   objectpass(o2, o3);
   alert("rightnow the type of Flower in o2 and o3 is respectively:  " + typeof (o2.flower) + " " + typeof (o3.flower));

  
   o2.flower = Number(o2.flower);
   alert("after changing the type of flower in O2 'Number' the type of Flower in o2 and o3 is respectively:  " + typeof (o2.flower) + " " + typeof (o3.flower));
   objectpass(o2, o3);


   /*Show that `~~ `o1` changes `o3`(or not)*/
   delete o3.flower;

   objectpass(o1, o3);
   o1.agree = prompt("Let's add one more property 'agree' in o1", 1);
   objectpass(o1, o3);

   /*Does the order that you assign (`o3 = o2` or `o2 = o3`) matter? {Jim Cramer: ???}*/

   alert("Let's change the object O2 and show O2, O3,  while O3 = O2");
   o2.string1 = 'laptop';
   o2.string2 = 'mobile';
   objectpass(o2, o3);
   alert("Let's change the object O3 and show O2,O3,  while O3 = O2");
   delete o3.string1;
   objectpass(o2, o3);
   alert("Let's change the object O2 and show O2,O3,  while O2 = O3");
   o2 = o3;
   objectpass(o2, o3);
   delete o2.string2;
   o2.string3 = 'Newlaptop';
   o2.string4 = 'Newmobile';
   objectpass(o2, o3);
   


         
    
   
    


   
   

   



}