const sides = document.querySelectorAll(".adjsides");
const btnHypo = document.querySelector("#btn-hypo");
const ansHypo = document.querySelector("#output");




function SqureofTwoSides(sideA, sideB) {


   const sum = sideA * sideA + sideB * sideB;
   return sum;
}




function Hypotenuse() {
   const a = Number(sides[0].value);
   const b = Number(sides[1].value);
   if ((a <= 0) || (b <= 0)) {
      ansHypo.innerText = "INVALID INPUT";
   } else {



      const sum = SqureofTwoSides(a, b);
      const resultHypo = Math.sqrt(sum);
      ansHypo.innerText = "The hypotenuse of the triangle is " + resultHypo;
   }
}
btnHypo.addEventListener("click", Hypotenuse)