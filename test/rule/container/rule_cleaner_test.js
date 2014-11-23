// Generated by LiveScript 1.2.0
(function(){
  var requires, Cleaner, expect;
  requires = require('../../../../requires');
  requires.test('test_setup');
  Cleaner = requires.rule('container').RuleCleaner;
  expect = require('chai').expect;
  describe('RuleCleaner', function(){
    var repo, container, cleaner, createCleaner;
    createCleaner = function(container, debug){
      debug == null && (debug = true);
      return new Cleaner(container, debug);
    };
    repo = {
      container: {
        can: {},
        cannot: {}
      }
    };
    return context('basic repo', function(){
      before(function(){
        cleaner = createCleaner(repo.container);
        return container = cleaner.container;
      });
      specify('cleaner container is same as repo container', function(){
        return cleaner.container.should.equal(repo.container);
      });
      return describe('clean', function(){
        return context('has full can and cannot containers', function(){
          before(function(){
            return cleaner.container = {
              can: {
                edit: 'book'
              },
              cannot: {
                'delete': 'article'
              }
            };
          });
          describe(' - can', function(){
            return specify('cleans can', function(){
              cleaner.clean('can');
              return container.can.should.eql({});
            });
          });
          describe(' - cannot', function(){
            return specify('cleans cannot', function(){
              cleaner.clean('cannot');
              return container.cannot.should.eql({});
            });
          });
          return describe('clean-all', function(){
            before(function(){
              return cleaner.cleanAll();
            });
            specify('cleans can', function(){
              return container.can.should.eql({});
            });
            return specify('cleans cannot', function(){
              return container.cannot.should.eql({});
            });
          });
        });
      });
    });
  });
}).call(this);