chatApp.controller('registerController', function($scope, $http){

    console.log('register');
    $scope.user={
        'firstname':'',
        'lastname':'',
        'email': '',
        'password': '',
        'mobile':''
    }
    console.log($scope.user);
    $scope.register = function(){
        console.log("register credential process", $scope.user);
   $http({
       method: 'POST',
       url: '/register',
       data: $scope.user
   }).then(function(response){
       console.log(response);
       console.log(response.data.Success);
       
       if(response.data.Success==true){
           console.log("successfull");
           $scope.message="registration Successful";
       }
       else if(response.status==400){
           $scope.message="registration Unsuccessful"
       }
   })
   }
   
});