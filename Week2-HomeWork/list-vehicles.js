function runCode7() {
    var listVehicle = ['motorbike', 'car', 'bike', 'caravan'];
    /*listVehicle.push('motorbike', 'car', 'bike', 'caravan');*/
    alert("the list of vehicle \n"  + listVehicle);
    return listVehicle;
}

/* Getting the third Element of the list"*/
function runCode8() {
   list = runCode7();
    
    alert('the third element of the list is \n'  + list[2]);
}

/* Change the function vehicle to use the list of question 4. So that vehicle("green", 3, 1) prints "a green new caravan".*/

function runCode9() {
    list1 = runCode7();
    var color3, age3, code3;
    color3 = prompt("Enter the color you like");
    code3 = prompt("Enter the code  ( 0 to 3) from  the list");
    age3 =  prompt("Enter the age in years");

    vehicle(color3, code3, age3);

    function vehicle(color3, code3, age3) {

        if(age3 <= "4") 
            alert("a" + " " + color3 + " " + "new" + " " + list1[code3]);
        else
            alert("a" + " " + color3 + " " + "old" + " " + list1[code3]);

    }
}
/*Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)*/

function runCode10() {
          
        list2 = runCode7();
        advertisement(list2);
}

function advertisement(listad) {

    var ad_list = [];
    var i;
    for(i = 0; i < (listad.length-2); i++) {

        ad_list.push(listad[i]);

    }


    ad_list.push(listad[i] + " " + "and" + " " + listad[i + 1]);

    alert("Amazing Joe's Garage, we service" + " " + ad_list);

}



function runCode11() {

/*What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 7?*/
    list3 = runCode7();
    var e1 = prompt("Add one more type of vehicle to the Vehiclelist");
    list3.push(e1);
    advertisement(list3);
    
    
}




    

