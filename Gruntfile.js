'use strict';
module.exports = function(grunt) {
    // Load the plugin that provides
    grunt.loadNpmTasks('grunt-contrib-cssmin');   
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: "assets/js/main.js",
                dest: "assets/js/<%= pkg.name %>.min.js"
            },
        },
        concat: {
            dist: {
                src: "assets/js/*.js",
                dest: "assets/js/script.js"
            }
        },
        watch: {
            scripts: {
                files: ['assets/js/*.js'],
                tasks: ['concat', 'uglify'],
            },
        }
    });
    grunt.registerTask('default', ['uglify','concat'] );
};