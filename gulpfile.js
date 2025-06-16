const {src,dest,watch,series} = require("gulp");
const sourcemaps = require("gulp-sourcemaps")
const terser = require("gulp-terser")
const concat = require("gulp-concat")


function minifyJS(){
return src("js/*.js")
.pipe(sourcemaps.init())
.pipe(concat("full.js"))
.pipe(terser({
    toplevel: true
}))
.pipe(sourcemaps.write("./"))
.pipe(dest("dist/assets/js"));
}

function watchTask(){
watch("js/*.js",minifyJS)
}


exports.default = series(minifyJS, watchTask);
