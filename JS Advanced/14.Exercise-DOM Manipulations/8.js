function encodeAndDecodeMessages() {
    
    let sendAndEncodeMsq = document.getElementsByTagName('button')[0]
    let decodeAndReadMsq = document.getElementsByTagName('button')[1]

    let sendTxtArea = document.getElementsByTagName('textarea')[0];
    let decodeTxtArea = document.getElementsByTagName('textarea')[1];

    sendAndEncodeMsq.addEventListener('click', function () {

        let input = sendTxtArea.value;
        let encodeMsq = '';

        for (let index = 0; index < input.length; index++) {

            encodeMsq += String.fromCharCode(input[index].charCodeAt(0)+1);
        }
       

        decodeTxtArea.value = encodeMsq;
        sendTxtArea.value = "";
    });

    decodeAndReadMsq.addEventListener('click', ()=> {
        let input = decodeTxtArea.value;
        let temp ='';

        for (let index = 0; index < input.length; index++) {

            temp +=String.fromCharCode(input[index].charCodeAt(0)-1);
        }
        decodeTxtArea.value = temp;
        
    })
}