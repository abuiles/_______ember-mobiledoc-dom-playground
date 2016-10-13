import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('annotation');
  this.route('parent', function() {
    this.route('child');
  });
});

export default Router;
