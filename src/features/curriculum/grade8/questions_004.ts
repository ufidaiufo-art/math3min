// 初二数学题目数据文件 - kp_004 二次根式

export const questions_004 = [
  // kp_004: 二次根式 - 8道题
  {
    id: 'kp_004_001',
    knowledgePointId: 'kp_004',
    type: 'choice',
    difficulty: 2,
    question: '函数y=√(x-2)的自变量取值范围是（）\nA. x>2\nB. x≥2\nC. x<2\nD. x≤2',
    answer: 'B',
    analysis: '被开方数必须非负，x-2≥0，所以x≥2。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_004_002',
    knowledgePointId: 'kp_004',
    type: 'choice',
    difficulty: 2,
    question: '计算：√(8) × √(2) = （）\nA. 2\nB. 4\nC. 2√2\nD. 4√2',
    answer: 'B',
    analysis: '√8×√2=√16=4。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_004_003',
    knowledgePointId: 'kp_004',
    type: 'choice',
    difficulty: 2,
    question: '若√(a+1)与√(8)是同类二次根式，则a的值是（）\nA. 7\nB. 8\nC. 9\nD. 10',
    answer: 'A',
    analysis: '√8=2√2，要使√(a+1)与√8是同类二次根式，则a+1=2，a=1。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_004_004',
    knowledgePointId: 'kp_004',
    type: 'solution',
    difficulty: 2,
    question: '化简：√(48) - √(12) + √(27)',
    answer: '5√3',
    analysis: '√48=4√3，√12=2√3，√27=3√3。原式=4√3-2√3+3√3=5√3。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_004_005',
    knowledgePointId: 'kp_004',
    type: 'choice',
    difficulty: 2,
    question: '化简：√(5+2√6) = （）\nA. √2+√3\nB. √2-√3\nC. √3+√2\nD. √3-√2',
    answer: 'A',
    analysis: '设√(5+2√6)=√a+√b，则a+b=5，2√(ab)=2√6，所以ab=6。解得a=2,b=3。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_004_006',
    knowledgePointId: 'kp_004',
    type: 'solution',
    difficulty: 3,
    question: '计算：(√3+√2)(√3-√2) + (√5+2)(√5-2)',
    answer: '2',
    analysis: '第一项用平方差公式：(√3)²-(√2)²=3-2=1。第二项：(√5)²-2²=5-4=1。原式=1+1=2。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_004_007',
    knowledgePointId: 'kp_004',
    type: 'solution',
    difficulty: 3,
    question: '计算：1/(√2+1) + 1/(√3+1)',
    answer: '√2+√3-2',
    analysis: '有理化分母：1/(√2+1)=√2-1，1/(√3+1)=(√3-1)/2。原式=√2-1+(√3-1)/2=(2√2+√3-3)/2。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_004_008',
    knowledgePointId: 'kp_004',
    type: 'choice',
    difficulty: 1,
    question: '9的算术平方根是（）\nA. ±3  B. 3  C. -3  D. ±9',
    answer: 'B',
    analysis: '算术平方根是非负根',
    source: '2022北京怀柔初一（下）期末数学试卷'
  }
];