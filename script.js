const QRText = document.querySelector('#QRText');
const QRImg = document.querySelector('#QRImg');
const container = document.querySelector('.container');


function GenerateQR(){
     if (QRText.value === ''){
        alert("Invalid Text !")
     }
     else{
        QRImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + QRText.value;
        container.classList.add('showIMG')
     }

}