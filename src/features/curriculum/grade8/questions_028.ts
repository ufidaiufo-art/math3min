// 初二数学题目数据文件 - kp_028 概率计算

export const questions_028 = [
  {
    id: 'kp_028_001',
    knowledgePointId: 'kp_028',
    type: 'choice',
    difficulty: 1,
    question: '掷一枚均匀的骰子，出现偶数点的概率是（ ）\nA. 1/6\nB. 1/3\nC. 1/2\nD. 2/3',
    answer: 'C',
    analysis: '偶数点有2，4，6共3种，概率=3/6=1/2。',
    source: '2024北京概率专题训练'
  },
  {
    id: 'kp_028_002',
    knowledgePointId: 'kp_028',
    type: 'choice',
    difficulty: 2,
    question: '从1，2，3，4中随机选一个数，选到质数的概率是（ ）\nA. 1/4\nB. 1/2\nC. 3/4\nD. 1',
    answer: 'B',
    analysis: '质数有2和3，共2个，概率=2/4=1/2。',
    source: '2024北京概率专题训练'
  },
  {
    id: 'kp_028_003',
    knowledgePointId: 'kp_028',
    type: 'choice',
    difficulty: 2,
    question: '袋中有2个红球和3个白球，随机摸出1个球，摸到红球的概率是（ ）\nA. 2/5\nB. 3/5\nC. 1/2\nD. 1/3',
    answer: 'A',
    analysis: '红球2个，总数5个，概率=2/5。',
    source: '2024北京概率专题训练'
  },
  {
    id: 'kp_028_004',
    knowledgePointId: 'kp_028',
    type: 'fill',
    difficulty: 2,
    question: '从一副扑克牌中随机抽取1张，抽到黑桃A的概率是______。',
    answer: '1/52',
    analysis: '扑克牌52张，黑桃A只有1张。',
    source: '2024北京概率专题训练'
  },
  {
    id: 'kp_028_005',
    knowledgePointId: 'kp_028',
    type: 'fill',
    difficulty: 2,
    question: '掷两枚骰子，点数和为7的概率是______。',
    answer: '1/6',
    analysis: '总情况36种，和为7有6种，概率=6/36=1/6。',
    source: '2024北京概率专题训练'
  },
  {
    id: 'kp_028_006',
    knowledgePointId: 'kp_028',
    type: 'solution',
    difficulty: 2,
    question: '从1，2，3，4，5中随机选两个不同的数，求两数和为偶数的概率。',
    answer: '2/5',
    analysis: '总情况C(5,2)=10。和为偶数需同奇同偶：奇奇有3种(1,3)(1,5)(3,5)，偶偶有1种(2,4)，共4种，概率=4/10=2/5。',
    source: '2024北京概率专题训练'
  },
  {
    id: 'kp_028_007',
    knowledgePointId: 'kp_028',
    type: 'solution',
    difficulty: 3,
    question: '某口袋中有4个红球、2个白球，随机取出1个球后不放回，再取1个球。求两次都取到红球的概率。',
    answer: '2/5',
    analysis: '第一次取红球概率4/6，第二次取红球概率3/5，联合概率=(4/6)×(3/5)=2/5。',
    source: '2024北京概率专题训练'
  },
  {
    id: 'kp_028_008',
    knowledgePointId: 'kp_028',
    type: 'choice',
    difficulty: 3,
    question: '从1到6中随机选两个不同的数，积为偶数的概率是（ ）\nA. 1/5\nB. 2/5\nC. 3/5\nD. 4/5',
    answer: 'D',
    analysis: '总情况C(6,2)=15，积为奇数只可能两个数都为奇数，奇数有1、3、5，共3种，故积为偶数概率=1-3/15=4/5。',
    source: '2024北京概率专题训练'
  }
];
