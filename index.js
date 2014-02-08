module.exports = function(grunt) {
  const synchronizer = require("synchronizer");

  grunt.registerMultiTask("synchronizer", "Optimize AMD to UMD", function() {
    var options = this.options({
      name: "__MODULES__"
    });

    console.log(this.files, this.files.src, this.files.dest);
  });
};
