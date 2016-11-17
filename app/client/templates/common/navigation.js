Template.navigation.rendered = function(){

    // Initialize metisMenu
    $('#side-menu').metisMenu();

};

// Used only on OffCanvas layout
Template.navigation.events({

    'click .close-canvas-menu' : function(){
        $('body').toggleClass("mini-navbar");
    },
    'click #btnLogout': function() {
        Meteor.logout(function() {
            Router.go('usersLogin');
        });
    }

});
