// ============================================================
// Central content source — single source of truth for the site.
// Bilingual (English default + 中文 toggle). Data confirmed 2026-08-09.
// Scholar: 18 distinct papers · ~4.9k citations · h-index 7.
//   (Scholar previously double-listed WorldRoamBench/WorldOdysseyBench — one work.)
// ============================================================

export type Bi = { en: string; zh: string };

export const profile = {
  name: 'Mingchao Sun',
  nameZh: '孙铭超',
  role: 'Researcher',
  roleZh: '研究员',
  affiliation: 'Alibaba Group (AMap)',
  affiliationZh: '阿里巴巴 · 高德',
  team: '3D Reconstruction & Generation',
  // terminal `cat ./about.txt` one-liner (bilingual)
  tagline: {
    en: 'pushing hard && past the limit -> embrace the dream',
    zh: '全力以赴 && 突破极限 -> 拥抱梦想',
  } as Bi,
  location: 'Hangzhou, China',
  selfShort: 'M Sun', // abbreviated form in author lists → bolded automatically
  email: 'sun.mc@outlook.com',
  wechat: 'mcsun0', // shown as a click-to-copy chip in the hero
  // Google Scholar stats (2026-08-09)
  stats: { citations: 4913, hIndex: 7, i10Index: 7 },
  socials: [
    {
      label: 'Google Scholar',
      handle: 'bqsITKQAAAAJ',
      url: 'https://scholar.google.com/citations?user=bqsITKQAAAAJ',
    },
    { label: 'DBLP', handle: '197/5393', url: 'https://dblp.org/pid/197/5393' },
    { label: 'Email', handle: 'sun.mc@outlook.com', url: 'mailto:sun.mc@outlook.com' },
  ],
};

// terminal `ls ./focus` line — reflects the real research arc
export const focusAreas = [
  'world_models/',
  '3d_gaussian_splatting/',
  'embodied_navigation/',
  'point_cloud_dl/',
  'generative_3d/',
];

// full narrative bio — bilingual, markdown bold supported (**..**)
// Concise premium credential arc (not a 流水账). Full detail lives in the
// Experience / Education sections; the hero/profile keeps it to a tight 2-paragrab.
export const bio: { en: string[]; zh: string[] } = {
  en: [
    'Mingchao Sun is a Researcher at **Alibaba Group (AMap)**. He previously interned at Microsoft Research Asia (MSRA) and Alibaba AI Labs, and received his B.E. and M.Eng. degrees from **Shandong University**, where he was advised by [Prof. Baoquan Chen](https://baoquanchen.info/).',
    'His research at AMap focuses on **3D reconstruction and generation, world models, and embodied intelligence**. He is best known for **PointCNN** (NeurIPS 2018, 4,300+ citations), a foundational convolution operator for point clouds co-authored with [Prof. Yangyan Li](https://yangyan.li/).',
  ],
  zh: [
    '孙铭超，**阿里巴巴（高德）**研究员。曾在微软亚洲研究院（MSRA）与 Alibaba AI Labs 实习；本硕均就读于**山东大学**，师从[陈宝权教授](https://baoquanchen.info/)。',
    '他在高德的研究聚焦**三维重建与生成、世界模型与具身智能**等方向。代表作 **PointCNN**（NeurIPS 2018，4300+ 引用）是点云深度学习的奠基性卷积工作，与[李扬彦教授](https://yangyan.li/)合作完成。',
  ],
};

export interface EducationEntry {
  school: string;
  schoolZh: string;
  degree: string;
  degreeZh: string;
  major: string;
  majorZh: string;
  years: string;
  advisor: string;
  advisorZh: string;
}

export const education: EducationEntry[] = [
  {
    school: 'Shandong University',
    schoolZh: '山东大学',
    degree: 'M.Eng.',
    degreeZh: '硕士',
    major: 'Computer Science & Technology',
    majorZh: '计算机科学与技术',
    years: '2017.09 – 2020.07',
    advisor: 'Prof. Baoquan Chen',
    advisorZh: '陈宝权教授',
  },
  {
    school: 'Shandong University',
    schoolZh: '山东大学',
    degree: 'B.E.',
    degreeZh: '学士',
    major: 'Software Engineering',
    majorZh: '软件工程',
    years: '2013.09 – 2017.07',
    advisor: '',
    advisorZh: '',
  },
];

