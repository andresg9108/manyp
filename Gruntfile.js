module.exports = function(grunt) {
    // Python
    var aRoutePy = [
        './pages/*',
        './settings/*'
    ];

    // Log
    var aLog = ['./manyp.log'];

    // Handlebars
    var aRouteHbs = ['./src/template/*'];
    var oRouteHbs = {
        'web/src/template/main.js': ['src/template/*.hbs']
    };
    
    // Sass
    var aRouteSass = ['./src/sass/*'];

    // Js
    var aRouteJs = ['./src/js/*'];

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            js: {
                expand: true,
                cwd: 'src/',
                src: ["js/*.js"],
                dest: 'web/src/'
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed', noCache: true
                },
                files: [{
                    expand: true,
                    cwd:    "src/sass/",
                    src:    ["*.sass"],
                    dest: "web/src/css/",
                    ext:    ".css"
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

        watch: {
            files: ['*.*'],
            options: {
                nospawn: true,
                livereload: {
                    host: 'localhost',
                    port: 35729
                }
            },
            load_py: {
                files: aRoutePy,
                tasks: ['tPy']
            },
            load_log: {
                files: aLog
            },
            load_sass: {
                files: aRouteSass,
                tasks: ['sass']
            },
            load_handlebars: {
                files: aRouteHbs,
                tasks: ['handlebars']
            },
            load_js: {
                files: aRouteJs,
                tasks: ['copy:js']
            }
        }
        
    });

    grunt.registerTask('tPy', function(){
        grunt.util.spawn({
            opts: {
                stdio: 'inherit'
            },
            cmd: 'python',
            args: ['load.py', '-l'],
        }, function(error, result, code){
            console.log('Running python with grunt [OK]');
        });
    });

    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
};