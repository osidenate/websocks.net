'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        'gh-pages': {
            'deploy': {
                options: {
                    branch: 'gh-pages',
                    base: '_site'
                },
                src: ['**']
            }
        },
        shell: {
            jekyll_build: {
                command: 'jekyll build --drafts'
            },
            jekyll_serve: {
                command: 'jekyll serve --drafts'
            }
        },
        clean: {
            site: [
                '_site/node_modules',
                '_site/Gruntfile.js',
                '_site/LICENSE',
                '_site/package.json',
                '_site/bower.json',
                '_site/README.md'
            ]
        },
        filerev: {
            site: {
                src: [
                    '_site/css/**/*.css',
                    '_site/scripts/**/*.js'
                ]
            }
        },
        useminPrepare: {
            html: '_site/index.html',
            options: {
                dest: '_site'
            }
        },
        usemin: {
            options: {
                assetsDirs: [
                    '_site/css',
                    '_site/scripts'
                ]
            },
            html: [
                '_site/index.html',
                '_site/project/**/*.html'
            ]
        },
        useminPrepareProjects: {
            html: '_site/project/**/*.html',
            options: {
                dest: '_site'
            }
        },
        useminProjects: {
            options: {
                assetsDirs: [
                    '_site/css',
                    '_site/scripts'
                ]
            },
            html: [
                '_site/project/**/*.html'
            ]
        }
    });

    grunt.registerTask('useminPrepareProjects', function () {
        var useminPrepareProjects = grunt.config('useminPrepareProjects');
        grunt.config.set('useminPrepare', useminPrepareProjects);
        grunt.task.run('useminPrepare');
    });

    grunt.registerTask('useminProjects', function () {
        var useminProjects = grunt.config('useminProjects');
        grunt.config.set('usemin', useminProjects);
        grunt.task.run('usemin');
    });

    grunt.registerTask('serve', ['shell:jekyll_serve']);

    grunt.registerTask('package', [
        'shell:jekyll_build',

        // Bundle Site Level Assets
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'usemin',

        // Bundle Page Level Assets
        'useminPrepareProjects',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'useminProjects',

        'clean:site'
    ]);

    grunt.registerTask('deploy', [
        'package',
        'gh-pages:deploy'
    ]);
};
