function toggle() {

    // debugger
     const element = document.getElementById('extra');
     let button = document.querySelector('.button');
 
     if(element.style.display === 'none'){
         element.style.display = 'block';
         button.textContent = 'Less'
     }else{
         button.textContent = 'More';
         element.style.display ='none';
     }
 }