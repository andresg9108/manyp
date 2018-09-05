module.exports = function(grunt) {
    var aRoutePython = [
        './pages/*',
        './settings/*'
    ];
    var aRoutePythonWeb = [
        './web/*'
    ];
    var aRouteSass = ['./src/sass/*'];
    var aRouteHbs = ['./src/template/*'];
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
            files: {
              'web/src/template/main.js': ['src/template/*.hbs']
            }
          }
        },

        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            load_python: {
                files: aRoutePython,
                tasks: ['tPython']
            },
            load_python_web: {
                files: aRoutePythonWeb
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

    grunt.registerTask('tPython', function(){
        grunt.util.spawn({
            cmd: 'python',
            args: ['load.py','-l'],
            opts: {stdio: 'inherit'},
        });
    });
    
    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
};