import gulp from 'gulp'
import browserSync from 'browser-sync'

const { watch, series } = gulp

const commonGulpfile = done => {
  browserSync.init({
    server: './public'
  })

  watch('./public/*.css').on('change', browserSync.stream)
  watch('./public/*.js').on('change', browserSync.stream)
  watch('./public/*.html').on('change', browserSync.reload)
  done()
}

export default series(commonGulpfile)
