import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  session: service(),

  beforeModel: function() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
  },

  model: function() {
    return {
      users: this.store.findAll('student')
    };
  },

});
