(function() {

  "use strict";

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, classifiedsFactory, $mdSidenav, $mdToast) {

      classifiedsFactory.getClassifieds().then(function(classifieds) {
          $scope.classifieds = classifieds.data;
      });

      var contact = {
        name: "Oleh Daybov",
        phone: "777-705-001",
        email: "olegtranslator@gmail.com"
      }

      $scope.openSidebar = function() {
        $mdSidenav('left').open();
      }

      $scope.closeSidebar = function() {
        $mdSidenav('left').close();
      }

      $scope.saveClassified = function(classified) {
        if (classified) {
            classified.contact = contact;
            $scope.classifieds.push(classified);
            $scope.classified = {};
            $scope.closeSidebar();
            $mdToast.show(
              $mdToast.simple()
                .content("Classified Saved!")
                .position('top, right')
                .hideDelay(3000)
            );
        }

      }

    });
})();
