
Run predefined tasks
====================

Watch for changes on
- files in the `assets` folder
- the `tasks/pipeline.js` file
and re-run the appropriate tasks.

For usage docs see: [Github](https://github.com/gruntjs/grunt-contrib-watch)

    module.exports = (grunt) ->

      grunt.config.set 'watch',
        api:

          # API files to watch:
          files: ['api/**/*']

        assets:

          # Assets to watch:
          files: ['assets/**/*', 'tasks/pipeline.js']

          # When assets are changed:
          tasks: ['syncAssets' <%- linker ? ", 'linkAssets'" : '' %>]

      grunt.loadNpmTasks 'grunt-contrib-watch'
