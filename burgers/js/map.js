  ymaps.ready(init);
    var myMap;

    function init() {
      myMap = new ymaps.Map("map", {
          center: [59.941341, 30.303828],
          zoom: 11,
          controls: []
      });

      var coords = [
            
          [59.971300, 30.310008],
          [59.945130, 30.390345],
          [59.909630, 30.499522],
          [59.888243, 30.319621]
          
          
      ],
          myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -52]
          });

      for (var i = 0; i < coords.length; i++) {
          myCollection.add(new ymaps.Placemark(coords[i]));
      }

      myMap.geoObjects.add(myCollection);

      myMap.behaviors.disable(['scrollZoom']);
    }