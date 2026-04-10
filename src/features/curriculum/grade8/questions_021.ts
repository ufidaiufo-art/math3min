// 初二数学题目数据文件 - kp_021 位似变换

export const questions_021 = [
  {
    id: 'kp_021_001',
    knowledgePointId: 'kp_021',
    type: 'choice',
    difficulty: 2,
    question: '下列图形中一定是位似图形的是（ ）\nA. 两个全等三角形\nB. 两个相似三角形\nC. 对应点连线交于同一点的两个相似图形\nD. 两个面积相等的图形',
    answer: 'C',
    analysis: '位似图形既要相似，又要对应点连线交于同一点。',
    source: '2024北京初二几何专题训练'
  },
  {
    id: 'kp_021_002',
    knowledgePointId: 'kp_021',
    type: 'choice',
    difficulty: 2,
    question: '两个位似图形的位似比为2:3，若较小图形面积为8，则较大图形面积为（ ）\nA. 12\nB. 16\nC. 18\nD. 24',
    answer: 'C',
    analysis: '面积比等于位似比的平方，较大面积=8×(3/2)²=18。',
    source: '2024北京初二几何专题训练'
  },
  {
    id: 'kp_021_003',
    knowledgePointId: 'kp_021',
    type: 'choice',
    difficulty: 2,
    question: '已知O为△ABC与△A\'B\'C\'的位似中心，OA:OA\'=3:5，则位似比为（ ）\nA. 3:5\nB. 5:3\nC. 9:25\nD. 25:9',
    answer: 'A',
    analysis: '位似中心到对应点的距离之比就是位似比。',
    source: '2024北京初二几何专题训练'
  },
  {
    id: 'kp_021_004',
    knowledgePointId: 'kp_021',
    type: 'fill',
    difficulty: 2,
    question: '两个位似图形的位似比是1:4，则对应周长比为______，对应面积比为______。',
    answer: '1:4，1:16',
    analysis: '周长比等于位似比，面积比等于位似比的平方。',
    source: '2024北京初二几何专题训练'
  },
  {
    id: 'kp_021_005',
    knowledgePointId: 'kp_021',
    type: 'fill',
    difficulty: 2,
    question: '若位似中心O到点A的距离为9，到对应点A\'的距离为6，则位似比可表示为______。',
    answer: '3:2',
    analysis: 'OA:OA\'=9:6=3:2。',
    source: '2024北京初二几何专题训练'
  },
  {
    id: 'kp_021_006',
    knowledgePointId: 'kp_021',
    type: 'solution',
    difficulty: 3,
    question: '位似中心为O，位似比为2:1。若△ABC的一条边长为6，求对应位似图形中对应边的长度。',
    answer: '12 或 3',
    analysis: '若原图到新图按2:1放大，则对应边为12；若反向理解为缩小到1/2，则对应边为3。需结合题意判定方向。',
    source: '2024北京初二几何专题训练'
  },
  {
    id: 'kp_021_007',
    knowledgePointId: 'kp_021',
    type: 'solution',
    difficulty: 3,
    question: '已知△ABC与△A\'B\'C\'位似，位似中心为O，OA=4，OA\'=10，若AB=6，求A\'B\'的长。',
    answer: '15',
    analysis: '位似比=OA\':OA=10:4=5:2，所以A\'B\'=6×5/2=15。',
    source: '2024北京初二几何专题训练'
  },
  {
    id: 'kp_021_008',
    knowledgePointId: 'kp_021',
    type: 'choice',
    difficulty: 3,
    question: '两个位似图形的对应边长之比为4:3，则它们对应高之比和面积之比分别为（ ）\nA. 4:3，16:9\nB. 4:3，4:3\nC. 16:9，4:3\nD. 3:4，9:16',
    answer: 'A',
    analysis: '高之比等于位似比，面积比等于位似比的平方。',
    source: '2024北京初二几何专题训练'
  }
];
