# MOSTYTALE.com — 网站架构文档

## 项目概述

| 项目 | 内容 |
|------|------|
| 域名 | mostytale.com |
| 品牌 | MOSTY — 高尔夫配件品牌 |
| 技术栈 | Astro (静态网站) |
| 托管 | GitHub Pages + Cloudflare Pages |
| 网站类型 | 品牌展示站 + Amazon引流 |
| 目标用户 | 北美/欧洲高尔夫爱好者 |

---

## 一、品牌设计建议

### 品牌名称
**MOSTY** — 品牌名称简洁有力，建议围绕"Most + Stylish"或"Mastery"的概念来讲述品牌故事。

### Logo建议
- **主Logo**: 文字Logo "MOSTY" + 高尔夫旗杆/果岭元素
- **配色方案**:
  - 主色: 深绿色 `#1B5E20` (高尔夫果岭的颜色)
  - 辅色: 金色 `#C9A84C` (高尔夫奖杯/品质感)
  - 背景: 白色/米白 `#FAFAFA` / `#FDF6E3`
  - 文字: 深灰 `#2C2C2C`
  - CTA按钮: 亮橙色 `#E87722` (Amazon品牌色延伸)
- **字体建议**:
  - 标题: Montserrat (Google Font) — 现代、运动感
  - 正文: Lora 或 Source Sans Pro — 易读
  - 或: 标题用 Playfair Display + 正文用 Inter (高端感)

### 品牌调性
- 专业但不严肃
- 强调产品的实用性和创新性
- 绿色运动生活方式

---

## 二、信息架构 (Sitemap)

```
mostytale.com/
├── 首页 (/) — 品牌故事 + 热门产品 + 信任背书
├── 产品中心 (/products/)
│   ├── 高尔夫清洁系列 (/products/cleaning/)
│   │   ├── 球杆清洁袋 (/products/cleaning/club-ball-cleaner-bag/)
│   │   └── 清洁毛巾 (/products/cleaning/golf-towel/)
│   ├── 高尔夫球包 (/products/golf-bags/)
│   │   ├── 旅行球包 (/products/golf-bags/travel-bag/)
│   │   └── 站立球包 (/products/golf-bags/stand-bag/)  ← 如有
│   └── 高尔夫配件 (/products/accessories/)
│       └── (未来扩展)
├── 关于我们 (/about/)
├── 博客 (/blog/) — 高尔夫技巧 + 产品使用指南 + 清洁保养
├── 常见问题 (/faq/)
├── 联系我们 (/contact/)
├── 隐私政策 (/privacy/)
└── 使用条款 (/terms/)
```

---

## 三、页面详细设计

### 3.1 首页 (`/`)

**Hero Section**
- 大图背景：高尔夫球手在果岭上使用 MOSTY 产品
- 主标题：Clean Clubs. Play Better.
- 副标题：Professional-grade golf cleaning accessories that keep your gear in championship condition
- CTA按钮：[Shop on Amazon →] [View Products →]

**Trust Bar** (第二屏)
- Amazon品牌店铺标识
- 星星评分展示（如 4.5★）
- 已服务球手数 / 已售出产品数
- "As featured on..." 媒体露出（如有）

**Featured Products** (第三屏)
- 3-4款核心产品的卡片展示
- 每张卡片：产品图、名称、一句话卖点、Amazon链接

**Why MOSTY** (第四屏)
- 3个品牌卖点：
  - Innovation — 创新2合1设计
  - Quality — 防水耐用材料
  - Portable — 轻便随行

**Customer Reviews** (第五屏)
- 精选Amazon用户评价轮播

**Footer**
- 导航链接、社交图标、订阅Newsletter（可选）

---

### 3.2 产品中心 (`/products/`)

- 产品分类网格
- 每个分类：图标+名称+简短描述 → 链接到分类页

### 3.3 产品分类页 (如 `/products/cleaning/`)

- 该分类下所有产品列表
- 每款产品：大图、名称、核心卖点、Amazon购买按钮