export interface ExperienceEntry {
  org: string;
  orgZh: string;
  title: string;
  titleZh: string;
  years: string;
  yearsNote: string;
  desc: Bi;
}

export const experience: ExperienceEntry[] = [
  {
    org: 'Alibaba Group — AMap, Visual Technology Center',
    orgZh: '阿里巴巴 · 高德 视觉技术中心',
    title: 'Researcher',
    titleZh: '研究员',
    years: '2021.11 – present',
    yearsNote: 'full-time since Jul 2020',
    desc: {
      en: 'Research interests: large-scale 3D Gaussian Splatting rendering, generative 3D world models, and embodied agents — with results deployed across AMap’s products.',
      zh: '研究兴趣:大规模 3D 高斯泼溅渲染、生成式三维世界模型与具身智能体,相关成果已在高德产品中落地。',
    },
  },
  {
    org: 'Alibaba Group · Alibaba Cloud, Video Cloud',
    orgZh: '阿里巴巴 · 阿里云 视频云',
    title: 'Algorithm Engineer',
    titleZh: '算法工程师',
    years: '2019.06 – 2021.11',
    yearsNote: '',
    desc: {
      en: 'Video face algorithms (in-house landmark / X-Face on Tmall Genie); cloud–DingTalk integrated products (interactive whiteboard, 5M minutes in 100 days).',
      zh: '视频人脸算法(自研关键点 / 换脸 X-Face,天猫精灵端上人脸);云钉一体云产品(互动白板,百日 500 万分钟)。',
    },
  },
  {
    org: 'Alibaba Group · AI Labs',
    orgZh: '阿里巴巴 · AI Labs',
    title: 'Research Intern',
    titleZh: '研究实习生',
    years: '2018.08 – 2019.06',
    yearsNote: '',
    desc: {
      en: 'Autonomous driving & V2X: onboard LiDAR point-cloud 3D detection (F-PointCNN), roadside 3D perception (BEVCNN / DepthCNN).',
      zh: '自动驾驶与车路协同:车载 LiDAR 点云 3D 检测(F-PointCNN)、路侧 3D 感知(BEVCNN / DepthCNN)。',
    },
  },
  {
    org: 'Microsoft Research Asia (MSRA)',
    orgZh: '微软亚洲研究院(MSRA)',
    title: 'Research Intern',
    titleZh: '研究实习生',
    years: '2016.08 – 2017.04',
    yearsNote: '',
    desc: {
      en: 'Big-data BI platform (Bayesian-network query estimation); Azure cloud-node fault prediction.',
      zh: '大数据 BI 平台(贝叶斯网络查询预估);Azure 云节点故障预测。',
    },
  },
];

export interface NewsEntry {
  year: string;
  text: Bi;
}

export const news: NewsEntry[] = [
  {
    year: '2026.07',
    text: {
      en: 'Released **Abot-World** and **ABot-3DWorld** — a universal world model that explores any 3D space. [live demo →](https://abot-world.amap.com/)',
      zh: '发布 **Abot-World** 与 **ABot-3DWorld**——可探索任意三维空间的通用世界模型。[在线体验 →](https://abot-world.amap.com/)',
    },
  },
  {
    year: '2026.07',
    text: {
      en: 'Released **WorldRoamBench**, an open-world benchmark probing the long-horizon stability of interactive world models. [homepage →](https://worldroam.amap.com/)',
      zh: '发布 **WorldRoamBench**,衡量交互式世界模型长时序稳定性的开放世界基准。[主页 →](https://worldroam.amap.com/)',
    },
  },
  {
    year: '2026.06',
    text: {
      en: 'Released **ABot-Earth 0.5**, a generative 3D model of the Earth. [live demo →](https://abot-earth.amap.com/)',
      zh: '发布 **ABot-Earth 0.5**,生成式三维地球模型。[在线体验 →](https://abot-earth.amap.com/)',
    },
  },
  {
    year: '2026.06',
    text: {
      en: '**SocialNav**, a human-inspired foundation model for socially-aware navigation — selected as a **CVPR 2026 Best Paper Candidate**!',
      zh: '**SocialNav**,受人类启发的具身社会感知导航基础模型——入选 **CVPR 2026 最佳论文候选**!',
    },
  },
  {
    year: '2026.03',
    text: {
      en: '**From Orbit to Ground** accepted to CVPR 2026 *Findings* — generative city-scale photogrammetry from extreme off-nadir satellite imagery. [project →](https://pku-vcl-geometry.github.io/Orbit2Ground/)',
      zh: '**From Orbit to Ground** 被 CVPR 2026 *Findings* 接收——从极端倾斜卫星影像做生成式城市级摄影测量。[项目主页 →](https://pku-vcl-geometry.github.io/Orbit2Ground/)',
    },
  },
  {
    year: '2026.02',
    text: {
      en: 'Two papers accepted to CVPR 2026 — **PointCNN++** (convolution on native points) and **SocialNav** (socially-aware navigation).',
      zh: '两篇论文被 CVPR 2026 接收——**PointCNN++**(原生点卷积)与 **SocialNav**(社会感知导航)。',
    },
  },
  {
    year: '2026.02',
    text: {
      en: '**CLoD-GS** accepted to ICLR 2026 — continuous level-of-detail rendering built on 3D Gaussian Splatting.',
      zh: '**CLoD-GS** 被 ICLR 2026 接收——基于 3D 高斯泼溅的连续细节层次渲染。',
    },
  },
];

