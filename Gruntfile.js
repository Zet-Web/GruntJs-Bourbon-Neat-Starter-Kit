module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    "assets/css/styles.css": "assets/css/styles.sass"
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ["> 1%", "ie > 8"]
            },
            target: {
                files: {
                    "assets/css/styles.css": "assets/css/styles.css"
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    "assets/css/styles.min.css": ['assets/css/styles.css']
                }
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            target: {
                files: {
                    "assets/js/functions.min.js":   ["assets/js/functions.js"]
                }
            }
        },
        notify: {
            sass:{
                options:{
                    title: "ADK GROUP Project",
                    message: "Sass Compiled Successfully.",
                    duration: 2,
                    max_jshint_notifications: 1
                }
            },
            uglify:{
                options:{
                    title: "ADK GROUP Project",
                    message: "JS Minified Successfully.",
                    duration: 2,
                    max_jshint_notifications: 1
                }
            }
        },
        watch: {
            options: {
                livereload: 12345,
                port: 8069
            },
            sass: {
                files: ['assets/css/*.sass','assets/css/**/*.sass', "assets/css/*.scss", "assets/css/**/*.scss"],
                tasks: ['sass', 'cssmin','notify:sass']
            },
            autoprefixer:{
                files: ['assets/css/styles.css'],
                tasks: ['autoprefixer', 'cssmin']
            },
            uglify: {
                files: ['assets/js/*.js'],
                tasks:['uglify','notify:uglify']
            }

        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Default task(s).
    grunt.registerTask('default', ['sass','autoprefixer','cssmin','uglify', 'notify', 'watch']);


};
