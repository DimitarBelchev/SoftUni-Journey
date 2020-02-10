function create(words) {


    let container = document.getElementById('content');
 
    for(let word of words){
 
       let divEle = document.createElement('div');
       let pEle = document.createElement('p');
 
       pEle.textContent = word;
       pEle.style.display = 'none';
 
       divEle.appendChild(pEle);
 
       divEle.addEventListener('click', function () {
          pEle.style.display = 'inline-block';
       });
 
       divEle.addEventListener('dbclick', function () {
          pEle.style.color = "red";
       })
       container.appendChild(divEle);
    }
 
 }