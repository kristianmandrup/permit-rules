// Generated by LiveScript 1.2.0
(function(){
  var util, toString$ = {}.toString;
  util = require('util');
  module.exports = {
    containerFor: function(act){
      return this.validContainer(this.container[act], act);
    },
    validContainer: function(container, act){
      if (toString$.call(container).slice(8, -1) === 'Object') {
        return container;
      }
      throw Error("No valid rule container for " + act + " in " + container + " of " + util.inspect(this.container));
    },
    manageActions: ['create', 'edit', 'delete']
  };
}).call(this);
