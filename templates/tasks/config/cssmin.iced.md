
# Compress CSS files

Minifies css files and places them into `.tmp/public/min` directory.

For usage docs see: [Github](https://github.com/gruntjs/grunt-contrib-cssmin)

    module.exports = (grunt) ->
      grunt.config.set "cssmin",
        dist:
          src: [".tmp/public/concat/production.css"]
          dest: ".tmp/public/min/production.min.css"

      grunt.loadNpmTasks "grunt-contrib-cssmin"
