// (function() {
//     'use strict';

//     angular.module('LunchCheck', [])
//         //.controller('LCController', ['$scope', '$sce', '$injector', LCController]);
//         .controller('LCController', ['$scope', LCController]);

//     function LCController($scope) {

//         $scope.result = "";
//         $scope.activeClass1 = "";

//         $scope.checkLunch = function() {
//             var items = $scope.lunchmenu;
//             //alert(items == undefined);
//             if (items == undefined || items.length < 1 || items == "" || items == null) {
//                 $scope.result = "Please enter data first.";
//                 $scope.activeClass = "clr1";
//                 $scope.activeClass1 = "clr11";
//                 $scope.lunchmenu = null;
//             }
//             var itemsarray = items.split(',');
//             var count = 0;
//             //for(var y in itemsarray){alert(y+"::"+itemsarray[y]);}
//             for (var x = 0; x < itemsarray.length; x++) {
//                 var l = itemsarray[x].trim();
//                 //alert(itemsarray[x].toString() + ":" + l.length);
//                 if (l.length != 0) { count++; }
//                 if (l.startsWith('"') && l.endsWith('"')) {
//                     var ll = l.substr(1, l.length - 1);
//                     //alert(ll + ":" + ll.length);
//                     if (ll.trim().length > 1) { continue; } else { count--; }
//                 }
//             }
//             if (count == 0) {
//                 $scope.result = "Please enter data first.";
//                 $scope.lunchmenu = null;
//                 $scope.activeClass = "clr1";
//                 $scope.activeClass1 = "clr11";

//             } else if (count <= 3) {
//                 $scope.result = "Enjoy!";
//                 $scope.activeClass = "clr2";
//                 $scope.activeClass1 = "clr22";
//             } else {
//                 $scope.result = "Too much!";
//                 $scope.activeClass = "clr3";
//                 $scope.activeClass1 = "clr33";
//             }
//         };

//         //console.log($injector.annotate(LCController));

//     };

//     //console.log(LCController.toString());

// })();

// ! function() { "use strict";

//     function l(l, t) { l.result = "", l.activeClass1 = "", l.checkLunch = function() { var t = l.lunchmenu;
//             (void 0 == t || t.length < 1 || "" == t || null == t) && (l.result = "Please enter data first.", l.activeClass = "clr1", l.lunchmenu = null); for (var e = t.split(","), s = 0, c = 0; c < e.length; c++) { var n = e[c].trim(); if (0 != n.length && s++, n.startsWith('"') && n.endsWith('"')) { var r = n.substr(1, n.length - 1); if (r.trim().length > 1) continue;
//                     s-- } }
//             0 == s ? (l.result = "Please enter data first.", l.lunchmenu = null, l.activeClass = "clr1", l.activeClass1 = "clr11") : 3 >= s ? (l.result = "Enjoy!", l.activeClass = "clr2", l.activeClass1 = "clr22") : (l.result = "Too much!", l.activeClass = "clr3", l.activeClass1 = "clr33") } }
//     angular.module("LunchCheck", []).controller("LCController", ["$scope", "$injector", l]) }();

! function() {
    "use strict";

    function l(l) {
        l.result = "", l.activeClass1 = "", l.checkLunch = function() {
            var t = l.lunchmenu;
            (void 0 == t || t.length < 1 || "" == t || null == t) && (l.result = "Please enter data first.", l.activeClass = "clr1", l.activeClass1 = "clr11", l.lunchmenu = null);
            for (var e = t.split(","), s = 0, c = 0; c < e.length; c++) {
                var n = e[c].trim();
                if (0 != n.length && s++, n.startsWith('"') && n.endsWith('"')) {
                    var r = n.substr(1, n.length - 1);
                    if (r.trim().length > 1) continue;
                    s--
                }
            }
            0 == s ? (l.result = "Please enter data first.", l.lunchmenu = null, l.activeClass = "clr1", l.activeClass1 = "clr11") : 3 >= s ? (l.result = "Enjoy!", l.activeClass = "clr2", l.activeClass1 = "clr22") : (l.result = "Too much!", l.activeClass = "clr3", l.activeClass1 = "clr33")
        }
    }
    angular.module("LunchCheck", []).controller("LCController", ["$scope", l])
}();