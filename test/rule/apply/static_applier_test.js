// Generated by LiveScript 1.2.0
(function(){
  var requires, User, Book, RulesApplier, ExecutionContext, RuleRepo, expect;
  requires = require('../../../../requires');
  requires.test('test_setup');
  User = requires.fix('user');
  Book = requires.fix('book');
  console.log(requires.rule);
  RulesApplier = requires.rule('apply').StaticApplier;
  ExecutionContext = requires.rule('apply').ExecutionContext;
  RuleRepo = requires.rule('repo').RuleRepo;
  expect = require('chai').expect;
  describe('StaicApplier', function(){
    var book, repo, applier, rules, createApplier, createRepo, createExecCtx, createRuleApplier, execRuleApplier;
    rules = {};
    createApplier = function(ctx, rules, debug){
      debug == null && (debug = true);
      return new RulesApplier(ctx, rules, debug);
    };
    createRepo = function(name, debug){
      name == null && (name = 'dynamic repo');
      debug == null && (debug = false);
      return new RuleRepo(name, debug).clean();
    };
    createExecCtx = function(debug){
      debug == null && (debug = true);
      return new ExecutionContext(createRepo(), debug);
    };
    createRuleApplier = function(rules){
      return createApplier(createExecCtx(), rules, true);
    };
    execRuleApplier = function(rules, actionRequest){
      return createRuleApplier(rules).applyRules();
    };
    before(function(){
      return book = new Book('Far and away');
    });
    return describe('manage paper', function(){
      context('applied default rule: manage Paper', function(){
        before(function(){
          rules.managePaper = {
            'default': function(){
              return this.ucan('manage', 'Paper');
            }
          };
          applier = execRuleApplier(rules.managePaper);
          return repo = applier.repo();
        });
        return specify('should add create, edit and delete can-rules', function(){
          return repo.canRules().should.eql({
            manage: ['Paper'],
            create: ['Paper'],
            'delete': ['Paper'],
            update: ['Paper'],
            edit: ['Paper']
          });
        });
      });
      return xdescribe('apply-rules', function(){
        return describe('static', function(){
          var ruleRepo, ruleApplier, rules;
          before(function(){
            rules = {
              edit: function(){
                this.ucan('edit', 'Book');
                return this.ucannot('write', 'Book');
              },
              read: function(){
                this.ucan('read', 'Project');
                return this.ucannot('delete', 'Paper');
              },
              'default': function(){
                return this.ucan('read', 'Paper');
              }
            };
            ruleApplier = execRuleApplier(rules);
            return ruleRepo = ruleApplier.repo();
          });
          specify('adds all static can rules', function(){
            return ruleRepo.canRules.should.be.eql({
              read: ['Paper']
            });
          });
          return specify('adds all static cannot rules', function(){
            return ruleRepo.cannotRules.should.be.eql({});
          });
        });
      });
    });
  });
}).call(this);
