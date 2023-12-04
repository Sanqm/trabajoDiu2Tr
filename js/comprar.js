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