import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('You Sure?'))
      {
        this.sendAction('destroyAnswer', answer);
      }
    },

    upVote(answer) {
      var question = this.get("currentQuestion");
      this.sendAction('upVote', answer, question);
    },

    downVote(answer) {
      var question = this.get("currentQuestion");
      this.sendAction('downVote', answer, question);
    },

  }
});
