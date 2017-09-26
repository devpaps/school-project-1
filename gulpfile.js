let gulp = require('gulp');
    sass = require('gulp-sass');







gulp.task('sass', function(){
  return gulp.src('./ex-uppgift/sass/styles.sass')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./ex-uppgift/css/style.css'))
});