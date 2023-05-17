// Funktsioon, mida soovite käivitada nupuvajutuse korral
function minuFunktsioon() {
  var imgElements = document.getElementsByTagName('img');
  var linkElements = document.getElementsByTagName('a');
  var pildid = [];

  // Koguge kõik <img> elemendi src väärtused
  for (var i = 0; i < imgElements.length; i++) {
    var imgSrc = imgElements[i].getAttribute('src');
    if (imgSrc.includes('.jpg')) {
      pildid.push(imgSrc);
    }
  }

  // Koguge kõik <a> elemendi href väärtused, kui see on '.jpg' pildilink
  for (var j = 0; j < linkElements.length; j++) {
    var linkHref = linkElements[j].getAttribute('href');
    if (linkHref && linkHref.includes('.jpg')) {
      pildid.push(linkHref);
    }
  }

  // Pildilinkide allalaadimine
  pildid.forEach(function(pildiLink) {
    fetch(pildiLink)
      .then(function(response) {
        return response.blob();
      })
      .then(function(blob) {
        var fileName = 'pilt' + Date.now() + '.jpg';
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(a.href);
      });
  });
}

// Ülejäänud kood jääb samaks


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
button.style.cursor = 'pointer';
button.style.zindex = '9999';

// Lisage nupp <body> elemendi sisse
document.body.appendChild(button);

// Hangi viide nupuelemendile
var myButton = document.getElementById('myButton');

// Lisa nupule sündmuste kuulaja
myButton.addEventListener('click', minuFunktsioon);
