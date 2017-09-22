import Ember from 'ember';

export default Ember.Component.extend({

  addNewAnswer: true,

  actions: {
      saveAnswer() {
        var params = {
          commentor: this.get('commentor'),
          answer: this.get('content')
        }
        this.sendAction('saveAnswer', params);
      }
    }
  });
