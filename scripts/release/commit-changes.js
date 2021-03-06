import chalk from 'chalk'
import execa from 'execa'

const { log } = console
const dryRun = process.argv.includes('--dry-run')

export const commitChanges = async (cwd, packageName, version) => {
  if (dryRun) {
    log(chalk`{yellow Skipping Git commit}`)
    return
  }

  log(chalk`{blue Committing} CHANGELOG.md, package.json`)
  let params = ['add', cwd]
  await execa('git', params)

  params = ['commit', '-m', `chore(release): ${packageName} v${version}`]
  await execa('git', params)
}
