// Funktsioon, mida soovite käivitada nupuvajutuse korral
function minuFunktsioon() {
  // Siin kirjutage oma funktsiooni kood
	var imgElements = document.getElementsByTagName('img');
	var pildid = [];

	for (var i = 0; i < imgElements.length; i++) {
	  var imgSrc = imgElements[i].getAttribute('src');
	  if (imgSrc.includes('.jpg')) {
		pildid.push(imgSrc);
	  }
	}

	// Pildilinkide allalaadimine
	pildid.forEach(function(pildiLink) {
	  fetch(pildiLink)
		.then(function(response) {
		  return response.blob();
		})
		.then(function(blob) {
		  // Looge siin sobiv nimekonventsioon, et iga pilt saaks unikaalse nime
		  var fileName = 'pilt' + Date.now() + '.jpg';

		  // Loo lingi objekt aadressi jaoks
		  var a = document.createElement('a');
		  a.href = URL.createObjectURL(blob);
		  a.download = fileName;

		  // Simuleeri klõpsu allalaadimiseks
		  a.click();

		  // Vabastage ressursid
		  URL.revokeObjectURL(a.href);
		});
	});
}

// Looge nupu elemendi skelett
var button = document.createElement('button');
button.id = 'myButton';
button.innerHTML = 'X';

// Määrake nupule stiilid
button.style.position = 'fixed';
button.style.top = '10px';
button.style.left = '10px';
button.style.backgroundColor = 'yellow';
button.style.borderRadius = '50%';
button.style.zindex = '9999';

// Lisage nupp <body> elemendi sisse
document.body.appendChild(button);

// Hangi viide nupuelemendile
var myButton = document.getElementById('myButton');

// Lisa nupule sündmuste kuulaja
myButton.addEventListener('click', minuFunktsioon);
