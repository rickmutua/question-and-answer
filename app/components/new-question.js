import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: true,

    actions: {
      saveQuestion() {
        var params = {
          author: this.get('author'),
          question: this.get('question'),
        };
        this.sendAction('saveQuestion', params);
      }
    }
});
