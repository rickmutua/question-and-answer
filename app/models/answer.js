import DS from 'ember-data';

export default DS.Model.extend({

  commentor: DS.attr(),
  answer: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
  upVotes: DS.attr(),

});
