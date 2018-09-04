module.exports = function(grunt) {
    var aRutasSass = ['./src/sass/*'];
    var aRutasJs = ['./src/js/*'];
    var aRutasHbs = ['./src/template/*'];

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
            files: {
              'src/template/js/main.js': ['src/template/*.hbs']
            }
          }
        },

        watch: {
            //Optiones de configuracion.
            options: {
                nospawn: true,
                livereload: true
            },
            tarea_sass: {
                files: aRutasSass,
                tasks: ['sass']
            },
            tarea_handlebars: {
                files: aRutasHbs,
                tasks: ['handlebars']
            },
            tarea_js: {
                files: aRutasJs
            },
            tarea_index: {
                files: ['./index.html']
            }
        }
        
    });
    
    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
};