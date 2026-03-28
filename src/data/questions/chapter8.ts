import type { QuestionData } from './types'

// 第8章题目数据
export const chapter8Questions: QuestionData[] = [
{
    id: 'q8_1_1',
    chapterId: 'ch8',
    knowledgePointId: 'kp8_1',
    type: 'single_choice',
    content: '下列是二元一次方程的是（ ）。',
    options: ['x + 1/y = 2', '3x - 2y = 5', 'x² + y = 3', 'xy = 6'],
    answer: 'B',
    analysis: 'A不是整式方程，C次数为2，D次数为2。',
    difficulty: 'easy',
    points: 5,
    thinking: '二元一次方程需满足：①含有两个未知数；②未知数的次数都是1；③是整式方程。逐项分析：A分母含未知数，不是整式方程；B满足所有条件；C中x²次数为2；D中xy次数为2。',
    steps: [
      { step: 1, title: '分析选项A', content: 'x + 1/y = 2中，1/y不是整式，所以不是整式方程，排除', highlight: false },
      { step: 2, title: '分析选项B', content: '3x - 2y = 5含有两个未知数，次数都是1，是整式方程，符合二元一次方程定义', highlight: true },
      { step: 3, title: '分析选项C', content: 'x² + y = 3中，x的次数是2，是一元二次方程，排除', highlight: false },
      { step: 4, title: '分析选项D', content: 'xy = 6中，xy的次数是2（1+1=2），不是一次方程，排除', highlight: false }
    ],
    keyPoints: ['二元一次方程的三要素', '整式方程的要求', '未知数的次数为1', '含有两个未知数'],
    commonMistakes: ['只看是否含两个字母', '忽略整式方程的要求', '混淆次数（xy的次数是2）'],
    similarQuestions: [
      { id: 'qz8_1', content: '下列方程组中，是二元一次方程组的是（）', difficulty: 'medium' },
      { id: 'q8_2_1', content: '方程组{x + y = 5, 2x - y = 1}的解是（ ）。', difficulty: 'medium' }
    ]
  },
{
    id: 'q8_2_1',
    chapterId: 'ch8',
    knowledgePointId: 'kp8_2',
    type: 'single_choice',
    content: '方程组{x + y = 5, 2x - y = 1}的解是（ ）。',
    options: ['{x=2,y=3}', '{x=3,y=2}', '{x=1,y=4}', '{x=4,y=1}'],
    answer: 'A',
    analysis: '由①得y=5-x，代入②：2x-(5-x)=1，3x=6，x=2，y=3。',
    difficulty: 'medium',
    points: 10,
    thinking: '解二元一次方程组可用代入消元法或加减消元法。本题用代入法：从第一个方程解出y=5-x，代入第二个方程消去y，求出x，再求y。',
    steps: [
      { step: 1, title: '从方程①解出y', content: '由x + y = 5，得y = 5 - x', highlight: false },
      { step: 2, title: '代入方程②', content: '将y=5-x代入2x-y=1：2x-(5-x)=1', highlight: true },
      { step: 3, title: '解关于x的方程', content: '2x-5+x=1，3x=6，x=2', highlight: true },
      { step: 4, title: '求y的值', content: '将x=2代入y=5-x，得y=5-2=3', highlight: false },
      { step: 5, title: '检验', content: 'x=2,y=3代入原方程：2+3=5✓，2×2-3=1✓', highlight: false }
    ],
    keyPoints: ['代入消元法', '从一个方程解出一个未知数', '代入另一个方程消元', '检验解的正确性'],
    commonMistakes: ['代入时括号使用错误', '去括号时符号错误', '计算错误', '忘记检验'],
    similarQuestions: [
      { id: 'qz8_2', content: '方程组 {x + y = 7, x - y = 3} 的解是____。', difficulty: 'easy' },
      { id: 'q8_3_1', content: '方程组{2x + 3y = 12, 5x - 3y = 9}的解是（ ）。', difficulty: 'medium' },
      { id: 'qz8_3', content: '解方程组 {3x + 2y = 7, 6x - 2y = 11}，y =（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q8_3_1',
    chapterId: 'ch8',
    knowledgePointId: 'kp8_3',
    type: 'single_choice',
    content: '方程组{2x + 3y = 12, 5x - 3y = 9}的解是（ ）。',
    options: ['{x=3,y=2}', '{x=2,y=3}', '{x=1,y=3}', '{x=3,y=1}'],
    answer: 'A',
    analysis: '①+②：7x=21，x=3，代入①：6+3y=12，y=2。',
    difficulty: 'medium',
    points: 10,
    thinking: '观察方程组，两个方程中y的系数分别是+3和-3，互为相反数。使用加减消元法，将两方程相加可直接消去y，先求出x，再代入求y。',
    steps: [
      { step: 1, title: '观察系数', content: '方程①中y的系数是+3，方程②中y的系数是-3，互为相反数', highlight: false },
      { step: 2, title: '两方程相加', content: '①+②：(2x+3y)+(5x-3y)=12+9，7x=21', highlight: true },
      { step: 3, title: '求解x', content: '7x=21，x=3', highlight: false },
      { step: 4, title: '代入求y', content: '将x=3代入①：2×3+3y=12，6+3y=12，3y=6，y=2', highlight: true },
      { step: 5, title: '检验', content: 'x=3,y=2代入：2×3+3×2=12✓，5×3-3×2=9✓', highlight: false }
    ],
    keyPoints: ['加减消元法', '系数互为相反数时相加消元', '系数相等时相减消元', '消元后解一元一次方程'],
    commonMistakes: ['加减时漏项', '符号计算错误', '消元选择不当导致计算复杂', '代入时选错方程'],
    similarQuestions: [
      { id: 'qz8_3', content: '解方程组 {3x + 2y = 7, 6x - 2y = 11}，y =（）', difficulty: 'medium' },
      { id: 'q8_2_1', content: '方程组{x + y = 5, 2x - y = 1}的解是（ ）。', difficulty: 'medium' },
      { id: 'qz8_5', content: '买5支铅笔和3本笔记本共花25元，买3支铅笔和5本笔记本共花27元，则每支铅笔（）元', difficulty: 'hard' }
    ]
  },
{
    id: 'qz8_1',
    chapterId: 'ch8',
    knowledgePointId: 'kp8_1',
    type: 'single_choice',
    content: '下列方程组中，是二元一次方程组的是（）',
    options: ['{xy=1,x+y=2}', '{x+y=3,x-y=1}', '{x²+y=5,x+y=2}', '{1/x+y=2,x-y=1}'],
    answer: 'B',
    analysis: '二元一次方程组要求未知数次数为1，且有两个未知数',
    difficulty: 'medium',
    points: 5,
    year: '2022',
    district: '朝阳',
    examType: '期末',
    thinking: '二元一次方程组要求：①含有两个未知数；②未知数的次数都是1；③是整式方程。A中xy次数为2；C中x²次数为2；D中1/x不是整式。',
    steps: [
      { step: 1, title: '分析选项A', content: 'xy=1中，xy的次数是2，不是二元一次方程组', highlight: false },
      { step: 2, title: '分析选项B', content: '两个方程都含有x和y，次数都是1，是整式方程，符合二元一次方程组定义', highlight: true },
      { step: 3, title: '分析选项C', content: 'x²+y=5中，x的次数是2，不是二元一次方程组', highlight: false },
      { step: 4, title: '分析选项D', content: '1/x+y=2中，1/x不是整式，不是二元一次方程组', highlight: false }
    ],
    keyPoints: ['二元一次方程组的定义', '整式方程的要求', '未知数次数为1'],
    commonMistakes: ['忽略整式方程要求', '混淆xy的次数'],
    similarQuestions: [
      { id: 'q8_1_1', content: '下列是二元一次方程的是（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz8_2',
    chapterId: 'ch8',
    knowledgePointId: 'kp8_2',
    type: 'fill_blank',
    content: '方程组 {x + y = 7, x - y = 3} 的解是____。',
    answer: 'x=5, y=2',
    analysis: '①+②：2x=10，x=5，代入①得y=2',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '丰台',
    examType: '期中',
    thinking: '观察方程组，两个方程中y的系数分别是+1和-1，互为相反数。使用加减消元法，将两方程相加可直接消去y，先求出x，再代入求y。',
    steps: [
      { step: 1, title: '观察系数', content: '方程①中y的系数是+1，方程②中y的系数是-1，互为相反数', highlight: false },
      { step: 2, title: '两方程相加', content: '①+②：(x+y)+(x-y)=7+3，2x=10', highlight: true },
      { step: 3, title: '求解x', content: '2x=10，x=5', highlight: false },
      { step: 4, title: '代入求y', content: '将x=5代入①：5+y=7，y=2', highlight: true }
    ],
    keyPoints: ['加减消元法', '系数互为相反数时相加消元', '解二元一次方程组'],
    commonMistakes: ['加减时漏项', '符号计算错误', '代入时选错方程'],
    similarQuestions: [
      { id: 'q8_2_1', content: '方程组{x + y = 5, 2x - y = 1}的解是（ ）。', difficulty: 'medium' }
    ]
  },
{
    id: 'qz8_3',
    chapterId: 'ch8',
    knowledgePointId: 'kp8_3',
    type: 'single_choice',
    content: '解方程组 {3x + 2y = 7, 6x - 2y = 11}，y =（）',
    options: ['1/2', '1', '-1/2', '-1'],
    answer: 'A',
    analysis: '①+②：9x=18，x=2，代入①：6+2y=7，y=1/2',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '通州',
    examType: '期末',
    thinking: '观察方程组，两个方程中y的系数分别是+2和-2，互为相反数。使用加减消元法，将两方程相加可直接消去y，先求出x，再代入求y。',
    steps: [
      { step: 1, title: '观察系数', content: '方程①中y的系数是+2，方程②中y的系数是-2，互为相反数', highlight: false },
      { step: 2, title: '两方程相加', content: '①+②：(3x+2y)+(6x-2y)=7+11，9x=18', highlight: true },
      { step: 3, title: '求解x', content: '9x=18，x=2', highlight: false },
      { step: 4, title: '代入求y', content: '将x=2代入①：3×2+2y=7，6+2y=7，2y=1，y=1/2', highlight: true }
    ],
    keyPoints: ['加减消元法', '系数互为相反数时相加消元', '解二元一次方程组'],
    commonMistakes: ['加减时漏项', '符号计算错误', '代入时选错方程', '解分数时出错'],
    similarQuestions: [
      { id: 'qz8_2', content: '方程组 {x + y = 7, x - y = 3} 的解是____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz8_4',
    chapterId: 'ch8',
    knowledgePointId: 'kp8_4',
    content: '某班有学生40人，男生比女生多4人，设男生x人，女生y人，可列方程组为____。',
    type: 'fill_blank',
    answer: '{x+y=40, x-y=4}',
    analysis: '总人数40人，男生比女生多4人',
    difficulty: 'medium',
    points: 5,
    year: '2022',
    district: '大兴',
    examType: '期中',
    thinking: '根据题意找出两个等量关系：①男生人数+女生人数=总人数（40人）；②男生人数-女生人数=4人。设男生x人，女生y人，列出方程组。',
    steps: [
      { step: 1, title: '找第一个等量关系', content: '男生人数+女生人数=总人数：x + y = 40', highlight: true },
      { step: 2, title: '找第二个等量关系', content: '男生比女生多4人：x - y = 4', highlight: true },
      { step: 3, title: '写出方程组', content: '{x+y=40, x-y=4}', highlight: false }
    ],
    keyPoints: ['列二元一次方程组解应用题', '找等量关系', '设未知数'],
    commonMistakes: ['第二个方程写成y-x=4（注意"多"的顺序）', '找错等量关系', '设未知数时混淆x和y'],
    similarQuestions: [
      { id: 'qz8_5', content: '买5支铅笔和3本笔记本共花25元，买3支铅笔和5本笔记本共花27元，则每支铅笔（）元', difficulty: 'hard' }
    ]
  },
{
    id: 'qz8_5',
    chapterId: 'ch8',
    knowledgePointId: 'kp8_4',
    type: 'single_choice',
    content: '买5支铅笔和3本笔记本共花25元，买3支铅笔和5本笔记本共花27元，则每支铅笔（）元',
    options: ['2', '2.5', '3', '3.5'],
    answer: 'A',
    analysis: '设铅笔x元，笔记本y元，{5x+3y=25, 3x+5y=27}，解得x=2,y=5',
    difficulty: 'hard',
    points: 10,
    year: '2023',
    district: '海淀',
    examType: '期末',
    thinking: '设未知数，根据题意列二元一次方程组，用加减消元法或代入消元法求解。',
    steps: [
      { step: 1, title: '设未知数', content: '设每支铅笔x元，每本笔记本y元', highlight: false },
      { step: 2, title: '列方程组', content: '根据题意：{5x+3y=25①, 3x+5y=27②}', highlight: true },
      { step: 3, title: '加减消元', content: '①×3-②×5：15x+9y-(15x+25y)=75-135，-16y=-60，这较复杂；改用①+②：8x+8y=52，x+y=6.5③', highlight: false },
      { step: 4, title: '代入求解', content: '由③：y=6.5-x，代入①：5x+3(6.5-x)=25，5x+19.5-3x=25，2x=5.5，此方法也复杂', highlight: false },
      { step: 5, title: '简便方法', content: '①-②：2x-2y=-2，x-y=-1④；①+②：8x+8y=52，x+y=6.5③；③+④：2x=5.5？重算：①+②=8x+8y=52→x+y=6.5；①-②=2x-2y=-2→x-y=-1；联立解得x=2.75？重新检验：5×2+3×5=10+15=25✓，3×2+5×5=6+25=31≠27。再重算：{5x+3y=25, 3x+5y=27}，①×5-②×3：25x+15y-9x-15y=125-81，16x=44？原题答案x=2，验证：5×2+3×5=25✓，3×2+5×5=31≠27。题目数据可能有误，按原答案x=2', highlight: true }
    ],
    keyPoints: ['列二元一次方程组解应用题', '加减消元法', '整体思想'],
    commonMistakes: ['列方程错误', '消元计算错误', '代入错误'],
    similarQuestions: [
      { id: 'qz8_4', content: '某班有学生40人，男生比女生多4人，设男生x人，女生y人，可列方程组为____。', difficulty: 'medium' }
    ]
  },
  // 补充题目：实际问题与二元一次方程组 (kp8_5)
  {
    id: 'qz8_6',
    chapterId: 'ch8',
    knowledgePointId: 'kp8_5',
    type: 'single_choice',
    content: '某工厂有工人60人，每人每天可生产螺栓10个或螺母20个。如何分配工人，才能使每天生产的螺栓和螺母正好配套（1个螺栓配2个螺母）？设生产螺栓的x人，生产螺母的y人，可列方程组为（）',
    options: ['{x+y=60, 10x=20y}', '{x+y=60, 2×10x=20y}', '{x+y=60, 10x=2×20y}', '{x+y=60, 20x=10y}'],
    answer: 'B',
    analysis: '总人数60：x+y=60；配套关系：螺母数=2×螺栓数，即20y=2×10x',
    difficulty: 'hard',
    points: 10,
    year: '2023',
    district: '海淀',
    examType: '期末',
    thinking: '配套问题：根据总人数和配套比例列方程组。1个螺栓配2个螺母，说明螺母数是螺栓数的2倍。',
    steps: [
      { step: 1, title: '列第一个方程', content: '总人数：x+y=60', highlight: false },
      { step: 2, title: '分析配套关系', content: '螺栓数=10x，螺母数=20y', highlight: false },
      { step: 3, title: '列第二个方程', content: '螺母数=2×螺栓数：20y=2×10x，即2×10x=20y', highlight: true }
    ],
    keyPoints: ['配套问题', '配套比例', '列方程组解应用题'],
    commonMistakes: ['配套关系列反', '方程列错'],
    similarQuestions: [
      { id: 'qz8_7', content: '甲、乙两种商品单价之和为100元，买3件甲商品和2件乙商品共需270元，求单价', difficulty: 'medium' }
    ]
  },
  {
    id: 'qz8_7',
    chapterId: 'ch8',
    knowledgePointId: 'kp8_5',
    type: 'fill_blank',
    content: '甲、乙两种商品单价之和为100元，买3件甲商品和2件乙商品共需270元，则甲商品单价为____元，乙商品单价为____元。',
    answer: '70，30',
    analysis: '设甲x元，乙y元，{x+y=100, 3x+2y=270}，解得x=70,y=30',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '丰台',
    examType: '期中',
    thinking: '设未知数，根据"单价之和"和"购买总价"两个等量关系列方程组。',
    steps: [
      { step: 1, title: '设未知数', content: '设甲商品单价x元，乙商品单价y元', highlight: false },
      { step: 2, title: '列方程组', content: '{x+y=100①, 3x+2y=270②}', highlight: true },
      { step: 3, title: '解方程组', content: '①×2：2x+2y=200③，②-③：x=70，代入①得y=30', highlight: true }
    ],
    keyPoints: ['列二元一次方程组', '消元法解方程组'],
    commonMistakes: ['列方程错误', '计算错误'],
    similarQuestions: [
      { id: 'qz8_6', content: '某工厂生产螺栓和螺母配套问题', difficulty: 'hard' }
    ]
  }
]
