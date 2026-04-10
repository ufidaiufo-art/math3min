// 初二数学题目数据文件 - kp_015 直角三角形与勾股定理

export const questions_015 = [
  // kp_015: 直角三角形与勾股定理 - 8道题
  {
    id: 'kp_015_001',
    knowledgePointId: 'kp_015',
    type: 'choice',
    difficulty: 2,
    question: '下列各组数中是勾股数的是（）\nA. 2,3,4\nB. 3,4,5\nC. 4,5,6\nD. 5,6,7',
    answer: 'B',
    analysis: '3²+4²=9+16=25=5²，符合勾股定理。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_015_002',
    knowledgePointId: 'kp_015',
    type: 'choice',
    difficulty: 2,
    question: '若三角形的三边长为5,12,13，则这个三角形是（）\nA. 锐角三角形\nB. 直角三角形\nC. 钝角三角形\nD. 无法确定',
    answer: 'B',
    analysis: '5²+12²=25+144=169=13²，符合勾股定理逆定理，是直角三角形。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_015_003',
    knowledgePointId: 'kp_015',
    type: 'solution',
    difficulty: 2,
    question: '在Rt△ABC中，∠C=90°，AB=10，BC=6，求AC的长度。',
    answer: '8',
    analysis: 'AB是斜边，AC=√(AB²-BC²)=√(100-36)=√64=8。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_015_004',
    knowledgePointId: 'kp_015',
    type: 'solution',
    difficulty: 2,
    question: '已知直角三角形的两条直角边分别为3和4，求斜边的长度。',
    answer: '5',
    analysis: '根据勾股定理，斜边c=√(3²+4²)=√(9+16)=√25=5。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_015_005',
    knowledgePointId: 'kp_015',
    type: 'choice',
    difficulty: 3,
    question: '已知直角三角形的两边长分别为5和12，则第三边长为（）\nA. 13\nB. 13或√119\nC. 13或8\nD. 无法确定',
    answer: 'B',
    analysis: '5和12可能都是直角边（5²+12²=13²），也可能12是斜边（12²-5²=119）。所以第三边是13或√119。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_015_006',
    knowledgePointId: 'kp_015',
    type: 'solution',
    difficulty: 3,
    question: '在Rt△ABC中，∠C=90°，AB=2AC，求∠B的度数。',
    answer: '30°',
    analysis: '设AC=x，则AB=2x，BC=√(AB²-AC²)=√(4x²-x²)=√3x。tanB=AC/BC=1/√3，所以∠B=30°。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_015_007',
    knowledgePointId: 'kp_015',
    type: 'solution',
    difficulty: 3,
    question: '在△ABC中，AD⊥BC于D，AB=13，AC=15，BC=14，求AD的长度。',
    answer: '12',
    analysis: '设BD=x，则CD=14-x。在Rt△ABD中，x²+AD²=13²。在Rt△ACD中，(14-x)²+AD²=15²。两式相减得(14-x)²-x²=15²-13²，即196-28x=56，x=5。所以AD=√(13²-5²)=√144=12。',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_015_008',
    knowledgePointId: 'kp_015',
    type: 'solution',
    difficulty: 3,
    question: '已知直角三角形的两边长分别为3和4，求斜边上的高。',
    answer: '2.4',
    analysis: '斜边c=5。面积S=1/2×3×4=6。高h=2S/c=2×6/5=12/5=2.4。',
    source: '2023北京海淀初一（上）期中数学试卷'
  }
];