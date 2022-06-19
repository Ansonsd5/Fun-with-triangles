const hightandBase  = document.querySelectorAll('.hightBase');
const btnArea = document.querySelector('#btn-area');
const outputDiv = document.querySelector('#output');

function AreaofTriangle(height,base){
    const area = .5*height*base;
    return area;
}

function CalculateArea(){
    const area = AreaofTriangle(Number(hightandBase[0].value),Number(hightandBase[1].value))
    outputDiv.innerHTML ="The Area of Triangle is "+area;
}



btnArea.addEventListener("click",CalculateArea)