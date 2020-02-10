function solve() {
   let nameinput = document.querySelector("#add-new > input[type=text]:nth-child(2)");
   let quantityinput = document.querySelector("#add-new > input[type=text]:nth-child(3)");
   let priceinput = document.querySelector("#add-new > input[type=text]:nth-child(4)");
   let firstloction = document.querySelector("#products > ul")
   let totalprice = document.querySelector("body > h1:nth-child(4)");
   let profit = 0;
   let filterpole = document.querySelector("#filter");


   let buybuton; document.querySelector("#myProducts > button")
   let filterbuton = document.querySelector("#products > div > button")
   let addbuton = document.querySelector("#add-new > button");
   addbuton.addEventListener('click', e => {
      e.preventDefault();
      let name = nameinput.value;
      let quantity = Number(quantityinput.value);
      let price = Number(priceinput.value);

      if (!name==""&& quantity > 0 && price > 0) {
         let newItem = document.createElement('div');
         newItem.classList.add('filter');

         let li = document.createElement('li');
         let span = document.createElement('span');
         span.textContent = `${name}`;
         let hone = document.createElement('h1');
         let sectioneOne = document.querySelector("#products")
         let htwo = document.createElement("h2")
         let ul = document.createElement("ul")
         let strong = document.createElement('strong');
         strong.textContent = `Available: ${3}`;
         let divedno = document.createElement('div');
         let strongdve = document.createElement('strong');
         strongdve.textContent = `${price.toFixed(2)}`
         let addbutondve = document.createElement('button');

         addbutondve.textContent = `Add to Client's List`;
         addbutondve.addEventListener('click', e => buyBook(e.target.parentNode));
      
         
         newItem.appendChild(span)
         newItem.appendChild(strong)
         
         newItem.appendChild(strongdve)
         newItem.appendChild(addbutondve);


         firstloction.appendChild(newItem);

      }

   });

   function buyBook(name) {
      const buyBtn = name.childNodes[3];
      let price = getPriceFromButton(buyBtn);
      profit += price;

      totalprice.textContent = `Total Price: ${profit.toFixed(2)} BGN`

      name.remove();
   }
   // function getPriceFromButton(btn) {
   //    return Number(btn.textContent.match(/Buy it only for (.*) BGN/)[1]);
   // }
   //ToDO...
}