import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('category');
  },
  actions: {
    addChild: function(newNodeName, parentNode) {
      parentNode.get('children').pushObject(
        this.store.createRecord('category', {
          text: newNodeName
        })
      );
    },
    removeNode: function(node) {
      node.get('children').canonicalState.forEach(function(item) {
        item.destroyRecord();
      });
      node.destroyRecord();
    }
  }
});
