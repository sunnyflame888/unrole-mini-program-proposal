# UNROLE 微信小程序产品策划方案

这是一个本地可运行的 HTML 品牌提案页面，用于内部讨论、视觉确认和合伙人展示。

当前版本不是普通产品说明页，也不是正式小程序前端，而是一个高端男装品牌 `Season 01 Private Access` 系统提案。

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

## Concept Image Direction

所有 concept 图都必须是微信小程序 UI 竖屏比例，而不是横向海报、品牌大片或普通网页配图。

推荐尺寸：

```text
390 x 844
9:16 portrait mobile UI
```

当前页面引用这些图片：

- `assets/cover-concept.jpg`
- `assets/private-access-concept.jpg`
- `assets/home-ui-concept.jpg`
- `assets/product-ui-concept.jpg`
- `assets/product-detail-concept.jpg`
- `assets/product-passport-concept.jpg`
- `assets/member-pass-concept.jpg`
- `assets/my-pass-concept.jpg`
- `assets/moodboard-concept.jpg`

已经生成的前三张图：

- `cover-concept.jpg`：有暗场场景大片背景，但无人物；前景是 logo + slogan 的小程序启动屏。
- `private-access-concept.jpg`：邀请码准入页面，像门禁仪式，不像登录页。
- `home-ui-concept.jpg`：通过准入后的系统首页，只保留三个入口。

生成后覆盖 `assets/` 下对应文件名即可，HTML 会自动读取。

## 图片判断标准

每张图生成后先问：

- Does it feel like a gate, not a store?
- Does it feel restricted, not promotional?
- Does it hide more than it explains?
- Does the UI feel like an artifact, not a screenshot?
- Does the product feel archived, not listed?
- Does every screen keep the mini program ratio?

必须避免：

- 横向品牌海报比例；
- 普通 iPhone mockup 模板；
- 电商商城首页；
- 促销 banner；
- 彩色按钮和互联网图标；
- 蓝紫科技渐变；
- Web3 黑客风；
- 黑金土豪会员中心；
- 淘宝风产品货架；
- 亮色积分、红包、返利系统。

## 如何替换图片

把新图保存为同名文件并覆盖 `assets/` 下的对应图片。

例如替换封面：

```text
assets/cover-concept.jpg
```

如果图片不存在，页面会显示黑色仪式感占位块，不会出现浏览器默认缺图图标。

## 如何修改文字

主要文案在 `index.html`。

页面故事线：

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

文案原则：少解释，多宣言。不要把页面写成产品说明书。

## 如何调整视觉风格

视觉变量集中在 `style.css` 顶部：

```css
--black: #0b0b0b;
--near-black: #111111;
--graphite: #2b2d2f;
--bone: #f4f1ea;
--cool-grey: #a7a9ac;
--dark-olive: #30382f;
--miniapp-ratio: 390 / 844;
```

图片呈现相关样式：

- `.concept-frame`
- `.visual-artifact`
- `.cropped-device`
- `.image-ritual`
- `.asset-placeholder`
- `.grain-overlay`
- `.dark-vignette`

这些类用于把图片压进黑色通行仪式：竖屏 UI、暗角、噪点、黑玻璃质感、缺图占位。

## 如何继续扩展为多页面方案

当前版本是长滚动 Proposal Site。后续可扩展为：

1. `flow.html`：完整用户进入路径；
2. `access.html`：Private Access 与邀请码状态；
3. `archive.html`：Product Archive 产品档案；
4. `passport.html`：Product Passport 产品数字档案；
5. `member.html`：Member Pass 权限系统；
6. `profile.html`：My Pass 身份档案。

## 项目结构

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
├── IMAGE_PROMPTS.md
└── assets/
```
