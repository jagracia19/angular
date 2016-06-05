(function(){
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
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
