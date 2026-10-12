# Stewart & Armstrong Smash Repairs

四页汽车钣金维修官网，使用 Astro + TypeScript 构建。保留已确认的页面设计，公共布局与交互由组件统一维护，构建输出为静态网站。

## 开发

使用 Node.js 24（最低 22.12）：

```sh
npm ci
npm run dev
```

本地地址：`http://127.0.0.1:4173`。

```sh
npm run check         # Astro 与 TypeScript 检查
npm run format:check  # 格式检查
npm run format        # 格式化源码
npm run build         # 构建到 dist/
npm run preview       # 本地预览构建产物
```

## 目录

```text
src/
  pages/          # Home、About、Services、Contact 页面与路由
  layouts/        # 公共 HTML 文档、SEO 元数据、页头与页脚
  components/     # 导航、页脚、服务卡片、地图链接等可复用组件
  data/           # 网站名称、地址、导航等公共配置
  scripts/        # 菜单与复制地址等浏览器交互，使用 TypeScript
  styles/         # 设计变量、基础样式、组件与页面样式
public/
  images/         # 正式页面实际使用的实景图片
.github/
  workflows/      # 自动类型检查、格式检查与构建
```

根目录只保留项目说明、包管理和工具配置。`node_modules/`、`dist/`、`.astro/` 为生成文件，不提交到 Git。预览截图、实验稿和原始素材全集不放入应用目录；旧方案可通过历史提交查阅。

## 维护约定

- 按 Astro 的页面、组件、布局分层组织源码：https://docs.astro.build/en/basics/project-structure/
- 新页面放在 `src/pages/`，通过 `SiteLayout` 共用页面外壳。
- 在 `src/data/site.ts` 修改公共店铺信息与导航；页面专属内容在对应页面维护。
- 共用交互放在对应组件与 `src/scripts/`，不在每个页面复制一份。
- 颜色、间距和圆角变量在 `src/styles/tokens.css`。
- 沿用 `/about.html`、`/services.html`、`/contact.html`，兼容现有链接。构建采用文件形式输出。
- 页面验证不在仓库保存截图。

## 部署

执行 `npm ci && npm run check && npm run build`，将 `dist/` 发布到支持静态文件的托管服务。无需服务器运行时，也没有后端接口。

## 上线前待确认

电话号码、邮箱、营业时间、正式 Logo、服务描述与图片使用许可仍需店方确认。当前保留设计预览提示；资料确认后可从公共布局移除 `PreviewNotice`。联系页目前提供地图与复制地址，没有询价表单或发送功能。
