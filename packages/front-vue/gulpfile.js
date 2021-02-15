import gulp from 'gulp'
import browserSync from 'browser-sync'
import vueCompiler from 'gulp-vue-compiler'
import rimraf from 'rimraf'

const { watch, src, dest, series } = gulp

const cleanBuild = done => {
  rimraf.sync('./public/build')
  done()
}

const copyToDest = done => {
  src('./src/*.vue')
    .pipe(vueCompiler({ newExtension: 'js' }))
    .pipe(dest('./public/build'))
    .pipe(browserSync.stream())
  done()
}

const commonGulpfile = done => {
  browserSync.init({
    server: './public'
  })

  watch('./src/*.vue', copyToDest)
  watch('./src/*.html').on('change', browserSync.reload)
  done()
}

export default series(cleanBuild, copyToDest, commonGulpfile)
