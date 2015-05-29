import DS from "ember-data";

var Category = DS.Model.extend({
  text: DS.attr('string'),
  children: DS.hasMany('category', {inverse: "parent"}),
  parent: DS.belongsTo('category', {inverse: "children"}),
  isFirstLevel: DS.attr('bool')
});

Category.reopenClass({
  FIXTURES: [
    {
      id: 1,
      text: 'node_root',
      children: [2,3],
      isFirstLevel: true
    },
    {
      id: 2,
      text: 'category_sub1',
      children: null,
      parent: 1
    },
    {
      id: 3,
      text: 'category_sub2',
      children: null,
      parent: 1
    },
    {
      id: 4,
      text: 'category_sub3',
      children: null,
      parent: 1
    }
  ]
});

export default Category;