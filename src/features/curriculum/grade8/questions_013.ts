// 初二数学题目数据文件 - kp_013 全等三角形

export const questions_013 = [
  // kp_013: 全等三角形 - 8道题
  {
    id: 'kp_013_001',
    knowledgePointId: 'kp_013',
    type: 'choice',
    difficulty: 2,
    question: '下列不能判定两个三角形全等的是（）\nA. SSS\nB. SAS\nC. AAA\nD. ASA',
    answer: 'C',
    analysis: 'AAA只能判定相似，不能判定全等。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_013_002',
    knowledgePointId: 'kp_013',
    type: 'choice',
    difficulty: 2,
    question: '已知△ABC中，AB=AC，∠BAD=∠CAD，AD=AD，则△ABD≌△ACD的判定依据是（）\nA. SSS\nB. SAS\nC. ASA\nD. AAS',
    answer: 'B',
    analysis: 'AB=AC，∠BAD=∠CAD，AD=AD，符合SAS条件。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_013_003',
    knowledgePointId: 'kp_013',
    type: 'choice',
    difficulty: 2,
    question: '在Rt△ABC和Rt△DEF中，∠C=∠F=90°，AB=DE，AC=DF，则全等的判定依据是（）\nA. SSS\nB. SAS\nC. HL\nD. ASA',
    answer: 'C',
    analysis: '直角三角形中，斜边AB=DE，直角边AC=DF，符合HL条件。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_013_004',
    knowledgePointId: 'kp_013',
    type: 'solution',
    difficulty: 3,
    question: '已知：AB=CD，∠1=∠2，∠3=∠4。求证：△ABE≌△CDE。',
    answer: 'ASA判定',
    analysis: '∠1=∠2，AB=CD，∠3=∠4，符合ASA判定条件，所以△ABE≌△CDE。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_013_005',
    knowledgePointId: 'kp_013',
    type: 'solution',
    difficulty: 3,
    question: '已知：AD∥BC，∠1=∠2，∠3=∠4。求证：△AED≌△BEC。',
    answer: 'AAS判定',
    analysis: '∠1=∠2，∠ADE=∠BCE（平行线内错角），∠3=∠4，符合AAS条件。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_013_006',
    knowledgePointId: 'kp_013',
    type: 'solution',
    difficulty: 3,
    question: '已知：AB=AC，∠1=∠2。求证：△ABD≌△ACD。',
    answer: 'SAS判定',
    analysis: 'AB=AC，∠1=∠2，AD=AD，符合SAS条件。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_013_007',
    knowledgePointId: 'kp_013',
    type: 'solution',
    difficulty: 3,
    question: '已知：在△ABC中，AB=AC，AD是中线，∠BAD=40°。求∠BAC的度数。',
    answer: '80°',
    analysis: '因为AB=AC，AD是中线，所以AD也是角平分线。∠BAC=2×∠BAD=2×40°=80°。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_013_008',
    knowledgePointId: 'kp_013',
    type: 'solution',
    difficulty: 3,
    question: '已知：△ABC≌△DEF，AB=5，BC=7，AC=8。求DE的长度。',
    answer: '5',
    analysis: '全等三角形对应边相等，DE=AB=5。',
    source: '2023北京海淀初一（上）期中数学试卷'
  }
];