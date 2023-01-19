// var gulp = require('gulp');
// const sass = require("gulp-sass")(require("sass"));

// gulp.task('sass', function () { 
//     gulp
//       .src("src/scss/*.scss")
//       .pipe(sass().on("error", sass.logError))
//       .pipe(gulp.dest("dist/css"));
//       done()
// });


// // gulp.task("watch", function () {
// //   gulp.watch("src/scss/*.scss", gulp.task("sass"));
// // });

// gulp.task("watch", function () {
//   gulp.watch("src/**/*.scss", gulp.task("sass"));
// });

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("watch", function () {
  gulp.watch("./src/scss/*.scss", gulp.series("sass"));
});