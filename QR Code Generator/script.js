const form = document.querySelector('.form-control')
const qr = document.getElementById('qrcode')


function onGenerate(e){
    e.preventDefault();

    clearUI();
   
    const url = document.querySelector('.input').value;
    console.log(url);

    if(url === ''){
        alert('please enter a valid input');
    }else{
        setTimeout(() => {

           generateQRCode(url);

           setTimeout(() => {
            const saveUrl = qr.querySelector('img').src;
            createSaveBtn(saveUrl);
          }, 50);

        }, 1000); 
    }
};

const generateQRCode = (url) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: 300,
        height: 300
    })
}

const clearUI = () => {
    qr.innerHTML = '';
    
    const saveBtn = document.getElementById('save-link');
    if (saveBtn) {
      saveBtn.remove();
    }
}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.style.cssText = "    width: 300px; height: 60px; background: #407bff; font-size: 1.3rem; font-weight: 600; border: none; outline: none; border-radius: .3rem; font-family: 'Comfortaa', cursive; cursor: pointer; transition: ease .50s; margin-bottom: 2rem; margin-top: 2rem; color: #fff; text-decoration: none; text-align: center; justify-content: center; align-items: center; display: flex;"
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
  };


form.addEventListener('submit', onGenerate);