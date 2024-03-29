module.exports = function(grunt) {
	'use strict';

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= pkg.license %> */\n',
    // Task configuration.
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      bookmarklet: {
        src: 'src/bookmarklet.js',
        dest: 'dist/bookmarklet.min.js'
      },
      linkpost: {
        src: [
          'src/zepto.js',
          'bower_components/handlebars/handlebars.runtime.js',
          'src/templates/form.js',
          'src/linkpost.js'
        ],
        dest: 'dist/linkpost.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
				src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: "JST"
        },
        files: {
          "src/templates/form.js": "src/templates/form.hbs"
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task.
  grunt.registerTask('default', ['handlebars', 'uglify']);

};
