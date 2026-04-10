// 初二数学题目数据文件 - 继续部分
// kp_003及以后的题目

export const questions_continue = [
  // kp_003: 分式方程 - 7道题
  {
    id: 'kp_003_001',
    knowledgePointId: 'kp_003',
    type: 'choice',
    difficulty: 2,
    question: '下列方程中是分式方程的是（）\nA. (x+1)/2 = 3\nB. 1/(x+1) = 2\nC. x/(x+1) + 1 = 0\nD. B和C都是',
    answer: 'D',
    analysis: '分式方程要求分母中含有未知数，A中分母是常数2，B和C分母都含未知数。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_003_002',
    knowledgePointId: 'kp_003',
    type: 'solution',
    difficulty: 2,
    question: '解方程：2/x = 1/(x-3)',
    answer: 'x=6',
    analysis: '最简公分母是x(x-3)。去分母得2(x-3)=x，展开得2x-6=x，解得x=6。检验：x=6时，分母不为零。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_003_003',
    knowledgePointId: 'kp_003',
    type: 'choice',
    difficulty: 3,
    question: '若分式方程(x-1)/(x+1)=m/(x+1)有增根，则m的值为（）\nA. 0\nB. 1\nC. -1\nD. 2',
    answer: 'D',
    analysis: '增根是x=-1（使分母为零）。去分母得x-1=m，当x=-1时，m=-2。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_003_004',
    knowledgePointId: 'kp_003',
    type: 'solution',
    difficulty: 3,
    question: '解方程：(x+1)/(x-1) - (x-1)/(x+1) = 4/(x²-1)',
    answer: '无解',
    analysis: '最简公分母是(x-1)(x+1)。去分母得(x+1)²-(x-1)²=4，展开得(x²+2x+1)-(x²-2x+1)=4，化简得4x=4，x=1。检验：x=1时，分母为零，是增根，所以方程无解。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_003_005',
    knowledgePointId: 'kp_003',
    type: 'choice',
    difficulty: 3,
    question: '若关于x的方程(2x+m)/(x-3)=1无解，则m的值为（）\nA. -3\nB. 3\nC. -6\nD. 6',
    answer: 'C',
    analysis: '去分母得2x+m=x-3，解得x=-m-3。当x=3时是增根，所以-m-3=3，m=-6。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_003_006',
    knowledgePointId: 'kp_003',
    type: 'solution',
    difficulty: 2,
    question: '甲、乙两人从相距180千米的两地同时出发，相向而行，甲的速度是乙的1.5倍，2小时后相遇，求两人的速度。',
    answer: '甲45km/h，乙30km/h',
    analysis: '设乙速为v，则甲速为1.5v。(1.5v+v)×2=180，解得v=30，1.5v=45。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_003_007',
    knowledgePointId: 'kp_003',
    type: 'solution',
    difficulty: 3,
    question: '某工厂计划生产一批零件，如果每天生产200个，比计划晚1天完成；如果每天生产250个，可提前1天完成。求计划天数和零件总数。',
    answer: '9天，1600个',
    analysis: '设计划x天。200(x+1)=250(x-1)，解得200x+200=250x-250，50x=450，x=9。总数=200×10=2000。',
    source: '2023北京海淀初一（上）期中数学试卷'
  }
];