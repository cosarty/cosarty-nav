
export {}

declare global {
  const Swiper: any
  interface Window {
    __FINISHED__: boolean // 记录已取 web 数据
    __TITLE__: string | undefined
  }
}
