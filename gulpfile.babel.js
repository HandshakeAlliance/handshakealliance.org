import gulp from "gulp";
import browserSync from "browser-sync";
import del from "del";
import rename from "gulp-rename";
import concat from "gulp-concat";
import terser from "gulp-terser";
import ghPages from "gulp-gh-pages";
import pug from "gulp-pug";
import sourcemaps from "gulp-sourcemaps";

// CSS imports
import postcss from "gulp-postcss";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import precss from "precss";
import cssnano from "cssnano";

const server = browserSync.create();

//So that we can watch for changes in the gulpfile.
gulp.slurped = false;

//This doesn't work lol
const clean = () => del(["dest"]);

const paths = {
  styles: {
    src: "src/css/main.css",
    watch: "src/css/**/*.css",
    dest: "dest/css/"
  },
  scripts: {
    src: "src/scripts/**/*.js",
    dest: "dest/scripts/"
  },
  images: {
    src: "src/img/**/*",
    dest: "dest/img/"
  },
  views: {
    src: "src/views/*.pug",
    watch: "src/views/**/*.pug",
    dest: "dest/"
  },
  misc: {
    src: "src/misc/**.*",
    dest: "dest/"
  }
};

//Internal Functions

//Pug
function views() {
  return gulp
    .src(paths.views.src)
    .pipe(pug())
    .pipe(gulp.dest(paths.views.dest));
}

//JS
function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(concat("main.min.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.dest));
}

//CSS
function css() {
  var plugins = [
    postcssImport(),
    precss(),
    autoprefixer({
      path: ["src/css"]
    }),
    cssnano()
  ];

  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest));
}

function img() {
  return gulp.src(paths.images.src).pipe(gulp.dest(paths.images.dest));
}

function misc() {
  return gulp.src(paths.misc.src).pipe(gulp.dest(paths.misc.dest));
}

//Build must be run beforehand
function ghDeploy() {
  return gulp.src("./dest/**/*").pipe(ghPages());
}

function serve(done) {
  server.init({
    server: {
      baseDir: "./dest",
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
    files: [paths.styles.dest]
  });
  done();
}

function reload(done) {
  server.reload();
  done();
}

//Exported functions
function watch() {
  if (!gulp.slurped) {
    //Rerun our dev command
    gulp.watch("gulpfile.babel.js", gulp.series(dev));
    gulp.watch(paths.views.watch, gulp.series(views, reload));
    gulp.watch(paths.images.src, gulp.series(img, reload));
    gulp.watch(paths.scripts.src, gulp.series(scripts, reload));

    //Don't run reload on CSS as it's hot reloaded by BrowserSync.
    gulp.watch(paths.styles.watch, gulp.series(css));
    gulp.slurped = true;
  }
}

//Build function
const build = gulp.series(clean, gulp.parallel(views, css, scripts, img, misc));

//Deploy Function
const deploy = gulp.series(build, ghDeploy);

//All functions that we export
export { watch, build, deploy };

//Default function that we export
const dev = gulp.series(
  clean,
  gulp.parallel(views, css, scripts, img, misc),
  gulp.parallel(serve, watch)
);

export default dev;
