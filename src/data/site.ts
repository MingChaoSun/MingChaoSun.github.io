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
    // GitHub: identity anchor for JSON-LD sameAs (not rendered as a button)
    { label: 'GitHub', handle: 'MingChaoSun', url: 'https://github.com/MingChaoSun' },
    { label: 'LinkedIn', handle: 'sunmc', url: 'https://cn.linkedin.com/in/sunmc' },
    { label: 'ORCID', handle: '0000-0001-8300-7192', url: 'https://orcid.org/0000-0001-8300-7192' },
    { label: 'X', handle: '@mingchao_sun', url: 'https://x.com/mingchao_sun' },
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
    'Mingchao Sun is a Researcher at **Alibaba Group (AMap)**. He previously interned at Microsoft Research Asia (MSRA) and Alibaba AI Labs, and received his B.Eng. and M.Eng. degrees from **Shandong University**, where he was advised by [Prof. Baoquan Chen](https://baoquanchen.info/).',
    'His research at AMap focuses on **3D reconstruction and generation, world models, and embodied intelligence**. He is best known for **PointCNN** (NeurIPS 2018), a foundational convolution operator for point clouds co-authored with [Prof. Yangyan Li](https://yangyan.li/).',
  ],
  zh: [
    '孙铭超，**阿里巴巴（高德）**研究员。曾在微软亚洲研究院（MSRA）与 Alibaba AI Labs 实习；本硕均就读于**山东大学**，师从[陈宝权教授](https://baoquanchen.info/)。',
    '他在高德的研究聚焦**三维重建与生成、世界模型与具身智能**等方向。代表作 **PointCNN**（NeurIPS 2018）是点云深度学习的奠基性卷积工作，与[李扬彦教授](https://yangyan.li/)合作完成。',
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
    degree: 'B.Eng.',
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
    desc: {
      en: 'HD Map · 3DGS · World Models',
      zh: '高精地图 · 3DGS · 世界模型',
    },
  },
  {
    org: 'Alibaba Group · Alibaba Cloud, Video Cloud & DingTalk',
    orgZh: '阿里巴巴 · 阿里云 视频云 & 钉钉',
    title: 'Algorithm Engineer',
    titleZh: '算法工程师',
    years: '2020.07 – 2021.11',
    yearsNote: '',
    desc: {
      en: 'Face & Video Algorithms',
      zh: '人脸与视频算法',
    },
  },
  {
    org: 'Alibaba Group · AI Labs',
    orgZh: '阿里巴巴 · AI Labs',
    title: 'Research Intern',
    titleZh: '研究实习生',
    years: '2018.08 – 2020.07',
    yearsNote: '',
    desc: {
      en: 'Autonomous Driving & V2X',
      zh: '自动驾驶与车路协同',
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
      en: 'Machine Learning & BI',
      zh: '机器学习与 BI',
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
      en: 'Released **Abot-World** and **ABot-3DWorld** — a universal world model that explores any 3D space. [live demo →](https://abot-world.amap.com/) [news →](https://mp.weixin.qq.com/s/TLoP_NEhexxiSruMvhPrrQ)',
      zh: '发布 **Abot-World** 与 **ABot-3DWorld**——可探索任意三维空间的通用世界模型。[在线体验 →](https://abot-world.amap.com/) [报道 →](https://mp.weixin.qq.com/s/TLoP_NEhexxiSruMvhPrrQ)',
    },
  },
  {
    year: '2026.07',
    text: {
      en: 'Released **WorldRoamBench**, an open-world benchmark probing the long-horizon stability of interactive world models. [Benchmark homepage →](https://worldroam.amap.com/) [news →](https://aiera.com.cn/2026/07/09/embodied/admin/103207/%e9%ab%98%e5%be%b7%e5%8f%91%e5%b8%83worldroam-bench%ef%bc%8c%e9%87%8d%e6%96%b0%e5%ae%9a%e4%b9%89%e4%b8%96%e7%95%8c%e6%a8%a1%e5%9e%8b%e9%95%bf%e6%97%b6%e4%ba%a4%e4%ba%92%e8%af%84%e6%b5%8b%e6%a0%87/)',
      zh: '发布 **WorldRoamBench**,衡量交互式世界模型长时序稳定性的开放世界基准。[Benchmark 主页 →](https://worldroam.amap.com/) [新智元报道 →](https://aiera.com.cn/2026/07/09/embodied/admin/103207/%e9%ab%98%e5%be%b7%e5%8f%91%e5%b8%83worldroam-bench%ef%bc%8c%e9%87%8d%e6%96%b0%e5%ae%9a%e4%b9%89%e4%b8%96%e7%95%8c%e6%a8%a1%e5%9e%8b%e9%95%bf%e6%97%b6%e4%ba%a4%e4%ba%92%e8%af%84%e6%b5%8b%e6%a0%87/)',
    },
  },
  {
    year: '2026.06',
    text: {
      en: 'Released **ABot-Earth 0.5**, a generative 3D model of the Earth. [live demo →](https://abot-earth.amap.com/) [news →](https://mp.weixin.qq.com/s/Ves_KeN-ysi9oAM7Vc9a1g)',
      zh: '发布 **ABot-Earth 0.5**,生成式三维地球模型。[在线体验 →](https://abot-earth.amap.com/) [阿里报道 →](https://mp.weixin.qq.com/s/Ves_KeN-ysi9oAM7Vc9a1g)',
    },
  },
  {
    year: '2026.06',
    text: {
      en: '**SocialNav**, a human-inspired foundation model for socially-aware navigation — selected as a **CVPR 2026 Best Paper Candidate**! [project →](https://amap-eai.github.io/SocialNav/) [news →](https://mp.weixin.qq.com/s/R_hkGIct9qQ6nNxuR5eTyQ?scene=1)',
      zh: '**SocialNav**,受人类启发的具身社会感知导航基础模型——入选 **CVPR 2026 最佳论文候选**![项目主页 →](https://amap-eai.github.io/SocialNav/) [高德报道 →](https://mp.weixin.qq.com/s/R_hkGIct9qQ6nNxuR5eTyQ?scene=1)',
    },
  },
  {
    year: '2026.05',
    text: {
      en: '🏆 Won **1st place** at the **AGIBOT World Model Challenge**. [news →](https://mp.weixin.qq.com/s/wZ-v60S5LbNSdG6F5bkxcA)',
      zh: '🏆 荣获 **AGIBOT World Model Challenge** 大赛**冠军**。[高德报道 →](https://mp.weixin.qq.com/s/wZ-v60S5LbNSdG6F5bkxcA)',
    },
  },
  {
    year: '2026.03',
    text: {
      en: '**From Orbit to Ground** accepted to CVPR 2026 Findings — generative city-scale photogrammetry from extreme off-nadir satellite imagery. [project →](https://pku-vcl-geometry.github.io/Orbit2Ground/) [news →](https://mp.weixin.qq.com/s/Ntnd1ooLbcJ-kNB9sQ4jzQ)',
      zh: '**From Orbit to Ground** 被 CVPR 2026 Findings 接收——从极端倾斜卫星影像做生成式城市级摄影测量。[项目主页 →](https://pku-vcl-geometry.github.io/Orbit2Ground/) [机器之心报道 →](https://mp.weixin.qq.com/s/Ntnd1ooLbcJ-kNB9sQ4jzQ)',
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
  {
    year: '2025.08',
    text: {
      en: '**"Yunjing" (云境)**, AMap\'s immersive AI product — sharing its core capabilities and AMap\'s recent advances in digital-twin technology and applications. [news →](https://mp.weixin.qq.com/s/mZhDBmQXgsPaHyNINRfJ7A?scene=1)',
      zh: '分享高德地图沉浸式 AI 产品**"云境"**的核心技术能力,展示高德近期在数字孪生领域的技术成果与应用场景。[公众号文章 →](https://mp.weixin.qq.com/s/mZhDBmQXgsPaHyNINRfJ7A?scene=1)',
    },
  },
];

export const recruiting: Bi = {
  en: "I'm recruiting self-motivated research interns passionate about 3D vision, 3D Gaussian Splatting, and generative world models. Interested? Reach out with your CV via WeChat or email — happy to chat!",
  zh: '欢迎对三维视觉、3DGS、生成式世界模型感兴趣的同学来实习；微信或邮箱发简历联系我即可。',
};

export interface Publication {
  title: string;
  authors: string; // plain string; the author's own short name is bolded automatically
  fullAuthors?: string; // complete list (for "..., et al." papers) shown in a hover popover
  venue: string;
  year: number;
  citations?: number;
  highlight?: string; // English one-liner (titles stay English to control maintenance)
  thumb?: string; // teaser figure path under /pub (e.g. '/pub/pointcnn.webp')
  whiteThumb?: boolean; // figure has a white bg → show whole image (contain) on a white field
  frame?: boolean; // photo figure → draw a thin white keyline around it
  featured?: boolean; // flagship papers get an accent treatment
  award?: string; // honor/distinction badge shown on the card
  links: { label: string; url: string; stars?: number }[]; // stars → GitHub ⭐ count
}

// Ordered by Google Scholar date sort (newest → oldest). Links verified 2026-08-09.
// NOTE: Scholar also lists "WorldOdysseyBench" (subtitle identical to WorldRoamBench)
// — excluded pending confirmation (possible rename / duplicate). Add if confirmed real.
export const publications: Publication[] = [
  {
    title: 'ABot-World-0: Infinite Interactive World Rollout on a Single Desktop GPU',
    authors: 'F Jiang, Z Sun, M Wang, Z Zhu, C Wang, Y Zhang, W Liu, Y Wang, et al.',
    fullAuthors: 'Fan Jiang, Zhaoxu Sun, Mengchao Wang, Ziyu Zhu, Chiyu Wang, Yunpeng Zhang, Wenlin Liu, Yun Wang, Xue Zheng, Rui Sun, Junfeng Ni, Hongyu Pan, Zhongxu Sun, Fei Yu, Zengye Ge, Mengmeng Du, Nianfei Fan, Mingchao Sun, Yu Liu, Yongchang Zhang, Yanqing Zhu, Jiahang Wang, Ning Ying, Yuze Xuan, Di Yang, Zhicheng Liu, Zhe Gao, Tingbing Xu, Jiacheng Sui, Wenjin Yang, Junnan Lai, Shufeng Liu, Yuan Liu, Zheng Zhou, Yingliang Peng, Dawei Cao, Kaifeng Sheng, Yuxiang Cai, Fei Lu, Mu Xu, Ning Guo',
    venue: 'Technical Report',
    year: 2026,
    citations: 0,
    highlight: 'An action-conditioned video world model enabling real-time, long-horizon closed-loop interaction, trained on AAA games, simulators, and web video.',
    thumb: '/pub/abotworld.webp',
    links: [
      { label: 'demo', url: 'https://abot-world.amap.com/' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2607.19191' },
      { label: 'code', url: 'https://github.com/amap-cvlab/ABot-World' },
    ],
  },
  {
    title: 'ABot-3DWorld 0: A Universal World Model to Explore Any 3D Space',
    authors: 'M Sun, L Tang, Y Liu, X Yan, Z Li, Y Zhang, F Yu, Z Ge, Y Liu, J Zhang, et al.',
    fullAuthors: 'Mingchao Sun, Luyang Tang, Yu Liu, Xu Yan, Zhan Li, Yunwei Zhang, Fei Yu, Zengye Ge, Yumin Liu, Jiacheng Zhang, Yongchang Zhang, Jiawei Zhang, Zhicheng Liu, Zhongxu Sun, Tianjian Ouyang, Wenzheng Chen, Shixing Yang, Nianfei Fan, Guodong Sun, Huan Li, Zheng Zhou, Yongze Li, Yingliang Peng, Mengmeng Du, Yuan Liu, Haozhe Shi, Chunnuo Gong, Chengzhen Yu, Chunxue Jia, Yang Liu, Shiying Zeng, Junnan Lai, Hang Zhang, Ning Guo, Baoquan Chen, Mu Xu, Hongyu Pan',
    venue: 'Technical Report',
    year: 2026,
    citations: 1,
    highlight: 'A universal multimodal 3D world model that turns text, image, and video inputs into high-fidelity, explorable 3D worlds.',
    thumb: '/pub/abot3dworld.webp',
    featured: true,
    links: [
      { label: 'demo', url: 'https://abot-world.amap.com/plaza' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2607.11673' },
    ],
  },
  {
    title: 'ABot-N1: Toward a General Visual-Language Navigation Foundation Model',
    authors: 'R Gong, Y Guo, J Hu, J Kong, X Leng, T Li, W Li, F Liu, Z Liu, J Lu, M Luo, et al.',
    fullAuthors: 'Ruiyan Gong, Yingnan Guo, Junjun Hu, Jintao Kong, Xiaoxu Leng, Tianlun Li, Weize Li, Fei Liu, Zhicheng Liu, Jia Lu, Minghua Luo, Chenlin Ming, Yanfen Shen, Jiyue Tao, Zhengbo Wang, Mingyang Yin, Minqi Gu, Zihao Guan, Wei Guo, Guoqing Liu, Huachong Pang, Menglin Yang, Zeqian Ye, Xiaoxiao Geng, Zhining Gu, Honglin Han, Di Jing, Hongyu Pan, Mingchao Sun, Kuan Yang, Jianfang Zhang, Yanghong Chen, Ye He, Wei Mei, Jiahao Shi, Xiangpo Yang, Yanqing Zhu, Yang Cai, Jingjing Ma, Shihui Su, Zixiao Tang, Linbo Zheng, Zedong Chu, Xiaolong Wu, Wenbin Tang, Mu Xu',
    venue: 'Technical Report',
    year: 2026,
    citations: 0,
    highlight: 'A step toward a general Visual Language Navigation foundation model, decoupling cognition from control via a slow-fast architecture guided by dual visual-language signals.',
    thumb: '/pub/abotn1.webp',
    whiteThumb: true,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2607.10383' },
      { label: 'project', url: 'https://amap-cvlab.github.io/ABot-Navigation/ABot-N1/' },
      { label: 'code', url: 'https://github.com/amap-cvlab/ABot-Navigation/tree/ABotN-Bench' },
    ],
  },
  {
    title: 'WorldRoamBench: An Open-World Benchmark for Long-Horizon Stability of Interactive World Models',
    authors: 'TB Xu, J Sui, Z Gao, K Shi, W Yang, Z Liu, Z Sun, M Sun, H Pan, F Jiang, et al.',
    fullAuthors: 'Ting-Bing Xu, Jiacheng Sui, Zhe Gao, Kewei Shi, Wenjin Yang, Zhicheng Liu, Zhaoxu Sun, Mingchao Sun, Hongyu Pan, Fan Jiang, Mu Xu, Qi Fan, Yang Gao, Yong Li, Baoquan Chen',
    venue: 'Benchmark',
    year: 2026,
    citations: 1,
    highlight: 'A benchmark probing long-horizon stability of interactive world models.',
    thumb: '/pub/worldroambench.webp',
    links: [
      { label: 'benchmark', url: 'https://worldroam.amap.com/' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2606.31672' },
    ],
  },
  {
    title: 'ABot-EARTH 0.5: Generative 3D Earth Model',
    authors: 'M Qian, T Ouyang, M Sun, Z Wang, J Xiong, J Han, Y Zhang, J Zhang, et al.',
    fullAuthors: 'Ming Qian, Tianjian Ouyang, Mingchao Sun, Zijian Wang, Jincheng Xiong, Jiarong Han, Yongchang Zhang, Jiawei Zhang, Xu Wang, Yu Liu, Luyang Tang, Fei Yu, Zengye Ge, Mengmeng Du, Yuan Liu, Nianfei Fan, Song Wang, Yingliang Peng, Chunxue Jia, Yang Liu, Shiying Zeng, Haozhe Shi, Junnan Lai, Hongyu Pan, Zheng Wu, Ning Guo, Mu Xu, Hang Zhang',
    venue: 'Technical Report',
    year: 2026,
    citations: 1,
    highlight: 'A generative 3D framework that synthesizes vast, seamless 3D environments from ubiquitous, geospatially referenced satellite imagery.',
    thumb: '/pub/abotearth.webp',
    whiteThumb: true,
    featured: true,
    links: [
      { label: 'demo', url: 'https://abot-earth.amap.com/' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2606.09967' },
    ],
  },
  {
    title: 'POINav: Benchmarking and Enhancing Final-Meters Arrival in Real-World Vision-Language Navigation',
    authors: 'R Gong, M Zhang, Y Zhao, M Sun, Y Shen, Z Chu, Z Gu, W Guo, X Cheng, et al.',
    fullAuthors: 'Ruiyan Gong, Meisheng Zhang, Yuxiang Zhao, Mingchao Sun, Yanfen Shen, Zedong Chu, Zhining Gu, Wei Guo, Xiaolong Cheng, Qiming Li, Kangning Niu, Yanqing Zhu, Xiaolong Wu, Tianlun Li, Mu Xu',
    venue: 'arXiv',
    year: 2026,
    citations: 1,
    highlight: 'The first closed-loop benchmark for real-world POI-goal navigation, paired with a Brain-Action Framework that couples reasoning with continuous waypoint prediction.',
    thumb: '/pub/poinav.webp',
    whiteThumb: true,
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2605.28237' }],
  },
  {
    title: 'Abot-n0: Technical Report on the VLA Foundation Model for Versatile Embodied Navigation',
    authors: 'Z Chu, S Xie, X Wu, Y Shen, M Luo, Z Wang, F Liu, X Leng, J Hu, M Yin, et al.',
    fullAuthors: 'Zedong Chu, Shichao Xie, Xiaolong Wu, Yanfen Shen, Minghua Luo, Zhengbo Wang, Fei Liu, Xiaoxu Leng, Junjun Hu, Mingyang Yin, Jia Lu, Yingnan Guo, Kai Yang, Jiawei Han, Xu Chen, Yanqing Zhu, Yuxiang Zhao, Xin Liu, Yirong Yang, Ye He, Jiahang Wang, Yang Cai, Tianlin Zhang, Li Gao, Liu Liu, Mingchao Sun, Fan Jiang, Chiyu Wang, Zhicheng Liu, Hongyu Pan, Honglin Han, Zhining Gu, Kuan Yang, Jianfang Zhang, Di Jing, Zihao Guan, Wei Guo, Guoqing Liu, Di Yang, Xiangpo Yang, Menglin Yang, Hongguang Xing, Weiguo Li, Mu Xu',
    venue: 'Technical Report',
    year: 2026,
    citations: 15,
    highlight: 'A unified Vision-Language-Action (VLA) foundation model that achieves a "Grand Unification" across 5 core tasks.',
    thumb: '/pub/abotn0.webp',
    whiteThumb: true,
    featured: true,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2602.11598' },
      { label: 'project', url: 'https://amap-cvlab.github.io/ABot-Navigation/ABot-N0/' },
      { label: 'code', url: 'https://github.com/amap-cvlab/ABot-Navigation/tree/ABot-N0' },
    ],
  },
  {
    title: 'From Orbit to Ground: Generative City Photogrammetry from Extreme Off-Nadir Satellite Images',
    authors: 'F Yu, Y Liu, L Tang, M Sun, Z Ge, R Bu, Y Jin, H Zhao, H Sun, Y Li, M Xu, et al.',
    fullAuthors: 'Fei Yu, Yu Liu, Luyang Tang, Mingchao Sun, Zengye Ge, Rui Bu, Yuchao Jin, Haisen Zhao, He Sun, Yangyan Li, Mu Xu, Wenzheng Chen, Baoquan Chen',
    venue: 'CVPR 2026 Findings',
    year: 2026,
    citations: 2,
    highlight: 'Generative city-scale photogrammetry from extreme off-nadir satellite imagery.',
    thumb: '/pub/orbit2ground.webp',
    whiteThumb: true,
    featured: true,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2512.07527' },
      { label: 'project', url: 'https://pku-vcl-geometry.github.io/Orbit2Ground/' },
      { label: 'code', url: 'https://github.com/PKU-VCL-Geometry/Orbit2Ground' },
    ],
  },
  {
    title: 'PointCNN++: Performant Convolution on Native Points',
    authors: 'L Li, H Zhong, R Bu, M Sun, W Chen, B Chen, Y Li',
    venue: 'CVPR',
    year: 2026,
    citations: 1,
    highlight: 'A performant convolution operator that works directly on native point clouds.',
    thumb: '/pub/pointcnnpp.webp',
    whiteThumb: true,
    featured: true,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2511.23227' },
      { label: 'code', url: 'https://github.com/ant-research/pointelligence' },
      {
        label: 'supplement',
        url: 'https://openaccess.thecvf.com/content/CVPR2026/supplemental/Li_PointCNN_Performant_Convolution_CVPR_2026_supplemental.pdf',
      },
    ],
  },
  {
    title: 'SocialNav: Training a Human-Inspired Foundation Model for Socially-Aware Embodied Navigation',
    authors: 'Z Chen, Y Guo, Z Chu, M Luo, Y Shen, M Sun, J Hu, S Xie, Y Kuan, P Shi, et al.',
    fullAuthors: 'Ziyi Chen, Yingnan Guo, Zedong Chu, Minghua Luo, Yanfen Shen, Mingchao Sun, Junjun Hu, Shichao Xie, Kuan Yang, Pei Shi, Zhining Gu, Lu Liu, Honglin Han, Xiaolong Wu, Mu Xu, Yu Zhang, Ning Guo',
    venue: 'CVPR',
    year: 2026,
    citations: 15,
    highlight: 'A human-inspired foundation model for socially-aware embodied navigation.',
    thumb: '/pub/socialnav.webp',
    featured: true,
    frame: true,
    award: 'CVPR 2026 Best Paper Candidate',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2511.21135' },
      { label: 'code', url: 'https://github.com/AMAP-EAI/SocialNav' },
      { label: 'project', url: 'https://amap-eai.github.io/SocialNav/' },
    ],
  },
  {
    title: 'CLoD-GS: Continuous Level-of-Detail via 3D Gaussian Splatting',
    authors: 'Z Cheng, M Sun, Y Liu, Z Ge, L Tang, M Xu, Y Li, P Pan',
    venue: 'ICLR',
    year: 2026,
    citations: 3,
    highlight: 'A framework that integrates a continuous LoD mechanism directly into a 3DGS representation.',
    thumb: '/pub/clodgs.webp',
    whiteThumb: true,
    featured: true,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2510.09997' },
      { label: 'code', url: 'https://github.com/amap-cvlab/CLoD-GS' },
    ],
  },
  {
    title: 'DO-Conv: Depthwise Over-Parameterized Convolutional Layer',
    authors: 'J Cao, Y Li, M Sun, Y Chen, D Lischinski, D Cohen-Or, B Chen, C Tu',
    venue: 'IEEE TIP',
    year: 2022,
    citations: 351,
    highlight: 'A depthwise over-parameterized convolutional layer that boosts 2D CNN backbones.',
    thumb: '/pub/doconv.webp',
    whiteThumb: true,
    links: [
      { label: 'arxiv', url: 'https://arxiv.org/abs/2006.12030' },
      { label: 'code', url: 'https://github.com/yangyanli/DO-Conv', stars: 201 },
      { label: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/35594231/' },
    ],
  },
  {
    title: 'DeepPipes: Learning 3D Pipelines Reconstruction from Point Clouds',
    authors: 'L Cheng, Z Wei, M Sun, S Xin, A Sharf, Y Li, B Chen, C Tu',
    venue: 'Graphical Models',
    year: 2020,
    citations: 50,
    highlight: 'Reconstructing 3D pipeline structures from point clouds.',
    thumb: '/pub/deeppipes.webp',
    whiteThumb: true,
    links: [
      { label: 'pdf', url: 'https://cfcs.pku.edu.cn/baoquan/docs/2021-06/20210608144312059165.pdf' },
      { label: 'code', url: 'https://github.com/ZENULI/PyPipes' },
    ],
  },
  {
    title: 'Mutual Information Maximization in Graph Neural Networks',
    authors: 'X Di, P Yu, R Bu, M Sun',
    venue: 'IJCNN',
    year: 2020,
    citations: 37,
    highlight: 'A mutual-information maximization objective for graph neural networks.',
    thumb: '/pub/mutualinfo.webp',
    whiteThumb: true,
    links: [
      { label: 'arxiv', url: 'https://arxiv.org/abs/1905.08509' },
      { label: 'code', url: 'https://github.com/CODE-SUBMIT/Graph_Neighborhood_1' },
    ],
  },
  {
    title: 'PointCNN: Convolution on X-Transformed Points',
    authors: 'Y Li, R Bu, M Sun, W Wu, X Di, B Chen',
    venue: 'NeurIPS',
    year: 2018,
    citations: 4357,
    highlight: 'A foundational convolution operator for deep learning on point clouds.',
    award: '2021 WAIC Youth Outstanding Paper Award',
    thumb: '/pub/pointcnn.webp',
    whiteThumb: true,
    featured: true,
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/1801.07791' },
      { label: 'code', url: 'https://github.com/yangyanli/PointCNN', stars: 1400 },
      { label: 'neurips', url: 'https://proceedings.neurips.cc/paper/2018/hash/f5f8590cd58a54e94377e6ae2eded4d9-Abstract.html' },
    ],
  },
];
