$(document).ready(function(){

      /*----------------------Cambiar background cada 4 seg------------------------------------*/

      //cambiar la imagen de fondo  SOLO SI ES MAYOR DE 640PX, si es menor no cambia
      /*Sacamos el ancho de la ventana:*/
       var ventana_ancho = $(window).width();
       /*####DUDA PARA MARÍA####
        me funciona pero no, si es menor de 640 no cambia de imagen si cargamos la ventana ya siendo pequeña, como la carguemos siendo
        grande me dice que me peine. Me lo hace a la inversa también.
       */
       console.log(ventana_ancho)
       if(ventana_ancho >= 640){
           //creamos un contador para indicar la posición del array de imagenes
          var i = 0;
          //creamos un array que contendrá todas las imágenes que queramos mostrar
          var arrayImagenes =[
            'img/pic2.png',
            'img/pic1.png',
            'img/pic3.png'
          ];

          //Hacemos una función 'setInterval' que nos permitirá ejecutar algo en un tiempo x.
          setInterval(function(){
            i++;
            if(i === arrayImagenes.length){ //si el contador es igual a la longitud del array, quiere decir que hemos recorrido
             //todo el array, por lo que lo pondremos a 0
                 i = 0;
             }
            
            $(".pagina1").css("background-image", "url("+arrayImagenes[i]+")"); //cambiamos el fondo cada 4 segundos
      
        }, 4000)

       }
     
      

      /*-----Menú desplegable--*/
     

        $('.hamburger').click(function() {
        $('.hamburger').toggleClass('is-active');
        $('.menuppal').toggleClass('is-active');
        });


    /*------------------------Cambiar el fondo de las diferentes ventanas--------------------------------*/
    //Cuando seleccionemos la página "Galería" nos cambiará el background
    $('#paginaExplorar').on("click", function(){
        $("body").css("background-color", "white");
        $("body").css("background-image", "url(img/concrete-wall.png)");
    })

  

    /*--------loading------*/
    $(window).on('load', function() { // makes sure the whole site is loaded 
      $('#status').fadeOut(); // will first fade out the loading animation 
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
      $('body').delay(350).css({'overflow':'visible'});
    })
    /*----------------------*/

      /*---------#####################################PÁGINA 2###########################################------------*/
      var cantidad = $('.divPadre').scrollLeft();
      $('#prueba').mouseover(function(){
        
        if($('.divPadre').scrollLeft() < 2000){
          cantidad = cantidad+550;
          //$('.divPadre').scrollLeft(cantidad)
          $('.divPadre').animate({
            scrollLeft: cantidad
          }, 1000)
        }
      })

      $('#prueba2').mouseover(function(){
        
        if($('.divPadre').scrollLeft() > 0){
          cantidad = cantidad-550;
          //$('.divPadre').scrollLeft(cantidad)
          $('.divPadre').animate({
            scrollLeft: cantidad
          }, 1000)
        }
      })

      /*---Sacar principio y final de la página---*/
      /*var rigthPagina = $(window).offset().right;
      console.log(rigthPagina)*/
     
      /*-----------------########## PÁGINA 3 ##########----------------*/

      /*Función que al hacer click en el botón nos va a cambiar el fondo de patalla y los elementos de la ventana*/
      var y = 0;
      var arrayFondoPaginas =[
        'img/pic2.png',
         'img/pic1.png',
          'img/pic3.png'
      ];
      $('#siguienteEvento').click(function(){
        i++;
        if(i === arrayImagenes.length){ //si el contador es igual a la longitud del array, quiere decir que hemos recorrido
         //todo el array, por lo que lo pondremos a 0
             i = 0;
         }
        
        $(".pagina3").css("background-image", "url("+arrayImagenes[i]+")"); //cambiamos el fondo
  
      })

  })