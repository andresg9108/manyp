const fs = require('fs');

module.exports = function(grunt) {
    // Log
    var aLog = ['./processpy.log'];

    // Python
    var aRoutePy = [
        './pages/*',
        './pageTemplates/*'
    ];

    // Handlebars
    var aRouteHbs = [
        './src/template/*', 
        './src/template/widget/users/*'
    ];
    var oRouteHbs = {
        'src/template/dist/main.min.js': ['src/template/*.hbs'],
        'src/template/dist/widget/users.min.js': ['src/template/widget/users/*.hbs']
    };
    
    // Sass
    var aRouteSass = ['./src/sass/*'];

    // Js
    var aRouteJs = [
        './src/js/*', 
        './src/js/pages/index/*', 
        './src/js/widget/users/*' 
    ];
    var oRouteJs = {
        'src/js/dist/main.min.js': ['src/js/*.js'],
        'src/js/dist/pages/index.min.js': ['src/js/pages/index/*.js'],
        'src/js/dist/widget/users.min.js': ['src/js/widget/users/*.js']
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
            task_log: {
                files: aLog
            },
            task_py: {
                files: aRoutePy,
                tasks: ['process-html']
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
};