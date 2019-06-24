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

    // load all grunt tasks
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
                    dest: "src/css/",
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
            load_js:{
                files: aRouteJs
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
            fs.readFile(sFileLogs, 'utf8', function(err, data){
                if (!err) {
                    let oDate = new Date();
                    /*let iHour = oDate.getHours();
                    let iMinutes = oDate.getMinutes();
                    let iSeconds = oDate.getSeconds();*/

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
    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
};