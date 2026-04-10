// 初二数学题目数据文件 - kp_012 三角形概念

export const questions_012 = [
  // kp_012: 三角形概念 - 8道题
  {
    id: 'kp_012_001',
    knowledgePointId: 'kp_012',
    type: 'choice',
    difficulty: 2,
    question: '若一个三角形的三边长为3、4、5，则这个三角形是（）\nA. 锐角三角形\nB. 直角三角形\nC. 钝角三角形\nD. 无法确定',
    answer: 'B',
    analysis: '因为3²+4²=9+16=25=5²，符合勾股定理，所以是直角三角形。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_012_002',
    knowledgePointId: 'kp_012',
    type: 'choice',
    difficulty: 2,
    question: '下列长度的三条线段能组成三角形的是（）\nA. 1,2,3\nB. 2,3,4\nC. 3,4,8\nD. 5,5,10',
    answer: 'B',
    analysis: '三角形两边之和大于第三边。A:1+2=3，不行；B:2+3>4，可以；C:3+4<8，不行；D:5+5=10，不行。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_012_003',
    knowledgePointId: 'kp_012',
    type: 'choice',
    difficulty: 2,
    question: '若一个三角形的一个外角为110°，则这个三角形是（）\nA. 锐角三角形\nB. 直角三角形\nC. 钝角三角形\nD. 无法确定',
    answer: 'A',
    analysis: '外角=不相邻两内角和。若外角110°，则不相邻两内角和110°，所以相邻内角70°，三个内角都小于90°，是锐角三角形。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_012_004',
    knowledgePointId: 'kp_012',
    type: 'solution',
    difficulty: 2,
    question: '等腰三角形的两边长分别为3和7，则周长为（）\nA. 13\nB. 17\nC. 13或17\nD. 无法确定',
    answer: 'B',
    analysis: '等腰三角形的两边可能是3,3,7或3,7,7。3+3<7不满足三角形条件，所以只能是3,7,7，周长17。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_012_005',
    knowledgePointId: 'kp_012',
    type: 'solution',
    difficulty: 3,
    question: '在△ABC中，∠A:∠B:∠C=1:2:3，求各角的度数。',
    answer: '30°,60°,90°',
    analysis: '设∠A=x，则∠B=2x，∠C=3x。由三角形内角和x+2x+3x=180°，得6x=180°，x=30°。所以∠A=30°，∠B=60°，∠C=90°。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_012_006',
    knowledgePointId: 'kp_012',
    type: 'solution',
    difficulty: 3,
    question: '若一个三角形的一个角是另一个角的2倍，第三个角比第一个角大20°，求三个角的度数。',
    answer: '40°,80°,60°',
    analysis: '设第一个角x°，则第二个角2x°，第三个角(x+20)°。x+2x+x+20=180，4x=160，x=40。所以三个角为40°,80°,60°。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_012_007',
    knowledgePointId: 'kp_012',
    type: 'solution',
    difficulty: 3,
    question: '已知等腰三角形的底边长为6，周长为20，求腰长。',
    answer: '7',
    analysis: '设腰长为x，则2x+6=20，2x=14，x=7。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_012_008',
    knowledgePointId: 'kp_012',
    type: 'choice',
    difficulty: 2,
    question: '若三角形的三边长为5,12,13，则这个三角形是（）\nA. 锐角三角形\nB. 直角三角形\nC. 钝角三角形\nD. 无法确定',
    answer: 'B',
    analysis: '5²+12²=25+144=169=13²，符合勾股定理逆定理，是直角三角形。',
    source: '2023北京海淀初一（上）期中数学试卷'
  }
];