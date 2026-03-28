import type { QuestionData } from './types'

// 第4章题目数据
export const chapter4Questions: QuestionData[] = [
{
    id: 'q4_1_1',
    chapterId: 'ch4',
    knowledgePointId: 'kp4_1',
    type: 'single_choice',
    content: '下列图形中，不是立体图形的是（ ）。',
    options: ['球', '圆柱', '三角形', '正方体'],
    answer: 'C',
    analysis: '三角形是平面图形。',
    difficulty: 'easy',
    points: 5,
    thinking: '区分平面图形和立体图形：平面图形只有一个面，所有点都在同一平面内；立体图形占有空间，有长、宽、高三个维度。',
    steps: [
      { step: 1, title: '理解概念', content: '平面图形：在同一平面内的图形，如三角形、正方形、圆等；立体图形：占有空间的图形，如球、圆柱、正方体等', highlight: true },
      { step: 2, title: '分析选项A', content: '球是立体图形，占有空间', highlight: false },
      { step: 3, title: '分析选项B', content: '圆柱是立体图形，有上下底面和侧面', highlight: false },
      { step: 4, title: '分析选项C', content: '三角形是平面图形，只有三条边围成的一个面', highlight: true },
      { step: 5, title: '分析选项D', content: '正方体是立体图形，有6个面', highlight: false }
    ],
    keyPoints: ['平面图形特点', '立体图形特点', '常见平面图形和立体图形'],
    commonMistakes: ['混淆平面图形和立体图形', '认为有高度的就是立体图形（如三角形在立体中）'],
    similarQuestions: [
      { id: 'qz4_1', content: '将直角三角形绕其一条直角边旋转一周，得到的几何体是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q4_2_1',
    chapterId: 'ch4',
    knowledgePointId: 'kp4_2',
    type: 'fill_blank',
    content: '经过两点有且只有____条直线。',
    answer: '一',
    analysis: '两点确定一条直线。',
    difficulty: 'easy',
    points: 5,
    thinking: '这是直线的基本性质（公理）：经过两点有且只有一条直线。也就是说，两点确定一条直线。',
    steps: [
      { step: 1, title: '回忆直线公理', content: '经过两点有且只有一条直线，即两点确定一条直线', highlight: true },
      { step: 2, title: '确定答案', content: '答案为"一"', highlight: false }
    ],
    keyPoints: ['两点确定一条直线', '直线的基本性质'],
    commonMistakes: ['写成"1"（应该用汉字）', '不理解"有且只有"的含义'],
    similarQuestions: [
      { id: 'qz4_2', content: '两点之间，____最短。', difficulty: 'easy' }
    ]
  },
{
    id: 'q4_3_1',
    chapterId: 'ch4',
    knowledgePointId: 'kp4_3',
    type: 'fill_blank',
    content: '25°30′ = ____°。',
    answer: '25.5',
    analysis: '30′ = 0.5°。',
    difficulty: 'easy',
    points: 5,
    thinking: '角度的度分秒换算：1°=60′，1′=60″。将分转化为度，需要除以60。30′=30/60°=0.5°。',
    steps: [
      { step: 1, title: '回忆换算关系', content: '1° = 60′，所以1′ = (1/60)°', highlight: false },
      { step: 2, title: '换算分', content: '30′ = 30/60 ° = 0.5°', highlight: true },
      { step: 3, title: '合并', content: '25°30′ = 25° + 0.5° = 25.5°', highlight: true }
    ],
    keyPoints: ['度分秒的换算', '1°=60′', '分转度要除以60'],
    commonMistakes: ['30′=0.3°（错误地用十进制）', '除以100而不是60', '换算方向错误'],
    similarQuestions: [
      { id: 'qz4_3', content: '38.5° =（）°（）\'', difficulty: 'medium' }
    ]
  },
{
    id: 'q4_4_1',
    chapterId: 'ch4',
    knowledgePointId: 'kp4_4',
    type: 'fill_blank',
    content: '一个角是35°，它的余角是____°，补角是____°。',
    answer: '55，145',
    analysis: '余角=90°-35°=55°，补角=180°-35°=145°。',
    difficulty: 'easy',
    points: 5,
    thinking: '互为余角的两个角和为90°，互为补角的两个角和为180°。用90°和180°分别减去已知角的度数即可。',
    steps: [
      { step: 1, title: '求余角', content: '互为余角的两个角和为90°，所以余角 = 90° - 35° = 55°', highlight: true },
      { step: 2, title: '求补角', content: '互为补角的两个角和为180°，所以补角 = 180° - 35° = 145°', highlight: true },
      { step: 3, title: '验证', content: '55° + 35° = 90°，145° + 35° = 180°，计算正确', highlight: false }
    ],
    keyPoints: ['余角的定义（和为90°）', '补角的定义（和为180°）', '互余互补与角的位置无关'],
    commonMistakes: ['余角计算成180°-35°=145°', '补角计算成90°-35°=55°', '混淆余角和补角的概念'],
    similarQuestions: [
      { id: 'qz4_4', content: '一个角等于它的余角的3倍，则这个角的度数为（）', difficulty: 'hard' },
      { id: 'qz4_5', content: '若∠1和∠2互为补角，且∠1 = 65°，则∠2 = ____°。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz4_1',
    chapterId: 'ch4',
    knowledgePointId: 'kp4_1',
    type: 'single_choice',
    content: '将直角三角形绕其一条直角边旋转一周，得到的几何体是（）',
    options: ['圆柱', '圆锥', '球', '圆台'],
    answer: 'B',
    analysis: '直角三角形绕直角边旋转得到圆锥',
    difficulty: 'medium',
    points: 5,
    year: '2022',
    district: '东城',
    examType: '期末',
    thinking: '面动成体：直角三角形绕一条直角边旋转，这条直角边成为圆锥的高，另一条直角边旋转形成圆锥的底面圆，斜边旋转形成圆锥的侧面。',
    steps: [
      { step: 1, title: '想象旋转过程', content: '直角三角形绕一条直角边旋转', highlight: false },
      { step: 2, title: '确定底面', content: '另一条直角边旋转一周形成圆形底面', highlight: false },
      { step: 3, title: '确定侧面', content: '斜边旋转形成圆锥侧面', highlight: false },
      { step: 4, title: '得出结论', content: '得到的几何体是圆锥', highlight: true }
    ],
    keyPoints: ['面动成体', '直角三角形旋转得到圆锥'],
    commonMistakes: ['选圆柱（矩形旋转得到）', '选球（半圆旋转得到）'],
    similarQuestions: [
      { id: 'q4_1_1', content: '下列图形中，不是立体图形的是（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz4_2',
    chapterId: 'ch4',
    knowledgePointId: 'kp4_2',
    type: 'fill_blank',
    content: '两点之间，____最短。',
    answer: '线段',
    analysis: '线段公理',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '怀柔',
    examType: '期中',
    thinking: '这是线段的基本性质（公理）：两点之间，线段最短。注意与"两点确定一条直线"区分。',
    steps: [
      { step: 1, title: '回忆线段公理', content: '两点之间的所有连线中，线段最短', highlight: true },
      { step: 2, title: '确定答案', content: '答案为"线段"', highlight: false }
    ],
    keyPoints: ['两点之间线段最短', '线段公理'],
    commonMistakes: ['与"两点确定一条直线"混淆', '写成"直线"'],
    similarQuestions: [
      { id: 'q4_2_1', content: '经过两点有且只有____条直线。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz4_3',
    chapterId: 'ch4',
    knowledgePointId: 'kp4_3',
    type: 'single_choice',
    content: '38.5° =（）°（）\'',
    options: ['38° 5\'', '38° 30\'', '38° 50\'', '39° 30\''],
    answer: 'B',
    analysis: '0.5° = 30\'',
    difficulty: 'medium',
    points: 5,
    year: '2022',
    district: '大兴',
    examType: '期末',
    thinking: '角度的度分秒换算：1°=60′。将度的小数部分转化为分，需要乘以60。0.5°=0.5×60′=30′。',
    steps: [
      { step: 1, title: '分离整数和小数', content: '38.5° = 38° + 0.5°', highlight: false },
      { step: 2, title: '小数部分化分', content: '0.5° = 0.5 × 60′ = 30′', highlight: true },
      { step: 3, title: '合并', content: '38.5° = 38°30′，选B', highlight: true }
    ],
    keyPoints: ['度分秒的换算', '1°=60′', '度转分要乘以60'],
    commonMistakes: ['0.5°=5′（错误地用十进制）', '乘以100而不是60', '换算方向错误'],
    similarQuestions: [
      { id: 'q4_3_1', content: '25°30′ = ____°。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz4_4',
    chapterId: 'ch4',
    knowledgePointId: 'kp4_4',
    type: 'single_choice',
    content: '一个角等于它的余角的3倍，则这个角的度数为（）',
    options: ['22.5°', '45°', '67.5°', '75°'],
    answer: 'C',
    analysis: '设这个角为x，则x=3(90°-x)，解得x=67.5°',
    difficulty: 'hard',
    points: 10,
    year: '2023',
    district: '海淀',
    examType: '期末',
    thinking: '设这个角为x°，则它的余角为(90-x)°。根据题意列方程：x = 3(90-x)，解方程即可。',
    steps: [
      { step: 1, title: '设未知数', content: '设这个角为x°，则它的余角为(90-x)°', highlight: false },
      { step: 2, title: '列方程', content: '根据题意：x = 3(90 - x)', highlight: true },
      { step: 3, title: '解方程', content: 'x = 270 - 3x，x + 3x = 270，4x = 270，x = 67.5', highlight: true },
      { step: 4, title: '检验', content: '这个角67.5°，余角22.5°，67.5 = 3×22.5，正确', highlight: false }
    ],
    keyPoints: ['余角的定义', '列方程解应用题', '角度计算'],
    commonMistakes: ['设未知数时单位处理不当', '列方程时关系搞反', '解方程计算错误'],
    similarQuestions: [
      { id: 'q4_4_1', content: '一个角是35°，它的余角是____°，补角是____°。', difficulty: 'easy' },
      { id: 'qz4_5', content: '若∠1和∠2互为补角，且∠1 = 65°，则∠2 = ____°。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz4_5',
    chapterId: 'ch4',
    knowledgePointId: 'kp4_5',
    type: 'fill_blank',
    content: '若∠1和∠2互为补角，且∠1 = 65°，则∠2 = ____°。',
    answer: '115',
    analysis: '补角和为180°，∠2=180°-65°=115°',
    difficulty: 'easy',
    points: 5,
    year: '2024',
    district: '顺义',
    examType: '期中',
    thinking: '互为补角的两个角和为180°。已知∠1=65°，则∠2=180°-65°=115°。',
    steps: [
      { step: 1, title: '理解补角定义', content: '互为补角的两个角之和等于180°', highlight: true },
      { step: 2, title: '列式计算', content: '∠2 = 180° - ∠1 = 180° - 65° = 115°', highlight: true }
    ],
    keyPoints: ['补角的定义（和为180°）', '已知一个角求它的补角'],
    commonMistakes: ['用90°计算（与余角混淆）', '计算错误：180-65=115错算成其他数'],
    similarQuestions: [
      { id: 'q4_4_1', content: '一个角是35°，它的余角是____°，补角是____°。', difficulty: 'easy' },
      { id: 'qz4_4', content: '一个角等于它的余角的3倍，则这个角的度数为（）', difficulty: 'hard' }
    ]
  },
  // 补充题目：角平分线 (kp4_5)
  {
    id: 'qz4_6',
    chapterId: 'ch4',
    knowledgePointId: 'kp4_5',
    type: 'single_choice',
    content: '已知OC是∠AOB的平分线，∠AOB=80°，则∠AOC=（）',
    options: ['40°', '80°', '160°', '20°'],
    answer: 'A',
    analysis: '角平分线将角分成两个相等的角，∠AOC=80°÷2=40°',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '东城',
    examType: '期中',
    thinking: '角平分线的定义：从角的顶点出发，把这个角分成两个相等的角的射线。∠AOC=∠BOC=∠AOB÷2。',
    steps: [
      { step: 1, title: '理解角平分线', content: 'OC平分∠AOB，则∠AOC=∠BOC=∠AOB/2', highlight: true },
      { step: 2, title: '计算', content: '∠AOC=80°÷2=40°', highlight: true }
    ],
    keyPoints: ['角平分线的定义', '角平分线的性质'],
    commonMistakes: ['选B（等于原角）', '计算错误'],
    similarQuestions: [
      { id: 'qz4_7', content: '如图，OB平分∠AOC，∠AOB=35°，则∠AOC=____°', difficulty: 'easy' }
    ]
  },
  {
    id: 'qz4_7',
    chapterId: 'ch4',
    knowledgePointId: 'kp4_5',
    type: 'fill_blank',
    content: '如图，OB平分∠AOC，∠AOB=35°，则∠AOC=____°',
    answer: '70',
    analysis: 'OB平分∠AOC，则∠AOC=2∠AOB=2×35°=70°',
    difficulty: 'easy',
    points: 5,
    year: '2024',
    district: '丰台',
    examType: '期末',
    thinking: '角平分线的性质：被平分的角等于平分后角的2倍。',
    steps: [
      { step: 1, title: '利用角平分线性质', content: 'OB平分∠AOC，则∠AOC=2∠AOB', highlight: true },
      { step: 2, title: '计算', content: '∠AOC=2×35°=70°', highlight: true }
    ],
    keyPoints: ['角平分线的性质', '∠AOC=2∠AOB'],
    commonMistakes: ['填35（混淆概念）', '填35°（单位已给）'],
    similarQuestions: [
      { id: 'qz4_6', content: '已知OC是∠AOB的平分线，∠AOB=80°，则∠AOC=（）', difficulty: 'easy' }
    ]
  }
]
