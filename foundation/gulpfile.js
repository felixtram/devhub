var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    // For windows path
     .pipe(gulp.dest('C:/MAMP/htdocs/vantiv/sites/all/themes/clean7/foundation_clean7/css')
         .on('error', $.sass.logError))
//Path for the angular components
              .pipe(gulp.dest('angularcomponents/src/css')
         .on('error', $.sass.logError))

    // For Mac path
   // .pipe(gulp.dest('/Applications/MAMP/htdocs/vantiv/sites/all/themes/clean7/foundation_clean7/css')
   //   .on('error', $.sass.logError))

    // For foundation project
    .pipe(gulp.dest('css')
      .on('error', $.sass.logError));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
