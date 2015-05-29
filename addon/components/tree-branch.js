import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['tree-branch'],
  firstLevelNode: function() {
    return this.get("node").filter(function(node) {
      return node.get("isFirstLevel");
    });
  }.property("node"),
  actions:{
    addChild: function(newNodeName, parentNode) {
      this.sendAction('childToAdd', newNodeName, parentNode);
    },
    removeNode: function(node) {
      this.sendAction('nodeToRemove', node);
    }
  }
});
