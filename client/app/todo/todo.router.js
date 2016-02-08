/**
 * Created by asirko on 08/02/2016.
 */
(function (){
  'use strict';

  angular.module('phunnyApp.todo')
    .config(function($stateProvider) {
      $stateProvider
        .state('todos', {
          url: '/todos',
          templateUrl: 'app/todo/todos.html',
          controller: 'TodosController',
          controllerAs: 'todos'
        });
    });
})();


