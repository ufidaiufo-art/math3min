// 初二数学题目数据文件 - kp_033 代数几何综合（二）

export const questions_033 = [
  {
    id: 'kp_033_001',
    knowledgePointId: 'kp_033',
    type: 'choice',
    difficulty: 2,
    question: '圆 x²+y²=25 的半径是（）\nA. 4  B. 5  C. 10  D. 25',
    answer: 'B',
    analysis: '标准圆方程 x²+y²=r²，所以 r=5。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_033_002',
    knowledgePointId: 'kp_033',
    type: 'choice',
    difficulty: 3,
    question: '直线 y=2x+1 与 y=x² 交点的横坐标满足的方程是（）\nA. x²+2x+1=0  B. x²-2x-1=0  C. x²-2x+1=0  D. x²+2x-1=0',
    answer: 'B',
    analysis: '联立得 x²=2x+1，移项后得 x²-2x-1=0。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_033_003',
    knowledgePointId: 'kp_033',
    type: 'fill',
    difficulty: 3,
    question: '已知圆心到直线的距离等于半径时，直线与圆的位置关系是 ______。',
    answer: '相切',
    analysis: '圆心到直线的距离等于半径，说明直线与圆只有一个公共点，所以相切。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_033_004',
    knowledgePointId: 'kp_033',
    type: 'solution',
    difficulty: 3,
    question: '已知抛物线 y=x²-2x-3 的顶点坐标。',
    answer: '(1,-4)',
    analysis: '配方得 y=(x-1)²-4，所以顶点坐标为 (1,-4)。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_033_005',
    knowledgePointId: 'kp_033',
    type: 'choice',
    difficulty: 3,
    question: '函数 y=-(x-2)²+5 的最大值是（）\nA. 2  B. 5  C. -5  D. 7',
    answer: 'B',
    analysis: '开口向下，顶点为 (2,5)，所以最大值是 5。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_033_006',
    knowledgePointId: 'kp_033',
    type: 'solution',
    difficulty: 3,
    question: '已知直线 y=x+m 与圆 x²+y²=4 相切，求 m 的值。',
    answer: '±2√2',
    analysis: '圆心到直线 x-y+m=0 的距离为 |m|/√2。相切时距离等于半径 2，所以 |m|/√2=2，得 |m|=2√2，即 m=±2√2。',
    source: '2024北京综合模拟题'
  }
]
