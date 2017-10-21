const gulp            = require('gulp');
      sass            = require('gulp-sass');
      pug             = require('gulp-pug');
      autoprefixer    = require('gulp-autoprefixer');
      browserSync     = require('browser-sync').create();







gulp.task('sass', () => {
gulp.src('./assets/sass/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./assets/css/dist'))
});

gulp.task('pug', () => {
gulp.src('./*.pug')
      .pipe(pug())
      .pipe(gulp.dest('./'))
  });


gulp.task('autoprefix', () =>
gulp.src('./assets/css/*.css')
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

gulp.task('serve', ['browserSync', 'sass'],() => {
    gulp.watch('./*.pug', browserSync.reload);
    gulp.watch('./assets/sass/*.sass', browserSync.reload);
    gulp.watch('./assets/sass/*.sass', ['sass']);
    gulp.watch('./assets/sass/*.sass', ['autoprefix']);
    gulp.watch('./*.pug', ['pug']);

  });