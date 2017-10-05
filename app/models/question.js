import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({

  author: DS.attr(),
  question: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),
  createdAt: DS.attr('date')

});
