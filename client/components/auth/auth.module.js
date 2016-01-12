'use strict';

angular.module('phunnyApp.auth', [
  'phunnyApp.constants',
  'phunnyApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
