/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};



var app = angular.module('MatreialAppDemo', ['ngMaterial', 'ngMaterialApp', 'ngRoute']);
app.run(['$rootScope', '$mdHeader', function ($rootScope, $mdHeader) {
    
}]);
app.config(['$routeProvider', '$locationProvider', '$provide', function ($routeProvider, $locationProvider, $provide) {
   
    
    $routeProvider.
     when('/', {
         templateUrl: 'root.html',
        
     }).
     when('/add', {
         templateUrl: 'add.html',
         controller: 'AddCtrl'
     }).
     otherwise({
         redirectTo: '/'
     });
}]);
app.controller('RootCtrl', ['$scope', '$mdHeader', '$timeout', '$mdSidenav',
    function ($scope, $mdHeader, $timeout, $mdSidenav) {
        $scope.$on('$search', function (e, query) {
            console.log('Search: ' + query);
        });
        $scope.addProject = function () {
            $mdHeader.navTo("/add");
        }
      
        $scope.loadingText = 'Loading';
        console.log('StartUp 2');
        $scope.projects = [
            1, 2, 3, 4, 5
        ];
    }]);
app.controller('AddCtrl', ['$scope', '$mdHeader', '$timeout', '$mdSidenav',
    function ($scope, $mdHeader, $timeout, $mdSidenav) {
        $mdHeader.setTitle("LOADING...");
        $mdHeader.isChild();
        $mdHeader.startWork();
        $timeout(function () {
            $mdHeader.setTitle("Project 12234");
            $mdHeader.stopWork();
        }, 800);
    }]);
