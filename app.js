function tablePrint() {
    let num;
    let result = "";
    let num2;

    num = Number(document.getElementById("inputone").value);
    num2 = Number(document.getElementById("inputtwo").value);
    for(let i = 1; i<= num2; i++){

    //   result = result + "<p>"+number + "x" + i + "=" + number * i+"</p>";
    result = (`${result} <p> ${num}   x  ${i}  =  ${num * i} </p>`);
    }

    document.getElementById("result").innerHTML = result;
  }