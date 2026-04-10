// 初二数学题目数据文件 - kp_008 函数概念

export const questions_008 = [
  // kp_008: 函数概念 - 8道题
  {
    id: 'kp_008_001',
    knowledgePointId: 'kp_008',
    type: 'choice',
    difficulty: 2,
    question: '下列关系式中，y不是x的函数的是（）\nA. y=2x+1\nB. y=x²\nC. y=±√x\nD. y=1/x',
    answer: 'C',
    analysis: '对于C，当x>0时，y有两个值与x对应，不符合函数定义。A、B、D中y都是x的唯一函数值。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_008_002',
    knowledgePointId: 'kp_008',
    type: 'choice',
    difficulty: 2,
    question: '函数y=√(x-1)的自变量取值范围是（）\nA. x>1\nB. x≥1\nC. x<1\nD. x≤1',
    answer: 'B',
    analysis: '被开方数必须非负，x-1≥0，所以x≥1。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_008_003',
    knowledgePointId: 'kp_008',
    type: 'choice',
    difficulty: 2,
    question: '下列各组函数中，表示同一函数的是（）\nA. y=x和y=√(x²)\nB. y=|x|和y=√(x²)\nC. y=x和y=(√x)²\nD. y=x²和y=|x|',
    answer: 'B',
    analysis: 'A中√(x²)=|x|≠x；B中√(x²)=|x|；C中(√x)²=x(x≥0)；D中x²≠|x|。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_008_004',
    knowledgePointId: 'kp_008',
    type: 'solution',
    difficulty: 2,
    question: '已知函数y=2x-1，当x=3时，函数值是（）\nA. 5\nB. -5\nC. 7\nD. -7',
    answer: 'A',
    analysis: 'y=2×3-1=6-1=5。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_008_005',
    knowledgePointId: 'kp_008',
    type: 'solution',
    difficulty: 3,
    question: '画出函数y=|x-2|的图像，并求其最小值。',
    answer: '最小值为0，在x=2处取得',
    analysis: '当x≥2时，y=x-2；当x<2时，y=2-x。图像为V字形，顶点在(2,0)。最小值为0，在x=2处取得。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_008_006',
    knowledgePointId: 'kp_008',
    type: 'choice',
    difficulty: 3,
    question: '函数y=1/(x-1)的图像关于（）对称\nA. x轴\nB. y轴\nC. 原点\nD. 直线x=1',
    answer: 'D',
    analysis: '函数y=1/(x-1)是将y=1/x向右平移1个单位，所以关于x=1对称。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_008_007',
    knowledgePointId: 'kp_008',
    type: 'choice',
    difficulty: 3,
    question: '若函数y=kx+b的图像经过第一、二、四象限，则k和b的取值范围是（）\nA. k>0,b>0\nB. k>0,b<0\nC. k<0,b>0\nD. k<0,b<0',
    answer: 'C',
    analysis: '直线经过一、二、四象限，说明斜率k<0，截距b>0。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_008_008',
    knowledgePointId: 'kp_008',
    type: 'solution',
    difficulty: 2,
    question: '已知函数y=ax+b的图像经过点(1,3)和(2,5)，求a和b的值。',
    answer: 'a=2,b=1',
    analysis: '代入两点得：{a+b=3, 2a+b=5}。解得a=2,b=1。',
    source: '2023北京海淀初一（上）期中数学试卷'
  }
];