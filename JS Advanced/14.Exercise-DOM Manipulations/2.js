function addItem() {

    debugger
        let itemText = document.getElementById('newItemText');
        let itemValue = document.getElementById('newItemValue');
        let select = document.getElementById('menu');
    debugger
        let options = document.createElement('option');
        options.value = itemValue.value;
        options.textContent = itemText.value;
    
        select.appendChild(options);
        itemText.value = '';
        itemValue.value='';
    
    }