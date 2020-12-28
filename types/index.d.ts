import { NuxtAppOptions } from '@nuxt/types'

export type ClassNamesFunction = (...args: any[]) => string

declare module "@nuxt/types" {
  interface Context {
    $classNames: ClassNamesFunction
  }

  interface NuxtAppOptions {
    $classNames: ClassNamesFunction
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $classNames: ClassNamesFunction
  }
}
