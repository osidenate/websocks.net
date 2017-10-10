'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        'gh-pages': {
            'deploy': {
                options: {
                    branch: 'gh-pages',
                    base: 'src'
                },
                src: ['**']
            }
        },
        connect: {
            server: {
                options: {
                    base: './src',
                    port: 4000,
                    keepalive: true
                }
            }
        }
    });

    grunt.registerTask('serve', [
        'connect'
    ]);

    grunt.registerTask('deploy', [
        'gh-pages:deploy'
    ]);
};
