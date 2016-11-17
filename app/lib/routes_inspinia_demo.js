
Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


//
// Dashboards routes
//

var appname = ''

Router.route( appname + '/dashboard1', function () {
  this.render('dashboard1');
});
Router.route( appname + '/dashboard2', function () {
  this.render('dashboard2');
});
Router.route( appname + '/dashboard3', function () {
  this.render('dashboard3');
});
Router.route( appname + '/dashboard4', function () {
  this.render('dashboard4');
  this.layout('layout2');
});
Router.route( appname + '/dashboard4l', function () {
  this.render('dashboard4l');
});
Router.route( appname + '/dashboard5', function () {
  this.render('dashboard5');
});


//
// Layouts route
//

Router.route( appname + '/layouts', function () {
  this.render('layouts');
});

//
// Graphs routes
//

Router.route( appname + '/graphFlot', function () {
  this.render('graphFlot');
});

Router.route( appname + '/graphRickshaw', function () {
  this.render('graphRickshaw');
});

Router.route( appname + '/graphChartJs', function () {
  this.render('graphChartJs');
});

Router.route( appname + '/graphChartist', function () {
  this.render('graphChartist');
});

Router.route( appname + '/graphPeity', function () {
  this.render('graphPeity');
});

Router.route( appname + '/graphSparkline', function () {
  this.render('graphSparkline');
});

//
// Mailbox
//

Router.route( appname + '/mailbox', function () {
  this.render('mailbox');
});

Router.route( appname + '/emailView', function () {
  this.render('emailView');
});

Router.route( appname + '/emailCompose', function () {
  this.render('emailCompose');
});

Router.route( appname + '/emailTemplates', function () {
  this.render('emailTemplates');
});

//
// Widgets
//

Router.route( appname + '/widgets', function () {
  this.render('widgets');
});

//
// Metrics
//

Router.route( appname + '/metrics', function () {
  this.render('metrics');
});

//
// Forms
//

Router.route( appname + '/formBasic', function () {
  this.render('formBasic');
});

Router.route( appname + '/formAdvanced', function () {
  this.render('formAdvanced');
});

Router.route( appname + '/formWizard', function () {
  this.render('formWizard');
});

Router.route( appname + '/formUpload', function () {
  this.render('formUpload');
});

Router.route( appname + '/textEditor', function () {
  this.render('textEditor');
});

//
// App Views
//

Router.route( appname + '/contacts', function () {
  this.render('contacts');
});

Router.route( appname + '/profile', function () {
  this.render('profile');
});

Router.route( appname + '/profile2', function () {
  this.render('profile2');
});

Router.route( appname + '/contacts2', function () {
  this.render('contacts2');
});

Router.route( appname + '/projects', function () {
  this.render('projects');
});

Router.route( appname + '/projectDetail', function () {
  this.render('projectDetail');
});

Router.route( appname + '/teamsBoard', function () {
  this.render('teamsBoard');
});

Router.route( appname + '/socialFeed', function () {
  this.render('socialFeed');
});

Router.route( appname + '/clients', function () {
  this.render('clients');
});

Router.route( appname + '/fullHeight', function () {
  this.render('fullHeight');
});

Router.route( appname + '/offCanvas', function () {
  this.render('offCanvas');
});

Router.route( appname + '/voteList', function () {
  this.render('voteList');
});

Router.route( appname + '/fileManager', function () {
  this.render('fileManager');
});

Router.route( appname + '/calendar', function () {
  this.render('calendar');
});

Router.route( appname + '/issueTracker', function () {
  this.render('issueTracker');
});

Router.route( appname + '/blog', function () {
  this.render('blog');
});

Router.route( appname + '/article', function () {
  this.render('article');
});

Router.route( appname + '/faq', function () {
  this.render('faq');
});

Router.route( appname + '/timelineOne', function () {
  this.render('timelineOne');
});

Router.route( appname + '/pinBoard', function () {
  this.render('pinBoard');
});

//
// Other pages
//

Router.route( appname + '/searchResult', function () {
  this.render('searchResult');
});

Router.route( appname + '/lockScreen', function () {
  this.render('lockScreen');
  this.layout('blankLayout')
});

Router.route( appname + '/invoice', function () {
  this.render('invoice');
});

Router.route( appname + '/invoicePrint', function () {
  this.render('invoicePrint');
  this.layout('blankLayout')
});

Router.route( appname + '/login', function () {
  this.render('login');
  this.layout('blankLayout')
});

Router.route( appname + '/loginTwo', function () {
  this.render('loginTwo');
  this.layout('blankLayout')
});

