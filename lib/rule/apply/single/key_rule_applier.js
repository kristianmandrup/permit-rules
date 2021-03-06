// Generated by LiveScript 1.2.0
(function(){
  var util, Debugger, ApplyMixin, KeyRuleApplier, toString$ = {}.toString;
  util = require('../../../util');
  Debugger = util.Debugger;
  ApplyMixin = require('./apply_mixin');
  module.exports = KeyRuleApplier = (function(){
    KeyRuleApplier.displayName = 'KeyRuleApplier';
    var prototype = KeyRuleApplier.prototype, constructor = KeyRuleApplier;
    importAll$(prototype, arguments[0]);
    importAll$(prototype, arguments[1]);
    function KeyRuleApplier(rules, key, context, debugging){
      this.rules = rules;
      this.key = key;
      this.context = context;
      this.debugging = debugging;
      this.rules = this.contextRules(context);
      this.debug('rules:', this.rules, 'key:', this.key, 'context:', this.context, 'rules:', this.rules);
      this;
    }
    prototype._type = 'KeyRuleApplier';
    prototype.apply = function(){
      return this.applyObjRules() || this.applyNamedRules();
    };
    prototype.applyNamedRules = function(){
      this.debug('apply named rules', this.namedRules());
      return this.callFunction() || this.noFunction();
    };
    prototype.callFunction = function(){
      if (toString$.call(this.namedRules()).slice(8, -1) === 'Function') {
        this.debug('call rules in', this.executionContext);
        namedRules.call(this.executionContext, this.accessRequest);
      }
      return this;
    };
    prototype.noFunction = function(){
      this.debug("rules key for " + this.key + " should be a function that resolves one or more rules");
      return this;
    };
    prototype.namedRules = function(){
      return this._namedRules || (this._namedRules = this.rules[this.key]);
    };
    prototype.applyObjRules = function(){
      var object;
      object = this.key;
      if (toString$.call(this.key).slice(8, -1) === 'Object') {
        return this.applyObjRulesFor(object, context);
      }
    };
    return KeyRuleApplier;
  }(ApplyMixin, Debugger));
  function importAll$(obj, src){
    for (var key in src) obj[key] = src[key];
    return obj;
  }
}).call(this);
