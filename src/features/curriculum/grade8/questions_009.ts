// 初二数学题目数据文件 - kp_009 一次函数

export const questions_009 = [
  // kp_009: 一次函数 - 8道题
  {
    id: 'kp_009_001',
    knowledgePointId: 'kp_009',
    type: 'choice',
    difficulty: 2,
    question: '下列函数中是一次函数的是（）\nA. y=2x²+1\nB. y=1/x\nC. y=3x-2\nD. y=√x',
    answer: 'C',
    analysis: 'A是二次函数，B是反比例函数，D是幂函数，C是一次函数。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_009_002',
    knowledgePointId: 'kp_009',
    type: 'choice',
    difficulty: 2,
    question: '若一次函数y=(m-2)x+3的y随x增大而减小，则m的取值范围是（）\nA. m>2\nB. m<2\nC. m≠2\nD. m=2',
    answer: 'B',
    analysis: 'y随x增大而减小，说明斜率k=m-2<0，所以m<2。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_009_003',
    knowledgePointId: 'kp_009',
    type: 'choice',
    difficulty: 2,
    question: '直线y=2x+1与y轴的交点坐标是（）\nA. (0,1)\nB. (1,0)\nC. (0,-1)\nD. (-1,0)',
    answer: 'A',
    analysis: '与y轴交点即x=0，y=2×0+1=1，所以交点为(0,1)。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_009_004',
    knowledgePointId: 'kp_009',
    type: 'solution',
    difficulty: 2,
    question: '已知一次函数y=kx+3，当x=2时，y=7，求k的值，并判断函数的增减性。',
    answer: 'k=2，y随x增大而增大',
    analysis: '代入x=2,y=7得7=2k+3，解得k=2。因为k=2>0，所以y随x增大而增大。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_009_005',
    knowledgePointId: 'kp_009',
    type: 'solution',
    difficulty: 3,
    question: '某市出租车收费标准为：起步价8元（3公里内），超过3公里，每公里收费2元。写出车费y(元)与路程x(公里)的函数关系式。',
    answer: 'y=8(0≤x≤3)，y=2x+2(x>3)',
    analysis: '当0≤x≤3时，y=8；当x>3时，y=8+2(x-3)=2x+2。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_009_006',
    knowledgePointId: 'kp_009',
    type: 'solution',
    difficulty: 3,
    question: '某商品进价30元，售价50元，每天可卖出20件。若每件降价x元，每天多卖出2x件。要使每天利润最大，应降价多少元？',
    answer: '5元',
    analysis: '利润=(50-30-x)(20+2x)=(20-x)(20+2x)=-2x²+20x+400。当x=-20/(2×(-2))=5时，利润最大。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_009_007',
    knowledgePointId: 'kp_009',
    type: 'solution',
    difficulty: 2,
    question: '甲、乙两地相距100km，一辆汽车从甲地出发，速度为60km/h，写出汽车距乙地的距离s(km)与时间t(h)的函数关系式。',
    answer: 's=100-60t(0≤t≤5/3)',
    analysis: '汽车向乙地行驶，距离逐渐减少，s=100-60t。当s=0时，t=100/60=5/3小时。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_009_008',
    knowledgePointId: 'kp_009',
    type: 'choice',
    difficulty: 3,
    question: '若一次函数y=kx+b的图像经过点(1,2)和(3,8)，则k+b的值为（）\nA. 1\nB. 2\nC. 3\nD. 4',
    answer: 'B',
    analysis: '代入两点得：{k+b=2, 3k+b=8}。解得k=3,b=-1。k+b=3+(-1)=2。',
    source: '2023北京海淀初一（上）期中数学试卷'
  }
];