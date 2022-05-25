'use strict';
document.getElementById('canvas').style.display ="none";
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');

const constrain = {
    audio :false,
    video: {
        width: 1280, height: 720
    }
};
async function init(){
    try{
        const stream = await
        navigator.mediaDevices.getUserMedia(constrain);
        handleSuccess(Stream);
    }catch(e){
        $("#message").html("Debe seleccionar un dispositivo y permitir el acceso al naegador. Presione F5 o Refresh en el navegador. <br clear= 'all'><br clear= 'all'>")
    }
}

function handleSuccess(stream){
    window.stream = stream;
    video.srcObject = stream;
}


var context = canvas.getContext('2d');