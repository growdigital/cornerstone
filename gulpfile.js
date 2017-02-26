// Load 'em up
var gulp = require('gulp');
var concat = require('gulp-concat');
var cssnext = require('postcss-cssnext');
var minifyCSS = require('gulp-cssnano');
var minifyCSS = require('gulp-livereload');
var watch = require('gulp-watch');

// Define paths. The order is important
var paths = {
  css: [
    './src/css/settings/variables.css',
    './src/node_modules/normalize-css/normalize.css',
    './src/css/settings/base.css',
    './src/objects/*.css',
    './src/objects/**/*.css',
    './src/objects/**/**/*.css',
    './src/components/*.css',
    './src/components/**/*.css',
    './src/components/**/**/*.css',
    './src/utilities/*.css',
    './src/css/shame.css'
  ],
  move: [
    './src/index.html'
  ]
};

// CSS task
gulp.task('css', function () {
  var processors = [
    cssnext
  ];
  return gulp.src(paths.css)
    .pipe(concat('styles.css'))
    .pipe(postcss(processors))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css/'));
});

// Simple move task
gulp.task('move', function() {
  return gulp.src(paths.move)
    .pipe(gulp.dest('./dist/'));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch(paths.css, ['css']);
  livereload.listen();
});

// Default task
gulp.task('default', [
  'css',
  'move',
  'watch'
]);
