import { Plugin } from '@nuxt/types'

function getClassName(argument: unknown): string | number | null {
  if (argument == null) return null

  if (typeof argument === 'string' || typeof argument === 'number') {
    return argument
  }

  if (Array.isArray(argument) && argument.length !== 0) {
    return argument.map(getClassName).join(' ')
  }

  if (typeof argument === 'object' && argument != null) {
    for (const [key, value] of Object.entries(argument)) {
      return value ? key : null
    }
  }

  return null
}

function classNames() {
  const classNames = new Set<string | number>()

  for (const argument of arguments) {
    const className = getClassName(argument)
    className && classNames.add(className)
  }

  return Array.from(classNames).join(' ')
}

const classNamesPlugin: Plugin = (_ctx, inject) => {
  inject('classNames', classNames)
}

export default classNamesPlugin
