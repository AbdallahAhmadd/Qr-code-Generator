document.getElementById('getStartedBtn').addEventListener('click', function() {
   document.getElementById('wireframe1').style.display = 'none';
   document.getElementById('wireframe2').style.display = 'block';

});

document.getElementById('generateBtn').addEventListener('click', function() {
    var input = document.getElementById('urlInput').value;
    qrcode.src= 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+input;
    document.getElementById('main-box_qrcode').style.display = 'flex';
});

document.getElementById('cross-label').addEventListener('click', function() {
    var urlInput = document.getElementById('urlInput')
    urlInput.value = '';
    urlInput.focus();
});
