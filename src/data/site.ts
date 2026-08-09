// ============================================================
// Central content source. Everything user-facing reads from here.
// Publications & stats are real (parsed from Google Scholar, 2026-08-09).
// Bio / email / socials are still PLACEHOLDERS pending the detailed profile.
// ============================================================

export const profile = {
  name: 'Mingchao Sun',
  role: '3D & World Model Algorithm Engineer',
  affiliation: 'Alibaba Group',
  // one-liner in the terminal `cat ./about.txt` — grounded in real work
  tagline:
    'I build world models and 3D intelligence — from point-cloud deep learning (PointCNN) to interactive 3D worlds.',
  location: 'China',
  selfShort: 'M Sun', // abbreviated form used in author lists → bolded automatically
  email: 'sun.mc@outlook.com',
  // Google Scholar stats (2026-08-09)
  stats: { citations: 4913, hIndex: 7, i10Index: 7 },
  socials: [
    { label: 'GitHub', handle: '@MingChaoSun', url: 'https://github.com/MingChaoSun' },
    {
      label: 'Google Scholar',
      handle: 'bqsITKQAAAAJ',
      url: 'https://scholar.google.com/citations?user=bqsITKQAAAAJ',
    },
    { label: 'DBLP', handle: '197/5393', url: 'https://dblp.org/pid/197/5393' },
    { label: 'Email', handle: 'sun.mc@outlook.com', url: 'mailto:sun.mc@outlook.com' },
  ],
};

// shown in the terminal `ls ./focus` line — reflects the real research arc
export const focusAreas = [
  'world_models/',
  '3d_gaussian_splatting/',
  'embodied_navigation/',
  'point_cloud_dl/',
  'generative_3d/',
];

export interface Publication {
  title: string;
  authors: string; // plain string; the author's own short name is bolded
  venue: string;
  year: number;
  citations?: number;
  highlight?: string;
  thumb?: string;
  // TODO: swap the arXiv/scholar links for real project / code pages where available.
  links: { label: string; url: string }[];
}

