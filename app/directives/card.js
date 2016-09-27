
(function () {
    angular.module("card-module", []).directive("card", card);

    function card() {
        return {
            restrict: "E",
            scope: {
                number: "@"
            },
            replace: true,
            template: "<div style='margin:10px;' class='btn btn-info'>click {{number}} </div>",
            link: link
        }

        function link(scope, element, attr) {
            // console.log("scope", scope)
            // console.log("element", element)
            // console.log("attr", attr)
            element[0].onclick = function () {
                alert(attr.number)
            }
        }
    }

})();
