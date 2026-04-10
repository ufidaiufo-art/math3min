// 初二数学题目数据文件 - kp_020 相似三角形

export const questions_020 = [
  // kp_020: 相似三角形 - 8道题
  {
    id: 'kp_020_001',
    knowledgePointId: 'kp_020',
    type: 'choice',
    difficulty: 2,
    question: '下列不能判定两个三角形相似的是（）\nA. 两角对应相等\nB. 三边对应成比例\nC. 两边对应成比例且夹角相等\nD. 两边对应成比例且一边的对角相等',
    answer: 'D',
    analysis: '两边对应成比例且一边的对角相等，不能保证相似。',
    source: '2023北京海淀初二（上）期中数学试卷'
  },
  {
    id: 'kp_020_002',
    knowledgePointId: 'kp_020',
    type: 'choice',
    difficulty: 2,
    question: '在Rt△ABC和Rt△DEF中，∠C=∠F=90°，AB/DE=3/4，AC/DF=3/4，则相似的判定依据是（）\nA. SSS\nB. SAS\nC. HL\nD. AA',
    answer: 'C',
    analysis: '直角三角形斜边和一条直角边对应成比例，符合HL判定条件。',
    source: '2023北京西城初二（上）期中数学试卷'
  },
  {
    id: 'kp_020_003',
    knowledgePointId: 'kp_020',
    type: 'solution',
    difficulty: 2,
    question: '在△ABC中，DE∥BC，若AD=2，DB=3，DE=4，则BC=（）\nA. 6\nB. 8\nC. 10\nD. 12',
    answer: '10',
    analysis: 'DE∥BC，所以△ADE∽△ABC。AD/AB=DE/BC，即2/5=4/BC，BC=10。',
    source: '2023北京东城初二（上）期中数学试卷'
  },
  {
    id: 'kp_020_004',
    knowledgePointId: 'kp_020',
    type: 'solution',
    difficulty: 2,
    question: '在△ABC和△DEF中，AB/DE=AC/DF=2/3，∠A=∠D。求证：△ABC∽△DEF。',
    answer: 'SAS',
    analysis: '两边对应成比例且夹角相等，符合SAS判定条件，所以△ABC∽△DEF。',
    source: '2023北京朝阳初二（上）期中数学试卷'
  },
  {
    id: 'kp_020_005',
    knowledgePointId: 'kp_020',
    type: 'solution',
    difficulty: 3,
    question: '在△ABC中，DE∥BC，AD=4，AB=10，BC=15，求DE的长度。',
    answer: '6',
    analysis: 'DE/BC=AD/AB，即DE/15=4/10，DE=6。',
    source: '2023北京丰台初二（上）期中数学试卷'
  },
  {
    id: 'kp_020_006',
    knowledgePointId: 'kp_020',
    type: 'solution',
    difficulty: 3,
    question: '在△ABC中，∠C=90°，CD⊥AB于D。求证：△ACD∽△ABC。',
    answer: 'AA',
    analysis: '∠ADC=∠ACB=90°，∠A=∠A，所以△ACD∽△ABC。',
    source: '2023北京通州初二（上）期中数学试卷'
  },
  {
    id: 'kp_020_007',
    knowledgePointId: 'kp_020',
    type: 'solution',
    difficulty: 3,
    question: '已知：AB=AC，AD⊥BC于D，BE⊥AC于E。求证：△ABD∽△BEC。',
    answer: 'AA',
    analysis: '∠ADB=∠BEC=90°。∠BAD=∠CBE（等角的余角相等）。所以△ABD∽△BEC（AA）。',
    source: '2023北京昌平初二（上）期中数学试卷'
  },
  {
    id: 'kp_020_008',
    knowledgePointId: 'kp_020',
    type: 'choice',
    difficulty: 3,
    question: '在△ABC中，DE∥BC，AD:DB=2:3，则S△ADE:S四边形DBCE=（）\nA. 4:9\nB. 4:5\nC. 4:21\nD. 2:3',
    answer: 'C',
    analysis: 'AD:AB=2:5，相似比2:5，面积比4:25。S△ADE:S四边形DBCE=4:(25-4)=4:21。',
    source: '2023北京海淀初二（上）期中数学试卷'
  }
];