// Real list, ordered to tell a story: flagship / first-author work first,
// then recent work, then earlier foundational papers. (Not pure recency.)
export const publications: Publication[] = [
  {
    title: 'ABot-3DWorld 0: A Universal World Model to Explore Any 3D Space',
    authors: 'M Sun, L Tang, Y Liu, X Yan, Z Li, Y Zhang, F Yu, Z Ge, Y Liu, J Zhang, et al.',
    venue: 'arXiv',
    year: 2026,
    citations: 1,
    highlight:
      'A universal world model that can explore and interact with any 3D space. (first-author)',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2607.11673' }],
  },
  {
    title: 'PointCNN++: Performant Convolution on Native Points',
    authors: 'L Li, H Zhong, R Bu, M Sun, W Chen, B Chen, Y Li',
    venue: 'CVPR',
    year: 2026,
    citations: 1,
    highlight:
      'A performant convolution operator that works directly on native (un-sampled) point clouds.',
    links: [],
  },
  {
    title: 'CLoD-GS: Continuous Level-of-Detail via 3D Gaussian Splatting',
    authors: 'Z Cheng, M Sun, Y Liu, Z Ge, L Tang, M Xu, Y Li, P Pan',
    venue: 'ICLR',
    year: 2026,
    citations: 3,
    highlight: 'Continuous level-of-detail rendering built on 3D Gaussian Splatting.',
    links: [],
  },
  {
    title: 'SocialNav: Training a Human-Inspired Foundation Model for Socially-Aware Embodied Navigation',
    authors: 'Z Chen, Y Guo, Z Chu, M Luo, Y Shen, M Sun, J Hu, S Xie, Y Kuan, P Shi, et al.',
    venue: 'CVPR',
    year: 2026,
    citations: 15,
    highlight: 'A human-inspired foundation model for socially-aware embodied navigation.',
    links: [],
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
    title: 'ABot-Earth 0.5: Generative 3D Earth Model',
    authors: 'M Qian, T Ouyang, M Sun, Z Wang, J Xiong, J Han, Y Zhang, J Zhang, et al.',
    venue: 'arXiv',
    year: 2026,
    citations: 1,
    highlight: 'A generative 3D model of the Earth.',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2606.09967' }],
  },
  {
    title: 'PointCNN: Convolution on X-Transformed Points',
    authors: 'Y Li, R Bu, M Sun, W Wu, X Di, B Chen',
    venue: 'NeurIPS',
    year: 2018,
    citations: 4357,
    highlight:
      'A foundational convolution operator for deep learning on point clouds — the seed of the PointCNN line.',
    links: [],
  },
  {
    title: 'From Orbit to Ground: Generative City Photogrammetry from Extreme Off-Nadir Satellite Images',
    authors: 'F Yu, Y Liu, L Tang, M Sun, Z Ge, R Bu, Y Jin, H Zhao, H Sun, Y Li, M Xu, et al.',
    venue: 'CVPR',
    year: 2026,
    citations: 2,
    highlight: 'Generative city-scale photogrammetry from extreme off-nadir satellite imagery.',
    links: [],
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
    title: 'POINav: Benchmarking and Enhancing Final-Meters Arrival in Real-World Vision-Language Navigation',
    authors: 'R Gong, M Zhang, Y Zhao, M Sun, Y Shen, Z Chu, Z Gu, W Guo, X Cheng, et al.',
    venue: 'arXiv',
    year: 2026,
    citations: 1,
    highlight: 'Benchmarking and enhancing final-meters arrival in real-world VLN.',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2605.28237' }],
  },
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
    title: 'ABot-N1: Toward a General Visual-Language Navigation Foundation Model',
    authors: 'R Gong, Y Guo, J Hu, J Kong, X Leng, T Li, W Li, F Liu, Z Liu, J Lu, M Luo, et al.',
    venue: 'arXiv',
    year: 2026,
    citations: 0,
    highlight: 'A general visual-language navigation foundation model.',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2607.10383' }],
  },
  {
    title: 'WorldOdysseyBench: An Open-World Benchmark for Long-Horizon Stability of Interactive World Models',
    authors: 'TB Xu, J Sui, Z Gao, K Shi, W Yang, Z Liu, Z Sun, M Sun, H Pan, F Jiang, et al.',
    venue: 'arXiv',
    year: 2026,
    citations: 1,
    highlight: 'An open-world benchmark for long-horizon stability of interactive world models.',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2606.31672' }],
  },
  {
    title: 'DO-Conv: Depthwise Over-Parameterized Convolutional Layer',
    authors: 'J Cao, Y Li, M Sun, Y Chen, D Lischinski, D Cohen-Or, B Chen, C Tu',
    venue: 'IEEE TIP',
    year: 2022,
    citations: 351,
    highlight: 'A depthwise over-parameterized convolutional layer that boosts 2D CNN backbones.',
    links: [],
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
    title: 'Large-Scale 3D Shape Reconstruction and Segmentation from ShapeNetCore55',
    authors: 'L Yi, L Shao, M Savva, H Huang, Y Zhou, Q Wang, B Graham, M Engelcke, et al.',
    venue: 'arXiv',
    year: 2017,
    citations: 78,
    highlight: 'The large-scale ShapeNetCore55 reconstruction & segmentation benchmark.',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/1710.06104' }],
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
    title: 'First and Complementary Neighborhood Combination of Adjacency Matrix for Graph Learning',
    authors: 'X Di, P Yu, M Sun, R Bu',
    venue: 'arXiv',
    year: 2019,
    citations: 0,
    highlight: 'Combining first-order and complementary neighborhoods for graph learning.',
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/1905.08509' }],
  },
];

export interface Project {
  name: string;
  blurb: string;
  tags: string[];
  url?: string;
}

// PLACEHOLDERS — the ABot series & PointCNN line could each become a project card.
export const projects: Project[] = [
  {
    name: 'ABot',
    blurb: 'A family of world models for embodied agents — 3DWorld, Earth, World, N1.',
    tags: ['World Model', 'Embodied AI'],
    url: '#',
  },
  {
    name: 'PointCNN',
    blurb: 'Convolution on X-transformed points — deep learning directly on point clouds.',
    tags: ['3D', 'Point Cloud'],
    url: '#',
  },
  {
    name: 'CLoD-GS',
    blurb: 'Continuous level-of-detail rendering via 3D Gaussian Splatting.',
    tags: ['3DGS', 'Rendering'],
    url: '#',
  },
];
