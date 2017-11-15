var gulp = require("gulp");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssMixins = require("postcss-mixins");
var cssHexRgba = require("postcss-hexrgba");
var cssNested = require("postcss-nested");
var cssVars = require("postcss-simple-vars");
var cssImport = require("postcss-import");




gulp.task("styles", function() {
    return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssMixins, cssVars, cssNested, cssHexRgba, autoprefixer]))
    .on("error", function(errorInfo) {
        console.log(errorInfo.toString());

        this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});