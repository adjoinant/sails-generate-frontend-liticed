    module.exports = (grunt) ->
      grunt.registerTask "syncAssets", [
        "jst:dev"
        "less:dev"
        "sync:dev"
        "coffee:dev"
      ]
