$(document).ready(function(){

    //creamos un contador para indicar la posición del array de imagenes
    /*var i = 0;
    //para evitar copiar todo el rato $('#contenidoImagen'), lo guardamos directamente en una variable más cortita
    var idImagen =  $('#contenidoImagen');
    //creamos un array que contendrá todas las imágenes que queramos mostrar
    var arrayImagenes =[
    '<img id="contenidoImagen" src="img/foti1.png">',
    '<img id="contenidoImagen" src="img/foto1.png">'
    
    ];


    //función que nos irá pasando las imágenes del array cada 4 segundos
      setInterval(function(){
          //se desvanecerá en un intervalo de 2 seg y cuando haga esto se ejecutará una función:
        idImagen.fadeOut(2000, function(){
            //incrementamos en 1 el contador de posición de array
           i++;
           if(i === arrayImagenes.length){ //si el contador es igual a la longitud del array, quiere decir que hemos recorrido
           //todo el array, por lo que lo pondremos a 0
               i = 0;
           }
           //reemplazamos la imagen anterior por la siguiente ayudándonos con el array y la posición: ME LO HACE FEO SIN DESVANECER
            $('#contenidoImagen').replaceWith(arrayImagenes[i]);
            //$(this).css('#contenidoImagen', arrayImagenes[i]);
            
        });
        idImagen.fadeIn(1000);
        
      },4000)*/

      /*Cambiar fondo mediante boton*/
      //creamos un contador para indicar la posición del array de imagenes
    var i = 0;
    //para evitar copiar todo el rato $('#contenidoImagen'), lo guardamos directamente en una variable más cortita
    var idImagen =  $('#contenidoImagen');
    //creamos un array que contendrá todas las imágenes que queramos mostrar
    var arrayImagenes =[
    'img/pic2.png',
    'img/pic3.png',
    'img/pic1.png'
    
    ];
      $('#btnCambiaImagen').click(function(){
          i++;
          if(i === arrayImagenes.length){ //si el contador es igual a la longitud del array, quiere decir que hemos recorrido
           //todo el array, por lo que lo pondremos a 0
               i = 0;
           }
          //$("body").css("background-image", "url('img/fotoeditada3_2.png')");
          $("body").css("background-image", "url("+arrayImagenes[i]+")"); //cambiamos el fondo
          /*A su vez vamos a modificar también el cuadro pequeño que contiene la fotografía para que cambie también esta*/
          //$('#miniImg').replaceWith('<img id="miniImg" src='+arrayImagenes[i]+'>');
      })

      /*-----Menú desplegable--*/
     

        $('.hamburger').click(function() {
        $('.hamburger').toggleClass('is-active');
        $('.menuppal').toggleClass('is-active');
        });


    /*Botones para cambiar de página*/
    $('#paginaExplorar').on("click", function(){
        $("body").css("background-color", "white");
        $("body").css("background-image", "url(img/concrete-wall.png)");
    })

      

  })