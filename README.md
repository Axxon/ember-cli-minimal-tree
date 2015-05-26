# Ember-cli-minimal-tree

This simple addon provides a front user menu tree where user can adds and 
removes categories on first level or in subdirectories.

## Installation

* `npm install ember-cli-minimal-tree`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Instructions

You need to inject a model to the template structured like this:

```javascript

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
```
## Improvements and remarks

This addon is pretty minimalistic isn't it ? The reason of his born was first for 
education and next cause i did'nt find a way to make run more usefull but complex 
projects who could serve this purpose, i'll see in a near time if tree project like 
will work more easily with latest version of ember.
