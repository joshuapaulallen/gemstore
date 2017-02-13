(function() {
	// register store module, with no dependencies
	var app = angular.module('store', ['store-products']);

	// register a controller
	app.controller('StoreController', [ '$http', '$log', function($http, $log) {
		this.products = gems;
		// or, we could fetch the data from an API using the $http service:
		// var store = this;
		// store.products = [];
		// $http({ method : 'GET', url: '/products.json'})
		//		.success(function(data) {
		//			store.products = data;		
		//		});
	}]);


	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			// add a timestamp
			this.review.createdOn = Date.now();
			// add the review to the product
			product.reviews.push(this.review);
			// reset the form
			this.review = {};
		};
	});
	
	// some sample data
	var gems = [
		{
			name : 'Dodecahedron',
			price : 2.0,
			description : 'Purty gem.',
			canPurchase : false,
			soldOut : true,
			description : 'Dodecahedron description.',
			shine : 4,
			faces : 5,
			rarity : 100,
			color : 'red',
			reviews : [
				{
					stars: 3,
					body: 'Totally a review.',
					author: 'josh',
					createdOn: Date.now()
				}
			]
		},
		{
			name : 'Sapphire',
			price : 3.95,
			description : 'Purty blue gem.',
			canPurchase : false,
			soldOut : false,
			description : 'Sapphire description.',
			shine : 40,
			faces : 4,
			rarity : 10,
			color : 'blue',
			reviews : []
		}
	];
})();