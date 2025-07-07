var gulp = require('gulp');


const main_sass = require('sass');  // Dart Sass API
const sass = require('gulp-sass')(main_sass);

// var sass = require('gulp-sass')(require('sass'));

var del = require('del');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var merge = require('merge-stream');
var babel = require('gulp-babel');
var npmlodash = require('lodash');
var smushit = require('gulp-smushit');
var autoprefixer = require('gulp-autoprefixer');
var fileinclude = require('gulp-file-include');
var browsersync = require('browser-sync');
var htmlmin = require('gulp-htmlmin');
const { parallel } = require('gulp');
var postcss = require('gulp-postcss');
tailwindcss = require('tailwindcss');

// =======================================================
// ----------- START: saasable Theme Configuration -----------
// =======================================================

const preset_theme = 'preset-ai'; // [ preset-<< theme_name >> ]
const dark_layout = 'false'; // [ false , true ]
const rtl_layout = 'false'; // [ false , true ]
const version = 'v1.0.0';

if (rtl_layout == 'true') {
  var rtltemp = 'rtl';
} else {
  var rtltemp = 'ltr';
}

if (dark_layout == 'true') {
  var darklayouttemp = 'dark';
} else {
  var darklayouttemp = 'light';
}

const layout = {
  pc_preset_theme: preset_theme,
  pc_dark_layout: dark_layout,
  pc_rtl_layout: rtl_layout,
  pc_theme_version: version,
  bodySetup:
    'class="' +
    preset_theme +
    '" data-pc-direction="' +
    rtltemp +
    '" dir="' +
    rtltemp +
    '" data-pc-theme="' +
    darklayouttemp +
    '"'
};

// =======================================================
// ----------- END: saasable Theme Configuration -----------
// =======================================================

// all paths setup
const path = {
  src: {
    html: 'src/html/**/*.html',
    css: 'src/assets/scss/*.scss',
    layoutjs: 'src/assets/js/*.js',
    pagesjs: 'src/assets/js/**/*.js',
    images: 'src/assets/images/**/*.{jpg,png}'
  },
  destination: {
    html: 'dist',
    css: 'dist/assets/css',
    layoutjs: 'dist/assets/js',
    pagesjs: 'dist/assets/js',
    images: 'dist/assets/images'
  }
};

//  [ common ] task start
//  [ browser reload ] start
gulp.task('browsersync', function () {
  browsersync.init({
    server: {
      baseDir: 'dist/'
    }
  });
});
//  [ browser reload ] end

gulp.task('cleandist', function (callback) {
  del.sync(['dist/*/']);
  callback();
});
//  [ common ] task end

// =======================================================
// ----------- START: Development tasks -----------
// =======================================================
//  [ scss compiler ] start
gulp.task('tailwind-scss', function () {
  // main style css
  return gulp
    .src(path.src.css)
    .pipe(sass())
    .pipe(postcss())
    .pipe(gulp.dest(path.destination.css));
});
//  [ scss compiler ] end

//  [ Copy assets ] start
gulp.task('build-node-modules', function () {
  var required_libs = {
    js: [
      'node_modules/@popperjs/core/dist/umd/popper.min.js',
      'node_modules/tiny-slider/dist/min/tiny-slider.js',
      'node_modules/vanilla-marquee/dist/vanilla-marquee.min.js',
      'node_modules/motion/dist/motion.js',
    ],
    css: [
      'node_modules/tiny-slider/dist/tiny-slider.css'
    ]
  };
  npmlodash(required_libs).forEach(function (assets, type) {
    if (type == 'css') {
      gulp.src(assets).pipe(gulp.dest('dist/assets/css/plugins'));
    } else {
      gulp.src(assets).pipe(gulp.dest('dist/assets/js/plugins'));
    }
  });
  var cpyassets = gulp.src(['src/assets/**/*.*', '!src/assets/scss/**/*.*']).pipe(gulp.dest('dist/assets'));
  return merge(cpyassets);
});
//  [ Copy assets ] end

//  [ build html ] start
gulp.task('build-html', function () {
  return gulp
    .src(path.src.html)
    .pipe(
      fileinclude({
        context: layout,
        prefix: '@@',
        basepath: '@file',
        indent: true
      })
    )
    .pipe(gulp.dest(path.destination.html));
});
//  [ build html ] end

