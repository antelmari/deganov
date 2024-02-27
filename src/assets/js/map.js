$(document).ready(function () {
	function initYmap(coord, id, headerText, bodyText, captionText) {
		let balloonParams = {}
		if (headerText !== '' || bodyText !== '' || captionText !== '') {
			balloonParams = {
				balloonContentHeader: headerText,
				balloonContentBody: bodyText,
				iconCaption: captionText
			}
		}
		currentMap = new ymaps.Map(id, {
			center: coord,
			zoom: 16,
			controls: ['zoomControl']
		}, {
			searchControlProvider: 'yandex#search',
			suppressMapOpenBlock: true // убрать все лишние кнопки с карты
		})
		let pl = new ymaps.Placemark(coord);
		currentMap.geoObjects.add(pl);
		ymapsTouchScroll(currentMap, { preventScroll: true, preventTouch: true });
	}
	
	let maps = document.querySelectorAll('.js-map')
	if(maps.length) {
		maps.forEach(map => {
			if(map.id !== '') {
				ymaps.ready(function() {
						coordArr = map.dataset.coord.split(',').map(item => +item.trim())
						initYmap(coordArr, map.id, map.dataset.balloonTitle, map.dataset.balloonBody, map.dataset.balloonCaption)
					}
				)
			} else {
				console.warn('Задайте ID для контейнера карты!')
			}
		})
	}
})