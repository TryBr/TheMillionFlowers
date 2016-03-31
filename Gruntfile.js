module.exports = function(grunt) {

	var mozjpeg = require('imagemin-mozjpeg'); //min images

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		


        //html min
		htmlmin: {                                     // Task
		    dist: {                                      // Target
		      options: {                                 // Target options
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: {                                   // Dictionary of files
		        'main.html': 'main.html'     // 'destination': 'source'
		      }
		    },
		    dev: {                                       // Another target
		      files: {
		        'main.html': 'main.html'
		      }
		    }
		  },

		  //min images
		  imagemin: {                          // Task 
		    dynamic: {                         // Another target 
		      files: [{
		        expand: true,                  // Enable dynamic expansion 
		        cwd: 'img/',                   // Src matches are relative to this path 
		        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
		        dest: 'dist/'                  // Destination path prefix 
		      }]
		    }
		  },

		//min js
		uglify: {
			build: {
				src: [
				"js/vendor/modernizr-2.8.3-respond-1.4.2.min.js",
				"js/vendor/jquery-1.11.2.min.js",
				"js/vendor/bootstrap.min.js",
				"js/vendor/owl.carousel.min.js",
				"js/vendor/wow.min.js",   
				"js/vendor/likely.js",
				"js/vendor/jquery-ui.min.js",
				"js/vendor/moment-with-locales.min.js",
				"js/vendor/bootstrap-datetimepicker.min.js",
				"js/vendor/jquery.maskedinput.min.js",
				"js/main.js"

				],
				dest: 'production/scripts.min.js',
			}
		},
				
		//css min
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			  },
			  target: {
				files: {
				  'production/styles.min.css': [
			        "css/normalize.css",
			        "css/bootstrap.css",
			        "css/bootstrap-theme.min.css",
			        "css/owl.carousel.css",
			        "css/owl.theme.css",
			        "css/owl.transitions.css",
			        "css/animate.css",
			        "css/likely.css",
			        "css/jquery-ui.min.css",
			        "css/jquery-ui.structure.min.css",
			        "css/bootstrap-datetimepicker.css",
			      	"css/main.css"
				  ]
				}
			  }
			},
			
		//watch
		watch: {
			scripts: {
				files: ['js/*.js', 'js/vendor/*.js'],
				tasks: ['uglify', 'cssmin'],
				options: {
					spawn: false,
				},
			}
		}

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');


    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', [
	'uglify',
	'cssmin'
	]);
	
};