### 3.4 产品详情页 (如 `/products/cleaning/club-ball-cleaner-bag/`)

- **产品图库**: 4-6张高清产品图
- **产品名称 + Tagline**
- **产品描述**: 3-4段落，突出卖点
- **Feature List**: 带图标的特性列表
  - ✅ Waterproof inner liner
  - ✅ 2-in-1 club + ball cleaning
  - ✅ Scratch-free design
  - ✅ Portable & compact
  - ✅ Easy to use — just 1/5 cup of water
- **How It Works**: 3步骤图文说明
- **Specifications**: 尺寸、重量、材质
- **What's Included**: 包装内容
- **Reviews**: 嵌入或展示Amazon评价
- **CTA**: 大按钮 → "Buy on Amazon"
- **Related Products**: 底部相关产品推荐

---

### 3.5 关于我们 (`/about/`)

- 品牌故事（创始初衷）
- 品牌使命与价值观
- 品牌发展历程（时间线）
- 品质承诺

---

### 3.6 博客 (`/blog/`)

内容策略建议（至少准备6-8篇文章）：
1. "How to Clean Your Golf Clubs on the Course — A Complete Guide"
2. "Why Clean Clubs Matter: The Science Behind Better Ball Striking"
3. "Top 5 Golf Accessories Every Golfer Needs in 2025"
4. "Golf Travel Tips: How to Pack Your Clubs for a Flight"
5. "The Ultimate Guide to Golf Ball Maintenance"
6. "MOSTY vs Traditional Club Cleaning Methods"
7. "Best Golf Gifts for Him: 2025 Holiday Guide"
8. "How Often Should You Clean Your Golf Clubs? Pro Tips"

---

### 3.7 联系我们 (`/contact/`)

- 联系表单（姓名、邮箱、主题、消息）
- 品牌邮箱
- 社交媒体链接
- 批发/合作询问入口

---

## 四、技术架构 (Astro)

### 4.1 项目结构

```
mostytale.com/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions → Cloudflare Pages
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── images/
│   │   ├── hero-bg.webp
│   │   ├── products/               # 产品图片 (WebP格式)
│   │   │   ├── club-cleaner-01.webp
│   │   │   ├── club-cleaner-02.webp
│   │   │   ├── travel-bag-01.webp
│   │   │   ├── towel-01.webp
│   │   │   └── ...
│   │   ├── about/                  # 品牌图片
│   │   ├── blog/                   # 博客配图
│   │   └── icons/                  # SVG图标
│   └── fonts/                      # 自托管字体 (可选)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BaseLayout.astro    # 全局布局
│   │   │   ├── Header.astro        # 导航栏
│   │   │   ├── Footer.astro        # 页脚
│   │   │   └── SEO.astro           # SEO Meta标签
│   │   ├── home/
│   │   │   ├── HeroSection.astro
│   │   │   ├── TrustBar.astro
│   │   │   ├── FeaturedProducts.astro
│   │   │   ├── WhyMosty.astro
│   │   │   └── ReviewsCarousel.astro
│   │   ├── products/
│   │   │   ├── ProductCard.astro
│   │   │   ├── ProductGallery.astro
│   │   │   ├── FeatureList.astro
│   │   │   ├── HowItWorks.astro
│   │   │   └── RelatedProducts.astro
│   │   ├── blog/
│   │   │   ├── BlogCard.astro
│   │   │   └── BlogSidebar.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Section.astro
│   │       ├── StarRating.astro
│   │       └── ContactForm.astro
│   ├── content/
│   │   ├── products/               # MDX产品内容
│   │   │   ├── club-ball-cleaner-bag.mdx
│   │   │   ├── golf-towel.mdx
│   │   │   └── travel-bag.mdx
│   │   └── blog/                   # MDX博客内容
│   │       ├── how-to-clean-golf-clubs.mdx
│   │       ├── top-golf-accessories-2025.mdx
│   │       └── ...
│   ├── data/
│   │   ├── products.ts             # 产品数据 (结构化)
│   │   ├── reviews.ts              # 评价数据
│   │   ├── site.ts                 # 站点配置
│   │   └── navigation.ts           # 导航数据结构
│   ├── pages/
│   │   ├── index.astro             # 首页
│   │   ├── products/
│   │   │   ├── index.astro         # 产品中心
│   │   │   ├── cleaning/
│   │   │   │   ├── index.astro     # 清洁系列列表
│   │   │   │   └── [...slug].astro # 清洁产品详情 (动态路由)
│   │   │   ├── golf-bags/
│   │   │   │   ├── index.astro
│   │   │   │   └── [...slug].astro
│   │   │   └── accessories/
│   │   │       └── index.astro
│   │   ├── about.astro
│   │   ├── blog/
│   │   │   ├── index.astro         # 博客列表
│   │   │   └── [...slug].astro     # 博客详情
│   │   ├── faq.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   ├── robots.txt.ts
│   │   └── rss.xml.ts
│   ├── styles/
│   │   └── global.css              # 全局样式 + Tailwind
│   ├── utils/
│   │   ├── amazon.ts               # Amazon链接工具
│   │   └── seo.ts                  # SEO工具
│   └── types/
│       └── index.ts                # TypeScript类型定义
└── README.md
```

