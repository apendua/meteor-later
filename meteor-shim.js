/* 
    This file is for server use only
    Meteor package builder create local references for setTimeout
    and clearTimeout in closure to handle Fiber issue
*/
setTimeout = Meteor.setTimeout
clearTimeout = Meteor.clearTimeout
