// 初二数学题目数据文件 - kp_005 一元一次方程

export const questions_005 = [
  // kp_005: 一元一次方程 - 8道题
  {
    id: 'kp_005_001',
    knowledgePointId: 'kp_005',
    type: 'choice',
    difficulty: 2,
    question: '下列方程中是一元一次方程的是（）\nA. x + y = 5\nB. x² - 2x = 3\nC. 2x - 3 = 7\nD. x(x-1)=2',
    answer: 'C',
    analysis: 'A是二元一次方程，B是二次方程，D化简后是二次方程，C是一元一次方程。',
    source: '2024北京重点校期中真题汇编'
  },
  {
    id: 'kp_005_002',
    knowledgePointId: 'kp_005',
    type: 'solution',
    difficulty: 2,
    question: '解方程：3x - 7 = 2x + 5',
    answer: 'x = 12',
    analysis: '3x - 2x = 5 + 7，x = 12',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_005_003',
    knowledgePointId: 'kp_005',
    type: 'solution',
    difficulty: 3,
    question: '解方程：5(x - 2) = 2(3x + 1) - 12',
    answer: 'x = 0',
    analysis: '5x - 10 = 6x + 2 - 12，5x - 10 = 6x - 10，5x - 6x = -10 + 10，-x = 0，x = 0',
    source: '2024北京重点校期中真题汇编'
  },
  {
    id: 'kp_005_004',
    knowledgePointId: 'kp_005',
    type: 'solution',
    difficulty: 3,
    question: '解方程：(2x - 1)/3 = (x + 2)/2 - 1',
    answer: 'x = 2',
    analysis: '两边同乘6得：2(2x - 1) = 3(x + 2) - 6，4x - 2 = 3x + 6 - 6，4x - 2 = 3x，x = 2',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_005_005',
    knowledgePointId: 'kp_005',
    type: 'solution',
    difficulty: 3,
    question: '某商品按标价的8折出售，可获利20%。若该商品的进价为200元，求标价。',
    answer: '300元',
    analysis: '设标价为x元。0.8x=200×(1+20%)=240，解得x=300。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_005_006',
    knowledgePointId: 'kp_005',
    type: 'solution',
    difficulty: 2,
    question: '甲、乙两人从同一地点出发，甲以每分钟60米的速度前进，乙以每分钟80米的速度追赶，若乙比甲晚出发3分钟，问乙几分钟能追上甲？',
    answer: '9分钟',
    analysis: '设乙用x分钟追上。60(x+3)=80x，解得60x+180=80x，x=9。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_005_007',
    knowledgePointId: 'kp_005',
    type: 'solution',
    difficulty: 3,
    question: '某工厂计划生产一批零件，如果每天生产200个，比计划晚1天完成；如果每天生产250个，可提前1天完成。求计划天数和零件总数。',
    answer: '9天，1600个',
    analysis: '设计划x天。200(x+1)=250(x-1)，解得200x+200=250x-250，50x=450，x=9。总数=200×10=2000。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_005_008',
    knowledgePointId: 'kp_005',
    type: 'choice',
    difficulty: 2,
    question: '若关于x的方程2x+3=5和4x+k=7的解相同，则k的值为（）\nA. -1\nB. 1\nC. 2\nD. 3',
    answer: 'D',
    analysis: '由第一个方程得x=1，代入第二个方程得4+k=7，k=3。',
    source: '2023北京海淀初一（上）期中数学试卷'
  }
];