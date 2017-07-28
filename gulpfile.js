/**
 * Created by DanielSilva on 27/07/17.
 */

var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var karmaServer = require('karma').Server;

gulp.task('compilar', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('test', function (done) {
   new karmaServer({
       configFile: __dirname + "/test/karma.config.js",
       singleRun: true,
       action: 'watch'
   }, done).start();
});

gulp.task('default', function () {
   gulp.watch(['src/**/*.ts','test/ts/**/*.ts'],['test']);
});