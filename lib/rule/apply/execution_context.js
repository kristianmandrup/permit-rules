// Generated by LiveScript 1.2.0
(function(){
  var Debugger, util, ExecutionContext, toString$ = {}.toString;
  Debugger = require('../../util').Debugger;
  util = require('util');
  module.exports = ExecutionContext = (function(){
    ExecutionContext.displayName = 'ExecutionContext';
    var prototype = ExecutionContext.prototype, constructor = ExecutionContext;
    importAll$(prototype, arguments[0]);
    function ExecutionContext(repo, debugging){
      this.repo = repo;
      this.debugging = debugging;
      this.debug('execute context', this.repo);
      this._validate();
      this;
    }
    prototype._type = 'ExecutionContext';
    prototype._validate = function(){
      if (toString$.call(this.repo).slice(8, -1) !== 'Object') {
        throw Error("ExecutionContext must take an Object, was: " + util.inspect(this.repo));
      }
    };
    prototype.ucan = function(actions, subjects, ctx){
      this.debug('register ucan', actions, subjects, ctx);
      this.repo.register('can', actions, subjects, ctx);
      return this.debug('Registered :)');
    };
    prototype.ucannot = function(actions, subjects, ctx){
      this.debug('ucannot', actions, subjects, ctx);
      this.repo.register('cannot', actions, subjects, ctx);
      return this.debug('Registered :)');
    };
    return ExecutionContext;
  }(Debugger));
  function importAll$(obj, src){
    for (var key in src) obj[key] = src[key];
    return obj;
  }
}).call(this);
