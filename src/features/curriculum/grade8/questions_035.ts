// 初二数学题目数据文件 - kp_035 实际应用问题（二）

export const questions_035 = [
  {
    id: 'kp_035_001',
    knowledgePointId: 'kp_035',
    type: 'choice',
    difficulty: 3,
    question: '线性规划问题中，目标函数通常表示（）\nA. 已知条件  B. 最优化指标  C. 变量范围  D. 图像坐标',
    answer: 'B',
    analysis: '目标函数表示需要求最大值或最小值的量。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_035_002',
    knowledgePointId: 'kp_035',
    type: 'fill',
    difficulty: 3,
    question: '某工厂生产甲、乙两种产品，利润分别为每件 30 元和 50 元，则总利润表达式可写为 ______。',
    answer: '30x+50y',
    analysis: '设甲、乙产品产量分别为 x、y，则总利润为 30x+50y。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_035_003',
    knowledgePointId: 'kp_035',
    type: 'choice',
    difficulty: 3,
    question: '若某方案需要满足 x≥0，y≥0，2x+y≤10，则可行域应位于（）\nA. 第一象限及直线下方  B. 第二象限  C. 第三象限  D. 任意象限',
    answer: 'A',
    analysis: 'x、y 都非负，说明在第一象限；2x+y≤10 表示位于直线 2x+y=10 的下方。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_035_004',
    knowledgePointId: 'kp_035',
    type: 'solution',
    difficulty: 3,
    question: '某商店有 100 平方米货架，A、B 两类商品每件分别占 2 平方米和 5 平方米。若摆放 A 商品 x 件、B 商品 y 件，请写出面积约束条件。',
    answer: '2x+5y≤100',
    analysis: '总占地面积不能超过 100 平方米，所以满足 2x+5y≤100。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_035_005',
    knowledgePointId: 'kp_035',
    type: 'choice',
    difficulty: 3,
    question: '在运输问题中，通常要求各发货点“发出总量”和各收货点“收到总量”满足（）\nA. 乘法关系  B. 相等或守恒关系  C. 指数关系  D. 无任何限制',
    answer: 'B',
    analysis: '运输问题本质上是供给与需求平衡问题，需要满足守恒关系。',
    source: '2024北京综合模拟题'
  },
  {
    id: 'kp_035_006',
    knowledgePointId: 'kp_035',
    type: 'solution',
    difficulty: 3,
    question: '甲、乙两种产品每件利润分别为 200 元、300 元，若 x 件甲产品与 y 件乙产品均可生产，则总利润目标函数为 P=200x+300y。若 x=8，y=4，求 P。',
    answer: '2800',
    analysis: '把 x=8，y=4 代入，得 P=200×8+300×4=1600+1200=2800。',
    source: '2024北京综合模拟题'
  }
]
