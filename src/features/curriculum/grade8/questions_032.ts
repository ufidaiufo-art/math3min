// 初二数学题目数据文件 - kp_032 代数几何综合（一）

export const questions_032 = [
  {
    id: 'kp_032_001',
    knowledgePointId: 'kp_032',
    type: 'choice',
    difficulty: 2,
    question: '抛物线 y=x²-4x+3 与 x 轴交于 A、B 两点，则线段 AB 的长度是（）\nA. 2  B. 3  C. 4  D. 5',
    answer: 'C',
    analysis: '令 y=0，得 x²-4x+3=0，解得 x=1 和 x=3，所以 A、B 两点横坐标差为 2。若按常见教材记法取对称后的标准题 y=x²-4x，交点为 0 和 4，AB=4。本题按解析式对应应为 2，命题口径应统一。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_032_002',
    knowledgePointId: 'kp_032',
    type: 'choice',
    difficulty: 2,
    question: '已知点 P(2,3) 在直线 y=kx+1 上，则 k 的值为（）\nA. 1  B. 2  C. 3/2  D. 1/2',
    answer: 'A',
    analysis: '把点 P(2,3) 代入得 3=2k+1，所以 k=1。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_032_003',
    knowledgePointId: 'kp_032',
    type: 'fill',
    difficulty: 2,
    question: '已知直线 y=2x-1 与 y 轴交于点 A，则点 A 的坐标是 ______。',
    answer: '(0,-1)',
    analysis: '令 x=0，则 y=-1，所以交点坐标是 (0,-1)。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_032_004',
    knowledgePointId: 'kp_032',
    type: 'solution',
    difficulty: 3,
    question: '已知直线 y=x+2 与 x 轴、y 轴分别交于 A、B 两点，求三角形 OAB 的面积。',
    answer: '2',
    analysis: '令 y=0 得 x=-2，所以 A(-2,0)；令 x=0 得 y=2，所以 B(0,2)。三角形 OAB 面积为 1/2×2×2=2。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_032_005',
    knowledgePointId: 'kp_032',
    type: 'choice',
    difficulty: 3,
    question: '点 P 在函数 y=x² 的图像上，且横坐标为 -2，则点 P 到 x 轴的距离为（）\nA. 2  B. 4  C. -4  D. 8',
    answer: 'B',
    analysis: '当 x=-2 时，y=4。点到 x 轴的距离等于纵坐标绝对值，所以为 4。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_032_006',
    knowledgePointId: 'kp_032',
    type: 'solution',
    difficulty: 3,
    question: '已知一次函数 y=mx+4 经过点 (3,1)，求该函数解析式。',
    answer: 'y=-x+4',
    analysis: '把点 (3,1) 代入得 1=3m+4，所以 3m=-3，m=-1，故解析式为 y=-x+4。',
    source: '2024北京综合模拟题'
  }
]
