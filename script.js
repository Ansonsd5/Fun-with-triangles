const inputs = document.querySelectorAll('.angle-input');
const checkBtn = document.querySelector('#btn-letscheck');
const output = document.querySelector('#output-div');

function calculateSumofAngles(angle1, angle2, angle3){
  const sum = angle1+angle2+angle3;
    if(sum === 180){
        output.innerText= "Its a Triangle";
    }
    else 
    output.innerText = "Its not a triangle";
}

function IsTriangle() {

 const angleSum = calculateSumofAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));



   }

checkBtn.addEventListener('click', IsTriangle)

