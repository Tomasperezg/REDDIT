"use strict";
{
  let reddit = {
    controller: function(redditService){
      let vm = this;
      redditService.getData().then(function(response){
        vm.data = response.data;
      });
    },
    template: `
    <button ng-click="$ctrl.getData()">Get Data</button>`
  }
  angular
    .module("app")
    .component("reddit", reddit);
}
