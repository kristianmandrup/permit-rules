// Generated by LiveScript 1.2.0
(function(){
  var toString$ = {}.toString;
  module.exports = {
    contextRules: function(name){
      this.debug('context rules', name);
      if (toString$.call(name).slice(8, -1) === 'Object') {
        return name;
      }
      if (toString$.call(name).slice(8, -1) !== 'String') {
        return this.rules;
      }
      if (toString$.call(this.rules[name]).slice(8, -1) === 'Object') {
        return this.rules[name];
      }
      return this.rules;
    }
  };
}).call(this);