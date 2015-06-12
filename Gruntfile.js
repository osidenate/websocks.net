'use strict';

module.exports = function(grunt) {

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
            jekyll: {
                command: 'jekyll build'
            }
        },
        clean: {
            site: [
                '_site/node_modules',
                '_site/Gruntfile.js',
                '_site/LICENSE',
                '_site/package.json',
                '_site/README.md'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('deploy', [
        'shell:jekyll',
        'clean:site',
        'gh-pages:deploy'
    ]);
};
