var fs = require('fs');

module.exports = function() {
  return function(files, metalsmith, done) {
    metalsmith.metadata().raw = function(name) {
      // throws exception if inaccessible
      return fs.readFileSync(metalsmith.path(metalsmith.source(), name), 'utf8');
    };
    done();
  };
};