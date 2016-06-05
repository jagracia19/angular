(function(){
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };

  });

  app.controller("ReviewController", function(){
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
      name: 'Azurite',
      price: 2.95,
      description: '. . . ',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'image/azurite-01-full.jpg',
          thumb: 'image/azurite-01-thumb.jpg'
        },
        {
          full: 'image/azurite-02-full.jpg',
          thumb: 'image/azurite-02-thumb.jpg'
        }
      ],
      reviews: [
        {
          starts: 5,
          body: "I love this product!",
          author: "joe@thomas.com",
        },
        {
          starts: 1,
          body: "This product sucks",
          author: "tim@hater.com",
        }
      ],
    },
    {
      name: 'Bloodstone',
      price: 5.95,
      description: '. . . ',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'image/bloodstone-01-full.jpg',
          thumb: 'image/bloodstone-01-thumb.jpg'
        }
      ],
    },
    {
      name: 'Zircon',
      price: 3.95,
      description: '. . . ',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'image/zircon-01-full.jpg',
          thumb: 'image/zircon-01-thumb.jpg'
        },
        {
          full: 'image/zircon-02-full.jpg',
          thumb: 'image/zircon-02-thumb.jpg'
        }
      ],
    }
  ];
})();
