var sFileLogs = './manyp.log';
const fs = require('fs');

module.exports = function(grunt) {
    // Python
    var aRoutePy = [
        './pages/*',
        './pageTemplates/*'
    ];

    // Log
    var aLog = ['./processpy.log'];

    // Handlebars
    var aRouteHbs = ['./src/template/*'];
    var oRouteHbs = {
        'src/template/dist/main.min.js': ['src/template/*.hbs']
    };
    
    // Sass
    var aRouteSass = ['./src/sass/*'];

    // Js
    var aRouteJs = ['./src/js/*'];
    var oRouteJs = {
        'src/js/dist/main.min.js': ['src/js/*.js']
    };

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed', noCache: true
                },
                files: [{
                    expand: true,
                    cwd:    "src/sass/",
                    src:    ["*.sass"],
                    dest: "src/css/dist/",
                    ext:    ".min.css"
                }]
            }
        },

        handlebars: {
          compile: {
            options: {
              namespace: 'Hbs'
            },
            files: oRouteHbs
          }
        },

        uglify: {
            dev: {
                options: {
                    sourceMap: true
                },
                files: oRouteJs
            }
        },

        processpy: {
            rts: [{
                folder: './pageTemplates',
                search: '<<ROOT-DIR>>',
                replace: '<<DIR>>'
            },{
                folder: './pages',
                search: '<<ROOT-DIR>>',
                replace: '<<DIR>>'
            }]
        },

        watch: {
            files: ['*.*'],
            options: {
                nospawn: true,
                livereload: {
                    host: 'localhost',
                    port: 35729
                }
            },
            task_py: {
                files: aRoutePy,
                tasks: ['process-html']
            },
            task_log: {
                files: aLog
            },
            task_sass: {
                files: aRouteSass,
                tasks: ['sass']
            },
            task_handlebars: {
                files: aRouteHbs,
                tasks: ['handlebars']
            },
            task_js:{
                files: aRouteJs,
                tasks: ['uglify']
            }
        }
        
    });

    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-processpy');
};