import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

    actions: {

      update(question, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            question.set(key, params[key]);
          }
        });
        question.save();
        this.transitionTo('index');
      },

        destroyQuestion(question) {
          var question_deletions = question.get('answers').map(function(answer)
            {
              return answer.destroyRecord();
            })
              Ember.RSVP.all(answer_deletions) .then(function() {
                return question.destroyRecord();
            })
              this.transitionTo('index');
          },

          saveAnswer(params) {
            var NewAnswer = this.store.createRecord('answer', params);
            var question = params.question;
              question.get('answer') .addObject(NewAnswer);
              NewAnswer.save() .then(function() {
                return question.save();
              });
              this.transitionTo('question', question);
          },

          destroyAnswer(answer) {
            answer.destroyRecord();
            this.transitionTo('index');
          }

  }

});
