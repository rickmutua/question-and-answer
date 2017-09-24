import Ember from 'ember';

export default Ember.Component.extend({

  addNewAnswer: false,

  actions: {

    answerFormShow() {
      this.set('addNewAnswer', true);
    },

      saveAnswer() {
        var params = {
          commentor: this.get('commentor'),
          answer: this.get('answer')
        }
        this.set('addNewAnswer', false);
        this.sendAction('saveAnswer', params);
      }
    }
  });
