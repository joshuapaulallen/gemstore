(function() {
	var app = angular.module('store-products', []);

	app.directive('productTitle', function() {
		return {
			restrict : 'E', // E for Element, as opposed to A for attribute
			templateUrl : 'product-title.html'
		};
	});
	
	app.directive('productPanels', function() {
		return {
			restrict : 'E', // E for Element
			templateUrl : 'product-panels.html',
			controller : function() {
				this.tab = 1;

				this.setTab = function(newTab) {
					this.tab = newTab;
				};
				this.isSelected = function(tab) {
					return this.tab === tab;
				}
			},
			controllerAs : 'panels'
		};
	});

	app.directive('productDescription', function() {
		return {
			restrict : 'E', // E for Element
			templateUrl : 'product-description.html'
		};
	});

	app.directive('productSpecs', function() {
		return {
			restrict : 'A', // A for Attribute
			templateUrl : 'product-specs.html'
		};
	});
})();