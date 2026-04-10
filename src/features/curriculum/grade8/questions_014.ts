// 初二数学题目数据文件 - kp_014 等腰三角形

export const questions_014 = [
  // kp_014: 等腰三角形 - 8道题
  {
    id: 'kp_014_001',
    knowledgePointId: 'kp_014',
    type: 'choice',
    difficulty: 2,
    question: '等腰三角形的两边长分别为3和7，则周长为（）\nA. 13\nB. 17\nC. 13或17\nD. 无法确定',
    answer: 'B',
    analysis: '等腰三角形的两边可能是3,3,7或3,7,7。3+3<7不满足三角形条件，所以只能是3,7,7，周长17。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_014_002',
    knowledgePointId: 'kp_014',
    type: 'choice',
    difficulty: 2,
    question: '若等腰三角形的一个角是80°，则这个三角形的顶角是（）\nA. 20°\nB. 80°\nC. 20°或80°\nD. 50°',
    answer: 'C',
    analysis: '80°可能是顶角，也可能是底角。若是底角，则顶角=180°-80°-80°=20°。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_014_003',
    knowledgePointId: 'kp_014',
    type: 'choice',
    difficulty: 2,
    question: '等边三角形的对称轴有（）条\nA. 1\nB. 2\nC. 3\nD. 6',
    answer: 'C',
    analysis: '等边三角形有三条对称轴，每条高线都是对称轴。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_014_004',
    knowledgePointId: 'kp_014',
    type: 'solution',
    difficulty: 2,
    question: '等腰三角形的一个底角是50°，求顶角的度数。',
    answer: '80°',
    analysis: '等腰三角形两个底角相等，所以另一个底角也是50°。顶角=180°-50°-50°=80°。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_014_005',
    knowledgePointId: 'kp_014',
    type: 'solution',
    difficulty: 3,
    question: '已知△ABC中，AB=AC，∠BAD=∠CAD。求证：BD=CD，∠B=∠C。',
    answer: 'SAS全等证明',
    analysis: 'AB=AC，∠BAD=∠CAD，AD=AD，所以△BAD≌△CAD（SAS）。所以BD=CD，∠B=∠C。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_014_006',
    knowledgePointId: 'kp_014',
    type: 'solution',
    difficulty: 3,
    question: '已知：AB=AC，∠B=∠C。求证：△ABC是等腰三角形。',
    answer: '等角对等边',
    analysis: '∠B=∠C，所以AB=AC，△ABC是等腰三角形。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_014_007',
    knowledgePointId: 'kp_014',
    type: 'solution',
    difficulty: 3,
    question: '等腰三角形的一边长为6，另一边长为8，则周长为（）\nA. 20\nB. 22\nC. 20或22\nD. 无法确定',
    answer: 'C',
    analysis: '可能是6,6,8（周长20）或6,8,8（周长22）。两种情况都满足三角形条件。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_014_008',
    knowledgePointId: 'kp_014',
    type: 'solution',
    difficulty: 3,
    question: '已知等腰三角形的周长为24，底边长为6，求腰长。',
    answer: '9',
    analysis: '设腰长为x，则2x+6=24，2x=18，x=9。',
    source: '2023北京海淀初一（上）期中数学试卷'
  }
];