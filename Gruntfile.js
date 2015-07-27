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
            site: '_site/*',
            package: [
                '_site/node_modules',
                '_site/Gruntfile.js',
                '_site/LICENSE',
                '_site/package.json',
                '_site/bower.json',
                '_site/README.md',
                '_site/css/*.css',
                '!_site/css/*.min.*.css',
                '_site/scripts/*.js',
                '!_site/scripts/*.min.*.js'
            ]
        },
        filerev: {
            site: {
                src: [
                    '_site/css/**/*.min.css',
                    '_site/scripts/**/*.min.js'
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
                    '_site'
                ],
                blockReplacements: {
                    pagesCss: function (block) {
                        return block.raw.reduce(function(prevLine, currLine) {
                            return (prevLine + '\r\n' + currLine).replace('pagesCss', 'css');
                        });
                    },
                    pagesJs: function (block) {
                        return block.raw.reduce(function(prevLine, currLine) {
                            return (prevLine + '\r\n' + currLine).replace('pagesJs', 'js');
                        });
                    }
                }
            },
            html: [
                '_site/index.html',
                '_site/project/**/*.html'
            ]
        },
        useminPreparePages: {
            html: '_site/project/**/*.html',
            options: {
                root: '_site',
                dest: '_site'
            }
        },
        useminPages: {
            options: {
                assetsDirs: '_site'
            },
            html: '_site/project/**/*.html'
        }
    });

    grunt.registerTask('useminPreparePages', function () {
        var useminPreparePages = grunt.config('useminPreparePages');
        grunt.config.set('useminPrepare', useminPreparePages);
        grunt.task.run('useminPrepare');
    });

    grunt.registerTask('useminPages', function () {
        var useminPages = grunt.config('useminPages');
        grunt.config.set('usemin', useminPages);
        grunt.task.run('usemin');
    });

    grunt.registerTask('serve', ['clean:site', 'shell:jekyll_serve']);

    grunt.registerTask('package', [
        'clean:site',
        'shell:jekyll_build',

        // Bundle Site Level Assets
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'filerev:site',
        'usemin',

         // Bundle Page Level Assets
        'useminPreparePages',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'filerev:site',
        'useminPages',

        'clean:package'
    ]);

    grunt.registerTask('deploy', [
        'package',
        'gh-pages:deploy'
    ]);
};
