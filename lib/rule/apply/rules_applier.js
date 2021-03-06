// Generated by LiveScript 1.2.0
(function(){
  var util, utily, subject, Debugger, RuleApplier, ExecutionContext, inspect, RulesApplier;
  util = require('../util');
  utily = require('../../util');
  subject = utily.subject;
  Debugger = utily.Debugger;
  RuleApplier = require('./single').RuleApplier;
  ExecutionContext = require('./execution_context');
  inspect = require('util').inspect;
  module.exports = RulesApplier = (function(){
    RulesApplier.displayName = 'RulesApplier';
    var prototype = RulesApplier.prototype, constructor = RulesApplier;
    importAll$(prototype, arguments[0]);
    function RulesApplier(executionContext, rules, debugging){
      this.executionContext = executionContext;
      this.rules = rules;
      this.debugging = debugging;
      this._validate();
      this;
    }
    prototype._validate = function(){
      if (!(this.executionContext.ucan && this.executionContext.ucannot)) {
        throw Error("Execution context must have ucan and ucannot methods for executing rules, was: " + inspect(this.executionContext));
      }
    };
    prototype.repo = function(){
      return this.executionContext.repo;
    };
    prototype.apply = function(thing, ctx){
      return this.ruleApplier(thing, ctx).apply();
    };
    prototype.ruleApplier = function(thing, ctx){
      return new RuleApplier(thing, ctx);
    };
    prototype.applyAll = function(){
      var rules, key, results$ = [];
      switch (typeof this.rules) {
      case 'object':
        rules = this.rules;
        for (key in rules) {
          results$.push(util.recurse(rules[key], this.executionContext));
        }
        return results$;
        break;
      default:
        throw Error("rules must be an Object was: " + typeof this.rules);
      }
    };
    return RulesApplier;
  }(Debugger));
  function importAll$(obj, src){
    for (var key in src) obj[key] = src[key];
    return obj;
  }
}).call(this);
