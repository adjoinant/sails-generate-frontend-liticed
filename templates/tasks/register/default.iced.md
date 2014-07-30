    module.exports = (grunt) ->
      grunt.registerTask 'default',
        [ 'compileAssets', <%- linker ? "'linkAssets', " : '' %> 'watch']
