# Robert Cook Goods — 上传与部署

这是一份整理好的网站源码，可用于 GitHub → Vercel 部署。无需修改代码或重新填写联系方式。

## 已配置的信息

- 品牌：Robert Cook Goods
- 网站主题：钴蓝、白色与明黄（2026-11-04全新重做）
- 联系人：Robert Andrew Cook
- WhatsApp：+1 848 458 0396
- 地址：5070 Huntshire Ln SW, Lilburn, GA 30047-7031, Gwinnett County, United States
- 预设域名：robertcookgoods.com
- 24 款全新家居与办公日用品，支持分类搜索、产品详情、询价清单和 WhatsApp 消息预填。

## 1. 上传到 GitHub

把**本文件夹里面的文件和子文件夹**上传到 GitHub 仓库根目录。

请确认仓库最外层能直接看到 `package.json`、`package-lock.json`、`app/`、`components/`、`lib/` 和 `public/`。

不要只上传 ZIP 压缩包，也不需要上传 `node_modules` 或 `.next`。ZIP 仅用于下载和解压。

如果你把整个 `Robert-Cook-Goods-GitHub-Upload` 文件夹上传成了仓库内的子目录，下一步应在 Vercel 的 Root Directory 选择这个子目录。

## 2. 在 Vercel 导入仓库

选择这个 GitHub 仓库，使用以下设置：

| 项目 | 设置 |
| --- | --- |
| Framework Preset | Next.js |
| Root Directory | `./`，或实际包含 package.json 的子目录 |
| Build Command | 自动识别；如需手填，使用 `npm run build` |
| Output Directory | 保持 Next.js 默认设置 |
| Install Command | 自动识别；如需手填，使用 `npm ci` |

点击 Deploy。WhatsApp 号码和地址已有默认值，不需要额外申请接口、API 密钥或配置数据库。

## 3. 正式域名与搜索收录

部署成功后，在 Vercel 项目的 Domains 中添加实际购买的域名，并按该页面显示的记录设置 DNS。本次整理没有购买域名、更改 DNS 或公开部署。

若使用的域名不是 robertcookgoods.com，在 Vercel Environment Variables 中设置 `NEXT_PUBLIC_SITE_URL` 为实际 HTTPS 域名，然后重新部署。

网站保留了预览阶段的禁止收录设置。正式域名连接完成并准备公开收录时，在 Vercel 的 **Production** 环境添加：

```text
NEXT_PUBLIC_SITE_LIVE=true
```

随后重新部署，搜索收录配置才会生效。测试阶段保持默认即可。

## 可选配置

默认号码为用户提供的 Robert 接收号码。只有需要替换时，才设置：

```text
NEXT_PUBLIC_WHATSAPP_NUMBER=18484580396
NEXT_PUBLIC_SITE_URL=https://robertcookgoods.com
```

号码使用完整国际格式的纯数字，不包含加号或空格。修改公开环境变量后需重新构建、部署。`.env.example` 为本地参考文件，不是线上必须配置项。

客户点击 WhatsApp 按钮时会打开预填消息，仍由客户自行点击发送。网站不自动发消息、不收取银行卡信息，也没有在线支付系统。

## 本地运行与维护

```sh
npm ci
npm run dev
```

本地地址：http://127.0.0.1:3031 。检查构建：

```sh
npm run lint
npm run build
npm run typecheck
```

联系方式集中在 `lib/site.ts`，产品信息在 `lib/products.ts`，图片在 `public/images/`。字体许可证在 `public/fonts/`。

本文件夹仅包含本网站源码、所需图片及字体许可证，不包含开发缓存、安装好的依赖、预览截图、测试报告或设计技能文件。

## 官方部署说明

- https://vercel.com/docs/frameworks/full-stack/nextjs
- https://vercel.com/docs/project-configuration


## 2026-11-04 redesign

24 new products and 24 different local photographs. Categories: Workspace, Home & living, Daily rituals (8 each). All previous product images, editorial images and unused fonts have been removed from this package.

When replacing an existing repository, replace the complete source with this folder. Remove the old public/products and public/editorial folders rather than leaving their old assets online.
