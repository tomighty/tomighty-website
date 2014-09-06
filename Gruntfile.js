module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      production: {
        files: [
          {
            expand: true,
            cwd: './src/css/',
            src: ['*.css', '!*.min.css'],
            dest: './release/css/'
          },
          {
            expand: true,
            cwd: './node_modules/normalize-css/',
            src: ['normalize.css'],
            dest: './release/css/'
          }
        ]
      }
    },
    htmlmin: {
      production: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'release/index.html': 'src/index.html'
        }
      }
    },
    copy: {
      production: {
        files: [
          {expand: true, src: ['src/img/*'], dest: 'release/img/', flatten: true}
        ]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.registerTask('default', ['cssmin', 'htmlmin', 'copy']);
};
