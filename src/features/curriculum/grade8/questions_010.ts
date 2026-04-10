// 初二数学题目数据文件 - kp_010 反比例函数

export const questions_010 = [
  // kp_010: 反比例函数 - 8道题
  {
    id: 'kp_010_001',
    knowledgePointId: 'kp_010',
    type: 'choice',
    difficulty: 2,
    question: '下列函数中是反比例函数的是（）\nA. y=2x\nB. y=2/x\nC. y=x/2\nD. y=2x²',
    answer: 'B',
    analysis: 'A是一次函数，C是一次函数，D是二次函数，B是反比例函数。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_010_002',
    knowledgePointId: 'kp_010',
    type: 'choice',
    difficulty: 2,
    question: '若反比例函数y=k/x的图像在二、四象限，则k的取值范围是（）\nA. k>0\nB. k<0\nC. k≠0\nD. k=0',
    answer: 'B',
    analysis: '图像在二、四象限时，k<0。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_010_003',
    knowledgePointId: 'kp_010',
    type: 'choice',
    difficulty: 3,
    question: '反比例函数y=6/x的图像上有两点(x1,y1)、(x2,y2)，若x1<x2<0，则y1与y2的大小关系是（）\nA. y1>y2\nB. y1<y2\nC. y1=y2\nD. 无法确定',
    answer: 'A',
    analysis: '当x<0时，函数在第二象限，y随x增大而增大，所以x1<x2<0时，y1<y2。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_010_004',
    knowledgePointId: 'kp_010',
    type: 'solution',
    difficulty: 2,
    question: '已知反比例函数y=k/x的图像经过点(2,3)，求k的值，并判断点(-2,-3)是否在图像上。',
    answer: 'k=6，(-2,-3)在图像上',
    analysis: '代入(2,3)得3=k/2，k=6。函数为y=6/x。当x=-2时，y=6/(-2)=-3，所以(-2,-3)在图像上。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_010_005',
    knowledgePointId: 'kp_010',
    type: 'solution',
    difficulty: 3,
    question: '某水池容积为100立方米，用一根水管注水，注水速度为v立方米/小时，注满所需时间为t小时。写出t与v的函数关系式。',
    answer: 't=100/v，是反比例函数',
    analysis: 'vt=100，所以t=100/v，是反比例函数。当v增大时，t减小。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_010_006',
    knowledgePointId: 'kp_010',
    type: 'solution',
    difficulty: 3,
    question: '在反比例函数y=8/x的图像上，点P到x轴的距离为2，到y轴的距离为4，求点P的坐标。',
    answer: '(4,2)或(-4,-2)',
    analysis: '点P(x,y)满足|y|=2，|x|=4，且y=8/x。所以可能为(4,2)或(-4,-2)。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_010_007',
    knowledgePointId: 'kp_010',
    type: 'solution',
    difficulty: 3,
    question: '已知y是x的反比例函数，当x=2时，y=6。(1)求y与x的函数关系式；(2)当x=4时，求y的值。',
    answer: 'y=12/x，y=3',
    analysis: '设y=k/x，代入x=2,y=6得k=12。所以y=12/x。当x=4时，y=12/4=3。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_010_008',
    knowledgePointId: 'kp_010',
    type: 'choice',
    difficulty: 2,
    question: '函数y=(k-1)/x是反比例函数，则k的取值范围是（）\nA. k≠0\nB. k≠1\nC. k=1\nD. k=0',
    answer: 'B',
    analysis: '反比例函数要求系数不为零，所以k-1≠0，即k≠1。',
    source: '2023北京海淀初一（上）期中数学试卷'
  }
];