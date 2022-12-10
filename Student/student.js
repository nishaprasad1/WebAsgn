var array = [];
function myFunction(){
    console.log(document.getElementById('x1'));

    var roll=document.getElementById('x1').value;
    var name=document.getElementById('x2').value;
    var age=document.getElementById('x3').value;

    // console.log(roll, name, age);
    // console.log(typeof roll, typeof name, typeof age);
    var obj = {
        r: roll,
        n: name,
        a: age
    }
    array.push(obj);
    console.log(array);

    if(roll==""||name==""||age=="")
    {
        alert("Please pass all values")
    }
    else
    {
        r=parseInt(roll);
    
        a=parseInt(age);

        var x='';
        // for (var i = 1; i<= r; i++)
        {
            x=x + `
                <tr>
                    <td>${r}</td>
                    <td>${name}</td>
                    <td>${a}</td>
                   
                </tr>
            `    
        }
        console.log(x);
        console.log(document.getElementById("result"));
        document.getElementById("result").innerHTML=x;
    }
}

function myPrintFn(){

    var x='';
    for (var i = 0; i < array.length; ++i) {
      
        console.log(i);
        x = x + `
            <tr>
            <td>${array[i].r}</td>
            <td>${array[i].n}</td>
            <td>${array[i].a}</td>
            </tr>
            `


        console.log(x);
        document.getElementById('result').innerHTML = x;
    }
}