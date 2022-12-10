
function myFunction() {
    // alert();
    var noOfDays = document.getElementById('x1').value;
    var noOfPersons = document.getElementById('x2').value;
    var type = document.getElementById('x3').value;

    switch (type) {

        case "Economy":
            var result = noOfDays * noOfPersons * 500;
            break;

        case "Business":
            if(noOfDays > 3)
            {
               var result = ( noOfDays * noOfPersons * 1000 ) - (noOfPersons * 100); 
            }
            else
            {
                var result = noOfDays * noOfPersons * 1000;
            }
            break;

        case "Delux":
            if(noOfDays > 5)
            {
                var result = ( noOfDays * noOfPersons * 2000 ) - (noOfPersons * 250); 
            }
            else
            {
                var result = noOfDays * noOfPersons * 1000;
            }
            break;

        default:
            break;
    }

    document.getElementById('result').innerHTML = 'Total Expenses = &#2352; '+ result;
}