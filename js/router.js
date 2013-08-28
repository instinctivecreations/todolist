Todos.Router.map(function () {
  this.resource('todos', { path: '/' }, function () {
    // additional child routes
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function () {
    return Todos.todo.find();
  }
});