const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");

const compileSass = () =>
   src("src/css/*.scss")
   .pipe(
       sass({
           outputStyle: "expanded"
       })
   )
   .pipe(dest("dest/css"));

const watchSassFiles = () => 
  watch("src/css/*.scss", compileSass);

const compilePug = () =>
   src("src/*.pug")
   .pipe(
       pug({
           pretty: true
       })
   )
   .pipe(dest("dest"));

const watchPugFiles = () =>
   watch("src/*.pug", compilePug);

// npx gulpで実行
exports.default = () =>
   watchSassFiles();
   watchPugFiles();