export const recruiting: Bi = {
  en: "I'm recruiting self-motivated research interns passionate about 3D vision, 3D Gaussian Splatting, and generative world models. If interested, reach out at sun.mc@outlook.com with your CV — happy to chat!",
  zh: '欢迎对三维视觉、3DGS、生成式世界模型感兴趣的同学来实习，把简历发到 sun.mc@outlook.com 联系我即可。',
};

export interface Publication {
  title: string;
  authors: string; // plain string; the author's own short name is bolded automatically
  venue: string;
  year: number;
  citations?: number;
  highlight?: string; // English one-liner (titles stay English to control maintenance)
  thumb?: string; // teaser figure path under /pub (e.g. '/pub/pointcnn.webp')
  featured?: boolean; // flagship papers get an accent treatment
  links: { label: string; url: string }[];
}

// Ordered by Google Scholar date sort (newest → oldest). Links verified 2026-08-09.
// NOTE: Scholar also lists "WorldOdysseyBench" (subtitle identical to WorldRoamBench)
// — excluded pending confirmation (possible rename / duplicate). Add if confirmed real.
export const publications: Publication[] = [
  {
    title: 'ABot-World-0: Infinite Interactive World Rollout on a Single Desktop GPU',
    authors: 'F Jiang, Z Sun, M Wang, Z Zhu, C Wang, Y Zhang, W Liu, Y Wang, et al.',
    venue: 'arXiv',
    year: 2026,
    citations: 0,
    highlight: 'Infinite interactive world rollout that fits on a single desktop GPU.',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2607.19191' }],
  },
  {
    title: 'ABot-3DWorld 0: A Universal World Model to Explore Any 3D Space',
    authors: 'M Sun, L Tang, Y Liu, X Yan, Z Li, Y Zhang, F Yu, Z Ge, Y Liu, J Zhang, et al.',
    venue: 'arXiv',
    year: 2026,
    citations: 1,
    highlight: 'A universal world model that can explore and interact with any 3D space. (first-author)',
    thumb: '/pub/abot3dworld.webp',
    featured: true,
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2607.11673' }],
  },
  {
    title: 'ABot-N1: Toward a General Visual-Language Navigation Foundation Model',
    authors: 'R Gong, Y Guo, J Hu, J Kong, X Leng, T Li, W Li, F Liu, Z Liu, J Lu, M Luo, et al.',
    venue: 'arXiv',
    year: 2026,
    citations: 0,
    highlight: 'A general visual-language navigation foundation model.',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2607.10383' }],
  },
  {
    title: 'WorldRoamBench: An Open-World Benchmark for Long-Horizon Stability of Interactive World Models',
    authors: 'TB Xu, J Sui, Z Gao, K Shi, W Yang, Z Liu, Z Sun, M Sun, H Pan, F Jiang, et al.',
    venue: 'arXiv',
    year: 2026,
    citations: 1,
    highlight: 'A benchmark probing long-horizon stability of interactive world models.',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2606.31672' }],
  },
  {
    title: 'ABot-EARTH 0.5: Generative 3D Earth Model',
    authors: 'M Qian, T Ouyang, M Sun, Z Wang, J Xiong, J Han, Y Zhang, J Zhang, et al.',
    venue: 'arXiv',
    year: 2026,
    citations: 1,
    highlight: 'A generative 3D model of the Earth.',
    thumb: '/pub/abotearth.webp',
    featured: true,
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2606.09967' }],
  },
  {
    title: 'POINav: Benchmarking and Enhancing Final-Meters Arrival in Real-World Vision-Language Navigation',
    authors: 'R Gong, M Zhang, Y Zhao, M Sun, Y Shen, Z Chu, Z Gu, W Guo, X Cheng, et al.',
    venue: 'arXiv',
    year: 2026,
    citations: 1,
    highlight: 'Benchmarking and enhancing final-meters arrival in real-world VLN.',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2605.28237' }],
  },
  {
    title: 'Abot-n0: Technical Report on the VLA Foundation Model for Versatile Embodied Navigation',
    authors: 'Z Chu, S Xie, X Wu, Y Shen, M Luo, Z Wang, F Liu, X Leng, J Hu, M Yin, et al.',
    venue: 'arXiv',
    year: 2026,
    citations: 15,
    highlight: 'A vision-language-action (VLA) foundation model for versatile embodied navigation.',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2602.11598' }],
  },
  {
    title: 'From Orbit to Ground: Generative City Photogrammetry from Extreme Off-Nadir Satellite Images',
    authors: 'F Yu, Y Liu, L Tang, M Sun, Z Ge, R Bu, Y Jin, H Zhao, H Sun, Y Li, M Xu, et al.',
    venue: 'CVPR 2026 Findings',
    year: 2026,
    citations: 2,
    highlight: 'Generative city-scale photogrammetry from extreme off-nadir satellite imagery.',
    thumb: '/pub/orbit2ground.webp',
    featured: true,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2512.07527' },
      { label: 'project', url: 'https://pku-vcl-geometry.github.io/Orbit2Ground/' },
    ],
  },
  {
    title: 'PointCNN++: Performant Convolution on Native Points',
    authors: 'L Li, H Zhong, R Bu, M Sun, W Chen, B Chen, Y Li',
    venue: 'CVPR',
    year: 2026,
    citations: 1,
    highlight: 'A performant convolution operator that works directly on native (un-sampled) point clouds.',
    thumb: '/pub/pointcnnpp.webp',
    featured: true,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2511.23227' },
      { label: 'code', url: 'https://github.com/ant-research/pointelligence' },
    ],
  },
  {
    title: 'SocialNav: Training a Human-Inspired Foundation Model for Socially-Aware Embodied Navigation',
    authors: 'Z Chen, Y Guo, Z Chu, M Luo, Y Shen, M Sun, J Hu, S Xie, Y Kuan, P Shi, et al.',
    venue: 'CVPR',
    year: 2026,
    citations: 15,
    highlight: 'A human-inspired foundation model for socially-aware embodied navigation.',
    thumb: '/pub/socialnav.webp',
    featured: true,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2511.21135' },
      { label: 'project', url: 'https://amap-eai.github.io/SocialNav/' },
    ],
  },
  {
    title: 'CLoD-GS: Continuous Level-of-Detail via 3D Gaussian Splatting',
    authors: 'Z Cheng, M Sun, Y Liu, Z Ge, L Tang, M Xu, Y Li, P Pan',
    venue: 'ICLR',
    year: 2026,
    citations: 3,
    highlight: 'Continuous level-of-detail rendering built on 3D Gaussian Splatting.',
    thumb: '/pub/clodgs.webp',
    featured: true,
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2510.09997' }],
  },
  {
    title: 'DO-Conv: Depthwise Over-Parameterized Convolutional Layer',
    authors: 'J Cao, Y Li, M Sun, Y Chen, D Lischinski, D Cohen-Or, B Chen, C Tu',
    venue: 'IEEE TIP',
    year: 2022,
    citations: 351,
    highlight: 'A depthwise over-parameterized convolutional layer that boosts 2D CNN backbones.',
    links: [
      { label: 'code', url: 'https://github.com/yangyanli/DO-Conv' },
      { label: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/35594231/' },
    ],
  },
  {
    title: 'DeepPipes: Learning 3D Pipelines Reconstruction from Point Clouds',
    authors: 'L Cheng, Z Wei, M Sun, S Xin, A Sharf, Y Li, B Chen, C Tu',
    venue: 'Graphical Models',
    year: 2020,
    citations: 49,
    highlight: 'Reconstructing 3D pipeline structures from point clouds.',
    links: [],
  },
  {
    title: 'Mutual Information Maximization in Graph Neural Networks',
    authors: 'X Di, P Yu, R Bu, M Sun',
    venue: 'IJCNN',
    year: 2020,
    citations: 37,
    highlight: 'A mutual-information maximization objective for graph neural networks.',
    links: [],
  },
  {
    title: 'First and Complementary Neighborhood Combination of Adjacency Matrix for Graph Learning',
    authors: 'X Di, P Yu, M Sun, R Bu',
    venue: 'arXiv',
    year: 2019,
    citations: 0,
    highlight: 'Combining first-order and complementary neighborhoods for graph learning.',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/1905.08509' }],
  },
  {
    title: 'Neighborhood Enlargement in Graph Neural Networks',
    authors: 'X Di, P Yu, M Sun, R Bu',
    venue: 'Machine Learning',
    year: 2019,
    citations: 1,
    highlight: 'Enlarging the receptive field of graph neural networks.',
    links: [],
  },
  {
    title: 'PointCNN: Convolution on X-Transformed Points',
    authors: 'Y Li, R Bu, M Sun, W Wu, X Di, B Chen',
    venue: 'NeurIPS',
    year: 2018,
    citations: 4357,
    highlight: 'A foundational convolution operator for deep learning on point clouds — the seed of the PointCNN line.',
    thumb: '/pub/pointcnn.webp',
    featured: true,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/1801.07791' },
      { label: 'code', url: 'https://github.com/yangyanli/PointCNN' },
      { label: 'neurips', url: 'https://proceedings.neurips.cc/paper/2018/hash/f5f8590cd58a54e94377e6ae2eded4d9-Abstract.html' },
    ],
  },
  {
    title: 'Large-Scale 3D Shape Reconstruction and Segmentation from ShapeNetCore55',
    authors: 'L Yi, L Shao, M Savva, H Huang, Y Zhou, Q Wang, B Graham, M Engelcke, et al.',
    venue: 'arXiv',
    year: 2017,
    citations: 78,
    highlight: 'The large-scale ShapeNetCore55 reconstruction & segmentation benchmark.',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/1710.06104' }],
  },
];

