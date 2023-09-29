$scope.signUp = function () {
    // Check form validation
    if ($scope.signUpForm.$invalid) {
      // Handle validation errors
      return;
    }
  
    // Make API request to check favorite menu item
    var menuNumber = $scope.user.favoriteMenuItem;
    var apiUrl = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + menuNumber + '.json';
  
    $http.get(apiUrl)
      .then(function (response) {
        // Handle successful response
        var menuItem = response.data;
        if (menuItem) {
          // Save user's preference
          // Display success message
        } else {
          // Display "No such menu number exists" message
        }
      })
      .catch(function (error) {
        // Handle API request error
      });
  };
  