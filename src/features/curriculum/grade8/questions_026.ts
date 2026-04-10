// 初二数学题目数据文件 - kp_026 数据特征分析

export const questions_026 = [
  {
    id: 'kp_026_001',
    knowledgePointId: 'kp_026',
    type: 'choice',
    difficulty: 1,
    question: '数据2，4，6，8，10的平均数是（ ）\nA. 5\nB. 6\nC. 7\nD. 8',
    answer: 'B',
    analysis: '(2+4+6+8+10)÷5=6。',
    source: '2024北京统计专题训练'
  },
  {
    id: 'kp_026_002',
    knowledgePointId: 'kp_026',
    type: 'choice',
    difficulty: 1,
    question: '数据3，5，5，7，9的众数是（ ）\nA. 3\nB. 5\nC. 7\nD. 9',
    answer: 'B',
    analysis: '5出现次数最多。',
    source: '2024北京统计专题训练'
  },
  {
    id: 'kp_026_003',
    knowledgePointId: 'kp_026',
    type: 'choice',
    difficulty: 2,
    question: '数据1，2，4，6，8，10的中位数是（ ）\nA. 4\nB. 5\nC. 6\nD. 7',
    answer: 'B',
    analysis: '中间两个数为4和6，中位数为5。',
    source: '2024北京统计专题训练'
  },
  {
    id: 'kp_026_004',
    knowledgePointId: 'kp_026',
    type: 'fill',
    difficulty: 2,
    question: '数据5，8，11，14的极差是______。',
    answer: '9',
    analysis: '极差=最大值-最小值=14-5=9。',
    source: '2024北京统计专题训练'
  },
  {
    id: 'kp_026_005',
    knowledgePointId: 'kp_026',
    type: 'fill',
    difficulty: 2,
    question: '若一组数据每个数都增加3，则这组数据的平均数增加______。',
    answer: '3',
    analysis: '每个数据同时平移，平均数同步增加3。',
    source: '2024北京统计专题训练'
  },
  {
    id: 'kp_026_006',
    knowledgePointId: 'kp_026',
    type: 'solution',
    difficulty: 2,
    question: '某组数据为6，7，8，8，9。求这组数据的平均数和众数。',
    answer: '平均数7.6，众数8',
    analysis: '平均数=(6+7+8+8+9)÷5=38÷5=7.6；8出现两次，为众数。',
    source: '2024北京统计专题训练'
  },
  {
    id: 'kp_026_007',
    knowledgePointId: 'kp_026',
    type: 'solution',
    difficulty: 3,
    question: '某公司5名员工工资分别为5000，5500，6000，6500，30000元。说明为什么用平均数描述该组数据时可能不够合理。',
    answer: '因为30000元明显偏高，会把平均数显著拉大，中位数更能代表一般水平',
    analysis: '存在明显极端值时，平均数容易失真，中位数更有代表性。',
    source: '2024北京统计专题训练'
  },
  {
    id: 'kp_026_008',
    knowledgePointId: 'kp_026',
    type: 'choice',
    difficulty: 3,
    question: '若一组数据中所有数都乘2，则下列说法正确的是（ ）\nA. 平均数不变\nB. 中位数不变\nC. 众数不变\nD. 平均数变为原来的2倍',
    answer: 'D',
    analysis: '整体按同一倍数放大，平均数、中位数、众数都会按相同倍数变化。',
    source: '2024北京统计专题训练'
  }
];
