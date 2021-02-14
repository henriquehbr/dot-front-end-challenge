import gulp from 'gulp'
import browserSync from 'browser-sync'
import rimraf from 'rimraf'

const { watch, src, dest, series } = gulp

const cleanCss = done => {
  rimraf.sync('./packages/front-vanilla/public/build')
  done()
}

const css = done => {
  src('./packages/front-vanilla/src/*.css')
    .pipe(dest('./packages/front-vanilla/public/build'))
    .pipe(browserSync.stream())
  done()
}

const commonGulpfile = packagePath => {
  const publicDir = packagePath + '/public'
  const allFiles = packagePath + '/public/*.{html,css}'

  browserSync.init({
    server: publicDir
  })

  watch(allFiles).on('change', browserSync.reload)
}

export const vanilla = series(cleanCss, css, commonGulpfile.bind(this, './packages/front-vanilla'))
