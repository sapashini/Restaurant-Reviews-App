// Using normal event listener to listen on the service worker itself, using “self”.

// Cache an array of files names to be use later.
const cacheFiles = [
	'/',
	'/index.html',
	'restaurant.html',
	'/css/styles.css',
	'/css/responsive.css',
	'/js/dbhelper.js',
	'/js/main.js',
	'/js/restaurant_info.js',
	'/data/restaurants.json',
	'/img/1.jpg',
	'/img/2.jpg',
	'/img/3.jpg',
	'/img/4.jpg',
	'/img/5.jpg',
	'/img/6.jpg',
	'/img/7.jpg',
	'/img/8.jpg',
	'/img/9.jpg',
	'/img/10.jpg'
];
const cacheName = "Restaurant Reviews App " +  "v1";

// Call install event for sw and for caches of assets.
self.addEventListener('install', evt => {
  // The 'waitUntil' method ensures the installation event is complete.
  evt.waitUntil(
  		caches
  		.open(cacheName)
  		.then(cache => {
  			return cache.addAll(cacheFiles);
  		})
  	);
});

// Call Activate event for sw to get rid of unwanted caches.
self.addEventListener('activate', evt => {
	// Delete unwanted caches.
  	evt.waitUntil(
  		caches.keys().then(cacheNames => {
  			return Promise.all(
  				cacheNames.map(cache => {
  					if (cache !== cacheName) {
  						console.log("Deleting oldcaches!");
  						return caches.delete(cache);
  					}
  				})
  			);
  		})
  	);

});

// Next,we listen for the 'fetch' event.
self.addEventListener('fetch', evt => {
// Using the 'respondWith' method,we prevent the default fetch event and provide it a promise.
	evt.respondWith(
		// Using the match method, we can check if the event request url already exists 
		//within the cache we got earlier.
		caches.match(evt.request).then(response =>{
			if(response) {
				console.log('There is',evt.request, ' in cache');
				return response;
			}else {
				console.log('No', evt.request, ' in cache, FETCHING!');
				return fetch(evt.request)
				.then(response => {
					// Clone a copy of the response for later use.
					const responseCopy = response.clone();
					caches.open(cacheName)
					.then(cache => {
						cache.put(evt.request, responseCopy);
					});
					return response;
				})
			}

		})
	);

});
