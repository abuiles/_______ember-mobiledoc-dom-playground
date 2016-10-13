import DS from 'ember-data';

export default DS.Model.extend({
  deltas: DS.attr(),
  slug: DS.attr('string')
});
