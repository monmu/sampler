let ultimBoto;
for (let i= 1; i<17; i++) {
    document.getElementById("sonido"+i).src = "audio/"+i+".mp3"; 
    document.getElementById("musica"+i).load(); 
}

function botoSo(numBoto){
    ultimBoto = numBoto;
    let musica = document.getElementById("musica"+numBoto);
    console.log(musica);
    if (musica.paused) {
            musica.play();
            document.getElementById("boto"+numBoto).style.boxShadow = "inset 0 0 5px 5px rgba(255,255,255, 0.3)";
        }else {
            musica.pause();
            document.getElementById("boto"+numBoto).style.boxShadow = "";
        }
        document.getElementById("sliderVol").oninput = canviaVolum;
        document.getElementById("musica"+numBoto).volume;
}

function canviaVolum(){
        document.getElementById("musica"+ultimBoto).volume =
        document.getElementById("sliderVol").value;
}

document.getElementById("sliderPos").oninput = canviaTemps;
    
function canviaTemps(){
        document.getElementById("musica"+ultimBoto).currentTime =
        document.getElementById("sliderPos").value;
}
    
document.getElementById("sliderVolg").oninput = canviaVolumg;
function canviaVolumg(){
    for (let i= 1; i<17; i++) {
        document.getElementById("musica"+i).volume =
        document.getElementById("sliderVolg").value;
    }
}

document.getElementById("loop").onclick = repetirMusica;
function repetirMusica(){
    document.getElementById("musica"+ultimBoto).loop = 
    !document.getElementById("musica"+ultimBoto).loop;
    
}
    