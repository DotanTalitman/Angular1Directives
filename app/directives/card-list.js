
(function () {
    angular.module("card-list-module", []).directive("cardList", cardList);


    function cardList() {
        return {
            $scope: {
                count: "@"
            },
            template: template,
            controller: controller,
            link: link,
            compile: compile

        }


        function template(elem, attrs) {
            return `<li ng-repeat="i in createArray(${attrs.count})  track by $index">
                      <card number='{{$index+1}}'></card>
                    </li>`
        }

        function compile(tElem, tAttrs) {
            return {
                pre: function (scope, iElem, iAttrs, controller) {
                  
                },
                post: function (scope, iElem, iAttrs, controller) {
                   
                }
            }

        };
        function link(scope, element, attr) {
            console.log("scope", scope)
            console.log("element", element)
            console.log("attr", attr)

        };


        function controller($scope, $element, $attrs, $transclude) {

            $scope.createArray = function (num) {
                console.log(num)
                return new Array(num)
            }

        }

    }
})();


