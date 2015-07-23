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
            jekyll_build: {
                command: 'jekyll build'
            },
            jekyll_serve: {
                command: 'jekyll serve'
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

    grunt.registerTask('serve', ['shell:jekyll_serve']);

    grunt.registerTask('deploy', [
        'shell:jekyll_build',
        'clean:site',
        'gh-pages:deploy'
    ]);
};