//  [ build js ] start
gulp.task('build-js', function () {
  var layoutjs = gulp.src(path.src.layoutjs).pipe(gulp.dest(path.destination.layoutjs));
  var pagesjs = gulp.src(path.src.pagesjs).pipe(gulp.dest(path.destination.pagesjs));

  return merge(layoutjs, pagesjs);
});
//  [ build js ] end

//  [ watch ] start
gulp.task('watch', function () {
  gulp.watch('tailwind.config.js', gulp.series('tailwind-scss')).on('change', browsersync.reload);
  gulp.watch('tailwind_plugins/**/*.js', gulp.series('tailwind-scss')).on('change', browsersync.reload);
  gulp.watch('src/assets/scss/**/*.scss', gulp.series('tailwind-scss')).on('change', browsersync.reload);
  gulp.watch('src/assets/scss/**/*.css', gulp.series('tailwind-scss')).on('change', browsersync.reload);
  gulp.watch('src/assets/js/**/*.js', gulp.series('build-js')).on('change', browsersync.reload);
  gulp.watch('src/html/**/*.html', gulp.series('build-html')).on('change', browsersync.reload);
  gulp.watch('src/html/**/*.html', gulp.series('tailwind-scss')).on('change', browsersync.reload);
});
//  [ watch ] start
const compile = parallel('browsersync', 'watch');
//  [ Default task ] start
gulp.task('default', gulp.series('cleandist', 'build-node-modules', 'tailwind-scss', 'build-js', 'build-html', compile));
//  [ Default task ] end

// =======================================================
// ----------- END: Development tasks -----------
// =======================================================

// =======================================================
// ----------- START: Production mode tasks -----------
// =======================================================

//  [ css minify ] start
gulp.task('tailwind-min-scss', function () {
  // main style css
  return gulp.src(path.src.css)
    .pipe(sass())
    .pipe(postcss())
    .pipe(gulp.dest(path.destination.css));
});
//  [ css minify ] end

//  [ min-js ] start
gulp.task('min-js', function () {
  var layoutjs = gulp.src(path.src.layoutjs).pipe(uglify()).pipe(gulp.dest(path.destination.layoutjs));
  var pagesjs = gulp.src(path.src.pagesjs).pipe(babel()).pipe(uglify()).pipe(gulp.dest(path.destination.pagesjs));
  return merge(layoutjs, pagesjs);
});
//  [ min-js ] end

//  [ minify html ] start
gulp.task('min-html', function () {
  return gulp
    .src(path.src.html)
    .pipe(
      fileinclude({
        context: layout,
        prefix: '@@',
        basepath: '@file',
        indent: true
      })
    )
    .pipe(gulp.dest(path.destination.html));
});
//  [ minify html ] end

//  [ image optimizer ] start
// Function to compress images with retry mechanism
function compressImagesWithRetry(src, dest, retries = 40) {
  return new Promise((resolve, reject) => {
    const stream = gulp
      .src(src)
      .pipe(
        smushit({
          verbose: true // Enable verbose logging for debugging
        })
      )
      .on('error', function (err) {
        console.error('Error during image compression:', err.toString());
        if (retries > 0) {
          // Retry by recursively calling the function with reduced number of retries
          compressImagesWithRetry(src, dest, retries - 1)
            .then(resolve)
            .catch(reject);
        } else {
          // No more retries left, reject the promise
          reject(new Error('Max retries exceeded. Unable to compress image.'));
        }
      });

    stream.on('end', () => resolve());
    stream.pipe(gulp.dest(dest));
  });
}
gulp.task('min-image', function () {
  return compressImagesWithRetry(path.src.images, path.destination.images);
});
//  [ image optimizer ] end

//  [ watch minify ] start
gulp.task('watch-minify', function () {
  gulp.watch('src/assets/scss/**/*.scss', gulp.series('tailwind-min-scss'));
  gulp.watch('src/assets/js/**/*.js', gulp.series('min-js'));
  gulp.watch('src/html/**/*.html', gulp.series('min-html'));
});
//  [ watch minify ] start

// build in production mode
gulp.task('build-prod', gulp.series('cleandist', 'build-node-modules', 'tailwind-min-scss', 'min-js', 'min-html'));
// =======================================================
// ----------- END: Production mode tasks -----------
// =======================================================
