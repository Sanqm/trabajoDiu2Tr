var mostrar = true;
function showTable(){
  if((mostrar)){
    document.getElementById("tprecios").style.display = "block";
    mostrar= false;
  }else{
    document.getElementById("tprecios").style.display = "none";
    mostrar=true;
  }
}


var mhistoria = true;
var parrafos =  document.getElementsByClassName('poculto');
function showH(){
  if (mhistoria) {

    for (var i = 0; i < parrafos.length; i++) {
      parrafos[i].style.display = "block";
    }
    mhistoria = false;
  }else{
    for (var i = 0; i < parrafos.length; i++) {
      parrafos[i].style.display = "none";
    }
    mhistoria = true;
  }
}

var mhistoriaB = true;
var parrafosB =  document.getElementsByClassName('pocultoB');
function showHB(){
  if (mhistoriaB) {

    for (var i = 0; i < parrafosB.length; i++) {
      parrafosB[i].style.display = "block";
    }
    mhistoriaB = false;
  }else{
    for (var i = 0; i < parrafosB.length; i++) {
      parrafosB[i].style.display = "none";
    }
    mhistoriaB = true;
  }
}