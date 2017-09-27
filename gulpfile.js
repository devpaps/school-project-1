const gulp            = require('gulp');
      sass            = require('gulp-sass');
      pug             = require('gulp-pug');
      autoprefixer    = require('gulp-autoprefixer');








gulp.task('sass', function(){
  return gulp.src('./assets/sass/style.sass')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./assets/css/'))
});

gulp.task('pug', function(){
    return gulp.src('./index.pug')
      .pipe(pug())
      .pipe(gulp.dest('./'))
  });


gulp.task('autoprefix', () =>
gulp.src('./assets/css/style.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./assets/css/dist'))
);


gulp.task('watch', function(){
    gulp.watch('./assets/sass/style.sass', ['sass']);
    gulp.watch('./assets/sass/style.sass', ['autoprefix']);
    gulp.watch('./index.pug', ['pug']);
  });