import Ember from 'ember';
import moment from 'moment';

export default Ember.Helper.helper('formatDate',function(date) {
      return moment(date).fromNow();
  });;
