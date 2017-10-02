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
       answer: this.get('answer'),
       question: this.get('question')
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   },
   cancelAnswerForm() {
      this.set('addNewAnswer', false);
    }
  }
});
