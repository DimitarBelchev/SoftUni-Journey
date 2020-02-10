function solve() {
    let [nameEl, quantEl, priceEl] = Array.from(document.querySelectorAll('#add-new [type=text]'));
    let [filterBut, addBut, buyBut] = Array.from(document.querySelectorAll('button'));
    let sectProductsEl = Array.from(document.querySelectorAll("#products ul"))[0];
    let myProductsEl = Array.from(document.querySelectorAll("#myProducts ul"))[0];
    let totalPriceElem = document.getElementsByTagName('h1')[1];
    let totalPrice = 0;
    let filtEl = document.getElementById('filter');
  
    addBut.addEventListener('click', function (even) {
       even.preventDefault()
  
       let name = nameEl.value;
       let quantity = Number(quantEl.value);
       let price = Number(priceEl.value);
  
       if (name !== '' && quantity > 0 && price > 0) {
          let liEl = document.createElement('li');
          let spanEl = document.createElement('span');
          let strongEl = document.createElement('strong');
          let divEl = document.createElement('div');
          let strong2El = document.createElement('strong');
          let butEl = document.createElement('button');
          butEl.addEventListener('click', function (even) {
             even.preventDefault();
             totalPrice += Number(even.target.previousElementSibling.textContent);
             totalPriceElem.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
             if (quantity >= 1) {
                even.target.parentElement.parentElement.getElementsByTagName('strong')[0].textContent = `Available: ${--quantity}`;
                let liElem = document.createElement('li');
                let strongElem = document.createElement('strong');
                liElem.textContent = name;
                strongElem.textContent = price.toFixed(2);
                liElem.appendChild(strongElem);
                myProductsEl.appendChild(liElem);
  
             } 
             
             if (quantity===0) {
                let thisEl = even.target.parentElement.parentElement;
                sectProductsEl.removeChild(thisEl);
             }
          })
          spanEl.textContent = name;
          strongEl.textContent = `Available: ${quantity}`;
          strong2El.textContent = price.toFixed(2);
          butEl.textContent = `Add to Client's List`;
  
         divEl.appendChild(strong2El);
         divEl.appendChild(butEl);
         liEl.appendChild(spanEl);
         liEl.appendChild(strongEl);
         liEl.appendChild(divEl);
  
         sectProductsEl.appendChild(liEl)
      }
  
      filterBut.addEventListener('click', function (even) {
         even.preventDefault();
         let filter = filtEl.value;
         Array.from(sectProductsEl.querySelectorAll('li')).forEach(el => {
            if (!el.firstChild.textContent.toLowerCase().includes(filter.toLowerCase()) && filter !== '') {
               el.style.display = 'none';
            } else {
               el.style.display = 'block';
            }
            if (filter === '') {
               el.style.display = 'block';
            }
         });
      });
   });
  
   buyBut.addEventListener('click', function (even) {
      even.preventDefault();
      while (myProductsEl.hasChildNodes()) {
         myProductsEl.removeChild(myProductsEl.firstChild);
      }
      totalPriceElem.textContent = `Total Price: 0.00`;
      totalPrice = 0;
  
   });
 }