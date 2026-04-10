// 初二数学题目数据文件 - kp_006 二元一次方程组

export const questions_006 = [
  // kp_006: 二元一次方程组 - 8道题
  {
    id: 'kp_006_001',
    knowledgePointId: 'kp_006',
    type: 'choice',
    difficulty: 2,
    question: '下列方程组中是二元一次方程组的是（）\nA. {x+y=2, xy=3}\nB. {2x+3y=5, x-2=0}\nC. {x²+y=4, x-y=1}\nD. {x+y=1, x+z=2}',
    answer: 'B',
    analysis: 'A中xy=3是二次方程，C中x²+y=4是二次方程，D含有三个未知数，B是二元一次方程组。',
    source: '2024北京重点校期中真题汇编'
  },
  {
    id: 'kp_006_002',
    knowledgePointId: 'kp_006',
    type: 'solution',
    difficulty: 2,
    question: '用代入法解方程组：{x+y=5, 2x-y=1}',
    answer: 'x=2,y=3',
    analysis: '由第一个方程得y=5-x。代入第二个方程得2x-(5-x)=1，3x-5=1，x=2。y=5-2=3。',
    source: '2024北京重点校期中真题汇编'
  },
  {
    id: 'kp_006_003',
    knowledgePointId: 'kp_006',
    type: 'solution',
    difficulty: 2,
    question: '用加减法解方程组：{x + 2y = 7, 3x - 2y = 5}',
    answer: 'x=3,y=2',
    analysis: '两式相加得4x=12，x=3。代入第一个方程得3+2y=7，y=2。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_006_004',
    knowledgePointId: 'kp_006',
    type: 'solution',
    difficulty: 2,
    question: '方程组{x+2y=4, 2x+4y=8}的解的情况是（）\nA. 唯一解\nB. 无解\nC. 无穷多解\nD. 无法确定',
    answer: 'C',
    analysis: '第二个方程是第一个方程的2倍，两个方程等价，所以有无穷多解。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_006_005',
    knowledgePointId: 'kp_006',
    type: 'solution',
    difficulty: 2,
    question: '鸡兔同笼，共有35个头，94只脚，问鸡兔各多少只？',
    answer: '鸡23只，兔12只',
    analysis: '设鸡x只，兔y只。{x+y=35, 2x+4y=94}。解得x=23,y=12。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_006_006',
    knowledgePointId: 'kp_006',
    type: 'solution',
    difficulty: 3,
    question: '甲、乙两人从相距120千米的两地同时出发，相向而行，2小时后相遇。若甲的速度是乙的2倍，求两人的速度。',
    answer: '甲40km/h，乙20km/h',
    analysis: '设乙速为v，则甲速为2v。(2v+v)×2=120，6v=120，v=20，2v=40。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_006_007',
    knowledgePointId: 'kp_006',
    type: 'solution',
    difficulty: 3,
    question: '某工厂有甲、乙两种原料共500千克，甲种原料每吨可生产产品20件，乙种每吨可生产30件，若总共产出12000件，求两种原料各多少千克。',
    answer: '甲300kg，乙200kg',
    analysis: '设甲x千克，乙y千克。{x+y=500, 0.02x+0.03y=12}。解得x=300,y=200。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_006_008',
    knowledgePointId: 'kp_006',
    type: 'choice',
    difficulty: 2,
    question: '若方程组{2x+3y=7, 4x+6y=14}的解的情况是（）\nA. 唯一解\nB. 无解\nC. 无穷多解\nD. 无法确定',
    answer: 'C',
    analysis: '第二个方程是第一个方程的2倍，两个方程等价，所以有无穷多解。',
    source: '2024北京重点校期中真题汇编'
  }
];