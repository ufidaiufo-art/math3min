// 初二数学题目数据文件 - kp_031 几何概型

export const questions_031 = [
  // kp_031: 几何概型 - 8道题
  {
    id: 'kp_031_001',
    knowledgePointId: 'kp_031',
    type: 'choice',
    difficulty: 2,
    question: '在区间[0,3]内随机取一个数x，则x<1的概率是（）\nA. 1/3\nB. 1/2\nC. 2/3\nD. 3/4',
    answer: 'A',
    analysis: '总区间长度为3，目标区间[0,1)长度为1，所以概率为1/3。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_031_002',
    knowledgePointId: 'kp_031',
    type: 'choice',
    difficulty: 2,
    question: '在边长为3的正方形内随机取一点，则该点到正方形中心的距离小于1的概率是（）\nA. π/9\nB. π/6\nC. π/4\nD. π/3',
    answer: 'A',
    analysis: '正方形面积为9，半径为1的圆面积为π，所以概率为π/9。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_031_003',
    knowledgePointId: 'kp_031',
    type: 'choice',
    difficulty: 2,
    question: '从区间[0,2]内随机取两个数x和y，则x+y<1的概率是（）\nA. 1/8\nB. 1/4\nC. 1/2\nD. 3/4',
    answer: 'A',
    analysis: '在2×2正方形中，x+y<1的区域是直角三角形，面积=0.5×1×1=0.5。总区域面积=4。概率为0.5/4=1/8。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_031_004',
    knowledgePointId: 'kp_031',
    type: 'choice',
    difficulty: 2,
    question: '在区间[1,4]内随机取一个数，则该数大于2的概率是（）\nA. 1/3\nB. 2/3\nC. 1/2\nD. 3/4',
    answer: 'B',
    analysis: '总区间长度为3，目标区间(2,4]长度为2，所以概率为2/3。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_031_005',
    knowledgePointId: 'kp_031',
    type: 'choice',
    difficulty: 3,
    question: '在半径为3的圆内随机取一点，则该点到圆心的距离大于1且小于2的概率是（）\nA. 1/3\nB. 3/8\nC. 1/2\nD. 3/4',
    answer: 'A',
    analysis: '圆的面积为9π，内半径为1的圆面积为π，外半径为2的圆面积为4π。环形区域面积为4π-π=3π。概率为3π/9π=1/3。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_031_006',
    knowledgePointId: 'kp_031',
    type: 'solution',
    difficulty: 3,
    question: '在区间[0,60]内随机取一个数x，求x落在[20,40]内的概率。',
    answer: '1/3',
    analysis: '总区间长度为60，目标区间长度为20，所以概率为20/60=1/3。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_031_007',
    knowledgePointId: 'kp_031',
    type: 'solution',
    difficulty: 3,
    question: '在边长为4的正方形内随机取一点，求该点落在边长为2的中心小正方形内的概率。',
    answer: '1/4',
    analysis: '大正方形面积为16，小正方形面积为4，所以概率为4/16=1/4。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  },
  {
    id: 'kp_031_008',
    knowledgePointId: 'kp_031',
    type: 'choice',
    difficulty: 2,
    question: '从区间[0,1]内随机取两个数x和y，则x²+y²≤1的概率是（）\nA. π/4\nB. π/2\nC. π\nD. 4/π',
    answer: 'A',
    analysis: '在单位正方形中，x²+y²≤1的区域是半径为1的圆的四分之一，面积=π×1²/4=π/4。总区域面积=1。概率为π/4。',
    source: '2022北京朝阳初二（上）期末数学试卷'
  }
];