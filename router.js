"use strict";
{
  angular
    .module("app")
    .config(($routeProvider) => {
      $routeProvider
      .when("/display", {
        template: "<reddit></reddit>"
      })
    })

}

// https://www.reddit.com/r/aww/.json
