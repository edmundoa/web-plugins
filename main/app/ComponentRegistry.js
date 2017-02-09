const plugins = {};
const callbacks = [];

const ComponentRegistry = {
  listen: (callback) => {
    console.log('callback registered');
    callbacks.push(callback);
  },
  register: (name, plugin) => {
    console.log('registering plugin: ', name);
    plugins[name] = plugin;
    callbacks.forEach(callback => callback.onRegister(name, plugin));
  },
  unregister: (name) => {
    console.log('unregistering plugin: ', name);
    plugins.delete(name);
    callbacks.forEach(callback => callback.onUnregister(name));
  },
  all: () => plugins,
  get: (name) => plugins[name],
};

export default ComponentRegistry;
