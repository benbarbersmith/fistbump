function draw(tattoo) {
  for (var i = 0; i < tattoo.length; i++) {
    document.getElementById('finger' + i).innerHTML = tattoo[i];
  }
  document.title = '#fistbump: ' + tattoo;
  location.hash = '#' + tattoo;
}

function randomWord() {
  return words[Math.floor((Math.random() * words.length))];
}

function randomTattoo() {
  return randomWord() + randomWord();
}

function updateTattoo(raw) {
  var newTattoo;
  if (typeof raw === 'string' && raw.length === 9) {
    newTattoo = raw.slice(1);
  } else {
    newTattoo = randomTattoo();
  }
  lastTattoo = '#' + newTattoo;
  draw(newTattoo);
}

var lastTattoo;
window.onload = function (e) {
  window.onload = null;

  document.getElementById('randomize').setAttribute('onclick', 'updateTattoo();');
  updateTattoo(decodeURIComponent(window.location.hash));

  window.addEventListener("hashchange", function (e) {
    var raw = decodeURIComponent(window.location.hash);
    if (raw != lastTattoo) {
      updateTattoo(raw);
    }
  });
}
