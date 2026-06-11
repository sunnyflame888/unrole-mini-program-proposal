# UNROLE 微信小程序产品策划方案

这是一个本地可运行、也可通过 GitHub Pages 分享的 HTML 品牌提案页面，用于内部讨论、视觉确认和合伙人展示。

项目目标不是做普通商城页面，也不是做正式小程序前端，而是呈现：

`UNROLE Season 01 Private Access 高端男装品牌准入系统`

公网预览：

```text
https://sunnyflame888.github.io/unrole-mini-program-proposal/
```

## 如何预览

直接双击 `index.html` 即可打开。

也可以在项目目录启动静态服务：

```bash
python -m http.server 8080
```

然后访问：

```text
http://127.0.0.1:8080/index.html
```

## 项目结构

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
├── IMAGE_PROMPTS.md
└── assets/
    ├── cover-concept.jpg
    ├── private-access-concept.jpg
    ├── home-ui-concept.jpg
    ├── product-ui-concept.jpg
    ├── product-detail-concept.jpg
    ├── product-passport-concept.jpg
    ├── member-pass-concept.jpg
    ├── my-pass-concept.jpg
    └── moodboard-concept.jpg
```

## Concept Image Direction

Concept image 不是普通 UI 截图，也不是电商商品图。它们服务于一个黑色通行仪式：用户不是打开商城，而是进入一个还没有完全开放的高端男装品牌系统。

所有图片必须符合：

- high-end menswear proposal visual
- Private Access system
- black ritual entrance
- brand artifact
- dark editorial atmosphere
- restricted interface
- product archive
- LOW LOGO / STRUCTURE SIGNAL / LOGO WITHDRAWN
- fabric, seam, silhouette, urban space, garment code
- not ecommerce
- not SaaS
- not Web3
- not tech gradient
- not gym ad

## 图片文字规则

图片里不要直接生成中文。

中文必须通过 `index.html` 和 `style.css` 叠加或排版，原因是图片生成模型容易产生乱码、问号和错误字形。图片内部如需文字，只使用短英文、产品编号或符号系统，例如：

```text
UNROLE
PRIVATE ACCESS
PRODUCT ARCHIVE
UAT-01
SFT-01
STRUCTURE SIGNAL
WARDROBE CREDIT ACTIVE
```

如果模型无法保证英文准确，也应留出暗色留白，让 HTML/CSS 真实文字覆盖。

## 如何替换 concept 图

将新图覆盖到 `assets/` 下的固定文件名即可。页面会自动读取同名文件：

```text
assets/cover-concept.jpg
assets/private-access-concept.jpg
assets/home-ui-concept.jpg
assets/product-ui-concept.jpg
assets/product-detail-concept.jpg
assets/product-passport-concept.jpg
assets/member-pass-concept.jpg
assets/my-pass-concept.jpg
assets/moodboard-concept.jpg
```

推荐尺寸：

```text
1170 x 2532
或 390 x 844 的等比例高清版本
```

必须保持微信小程序竖屏比例，不要生成横向海报。

## 替换后检查

替换图片后必须检查：

- 页面中无乱码、问号或错误字符；
- 图片加载成功时，不出现 `ASSET OFFLINE`、文件名提示或浏览器缺图图标；
- 图片加载失败时，只显示高级黑色占位块；
- 图片中不直接生成中文；
- 至少 3 张图能看出男装结构、产品轮廓、面料质感、缝线细节、城市场景或产品编号；
- 页面仍然像 Private Access 黑色通行仪式，而不是普通黑色小程序 UI。

## 必须避免

- 普通商城、电商促销、淘宝货架；
- 优惠券、销量、评价、猜你喜欢、购物车强调；
- 互联网科技风、蓝紫渐变、霓虹扫描；
- Web3 黑客风、NFT 证书感、区块链仪表盘；
- 健身房广告风、运动训练海报；
- 黑金土豪会员中心、积分商城、红包返利；
- 普通完整 iPhone mockup 模板。

## 如何修改文字

主文案在 `index.html` 中。

当前页面故事线：

- `#boot`：黑场开机
- `#brand`：品牌出现
- `#access`：私人准入
- `#opens`：系统展开
- `#archive`：产品档案
- `#reason`：产品理由 / Product Passport
- `#member`：通行权限
- `#my-pass`：身份档案
- `#image-standard`：图片标准
- `#closing`：封闭结尾

文案原则：少解释，多宣言。每一屏只做一个主观点。

## 如何继续扩展为多页面方案

当前版本是长滚动 Proposal Site。后续可拆成：

1. `flow.html`：完整用户进入路径；
2. `access.html`：Private Access 与邀请码状态；
3. `archive.html`：Product Archive 产品档案；
4. `passport.html`：Product Passport 产品数字档案；
5. `member.html`：Member Pass 权限系统；
6. `profile.html`：My Pass 身份档案。
