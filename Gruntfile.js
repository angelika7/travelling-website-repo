module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      cssmin: {
        target: {
            files: [{
                expand: true,
                cwd: 'css',
                src: ['style.prefix.css'],
                dest: 'css',
                ext: '.min.css'
            }]
        }
      },
    }),
    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    

    grunt.registerTask('default', ['cssmin']);
}