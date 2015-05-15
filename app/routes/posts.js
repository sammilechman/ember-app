var PostsRoute = Ember.Route.extend({
  setupController: function(controller, posts) {
    controller.set('codeWord', 'CODERIFIC');
  },
  model: function() {
    return posts;
  }
});

var posts = [{
  id: '1',
  title: 'First post!',
  body: 'This is pretty, pretty cool'
}, {
  id: '2',
  title: 'Second post!',
  body: 'Yes INDEED!'
}];

export default PostsRoute;
