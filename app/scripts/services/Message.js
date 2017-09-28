(function() {
    function Message($firebaseArray, $cookies) {
        var firebaseRef = new Firebase("https://bloc-chat-ce46d.firebaseio.com");
        var messages = $firebaseArray(firebaseRef.child('messages'));

        return {
            send: function(newMessage, roomID) {
                messages.$add({
                    username: $cookies.blocChatCurrentUser,
                    content: newMessage,
                    sentAt: "date time",
                    roomId: roomID
                });
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
})();
