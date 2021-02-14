import gulp from 'gulp'
import browserSync from 'browser-sync'
import rimraf from 'rimraf'

const { watch, src, dest, series } = gulp

const cleanBuild = done => {
  rimraf.sync('./packages/front-vanilla/public/build')
  done()
}

const copyToDest = done => {
  src('./packages/front-vanilla/css/*.css')
    .pipe(dest('./packages/front-vanilla/public/build'))
    .pipe(browserSync.stream())
  src('./packages/front-vanilla/js/*.js')
    .pipe(dest('./packages/front-vanilla/public/build'))
    .pipe(browserSync.stream())
  done()
}

const commonGulpfile = packagePath => {
  const publicDir = packagePath + '/public'
  const htmlFiles = packagePath + '/public/*.html'
  const jsFiles = packagePath + '/js/*.js'
  const cssFiles = packagePath + '/css/*.css'

  browserSync.init({
    server: publicDir
  })

  watch(cssFiles, copyToDest)
  watch(jsFiles, copyToDest)
  watch(htmlFiles).on('change', browserSync.reload)
}

export const vanilla = series(
  cleanBuild,
  copyToDest,
  commonGulpfile.bind(this, './packages/front-vanilla')
)
