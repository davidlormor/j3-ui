import Ember from 'ember';

/**
The J3Content component wraps all the content between the J3Header and
J3Footer components.  This allows the header and footer to be pinned to the
top and bottom of the page respectively, leaving the content in the center
as scrollable.

@class J3Content
@extends Ember.Component
**/

export default Ember.Component.extend({
  classNames: ['j3-content']
});
