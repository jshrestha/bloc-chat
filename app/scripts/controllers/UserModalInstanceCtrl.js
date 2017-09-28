(function() {
    function UserModalInstanceCtrl($scope, $uibModalInstance, $cookies) {
        $scope.setUsername = function() {
            $cookies.blocChatCurrentUser = $scope.newUsername;

            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('UserModalInstanceCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalInstanceCtrl]);
})();
