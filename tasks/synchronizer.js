module.exports = function(grunt) {
  "use strict";

  var synchronizer = require("synchronizer");

  grunt.registerMultiTask("synchronizer", "Optimize AMD to UMD", function() {
    var options = this.options();

    // Optimize the AMD modules.
    var contents = synchronizer.optimize(this.files[0].src[0], options);

    // Write out the destination file.
    grunt.file.write(this.files[0].dest, contents);
  });
};