### 4.2 Astro配置要点

```js
// astro.config.mjs 核心配置
{
  output: 'static',                   // 全静态站点
  adapter: '@astrojs/cloudflare',     // Cloudflare适配器
  integrations: [
    tailwind(),                       // Tailwind CSS
    mdx(),                            // MDX内容
    sitemap(),                        // 自动生成sitemap
    image(),                          // 图片优化
    compress(),                       // 资源压缩
  ]
}
```

### 4.3 依赖包

```json
{
  "@astrojs/cloudflare": "^latest",
  "@astrojs/mdx": "^latest",
  "@astrojs/sitemap": "^latest",
  "@astrojs/rss": "^latest",
  "@astrojs/image": "^latest",
  "@astrojs/tailwind": "^latest",
  "tailwindcss": "^3.x",
  "@tailwindcss/typography": "^latest",
  "astro-compress": "^latest",
  "astro-icon": "^latest"
}
```

### 4.4 数据结构设计

```typescript
// src/data/products.ts
interface Product {
  slug: string;              // URL slug
  name: string;              // 产品名称
  tagline: string;           // 一句话卖点
  description: string;       // 长描述
  category: 'cleaning' | 'golf-bags' | 'accessories';
  features: string[];        // 特性列表
  images: string[];          // 产品图片路径
  amazonUrl: string;         // Amazon产品链接
  amazonAsin: string;        // Amazon ASIN
  specs: {                   // 规格参数
    dimensions: string;
    weight: string;
    material: string;
    color: string;
  };
  rating: number;            // 评分
  reviewCount: number;       // 评价数
  isFeatured: boolean;       // 是否首页推荐
}

// src/data/navigation.ts
interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
```

---

## 五、SEO策略

### 5.1 页面SEO

每个页面需要：
- 自定义 `<title>` 标签：`页面标题 | MOSTY`
- Meta Description：150-160字符
- Open Graph 标签（Facebook/Twitter分享）
- Canonical URL
- 结构化数据 (JSON-LD Schema.org)：
  - 首页 → Organization schema
  - 产品页 → Product schema
  - 博客页 → Article schema

### 5.2 关键页面Title/Meta示例

| 页面 | Title | Meta Description |
|------|-------|------------------|
| 首页 | MOSTY — Premium Golf Cleaning Accessories | MOSTY offers professional-grade golf club & ball cleaners, towels, and accessories. Keep your clubs in championship condition. Shop on Amazon. |
| 清洁袋 | MOSTY Golf Club & Ball Cleaner Bag | The 2-in-1 portable golf club cleaner and ball washer pouch. Waterproof, scratch-free, easy to use. Keep your clubs clean on every hole. |
| 博客 | Golf Tips & Gear Guides | MOSTY Blog | Expert golf tips, gear cleaning guides, and product reviews to help you play better golf. |

