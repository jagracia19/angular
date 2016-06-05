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
    },
    {
      name: 'Bloodstone',
      price: 5.95,
      description: '. . . ',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: 'Zircon',
      price: 3.95,
      description: '. . . ',
      canPurchase: true,
      soldOut: false,
    }
  ];
})();
