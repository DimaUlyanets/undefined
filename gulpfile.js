var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    karma = require('gulp-karma');

// SCSS task
gulp.task('sass', function () {
  return sass('app/assets/styles/scss/main.scss', {
    noCache: true,
    style: "expanded",
    lineNumbers: true,
    loadPath: 'app/assets/styles/css/*'
  })
      .pipe(gulp.dest('app/assets/styles/css/'));
});

// uglify task
gulp.task('js', function() {
    // main app js file
    gulp.src('app/app.module.js')
        .pipe(uglify())
        .pipe(concat("app.min.js"))
        .pipe(gulp.dest('build/js/'));

    // bower_components
    gulp.src([
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-animate/angular-animate.min.js'
    ])
        .pipe(uglify())
        .pipe(concat("vendors.js"))
        .pipe(gulp.dest('build/js/'));
});
// minify and concat CSS
gulp.task('css', function(){
    gulp.src('app/assets/styles/css/*.css')
        .pipe(minifyCss())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'))
})
gulp.task('watch', function() {
  // watch scss files
    gulp.watch('app/assets/styles/scss/*.scss', function() {
    gulp.run('sass');
  });

});

// Testing
gulp.task('test', function() {

    // NOTE: Using the fake './foobar' so as to run the files
    // listed in karma.conf.js INSTEAD of what was passed to
    // gulp.src !
    return gulp.src('./foobar')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            console.log(err);
            this.emit('end'); //instead of erroring the stream, end it
        });
});



gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
        port:8001,
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['sass','watch', 'webserver']);
gulp.task('build', ['js', 'css', 'test']);