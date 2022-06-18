const sides = document.querySelectorAll(".adjsides");
const btnHypo = document.querySelector("#btn-hypo");
const ansHypo = document.querySelector("#output");


function SqureofTwoSides(sideA,sideB){
    const sum= sideA*sideA + sideB*sideB;
    return sum;

}

function Hypotenuse(){
   const sum = SqureofTwoSides(Number(sides[0].value),Number(sides[1].value));
   const resultHypo = Math.sqrt(sum);
//    console.log(resultHypo)
   ansHypo.innerText = "The hypotenuse of the triangle is "+ resultHypo; 
}

btnHypo.addEventListener("click",Hypotenuse)