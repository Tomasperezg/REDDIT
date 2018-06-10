"use strict";
{
  function redditService($http){

    const getData = () => {
      return $http({
        method: "GET",
        url: "https://www.reddit.com/r/aww/.json"
      }).then(function(response){
        console.log(response.data);
        return response.data;
      });

      }



      return{
        getData
      }
}
  // redditService.$inject = ["$http"];<--this was not need it!

  angular
    .module("app")
    .factory("redditService", redditService);

}
