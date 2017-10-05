import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('You Sure?'))
      {
        this.sendAction('destroyAnswer', answer);
      }
    },
    
  }
});
