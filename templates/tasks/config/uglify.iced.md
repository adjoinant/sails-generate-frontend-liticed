
# Minify files with UglifyJS

Minifies client-side javascript `assets`.

For usage docs see: [Github](https://github.com/gruntjs/grunt-contrib-uglify)

    module.exports = (grunt) ->
      grunt.config.set "uglify",
        dist:
          src: [".tmp/public/concat/production.js"]
          dest: ".tmp/public/min/production.min.js"

      grunt.loadNpmTasks "grunt-contrib-uglify"