### 5.3 结构化数据示例

```json
// 产品页 Schema.org Product
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "MOSTY Golf Club & Ball Cleaner Bag",
  "description": "2-in-1 portable golf club and ball cleaning pouch",
  "brand": { "@type": "Brand", "name": "MOSTY" },
  "offers": {
    "@type": "Offer",
    "url": "https://www.amazon.com/dp/B0FHWLLC55",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "XXX"
  }
}
```

---

## 六、图片规格建议

| 用途 | 尺寸 | 格式 | 备注 |
|------|------|------|------|
| Hero背景 | 1920×1080px | WebP | ≤200KB |
| 产品主图 | 800×800px | WebP | 白底或场景图 |
| 产品详情图 | 1200×900px | WebP | 展示细节 |
| 博客配图 | 1200×630px | WebP | 4:3比例 |
| Logo | 200×60px | SVG | 矢量格式 |
| Favicon | 32×32px | ICO/PNG | - |
| OG图 | 1200×630px | PNG | 社交分享 |

---

## 七、部署架构

### 7.1 GitHub Actions → Cloudflare Pages

```
[开发者推送代码] 
  → [GitHub Repository: mostytale-website] 
    → [GitHub Actions: build & deploy] 
      → [Cloudflare Pages: 自动部署]
```

### 7.2 CI/CD流程 (`deploy.yml`)

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          command: pages deploy dist --project-name=mostytale
```

### 7.3 DNS设置

```
域名: mostytale.com
DNS: Cloudflare Nameservers
A记录 → Cloudflare Pages (通过Cloudflare DNS自动处理)
```

---

## 八、内容架构总结

### 需要准备的材料清单

1. **品牌素材** (你目前缺少的)
   - [ ] Logo (SVG格式)
   - [ ] 品牌配色方案（参考上方建议）
   - [ ] 品牌字体选择

2. **产品素材**
   - [ ] 每款产品的高清图片（白底图+场景图，各4-6张）
   - [ ] 产品规格（尺寸、重量、材质）
   - [ ] 产品卖点/文案
   - [ ] Amazon评价截图（精选5-10条）

3. **品牌内容**
   - [ ] 品牌故事（创始初衷、发展历程）
   - [ ] 品牌使命与价值观

4. **博客内容** (至少4篇起步)
   - [ ] 高尔夫清洁指南
   - [ ] 产品对比评测
   - [ ] 高尔夫配件推荐
   - [ ] 使用技巧

5. **技术账号**
   - [ ] GitHub账号 + Repository
   - [ ] Cloudflare账号 + API Token

---

## 九、开发优先级

| 优先级 | 内容 | 说明 |
|--------|------|------|
| P0 | 项目脚手架 + 首页 | 最快速度上线 |
| P1 | 产品详情页 (3-5页) | 核心转化页面 |
| P1 | 关于我们 + 联系页面 | 建立信任 |
| P2 | 博客系统 + 4篇文章 | SEO流量入口 |
| P2 | FAQ页面 | 用户支持 |
| P2 | 隐私政策 + 条款 | 合规 |
| P3 | 评价系统集成 | 社会证明 |
| P3 | Newsletter订阅 | 获客 |

---

## 十、给Claude Code的指令格式

将此架构文档保存为 `ARCHITECTURE.md`，在GitHub仓库中给Claude Code使用：

```
请根据项目根目录的 ARCHITECTURE.md 中的设计规范，
使用Astro框架构建MOSTY品牌展示网站。

技术栈:
- Astro (静态生成)
- Tailwind CSS
- MDX (产品 & 博客内容)
- TypeScript

部署目标: Cloudflare Pages (通过GitHub Actions)
```

---

> **文档版本**: v1.0  
> **创建日期**: 2026-06-18  
> **适用范围**: mostytale.com 网站架构设计
