enum IMenubarStatus {
  PCE, // 电脑展开
  PCN, // 电脑合并
  PHE, // 手机展开
  PHN // 手机合并
}
interface ISetting {
  theme: number
  showTags: boolean
  color: {
    primary: string
  }
  usePinyinSearch: boolean
  mode: 'horizontal' | 'vertical' // 导航模式
  isPhone:boolean
}
interface IMenubar {
  status: IMenubarStatus
  menuList: Array<IMenubarList>
  isPhone: boolean
}
interface IUserInfo {
  name: string,
  avatar: string,
  role: string[]
}
interface ITags {
  tagsList: Array<ITagsList>
  cachedViews: string[]
}
interface IStatus {
  isLoading: boolean
  ACCESS_TOKEN: string,
  module: string
}
interface ILayout {
  // 左侧导航栏
  menubar: IMenubar
  // 用户信息
  userInfo: IUserInfo
  // 标签栏
  tags: ITags
  setting: ISetting
  status: IStatus
}
interface IMenubarList {
  parentId?: number | string
  id?: number | string
  name: string
  path: string
  redirect?: string | { name: string }
  meta: {
    icon: string
    title: string
    permission?: string[]
    activeMenu?: string // 路由设置了该属性，则会高亮相对应的侧边栏
    noCache?: boolean // 页面是否不缓存
    hidden?: boolean // 是否隐藏路由
    alwaysShow?: boolean // 当子路由只有一个的时候是否显示当前路由
    name?: string
  }
  component: (() => Promise<typeof import('*.vue')>) | string
  children?: Array<IMenubarList>
}

interface ITagsList {
  name: string
  title: string
  path: string
  isActive: boolean
}