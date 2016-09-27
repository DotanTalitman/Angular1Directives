
(function () {
    angular.module("card-list-module", []).directive("cardList", cardList);


    function cardList() {
        return {
            template: `<li ng-repeat="i in [0,1,2,3]">
                     <card number='{{ $index+1 }}'></card>
                      </li>`
        }
    }
})();


