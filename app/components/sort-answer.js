import Ember from 'ember';

export default Ember.Component.extend({
  rated: true,
  sortedAnswers: Ember.computed.sort('answers', 'sortBy'),
  sortBy: ['upVotes:desc'],
  votes: Ember.computed('answers', function () {
    return this.get('answers').get(length);
  }),

  actions: {
    
    toggleSort() {
      if(this.get("rated"))
      {
        this.set("rated", false);
      } else {
        this.set("rated", true);
      }
    },

      deleteAnswer(answer) {
          var question = this.get("currentQuestion");
          this.sendAction('deleteAnswer', answer, question);
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
