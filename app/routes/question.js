import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {

    //questions section
      update(question, params) {
        Object.keys(params).forEach(function(key){
          if(params[key] !== undefined && params[key] !== "") {
            question.set(key, params[key]);
          }
        });
          question.save();
          this.transitionTo('question', question.id);
        },

        destroyQuestion(question) {
          var answer_deletions = question.get('answers'). map(function(answer) {
            return answer.destroyRecord();
          })
          Ember.RSVP.all(answer_deletions).then(function() {
            return question.destroyRecord();
          })
          this.transitionTo('index');
        },

      //answers section
        saveAnser(params) {
          var newAnswer = this.store.createRecord('answer', params);
          var question = params.question;
          question.get('answers').addObject(newAnswer);
          newAnswer.save().then(function() {
            return question.save();
          });
          this.transitionTo('question', question);
        },

        destroyAnswer(answer) {
          answer.destroyRecord();
          this.transitionTo('index');
        },


      //upVote and downVote section
        upVote(answer, question) {
          var newVote = answer.get("upVotes") +1;
          answer.set("upVotes", newVote);
          answer.save();
          this.transitionTo('question', question);
        },

        downVote(answer, question) {
          var newVote = answer.get("downVotes") -1;
          answer.set("downVotes", newVote);
          answer.save();
          this.transitionTo('question', question);
        },

},

});
