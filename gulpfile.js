// Include gulp
var gulp = require('gulp'); 
var gutil = require('gulp-util');

// Include plugins
var preprocess = require('gulp-preprocess');


gulp.task('html', function() {
    try {
        if (typeof(process.env.NODE_ENV) === 'undefined') throw "NODE_ENV undefined"

        gulp.src('./app/src/*.html')
            .pipe(preprocess(context))
            .pipe(gulp.dest('./dist/'))
    }
    catch(err) {
        gutil.log("EnvironmentError: " + err)
    }
});
 
gulp.task('scripts', function() {
    try {
        if (typeof(process.env.NODE_ENV) === 'undefined') throw "NODE_ENV undefined"

        gulp.src(['./app/src/*.js'])
            .pipe(preprocess())
            .pipe(gulp.dest('./dist/'))
    }
    catch(err) {
        gutil.log("EnvironmentError: " + err)
    }

});

// Sets environment for desktop build
gulp.task('x86', function() {
    gutil.log("Setting TARGET to 'x86'...........done");
    process.env.TARGET = 'x86';
});

// Sets environment for mobile build
gulp.task('phone', function() {
    gutil.log("Setting TARGET to 'phone'...........done");
    process.env.TARGET = 'phone';
});

// Sets environment for website build
gulp.task('web', function() {
    gutil.log("Setting TARGET to 'web'...........done");
    process.env.TARGET = 'web';
});

// Default Task
gulp.task('default', ['x86', 'html', 'scripts']);

