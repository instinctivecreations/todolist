Todos.Router.map(function () {
  this.resource('todos', { path: '/' }, function () {
    // additional child routes
	this.route('active');
	this.route('completed');
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function () {
    return Todos.todo.find();
  }
});

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return Todos.todo.filter(function (todo) {
      if (!todo.get('isCompleted')) { return true; }
    });
  },
  renderTemplate: function(controller){
    this.render('Todos/index', {controller: controller});
  }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function(){
    return Todos.todo.filter(function (todo) {
      if (todo.get('isCompleted')) { return true; }
    });
  },
  renderTemplate: function(controller){
    this.render('Todos/index', {controller: controller});
  }
});