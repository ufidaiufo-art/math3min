// 初二数学题目数据文件 - kp_011 二次函数

export const questions_011 = [
  // kp_011: 二次函数 - 8道题
  {
    id: 'kp_011_001',
    knowledgePointId: 'kp_011',
    type: 'choice',
    difficulty: 2,
    question: '下列函数中是二次函数的是（）\nA. y=2x+1\nB. y=3x²\nC. y=1/x\nD. y=√x',
    answer: 'B',
    analysis: 'A是一次函数，C是反比例函数，D是幂函数，B是二次函数。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_011_002',
    knowledgePointId: 'kp_011',
    type: 'choice',
    difficulty: 2,
    question: '二次函数y=2x²-4x+1的图像开口方向是（）\nA. 向上\nB. 向下\nC. 向左\nD. 向右',
    answer: 'A',
    analysis: '因为a=2>0，所以开口向上。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_011_003',
    knowledgePointId: 'kp_011',
    type: 'choice',
    difficulty: 2,
    question: '抛物线y=x²+2x+1的顶点坐标是（）\nA. (1,0)\nB. (-1,0)\nC. (0,1)\nD. (0,-1)',
    answer: 'B',
    analysis: 'y=(x+1)²，顶点为(-1,0)。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_011_004',
    knowledgePointId: 'kp_011',
    type: 'solution',
    difficulty: 3,
    question: '已知二次函数y=x²-4x+3，求：(1)顶点坐标；(2)对称轴；(3)最值。',
    answer: '顶点(2,-1)，对称轴x=2，最小值-1',
    analysis: 'a=1,b=-4,c=3。顶点横坐标x=-b/(2a)=4/2=2。纵坐标y=2²-4×2+3=4-8+3=-1。所以顶点(2,-1)。对称轴x=2。因为a>0，有最小值-1。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_011_005',
    knowledgePointId: 'kp_011',
    type: 'solution',
    difficulty: 3,
    question: '用20米长的篱笆围成一个矩形菜园，一边靠墙，求菜园的最大面积。',
    answer: '25平方米',
    analysis: '设靠墙的一边为x米，则另一边为(20-2x)/2=10-x米。面积S=x(10-x)=-x²+10x。顶点横坐标x=-10/(2×(-1))=5。最大面积S=-25+50=25平方米。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_011_006',
    knowledgePointId: 'kp_011',
    type: 'solution',
    difficulty: 3,
    question: '某商品每天销售20件，每件盈利40元。若每件降价x元，每天多卖出2x件。要使每天利润最大，应降价多少元？',
    answer: '15元',
    analysis: '利润=(40-x)(20+2x)=-2x²+60x+800。当x=-60/(2×(-2))=15时，利润最大。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_011_007',
    knowledgePointId: 'kp_011',
    type: 'solution',
    difficulty: 3,
    question: '抛物线y=ax²+bx+c的顶点为(2,3)，且过点(0,1)，求a、b、c的值。',
    answer: 'a=-0.5,b=2,c=1',
    analysis: '由顶点公式-b/(2a)=2，c-b²/(4a)=3。由过点(0,1)得c=1。解得a=-0.5,b=2,c=1。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_011_008',
    knowledgePointId: 'kp_011',
    type: 'choice',
    difficulty: 2,
    question: '抛物线y=2x²-8x+6的对称轴是（）\nA. x=2\nB. x=-2\nC. x=4\nD. x=-4',
    answer: 'A',
    analysis: '对称轴x=-b/(2a)=8/(2×2)=2。',
    source: '2023北京海淀初一（上）期中数学试卷'
  }
];