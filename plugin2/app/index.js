import PluginTwo from './PluginTwo';
import { ComponentRegistry } from 'web-plugins-main';

console.log('loading pluginTwo takes a while');
setTimeout(() => {
  ComponentRegistry.register('pluginTwo', PluginTwo);
}, 4000);
