import gulp from 'gulp'
import browserSync from 'browser-sync'

const { watch } = gulp

const commonGulpfile = packagePath => {
  const publicDir = packagePath + '/public'
  const allFiles = packagePath + '/public/*.{html,css}'

  browserSync.init({
    server: publicDir
  })

  watch(allFiles).on('change', browserSync.reload)
}

export const vanilla = commonGulpfile.bind(this, './packages/front-vanilla')