export interface Project {
  name: string;
  blurb: Bi;
  tags: string[];
  url?: string;
}

// Research lines — thematic groupings that span multiple papers, distinct from the
// paper-by-paper Publications list above. Each links to a representative entry point.
export const projects: Project[] = [
  {
    name: 'ABot — Generative World Models',
    blurb: {
      en: 'A family of generative 3D world models: universal 3D worlds (3DWorld), Earth-scale generation (Earth), and infinite interactive rollout (World-0).',
      zh: '一系列生成式三维世界模型:通用三维世界(3DWorld)、地球级生成(Earth)与无限交互式推演(World-0)。',
    },
    tags: ['World Model', 'Generative 3D', '2026'],
    url: 'https://arxiv.org/abs/2607.11673',
  },
  {
    name: 'Point-Cloud Deep Learning',
    blurb: {
      en: 'The PointCNN line — convolution directly on points. From PointCNN (NeurIPS 2018, 4.3k+ citations) to PointCNN++ (CVPR 2026, native-point convolution).',
      zh: 'PointCNN 研究线——直接在点上的卷积。从 PointCNN(NeurIPS 2018,4300+ 引用)到 PointCNN++(CVPR 2026,原生点卷积)。',
    },
    tags: ['Point Cloud', 'NeurIPS 2018', 'CVPR 2026'],
    url: 'https://github.com/yangyanli/PointCNN',
  },
  {
    name: 'Embodied Navigation',
    blurb: {
      en: 'Foundation models & benchmarks for embodied navigation — Abot-n0 (VLA), SocialNav (socially-aware), POINav (final-meters arrival).',
      zh: '具身导航的基础模型与基准——Abot-n0(VLA)、SocialNav(社会感知)、POINav(末端到达)。',
    },
    tags: ['VLN', 'Foundation Model', '2026'],
    url: 'https://amap-eai.github.io/SocialNav/',
  },
  {
    name: '3D Gaussian Splatting',
    blurb: {
      en: 'Rendering & reconstruction with 3DGS — continuous level-of-detail (CLoD-GS, ICLR 2026) and city-scale generative photogrammetry (Orbit to Ground).',
      zh: '基于 3D 高斯泼溅的渲染与重建——连续细节层次(CLoD-GS,ICLR 2026)与城市级生成式摄影测量(Orbit to Ground)。',
    },
    tags: ['3DGS', 'Rendering', 'ICLR 2026'],
    url: 'https://arxiv.org/abs/2510.09997',
  },
];
