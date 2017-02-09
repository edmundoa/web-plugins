'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var plugins = {};
var callbacks = [];

var ComponentRegistry = {
  listen: function listen(callback) {
    console.log('callback registered');
    callbacks.push(callback);
  },
  register: function register(name, plugin) {
    console.log('registering plugin: ', name);
    plugins[name] = plugin;
    callbacks.forEach(function (callback) {
      return callback.onRegister(name, plugin);
    });
  },
  unregister: function unregister(name) {
    console.log('unregistering plugin: ', name);
    plugins.delete(name);
    callbacks.forEach(function (callback) {
      return callback.onUnregister(name);
    });
  },
  all: function all() {
    return plugins;
  },
  get: function get(name) {
    return plugins[name];
  }
};

exports.default = ComponentRegistry;