
// Para que funciona la geolocalizacion el usuario debe permitir que la página obtenga la ubicación
// De lo contrario aparecerá un error en el mapa.
var map, infoWindow, ub1, ub2, ub3;
function initMap() {


  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 12
  });
  infoWindow = new google.maps.InfoWindow;

  coordenadas = [
    {
      lat:4.678565,
      lng:-74.143951
    },
    {
      lat:4.692594, 
      lng:-74.098804
    },
    {
      lat:4.687120, 
      lng:-74.093825
    },{
      lat:4.644175, 
      lng:-74.076488
    }

  ];
  coordenadas.forEach(element => {
    new google.maps.Marker({
      position:{
        lat: element.lat,
        lng: element.lng
      },
      map:map
    })
    
  });

  // geolocalización.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Tu ubicación');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

//Formularios eventos

(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function () {
  $("#myBtn").click(function () {
    $("#myModal").modal();
  });
});
//logica de envio de formulario
/*
(function () {
  emailjs.init("user_fnVkaXo5VBJwdSA6NIas7");
})();
const vue = new Vue({
  el: '#app',
  data() {
    return {
      from_name: '',
      from_email: '',
      message: '',
      subject: '',
    }
  },
  methods: {
    enviar() {
      let data = {
        from_name: this.from_name,
        from_email: this.from_email,
        message: this.message,
        subject: this.subject,
      };

      emailjs.send("user_fnVkaXo5VBJwdSA6NIas7", "formulario_de_contacto", data)
        .then(function (response) {
          if (response.text === 'OK') {
            alert('El correo se ha enviado de forma exitosa');
          }
          console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        }, function (err) {
          alert('Ocurrió un problema al enviar el correo');
          console.log("FAILED. error=", err);
        });
    }
  }
});*/



$.ajax({
  url: "https://www.datos.gov.co/resource/xdk5-pm3f.json",
  type: "GET",
  data: {
    "$limit" : 5000,
    "$$app_token" : "0HLLaz2pxnN9qrQienvqxY1wp"
  }
}).done(function(data) {
alert("Retrieved " + data.length + " records from the dataset!");
console.log(data);

});