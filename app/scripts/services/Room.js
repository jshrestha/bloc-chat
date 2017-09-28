((function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://bloc-chat-ea0c9.firebaseio.com/");

        var rooms = $firebaseArray(firebaseRef.child('rooms'));

        return {
            rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
