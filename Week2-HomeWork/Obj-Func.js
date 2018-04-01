function runCode3() {
    var employee = {
        name: prompt("Enter the name of the employee"),
        age: prompt("Enter age"),
        Qualification: prompt("Enter Qualification / Degree"),
        work_ex: prompt("Enter the years of Work Experience")
        
    };
    employee_details(employee);

    function employee_details(details) {
        var propValue;
        var array_obj = [];
        for(var propName in details) {
            propValue =  details[propName];
            array_obj.push([propName, propValue], "\n");
        }
    
        alert(array_obj);
        
    
    }
}





    