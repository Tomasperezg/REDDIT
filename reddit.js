"use strict";
{
  let reddit = {
    controller: function(redditService){
      let vm = this;
      redditService.getData().then(function(response){
        vm.data = response.data;
      });
      console.log(vm.data);
    },
    templateUrl: "reddit.html"
  }
  reddit.$inject = ["redditService"];

  angular
    .module("app")
    .component("reddit", reddit);
}
