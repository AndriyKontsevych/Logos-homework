const gulp = require("gulp");
const scss = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("sass-compile", function () {
  gulp.src("./styles/scss/*.scss")
  .pipe(sourcemaps.init())
  .pipe(scss().on("error", scss.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("css"));
});
