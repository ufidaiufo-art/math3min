// 初二数学题目数据文件 - kp_017 矩形菱形正方形

export const questions_017 = [
  // kp_017: 矩形菱形正方形 - 8道题
  {
    id: 'kp_017_001',
    knowledgePointId: 'kp_017',
    type: 'choice',
    difficulty: 2,
    question: '下列四边形中既是轴对称图形又是中心对称图形的是（）\nA. 矩形\nB. 菱形\nC. 正方形\nD. 平行四边形',
    answer: 'C',
    analysis: '矩形和菱形是轴对称图形，正方形既是轴对称又是中心对称，平行四边形只是中心对称。',
    source: '2023北京海淀初二（上）期中数学试卷'
  },
  {
    id: 'kp_017_002',
    knowledgePointId: 'kp_017',
    type: 'choice',
    difficulty: 2,
    question: '菱形的周长是40，则边长是（）\nA. 8\nB. 10\nC. 12\nD. 16',
    answer: 'B',
    analysis: '菱形四边相等，40÷4=10。',
    source: '2023北京西城初二（上）期中数学试卷'
  },
  {
    id: 'kp_017_003',
    knowledgePointId: 'kp_017',
    type: 'choice',
    difficulty: 2,
    question: '正方形具有而矩形不具有的性质是（）\nA. 对角线相等\nB. 对角线互相平分\nC. 对角线互相垂直\nD. 四个角都是直角',
    answer: 'C',
    analysis: '菱形的对角线互相垂直，正方形具有菱形的性质。',
    source: '2023北京东城初二（上）期中数学试卷'
  },
  {
    id: 'kp_017_004',
    knowledgePointId: 'kp_017',
    type: 'solution',
    difficulty: 2,
    question: '在矩形ABCD中，对角线AC=10，求BD的长度。',
    answer: '10',
    analysis: '矩形的对角线相等，所以BD=AC=10。',
    source: '2023北京朝阳初二（上）期中数学试卷'
  },
  {
    id: 'kp_017_005',
    knowledgePointId: 'kp_017',
    type: 'solution',
    difficulty: 2,
    question: '在菱形ABCD中，对角线AC=8，BD=6，求边长。',
    answer: '5',
    analysis: '菱形对角线互相垂直平分，边长=√((8/2)²+(6/2)²)=√(16+9)=5。',
    source: '2023北京丰台初二（上）期中数学试卷'
  },
  {
    id: 'kp_017_006',
    knowledgePointId: 'kp_017',
    type: 'solution',
    difficulty: 2,
    question: '在矩形ABCD中，AB=6，BC=8，则对角线AC=（）\nA. 10\nB. 12\nC. 14\nD. 16',
    answer: '10',
    analysis: 'AC=√(AB²+BC²)=√(36+64)=10。',
    source: '2023北京通州初二（上）期中数学试卷'
  },
  {
    id: 'kp_017_007',
    knowledgePointId: 'kp_017',
    type: 'choice',
    difficulty: 3,
    question: '已知：平行四边形ABCD中，∠A=90°，AB=BC。求证：ABCD是正方形。',
    answer: '∠A=90°，所以是矩形。AB=BC，邻边相等，所以是菱形。既是矩形又是菱形，所以是正方形。',
    analysis: '同时满足矩形和菱形的条件，因此是正方形。',
    source: '2023北京昌平初二（上）期中数学试卷'
  },
  {
    id: 'kp_017_008',
    knowledgePointId: 'kp_017',
    type: 'choice',
    difficulty: 3,
    question: '在正方形ABCD中，对角线AC和BD相交于O，则∠AOB的度数是（）\nA. 45°\nB. 60°\nC. 90°\nD. 120°',
    answer: 'C',
    analysis: '正方形的对角线互相垂直平分，所以∠AOB=90°。',
    source: '2023北京海淀初二（上）期中数学试卷'
  }
];