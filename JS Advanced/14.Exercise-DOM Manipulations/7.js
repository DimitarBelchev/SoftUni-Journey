function lockedProfile() {

    let btn = [...document.getElementsByTagName('button')];
   // debugger

    btn.forEach(b => b.addEventListener('click', action));

    function action(event) {
        let button = event.target;
        let profile = button.parentNode;
        
        let moreInf = profile.getElementsByTagName('div')[0];
        //debugger
        let infFromRadioBtn = profile.querySelector('input[type="radio"]:checked').value;
        console.log(infFromRadioBtn)

        if (infFromRadioBtn === 'unlock') {
            if (button.textContent === 'Show more') {
                
            moreInf.style.display = 'inline-block';
            button.textContent = 'Hide it';
            }else if (button.textContent === 'Hide it') {
                moreInf.style.display = 'none';
                button.textContent = 'Show more';
            }
        }

        

    }
    //console.log('TODO...')
}