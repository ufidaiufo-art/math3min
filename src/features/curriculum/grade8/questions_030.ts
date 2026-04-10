// 初二数学题目数据文件 - kp_030 古典概型

export const questions_030 = [
  // kp_030: 古典概型 - 8道题
  {
    id: 'kp_030_001',
    knowledgePointId: 'kp_030',
    type: 'choice',
    difficulty: 1,
    question: '掷一枚均匀的骰子，掷出点数为3的概率是（）\nA. 1/2\nB. 1/3\nC. 1/4\nD. 1/6',
    answer: 'D',
    analysis: '骰子有6个面，每个面出现的可能性相等，所以点数为3的概率是1/6。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_030_002',
    knowledgePointId: 'kp_030',
    type: 'choice',
    difficulty: 2,
    question: '从1、2、3、4、5、6、7、8、9中随机抽取一个数，抽到3的倍数的概率是（）\nA. 1/4\nB. 1/3\nC. 2/5\nD. 3/10',
    answer: 'B',
    analysis: '3的倍数有3、6、9，共3个。总共有9个数，所以概率是3/9=1/3。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_030_003',
    knowledgePointId: 'kp_030',
    type: 'choice',
    difficulty: 2,
    question: '从52张扑克牌中随机抽取一张，抽到红桃A的概率是（）\nA. 1/13\nB. 1/26\nC. 1/52\nD. 1/50',
    answer: 'C',
    analysis: '扑克牌共有52张，红桃A只有一张，所以概率是1/52。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_030_004',
    knowledgePointId: 'kp_030',
    type: 'choice',
    difficulty: 2,
    question: '袋中有4个红球，6个白球，从中随机取出一个球，取出红球的概率是（）\nA. 0.2\nB. 0.4\nC. 0.6\nD. 0.8',
    answer: 'B',
    analysis: '总共有10个球，红球4个，所以取出红球的概率是4/10=0.4。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_030_005',
    knowledgePointId: 'kp_030',
    type: 'choice',
    difficulty: 3,
    question: '从5名男生和3名女生中随机选取3人，求选出的3人中至少有1名女生的概率。\nA. 23/56\nB. 33/56\nC. 10/13\nD. 23/28',
    answer: 'D',
    analysis: '总选法C(8,3)=56。全为男生的选法C(5,3)=10。所以至少1名女生的概率是1-10/56=46/56=23/28。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_030_006',
    knowledgePointId: 'kp_030',
    type: 'solution',
    difficulty: 3,
    question: '从1、2、3、4、5、6中任取2个不同的数，求两数之和为偶数的概率。',
    answer: '2/5',
    analysis: '总取法C(6,2)=15。和为偶数的情况：两个奇数(1,3)、(1,5)、(3,5)共3种；两个偶数(2,4)、(2,6)、(4,6)共3种。总共6种。概率为6/15=2/5。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_030_007',
    knowledgePointId: 'kp_030',
    type: 'solution',
    difficulty: 3,
    question: '甲、乙两人从1-6中各随机选择一个数字，求两人选择的数字之和为7的概率。',
    answer: '1/6',
    analysis: '甲有6种选择，乙也有6种选择，总共有36种等可能结果。和为7的组合有(1,6)、(2,5)、(3,4)、(4,3)、(5,2)、(6,1)共6种。概率为6/36=1/6。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_030_008',
    knowledgePointId: 'kp_030',
    type: 'choice',
    difficulty: 2,
    question: '从10名学生中随机抽取2人，其中男生6人，女生4人，求抽到2名性别相同学生的概率。\nA. 7/15\nB. 8/15\nC. 11/15\nD. 13/15',
    answer: 'A',
    analysis: '总取法C(10,2)=45。同性别：C(6,2)=15（男生），C(4,2)=6（女生）。总共有15+6=21种。概率为21/45=7/15。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  }
];