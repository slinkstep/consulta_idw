var btns = [];
var secciones = [seccion1,seccion2,seccion3,seccion4,seccion5,seccion6,seccion7,seccion8];

window.onload = inicio;

function inicio() {

  iniciarvariables();
  asignareventos();


}

function iniciarvariables() {

  btns.push(document.getElementById("btn_1"));
  btns.push(document.getElementById("btn_2"));
  btns.push(document.getElementById("btn_3"));
  btns.push(document.getElementById("btn_4"));
  btns.push(document.getElementById("btn_5"));
  btns.push(document.getElementById("btn_6"));
  btns.push(document.getElementById("btn_7"));
  btns.push(document.getElementById("btncerrar"));


}

function asignareventos() {

  for (const key in btns) {

    btns[key].addEventListener("click", procesareventoclick);

  }

}

function procesareventoclick(event) {

  if(event.target.id!="btncerrar"){

  for (const key in secciones) {


  secciones[key].className="ocultar";
  }

}

  switch (event.target.id){

  case "btn_1":

  seccion1.className="sectionbox animated zoomIn"

  break;

  case "btn_2":

  seccion2.className="sectionbox animated zoomIn"
  break;

  case "btn_3":

  seccion3.className="sectionbox animated zoomIn"


  break;

  case "btn_4":

  seccion4.className="sectionbox animated zoomIn"


  break;

  case "btn_5":
  seccion5.className="sectionbox animated zoomIn"


  break;

  case "btn_6":
  seccion6.className="sectionbox animated zoomIn"


  break;

  case "btn_7":
  seccion7.className="sectionbox animated zoomIn"


  break;

  case "btncerrar":
  lightbox.className="ocultar"


  break;



  }


}
