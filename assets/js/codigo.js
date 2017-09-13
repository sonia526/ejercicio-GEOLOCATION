function initMap() {
  //Creando un nuevo mapa
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {lat: -9.1191427, lng: -77.0349046},
    mapTypeControl:false,
    zoomControl: false,
    streetViewControl:false
  });
  
  //API Geolocalización
  function buscar(){
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }
  }
  
  //Añadiendo el evento click al boton buscar
  document.getElementById("encuentrame").addEventListener("click",buscar);
  
  var latitud,longitud;
  
  //Función que se ejecutará en caso se obtenga los datos del usuario
  var funcionExito = function(posicion) {
    //Mi ubicación
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;
    
    //Creando nuevo marcador de mi ubicación
    var miUbicacion = new google.maps.Marker({
      position: {lat:latitud, lng:longitud},
      animation: google.maps.Animation.DROP,
      map: map
    });
    
    //Centrando y acercando mapa
    map.setZoom(17);
    map.setCenter({lat:latitud, lng:longitud});
  }
  //Esta función se ejecutará en el caso haya un fallo al encontrar nuestra ubicación
  var funcionError = function (error) {
    alert("Tenemos un problema con encontrar tu ubicación");
  }
}
    // va la seccion  dos del hacker
      var inputPartida = document.getElementById("punto-partida");
      var inputDestino = document.getElementById("punto-destino");

      new google.maps.places.Autocomplete(inputPartida);
      new google.maps.places.Autocomplete(inputDestino);
    var directionsService = new google.maps.DirectionsService;
    var directionsDisDisplay = new google.maps.DirectionsRenderer;

    var calculateAndDisplayRoute= function(directionsService,directionsDisDisplay){
      directionsService.route({
        origin: inputPartida.value,
        destination: inputDestino.value,
        travelMode:'DRIVING'
      }, function(response, status){
        if (status === 'OK'){
          directionsDisDisplay.setDirection(reponse);

        }else{
          window.alert("No encontramos una ruta.");
         }
      });
    }
    directionsDisDisplay.setMap(map);

     var trazarRuta = function(){
      calculateAndDisplayRoute(directionsService, directionsDisDisplay);
     };
     document.getElementById("traza-ruta").addEventListener("click",trazarRuta);