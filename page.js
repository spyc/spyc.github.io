'use strict';
!function () {
  /* globals fetch */
  fetch('/sites.json')
    .then(function (response) {
      return response.json();
    })
    .then(function processData(data) {
      var total = data.length;
      var current = 0;
      var done = function done() {
        current += 1;
        if (current >= total) {
          document.getElementById('progress').style.display = 'none';
        }
      };
      for (var i = 0; i < total; i++) {
        createElement(data[i].name, data[i].description, done);
      }
    });

  function createElement(name, description, callback) {
    var element = document.createElement('a');
    element.setAttribute('href', location.protocol + '//' + location.hostname + '/' + name);
    element.innerText = description;
    element.setAttribute('class', 'link');
    document.getElementById('list').appendChild(element);
    callback();
  }
}();