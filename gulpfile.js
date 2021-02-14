import gulp from 'gulp'
import browserSync from 'browser-sync'

const { watch } = gulp

export default () => {
  browserSync.init({
    server: './packages/front-vanilla'
  })

  watch('./packages/front-vanilla/*.html').on('change', browserSync.reload)
}
