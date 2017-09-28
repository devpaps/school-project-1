const gulp            = require('gulp');
      sass            = require('gulp-sass');
      pug             = require('gulp-pug');
      autoprefixer    = require('gulp-autoprefixer');
      browserSync     = require('browser-sync').create();







gulp.task('sass', () => {
gulp.src('./assets/sass/style.sass')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./assets/css/'))
});

gulp.task('pug', () => {
gulp.src('./*.pug')
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


gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browserSync', 'sass'],() => {
    gulp.watch('./assets/sass/style.sass', ['sass']);
    gulp.watch('./assets/sass/style.sass', ['autoprefix']);
    gulp.watch('./*.pug', ['pug']);
    gulp.watch('./*.pug', browserSync.reload);
    gulp.watch('./assets/sass/style.sass', browserSync.reload);
  });