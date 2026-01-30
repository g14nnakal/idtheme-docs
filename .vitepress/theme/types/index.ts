export type IconMode = string | { light: string; dark: string }

export type SizeType = null | string | number

export type LinkType = string | undefined

export type RelType = string | undefined

export type TargetType = string | undefined

export type StyleType = string | undefined

export type IconType =
  | string
  | { icon: string; color?: IconMode }
  | { light: string; dark: string; color?: IconMode }
  | { svg: IconMode }

export type ImageType =
  | string
  | { src: string; crop?: boolean; [prop: string]: any }
  | { light: string; dark: string; crop?: boolean; [prop: string]: any }

export interface LinkItem {
  name: string
  desc?: string
  link?: LinkType
  linkText?: string
  rel?: RelType
  target?: TargetType
  icon?: IconType
  image?: ImageType
  size?: SizeType
  style?: StyleType
}