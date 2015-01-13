module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['estilo.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    copy: {
        main: {
          expand: true,
          cwd: '/',
          src: '**',
          dest: '../../../../../var/www/html',
          flatten: true,
          filter: 'isFile',
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');


  // Default task(s).
  grunt.registerTask('default', ['sass', 'copy']);

};