import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('src', this.get('attrs.payload.src') || '');
    this.set('title', this.get('attrs.payload.title') || '');
    this.set('alt', this.get('attrs.payload.alt') || '');
  },

  // Could also do:
  //src: Ember.computed('payload.src'),
  //title: Ember.computed('payload.title'),
  //alt: Ember.computed('payload.title'),

  doubleClick() {
    this.attrs.editCard(this.attrs.payload);
  }
});
