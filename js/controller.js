'use strict';

// the storeController contains two objects:
// - store: contains the product list
// - cart: the shopping cart object
function storeController($scope, $routeParams,$location, DataService) {



$scope.greeting='Halo, Ich ist coding!';

  // create a message to display in our view
  $scope.$on('$routeChangeSuccess', function() {
    var path = $location.path();
    console.log(path);

    //variables

  $scope.title = '';
  if (path === '/') {
      $scope.title = 'MeLinked';
    } else if (path === '/outlet') {
     $scope.title = 'Outlet';
   } else if (path === '/category') {
       $scope.title = 'Categories';
   } else if (path === '/cart') {
       $scope.title = 'Cart';
   } else{
       $scope.title = 'Item Description';
   }


  $scope.searchVisible = false;
    if(path === '/outlet') {
       $scope.searchVisible = true;
     }

  $scope.cartVisible = true;
       if(path === '/') {
          $scope.cartVisible = false;
        } /*else if (path === '/cart') {
            $scope.cartVisible = true;
        }else if (path === '/category') {
            $scope.cartVisible = true;
        } else if (path === '/products') {
            $scope.cartVisible = true;
        }*/

    $scope.carouselHome = false;
            if(path === '/') {
               $scope.carouselHome = true;
             }
    $scope.carouselOutlet = false;
          if(path === '/outlet') {
                        $scope.carouselOutlet = true;
        }


  //var search = angular.element( document.querySelector( '#search' ) );
  //search.remove();
});



    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // use routing to pick the selected product
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}
