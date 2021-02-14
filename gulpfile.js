import gulp from 'gulp'
import browserSync from 'browser-sync'

const { watch } = gulp

const commonGulpfile = packagePath => {
  browserSync.init({
    server: packagePath
  })

  const htmlFiles = packagePath + '/*.html'

  watch(htmlFiles).on('change', browserSync.reload)
}

export const vanilla = commonGulpfile.bind(this, './packages/front-vanilla')
