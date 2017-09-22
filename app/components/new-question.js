import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: true,

    actions: {
      saveRental() {
        var params = {
          author: this.get('author'),
          question: this.get('question')
        }
        this.sendAction('saveRental1', params);
      }
    }
});
