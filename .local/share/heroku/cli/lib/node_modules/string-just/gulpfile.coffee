gulp = require 'gulp'
$ = do require 'gulp-load-plugins'
tsd = require 'tsd'

gulp.task 'definition', ->
  api = new tsd.API new tsd.Context
  api.readConfig().then ->
    api.reinstall tsd.Options.fromJSON saveToConfig: true

gulp.task 'compile', ->
  gulp.src 'src/**/*.ts'
    .pipe $.plumber()
    .pipe $.tsc()
    .pipe gulp.dest 'lib'

gulp.task 'testCompile', ->
  gulp.src 'test/**/*.test.ts'
    .pipe $.plumber()
    .pipe $.tsc()
    .pipe gulp.dest '.tmp'

gulp.task 'test', ['testCompile'], ->
  gulp.src '.tmp/test/**/*.js'
    .pipe $.mocha()