Router.route( appname + '/forgotPassword', function () {
  this.render('forgotPassword');
  this.layout('blankLayout')
});

Router.route( appname + '/register', function () {
  this.render('register');
  this.layout('blankLayout')
});

Router.route( appname + '/errorOne', function () {
  this.render('errorOne');
  this.layout('blankLayout')
});

Router.route( appname + '/errorTwo', function () {
  this.render('errorTwo');
  this.layout('blankLayout')
});

Router.route( appname + '/emptyPage', function () {
  this.render('emptyPage');
});

//
// Miscellaneous
//

Router.route( appname + '/toastrNotification', function () {
  this.render('toastrNotification');
});

Router.route( appname + '/nestableList', function () {
  this.render('nestableList');
});

Router.route( appname + '/agileBoard', function () {
  this.render('agileBoard');
});

Router.route( appname + '/timelineTwo', function () {
  this.render('timelineTwo');
});

Router.route( appname + '/diff', function () {
  this.render('diff');
});

Router.route( appname + '/sweetAlert', function () {
  this.render('sweetAlert');
});

Router.route( appname + '/idleTimer', function () {
  this.render('idleTimer');
});

Router.route( appname + '/spinners', function () {
  this.render('spinners');
});

Router.route( appname + '/liveFavicon', function () {
  this.render('liveFavicon');
});

Router.route( appname + '/googleMaps', function () {
  this.render('googleMaps');
});

Router.route( appname + '/codeEditor', function () {
  this.render('codeEditor');
});

Router.route( appname + '/modalWindow', function () {
  this.render('modalWindow');
});

Router.route( appname + '/forumView', function () {
  this.render('forumView');
});

Router.route( appname + '/forumDetail', function () {
  this.render('forumDetail');
});

Router.route( appname + '/validation', function () {
  this.render('validation');
});

Router.route( appname + '/treeView', function () {
  this.render('treeView');
});

Router.route( appname + '/chatView', function () {
  this.render('chatView');
});

Router.route( appname + '/masonry', function () {
  this.render('masonry');
});

//
// UI Elements
//

Router.route( appname + '/typography', function () {
  this.render('typography');
});

Router.route( appname + '/icons', function () {
  this.render('icons');
});

Router.route( appname + '/draggablePanels', function () {
  this.render('draggablePanels');
});

Router.route( appname + '/buttons', function () {
  this.render('buttons');
});

Router.route( appname + '/video', function () {
  this.render('video');
});

Router.route( appname + '/tabsPanels', function () {
  this.render('tabsPanels');
});

Router.route( appname + '/tabs', function () {
  this.render('tabs');
});

Router.route( appname + '/notifications', function () {
  this.render('notifications');
});

Router.route( appname + '/badgesLabels', function () {
  this.render('badgesLabels');
});

//
// Grid Options
//

Router.route( appname + '/gridOptions', function () {
  this.render('gridOptions');
});

//
// Tables
//

Router.route( appname + '/tableStatic', function () {
  this.render('tableStatic');
});

Router.route( appname + '/dataTables', function () {
  this.render('dataTables');
});

Router.route( appname + '/fooTables', function () {
  this.render('fooTables');
});

//
// E-commerce
//

Router.route( appname + '/productsGrid', function () {
  this.render('productsGrid');
});

Router.route( appname + '/productsList', function () {
  this.render('productsList');
});

Router.route( appname + '/productEdit', function () {
  this.render('productEdit');
});

Router.route( appname + '/orders', function () {
  this.render('orders');
});

Router.route( appname + '/productDetail', function () {
  this.render('productDetail');
});

Router.route( appname + '/payments', function () {
  this.render('payments');
});

//
// Gallery
//

Router.route( appname + '/gallery', function () {
  this.render('gallery');
});

Router.route( appname + '/carusela', function () {
  this.render('carusela');
});

Router.route( appname + '/slick', function () {
  this.render('slick');
});


//
// CSS Animations
//

Router.route( appname + '/cssAnimations', function () {
  this.render('cssAnimations');
});

//
// Landing page
//

//Router.route( appname + '/landing', function () {
//  console.log("######")
//  console.log("landing=======")
//  this.render('landing');
//  this.layout('blankLayout')
//});


//
// Landing download page
//

Router.route( appname + '/loading_page', function () {
  this.render('loading_page');
  this.layout('blankLayout')
});

//
// Other pages routes
//
Router.route( appname + '/notFound', function () {
  this.render('notFound');
});

// Default route
// You can use direct this.render('template')
// We use Router.go method because dashboard1 is our nested view in menu
Router.route('/', {name:"landing"});

