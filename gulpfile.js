const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    log = require('gulplog'),
    buffer = require('vinyl-buffer');



gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: 'docs/'
        }
    });
});

gulp.task('js', () => {
  var b = browserify({
      entries: 'src/js/index.js',
      debug: true
    }).transform('babelify', {presets: ["@babel/preset-env"]});

return b.bundle()
  .pipe(source('index.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
      .on('error', log.error)
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('docs'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('servser-reload', () => {
  browserSync.reload({stream: true});
});

gulp.task('watch', () => {
  gulp.watch('src/js/*.js', gulp.parallel('js'));
});

gulp.task('default', gulp.parallel('browser-sync', 'js', 'watch'));