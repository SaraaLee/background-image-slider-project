/* 1. Asocia dos eventos __click__ a cada uno de los botones. Comprueba que funciona correctamente haciendo un simple console.log cuando 
hagas clic en cada uno de ellos.

2. Fíjate que el nombre de las imágenes está en una posición del array, pero estas, se encuentran dentro de la carpeta **img**. ¿Cómo vas a conseguir el string que representa la URL hacia la imagen correcta? Pon por console.log, la ruta URL a la imagen que corresponde a la posición 0 del array.

3. Muestra la imagen de la posición 0 del array como fondo del contenedor del __slider__

4. Cada vez que hagas clic en el botón derecho, debes incrementar en uno el índice del array, y actualizar la foto de fondo del contenedor.
Hay que hacer algo similar para el botón izquierdo.
5. En algún momento, vas a llegar a la posición **pictures.length-1**. Pero la posición  **pictures.length** no existe! ¿Qué debemos hacer?

### BONUS
1. Crea una función que te devuelva la ruta URL a la siguiente imagen a mostrar, en función de la posición del array.
2. Parametriza la carpeta donde se encuentran las imágenes. Es decir, crea una variable global que albergue la carpeta donde se ubican
todas las imágenes; y úsala en tu código. */


const pictures = [
  "renault",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
  "contBcg-5"
];

//variable fuera funcion, variable de estado,  nos indicara la posi 

let currentPic = 0

//1. primero, pongo por ejemplo por CSS la primera foto como imagen de fondo del contenedor, hecho!
//2. Cuando haces click en el botón de la derecha, debes sumar 1 a la variable currentPic; y reculacular la foto de fondo, estableciendola como propiedad en línea a través de style.backgroundImage


// buena suerte

// LA URL ./img/contBcg-[i].jpeg


//1. asociar evento click a los botones

let btnLeft = document.querySelector(".btn-left");
btnLeft.addEventListener("click", function (event) {
  //console.log("he hecho click"); FUNCIONA
currentPic--;
if(currentPic == -1){
  currentPic = pictures.length - 1; // con esto podemos añadir mas fotos fjsifjskf
}
//crear nueva string con URL de las siguientes pics y meterlo en el dom de .img-container
let urlPrev = `url(../img/${pictures[currentPic]}.jpeg)`;


document.querySelector(".img-container").style.backgroundImage = urlPrev;

});

let btnRight = document.querySelector(".btn-right");
btnRight.addEventListener("click", function (event) {
  //console.log("he hecho click en el derecho"); FUNCIONA
  currentPic++;
  if(currentPic == pictures.length){
    currentPic = 0;
  }
  //crear nueva string con URL de las siguientes pics y meterlo en el dom de .img-container
  let urlNext = `url(../img/${pictures[currentPic]}.jpeg)`;
  document.querySelector(".img-container").style.backgroundImage = urlNext;
});

