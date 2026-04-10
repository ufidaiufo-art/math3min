// 初二数学题目数据文件 - kp_018 梯形

export const questions_018 = [
  // kp_018: 梯形 - 8道题
  {
    id: 'kp_018_001',
    knowledgePointId: 'kp_018',
    type: 'choice',
    difficulty: 2,
    question: '下列四边形中一定是梯形的是（）\nA. 两组对边分别平行\nB. 一组对边平行且相等\nC. 一组对边平行而另一组不平行\nD. 两组对边分别相等',
    answer: 'C',
    analysis: 'A是平行四边形，B可能是平行四边形，C符合梯形定义，D可能是平行四边形。',
    source: '2023北京海淀初二（上）期中数学试卷'
  },
  {
    id: 'kp_018_002',
    knowledgePointId: 'kp_018',
    type: 'choice',
    difficulty: 2,
    question: '等腰梯形的对角线（）\nA. 相等\nB. 不相等\nC. 互相垂直\nD. 互相平分',
    answer: 'A',
    analysis: '等腰梯形的对角线相等。',
    source: '2023北京西城初二（上）期中数学试卷'
  },
  {
    id: 'kp_018_003',
    knowledgePointId: 'kp_018',
    type: 'solution',
    difficulty: 2,
    question: '梯形的上底和下底分别为4和10，高为6，求中位线的长度。',
    answer: '7',
    analysis: '中位线=(上底+下底)/2=(4+10)/2=7。',
    source: '2023北京东城初二（上）期中数学试卷'
  },
  {
    id: 'kp_018_004',
    knowledgePointId: 'kp_018',
    type: 'solution',
    difficulty: 2,
    question: '在梯形ABCD中，AB∥CD，AD=BC，∠A=70°，求∠B的度数。',
    answer: '70°',
    analysis: 'AD=BC，所以是等腰梯形。同一底上的两个角相等，所以∠B=∠A=70°。',
    source: '2023北京朝阳初二（上）期中数学试卷'
  },
  {
    id: 'kp_018_005',
    knowledgePointId: 'kp_018',
    type: 'solution',
    difficulty: 2,
    question: '直角梯形的两底分别为3和5，高为4，则斜腰长为（）\nA. 5\nB. √17\nC. √20\nD. 6',
    answer: '√20',
    analysis: '斜腰=√((5-3)²+4²)=√(4+16)=√20=2√5。',
    source: '2023北京丰台初二（上）期中数学试卷'
  },
  {
    id: 'kp_018_006',
    knowledgePointId: 'kp_018',
    type: 'solution',
    difficulty: 2,
    question: '等腰梯形的周长为30，上底为8，腰长为5，求下底长。',
    answer: '12',
    analysis: '下底=30-8-5-5=12。',
    source: '2023北京通州初二（上）期中数学试卷'
  },
  {
    id: 'kp_018_007',
    knowledgePointId: 'kp_018',
    type: 'choice',
    difficulty: 3,
    question: '在等腰梯形ABCD中，AB∥CD，AD=BC，对角线AC⊥BD，若AB=8，CD=12，求梯形的高。',
    answer: '4√6',
    analysis: '设对角线交于O。在等腰梯形中，对角线相等，AO=CO，BO=DO。由AC⊥BD，利用面积公式和勾股定理可求得高为√(8×12)=√96=4√6。',
    source: '2023北京昌平初二（上）期中数学试卷'
  },
  {
    id: 'kp_018_008',
    knowledgePointId: 'kp_018',
    type: 'choice',
    difficulty: 3,
    question: '梯形ABCD中，AB∥CD，AD=BC，若AB=6，CD=10，高为4，则梯形面积为（）\nA. 32\nB. 36\nC. 40\nD. 48',
    answer: '32',
    analysis: '梯形面积=(上底+下底)×高÷2=(6+10)×4÷2=32。',
    source: '2023北京海淀初二（上）期中数学试卷'
  }
];