// / <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'postcss-import'
declare module 'tailwindcss'
declare module 'tailwindcss/nesting'
declare module 'rollup-plugin-external-globals'

interface IResponse<T = any> {
  code: number;
  message: string;
  data: T;
  success:boolean;
}