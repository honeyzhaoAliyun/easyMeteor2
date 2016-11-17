/* Helloworld */
Router.route('helloworld', function() {
    Router.go('helloworldIndex');
});
Router.route('helloworld/index/:limit?/', {
    name: 'helloworldIndex',
    controller: HelloworldController,
    action: 'index',
});
Router.route('helloworld/insert/', {
    name: 'helloworldInsert',
    controller: HelloworldController,
    action: 'insert',
});
Router.route('helloworld/update/:_id?', {
    name: 'helloworldUpdate',
    controller: HelloworldController,
    action: 'update',
});
Router.route('helloworld/view/:_id?', {
    name: 'helloworldView',
    controller: HelloworldController,
    action: 'view',
});
/* EOF Helloworld */