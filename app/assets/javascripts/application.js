// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require_tree .

(function() {
angular.module('app', [])
  .controller('MainController', MainController)
  ;

MainController.$inject = ['$scope', "$interval"];
function MainController($scope, $interval) {
    var vm = this;
    vm.corndog = "Corn-batter-friend meat tube!";
    vm.burrito = burrito;
    vm.addFood = addFood;
    vm.foods = ["meat",
      "Spaghetti",
      "shrimp",
      "Some food is yummy"
    ];

    setInterval(function(){
      vm.foods.push(Math.random());
      $scope.$apply();


    }, 1000);

    function addFood() {
      vm.foods.push(vm.newFood);
      vm.newFood = '';
    }

    function burrito() {
      return "Tortilla stuff!";
    }
}
})();
