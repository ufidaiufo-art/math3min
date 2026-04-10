// 初二数学题目数据文件 - kp_007 不等式与不等式组

export const questions_007 = [
  // kp_007: 不等式与不等式组 - 8道题
  {
    id: 'kp_007_001',
    knowledgePointId: 'kp_007',
    type: 'choice',
    difficulty: 2,
    question: '下列不等式中是一元一次不等式的是（）\nA. x²+1>0\nB. 2x+3y<5\nC. 3x-2>5x+1\nD. x(x-1)≤2',
    answer: 'C',
    analysis: 'A是二次不等式，B是二元一次不等式，D化简后是二次不等式，C是一元一次不等式。',
    source: '2024北京重点校期中真题汇编'
  },
  {
    id: 'kp_007_002',
    knowledgePointId: 'kp_007',
    type: 'choice',
    difficulty: 2,
    question: '不等式3x-5>1的解集是（）\nA. x>2\nB. x<2\nC. x>-2\nD. x<-2',
    answer: 'A',
    analysis: '3x-5>1，3x>6，x>2。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_007_003',
    knowledgePointId: 'kp_007',
    type: 'choice',
    difficulty: 2,
    question: '若a<b，且am>bm，则m的取值范围是（）\nA. m>0\nB. m<0\nC. m=0\nD. m为任意实数',
    answer: 'B',
    analysis: '不等式两边同乘负数，不等号方向改变。所以m<0。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_007_004',
    knowledgePointId: 'kp_007',
    type: 'solution',
    difficulty: 2,
    question: '解不等式：3(x-2) < 2x + 5',
    answer: 'x < 11',
    analysis: '3x-6 < 2x+5，3x-2x < 5+6，x < 11。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_007_005',
    knowledgePointId: 'kp_007',
    type: 'solution',
    difficulty: 3,
    question: '解不等式组：{2x-1>3, x+2≤6}',
    answer: '2<x≤4',
    analysis: '解第一个不等式：2x>4，x>2。解第二个不等式：x≤4。所以解集为2<x≤4。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_007_006',
    knowledgePointId: 'kp_007',
    type: 'choice',
    difficulty: 3,
    question: '不等式组{x>2, x<a}无解的充要条件是（）\nA. a≤2\nB. a<2\nC. a>2\nD. a≥2',
    answer: 'A',
    analysis: '当a≤2时，x>2和x<a无交集，所以无解。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_007_007',
    knowledgePointId: 'kp_007',
    type: 'solution',
    difficulty: 3,
    question: '某商品原价m元，先降价20%，再涨价10%，最终价格不超过原价的1.1倍，求m的取值范围。',
    answer: 'm≥0',
    analysis: '最终价格=0.8m×1.1=0.88m。由0.88m≤1.1m，得0.88≤1.1，恒成立。所以m≥0。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_007_008',
    knowledgePointId: 'kp_007',
    type: 'solution',
    difficulty: 3,
    question: '解不等式组，并写出它的所有整数解：{3x-2≤x, (2x+1)/5 < (x+1)/2}',
    answer: '整数解：-2, -1, 0, 1',
    analysis: '解①：3x-2≤x，2x≤2，x≤1。解②：2(2x+1)<5(x+1)，4x+2<5x+5，-3<x。所以-3<x≤1。整数解：-2,-1,0,1。',
    source: '2023北京海淀初一（下）期末数学试卷'
  }
];