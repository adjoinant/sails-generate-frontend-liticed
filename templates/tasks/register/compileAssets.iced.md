    module.exports = (grunt) ->
      grunt.registerTask "compileAssets", [
        "clean:dev"
        "jst:dev"
        "less:dev"
        "copy:dev"
        "coffee:dev"
      ]
