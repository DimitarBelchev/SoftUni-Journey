function notify(message) {
    console.log('TODO:...');
    
    debugger
    const notification = document.getElementById('notification')

    notification.textContent = message
    notification.style.display ='block'

    setTimeout(() => {
        notification.style.display = 'none'
    }, 2000)



}