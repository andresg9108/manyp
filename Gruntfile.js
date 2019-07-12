var sFileLogs = './manyp.log';
const fs = require('fs');

module.exports = function(grunt) {
    // Python
    var aRoutePy = [
        './pages/*',
        './settings/*',
        './settings/templates/*'
    ];

    // Log
    var aLog = ['./manyp.log'];

    // Handlebars
    var aRouteHbs = ['./src/template/*'];
    var oRouteHbs = {
        'src/template/dist/main.js': ['src/template/*.hbs']
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

        uglify: {
            dev: {
                options: {
                    sourceMap: true
                },
                files: oRouteJs
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
            task_py: {
                files: aRoutePy,
                tasks: ['tPy']
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

    grunt.registerTask('tPy', function(){
        grunt.util.spawn({
            opts: {
                stdio: 'inherit'
            },
            cmd: 'python',
            args: ['node_modules/processpy/process.py', '-html'],
        }, function(error, result, code){
            fs.readFile(sFileLogs, 'utf8', function(err, data){
                if (!err) {
                    let oDate = new Date();

                    let sWrite = data + '\n';
                    sWrite += oDate+' (Grunt [OK])';
                    fs.writeFile(sFileLogs, sWrite, function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("Grunt [OK]");
                    });
                }
            });
        });
    });

    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};