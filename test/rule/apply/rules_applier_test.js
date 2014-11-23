// Generated by LiveScript 1.2.0
(function(){
  var requires, User, Book, RulesApplier, RuleRepo, ExecutionContext, expect;
  requires = require('../../../../requires');
  requires.test('test_setup');
  User = requires.fix('user');
  Book = requires.fix('book');
  RulesApplier = requires.rule('apply').DynamicApplier;
  RuleRepo = requires.rule('repo').RuleRepo;
  ExecutionContext = requires.rule('apply').ExecutionContext;
  expect = require('chai').expect;
  describe('Rule Applier (RuleApplier)', function(){
    var book, repo, ruleApplier, rules, requests, ctx, obj, createRepo, createExecCtx, createRulesApplier, execRuleApplier;
    rules = {};
    requests = {};
    ctx = {};
    obj = {};
    createRepo = function(){
      return new RuleRepo('static repo').clear();
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
    createRulesApplier = function(rules, accessRequest, debug){
      debug == null && (debug = true);
      return new RulesApplier(createExecCtx(), rules, accessRequest, debug);
    };
    execRuleApplier = function(rules, actionRequest){
      return createRulesApplier(rules, actionRequest).applyRules();
    };
    beforeEach(function(){
      return book = new Book('Far and away');
    });
    rules.managePaper = {
      area: function(){
        return this.ucan('manage', 'Paper');
      },
      admin: {
        domain: function(){
          return this.ucan('manage', 'Paper');
        }
      }
    };
    requests.readBook = {
      action: 'read',
      subject: book
    };
    ruleApplier = createRulesApplier(rules.managePaper, requests.readBook);
    describe('apply-rules-for', function(){
      beforeEach(function(){
        ruleApplier.applyRulesFor('area');
        return repo = ruleApplier.repo();
      });
      return specify('should apply the area rule', function(){
        return expect(repo.canRules().manage).to.eql(['Paper']);
      });
    });
    describe('context-rules', function(){
      beforeEach(function(){
        ctx.area = ruleApplier.contextRules('area');
        ctx.admin = ruleApplier.contextRules('admin');
        return ruleApplier.contextRules('admin');
      });
      specify('should return itself (area) since it is a Function and no more keys underneath', function(){
        return expect(Object.keys(ctx.area)).to.eql(['area', 'admin']);
      });
      return specify('should return Object it points to', function(){
        return expect(Object.keys(ctx.admin)).to.eql(['domain']);
      });
    });
    describe('apply-obj-rules-for', function(){
      before(function(){
        obj.area = {
          edit: 'book'
        };
        return obj.admin = {
          admin: 'movie'
        };
      });
      context('object', function(){
        beforeEach(function(){
          ruleApplier.applyObjRulesFor(obj, 'area');
          return repo = ruleApplier.repo();
        });
        return specify('should return manage Paper', function(){
          return expect(repo.canRules().manage).to.eql(['Paper']);
        });
      });
      return context('area - edit', function(){
        beforeEach(function(){
          ruleApplier.applyObjRulesFor(obj.area, 'edit');
          return repo = ruleApplier.repo();
        });
        return specify('should return manage Paper', function(){
          return expect(repo.canRules().manage).to.eql(['Paper']);
        });
      });
    });
    xdescribe('apply-all-rules', function(){
      beforeEach(function(){
        ruleApplier.applyAllRules();
        return repo = ruleApplier.repo();
      });
      return specify('should return manage Paper', function(){
        return expect(repo.canRules().manage).to.eql(['Paper']);
      });
    });
    return xcontext('full scenarios', function(){
      return describe('manage paper', function(){
        return context('applied default rule: manage Paper', function(){
          before(function(){
            rules.managePaper = {
              'default': function(){
                return this.ucan('manage', 'Paper');
              }
            };
            ruleApplier = createRulesApplier(rules.managePaper, requests.readBook);
            return repo = ruleApplier.repo();
          });
          return specify('should add create, edit and delete can-rules', function(){
            return repo.canRules().should.eql({
              manage: ['Paper'],
              create: ['Paper'],
              edit: ['Paper'],
              'delete': ['Paper']
            });
          });
        });
      });
    });
  });
}).call(this);
