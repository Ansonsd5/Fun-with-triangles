const formInput = document.querySelector(".quiz-form");
const btnSubmit = document.querySelector("#btn-submit");

const result =  document.querySelector("#output");

const correctAnswers = ["180°","Acute","Equilateral"]; 

function CalculateScore(){
   
    let score =0;
    let index= 0;

    const userOption = new FormData(formInput);
    // for (let entry of userOption.entries()){
    //     console.log(entry)
   
    for (let value of userOption.values())
    
        {
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index+1;
        }
        result.innerHTML = "Your Score is " + score;
}


btnSubmit.addEventListener('click',CalculateScore)
