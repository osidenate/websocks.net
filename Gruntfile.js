'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        'gh-pages': {
            'deploy': {
                options: {
                    branch: 'gh-pages',
                    base: '_site'
                }
            }
        },
        shell: {
            jekyll: {
                command: 'jekyll build'
            }
        },
        copy: {
            package: {
                src: '_site/*',
                dest: './'
            }
        },
        clean: {
            package: [
                '_includes',
                '_layouts',
                '_posts',
                '_sass',
                'css',
                '_config.yml',
                'about.md',
                'feed.xml',
                'LICENSE',
                'README.md'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('package', [
        'shell:jekyll',
        'copy:package',
        'clean:package'
    ]);
};
