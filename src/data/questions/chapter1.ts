import type { QuestionData } from './types'

// 第1章题目数据
export const chapter1Questions: QuestionData[] = [
{
    id: 'q1_1_1',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_1',
    type: 'fill_blank',
    content: '如果把水位上升0.5米记作+0.5米，那么水位下降1.2米记作____。',
    answer: '-1.2米',
    analysis: '上升为正，下降为负，所以记作-1.2米。',
    difficulty: 'easy',
    points: 5,
    thinking: '本题考查正数和负数的概念，关键是理解相反意义的量如何用正负数表示。',
    steps: [
      { step: 1, title: '理解题意', content: '题目规定：水位上升用正数表示，上升0.5米记作+0.5米', highlight: false },
      { step: 2, title: '确定表示方法', content: '上升与下降是相反意义的量，上升用正数，则下降用负数', highlight: true },
      { step: 3, title: '得出答案', content: '水位下降1.2米，记作-1.2米', highlight: false }
    ],
    keyPoints: ['正数和负数的意义', '相反意义的量', '用正负数表示实际问题'],
    commonMistakes: ['忘记写单位"米"', '符号写错，写成+1.2米', '只写数字-1.2，遗漏单位'],
    similarQuestions: [
      { id: 'qz1_1', content: '若向东走5米记作+5米，则向西走3米记作____', difficulty: 'easy' },
      { id: 'q1_1_2', content: '某地最低气温是-8℃，最高气温是+12℃，这一天的温差是多少？', difficulty: 'medium' }
    ]
  },
{
    id: 'q1_1_2',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_1',
    type: 'single_choice',
    content: '某地最低气温是-8℃，最高气温是+12℃，这一天的温差是多少？',
    options: ['4℃', '20℃', '-20℃', '8℃'],
    answer: 'B',
    analysis: '温差 = 12 - (-8) = 12 + 8 = 20℃。',
    difficulty: 'medium',
    points: 10,
    thinking: '温差是最高气温减去最低气温，注意减去负数等于加上它的相反数。',
    steps: [
      { step: 1, title: '明确概念', content: '温差 = 最高气温 - 最低气温', highlight: false },
      { step: 2, title: '代入数据', content: '最高气温是+12℃，最低气温是-8℃，温差 = 12 - (-8)', highlight: false },
      { step: 3, title: '有理数减法', content: '减去一个负数等于加上它的相反数：12 - (-8) = 12 + 8', highlight: true },
      { step: 4, title: '计算结果', content: '12 + 8 = 20（℃），答案是B', highlight: false }
    ],
    keyPoints: ['温差的定义', '有理数减法法则', '减去负数等于加正数'],
    commonMistakes: ['用加法计算：-8 + 12 = 4，误选A', '忘记变号：12 - 8 = 4，误选A', '符号错误得到-20℃，误选C'],
    similarQuestions: [
      { id: 'q1_5_1', content: '下列比较大小正确的是（ ）', difficulty: 'medium' },
      { id: 'qz1_6', content: '在数轴上，与表示-1的点距离为3个单位长度的点表示的数是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q1_2_1',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_2',
    type: 'single_choice',
    content: '数轴上，点A表示-2，点B表示3，则点A在点B的（ ）。',
    options: ['左', '右', '上', '下'],
    answer: 'A',
    analysis: '-2在3的左边。',
    difficulty: 'easy',
    points: 5,
    thinking: '数轴上，右边的数总比左边的数大。负数在原点左侧，正数在原点右侧。',
    steps: [
      { step: 1, title: '回忆数轴特点', content: '数轴上，原点左边是负数，右边是正数，右边的数总比左边大', highlight: false },
      { step: 2, title: '比较大小', content: '-2 < 3，所以-2在3的左边', highlight: true },
      { step: 3, title: '确定答案', content: '点A在点B的左边，选A', highlight: false }
    ],
    keyPoints: ['数轴的三要素', '数轴上数的大小关系', '负数在正数左边'],
    commonMistakes: ['混淆左右方向，误选B', '不清楚数轴上数的分布规律'],
    similarQuestions: [
      { id: 'qz1_6', content: '在数轴上，与表示-1的点距离为3个单位长度的点表示的数是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q1_3_1',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_3',
    type: 'fill_blank',
    content: '-7的相反数是____。',
    answer: '7',
    analysis: '只有符号不同的数互为相反数。',
    difficulty: 'easy',
    points: 5,
    thinking: '求一个数的相反数，只需改变它的符号。正数的相反数是负数，负数的相反数是正数。',
    steps: [
      { step: 1, title: '理解概念', content: '相反数：只有符号不同的两个数互为相反数', highlight: false },
      { step: 2, title: '应用法则', content: '-7是负数，它的相反数是正数，即7', highlight: true },
      { step: 3, title: '验证', content: '-7 + 7 = 0，互为相反数的两个数和为0，验证正确', highlight: false }
    ],
    keyPoints: ['相反数的定义', '互为相反数的两个数和为0', '求相反数的方法'],
    commonMistakes: ['错误地认为相反数是-(-7)或1/7', '写成了-7'],
    similarQuestions: [
      { id: 'qz1_2', content: '|-3|的值是（）', difficulty: 'easy' },
      { id: 'qz1_7', content: '|-2.5| = ____，-(-3) = ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'q1_4_1',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_4',
    type: 'fill_blank',
    content: '|-9| = ____，|5| = ____，|-3.6| = ____。',
    answer: '9，5，3.6',
    analysis: '负数的绝对值是它的相反数，正数的绝对值是它本身。',
    difficulty: 'easy',
    points: 5,
    thinking: '绝对值表示数轴上点到原点的距离，距离总是非负的。记住口诀：正数绝对值是它本身，负数绝对值是它的相反数，0的绝对值是0。',
    steps: [
      { step: 1, title: '回忆绝对值法则', content: '正数的绝对值是它本身，负数的绝对值是它的相反数', highlight: false },
      { step: 2, title: '计算|-9|', content: '-9是负数，它的绝对值是它的相反数9，所以|-9|=9', highlight: true },
      { step: 3, title: '计算|5|', content: '5是正数，它的绝对值是它本身5，所以|5|=5', highlight: false },
      { step: 4, title: '计算|-3.6|', content: '-3.6是负数，它的绝对值是它的相反数3.6，所以|-3.6|=3.6', highlight: true }
    ],
    keyPoints: ['绝对值的代数意义', '绝对值的几何意义', '绝对值的性质：非负性'],
    commonMistakes: ['|-9|=-9（忘记负数的绝对值要变号）', '|5|=-5（正数也错误地变号）', '答案顺序写错'],
    similarQuestions: [
      { id: 'qz1_2', content: '|-3|的值是（）', difficulty: 'easy' },
      { id: 'qz1_7', content: '|-2.5| = ____，-(-3) = ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'q1_5_1',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_5',
    type: 'single_choice',
    content: '下列比较大小正确的是（ ）。',
    options: ['-4 < -6', '-2.5 > -2', '-4 > -6', '-2.5 = -2'],
    answer: 'C',
    analysis: '|-4|=4<|-6|=6，所以-4>-6。',
    difficulty: 'medium',
    points: 10,
    thinking: '比较两个负数的大小，绝对值大的反而小。可以借助数轴理解：越靠左的数越小。',
    steps: [
      { step: 1, title: '分析选项A', content: '比较-4和-6：|-4|=4，|-6|=6，因为4<6，所以-4>-6，A错误', highlight: false },
      { step: 2, title: '分析选项B', content: '比较-2.5和-2：|-2.5|=2.5，|-2|=2，因为2.5>2，所以-2.5<-2，B错误', highlight: false },
      { step: 3, title: '分析选项C', content: '比较-4和-6：|-4|=4，|-6|=6，因为4<6，所以-4>-6，C正确', highlight: true },
      { step: 4, title: '分析选项D', content: '-2.5 ≠ -2，D明显错误', highlight: false }
    ],
    keyPoints: ['两个负数比较大小', '绝对值大的负数反而小', '数轴上右边的数更大'],
    commonMistakes: ['认为-4<-6（直接比较绝对值，忽略负号）', '认为-2.5>-2（距离原点越远，负数越小）'],
    similarQuestions: [
      { id: 'qz1_9', content: '计算：(-1/2) × (-4) × (-3) =（）', difficulty: 'medium' },
      { id: 'qz1_6', content: '在数轴上，与表示-1的点距离为3个单位长度的点表示的数是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q1_6_1',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_6',
    type: 'fill_blank',
    content: '(-7) + (-4) = ____。',
    answer: '-11',
    analysis: '同号相加，取负号，7+4=11。',
    difficulty: 'easy',
    points: 5,
    thinking: '两个负数相加，结果还是负数，绝对值相加即可。',
    steps: [
      { step: 1, title: '判断符号', content: '两个加数都是负数，属于同号相加', highlight: false },
      { step: 2, title: '应用法则', content: '同号两数相加，取相同的符号（负号），并把绝对值相加', highlight: true },
      { step: 3, title: '计算绝对值', content: '|-7| + |-4| = 7 + 4 = 11', highlight: false },
      { step: 4, title: '确定结果', content: '结果是-11', highlight: true }
    ],
    keyPoints: ['有理数加法法则', '同号相加取相同符号', '绝对值相加'],
    commonMistakes: ['得11（忘记加负号）', '得-3（减法错误）', '得3（符号混乱）'],
    similarQuestions: [
      { id: 'qz1_8', content: '计算：(-5) + 8 + (-3) = ____。', difficulty: 'easy' },
      { id: 'qz1_3', content: '下列计算正确的是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q1_7_1',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_7',
    type: 'fill_blank',
    content: '(-15) - (-8) = ____。',
    answer: '-7',
    analysis: '(-15) - (-8) = (-15) + 8 = -7。',
    difficulty: 'easy',
    points: 5,
    thinking: '减去一个负数等于加上它的相反数，将减法转化为加法来计算。',
    steps: [
      { step: 1, title: '转化运算', content: '减去一个负数等于加上它的相反数：(-15) - (-8) = (-15) + (+8)', highlight: true },
      { step: 2, title: '判断符号', content: '异号两数相加，取绝对值较大的数的符号', highlight: false },
      { step: 3, title: '计算', content: '|-15|=15，|8|=8，15-8=7', highlight: false },
      { step: 4, title: '确定结果', content: '因为|-15|>|8|，所以结果为-7', highlight: true }
    ],
    keyPoints: ['有理数减法法则', '减法转化为加法', '减去负数等于加正数'],
    commonMistakes: ['得-23（直接把两个负数相加）', '得7（符号判断错误）', '得23（忘记符号直接相加）'],
    similarQuestions: [
      { id: 'q1_1_2', content: '某地最低气温是-8℃，最高气温是+12℃，这一天的温差是多少？', difficulty: 'medium' },
      { id: 'qz1_3', content: '下列计算正确的是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q1_8_1',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_8',
    type: 'fill_blank',
    content: '(-6) × 7 = ____。',
    answer: '-42',
    analysis: '异号得负，6×7=42。',
    difficulty: 'easy',
    points: 5,
    thinking: '有理数乘法：先定符号，再算绝对值。异号得负，绝对值相乘。',
    steps: [
      { step: 1, title: '确定符号', content: '(-6)是负数，7是正数，异号相乘得负数', highlight: true },
      { step: 2, title: '计算绝对值', content: '|-6| × |7| = 6 × 7 = 42', highlight: false },
      { step: 3, title: '确定结果', content: '符号为负，数值为42，结果是-42', highlight: true }
    ],
    keyPoints: ['有理数乘法法则', '先定符号再算值', '异号得负同号得正'],
    commonMistakes: ['得42（忘记定符号）', '得-13（把乘法当加法）', '得13（符号和运算都错）'],
    similarQuestions: [
      { id: 'qz1_9', content: '计算：(-1/2) × (-4) × (-3) =（）', difficulty: 'medium' },
      { id: 'qz1_3', content: '下列计算正确的是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'qz1_1',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_1',
    type: 'single_choice',
    content: '下列各数中是正数的是（）',
    options: ['0', '-1', '-(-0.5)', '-(+2)'],
    answer: 'C',
    analysis: '-(-0.5) = 0.5 > 0，是正数',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '海淀',
    examType: '期中',
    thinking: '正数是大于0的数。分析每个选项：0既不是正数也不是负数；-1是负数；-(-0.5)去括号后等于0.5，是正数；-(+2)等于-2，是负数。',
    steps: [
      { step: 1, title: '分析选项A', content: '0既不是正数也不是负数', highlight: false },
      { step: 2, title: '分析选项B', content: '-1是负数', highlight: false },
      { step: 3, title: '分析选项C', content: '-(-0.5) = 0.5 > 0，是正数', highlight: true },
      { step: 4, title: '分析选项D', content: '-(+2) = -2，是负数', highlight: false }
    ],
    keyPoints: ['正数的定义（大于0）', '负数的定义（小于0）', '多重符号化简'],
    commonMistakes: ['认为0是正数', '多重符号化简错误', '混淆正负数概念'],
    similarQuestions: [
      { id: 'q1_1_1', content: '如果把水位上升0.5米记作+0.5米，那么水位下降1.2米记作____。', difficulty: 'easy' },
      { id: 'qz1_7', content: '|-2.5| = ____，-(-3) = ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz1_2',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_5',
    type: 'single_choice',
    content: '|-3|的值是（）',
    options: ['-3', '3', '-1/3', '1/3'],
    answer: 'B',
    analysis: '负数的绝对值是它的相反数',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '海淀',
    examType: '期中',
    thinking: '绝对值表示数轴上点到原点的距离，距离总是非负的。负数的绝对值是它的相反数，所以|-3|=3。',
    steps: [
      { step: 1, title: '理解绝对值', content: '绝对值表示数轴上点到原点的距离，永远非负', highlight: false },
      { step: 2, title: '应用法则', content: '负数的绝对值是它的相反数，|-3| = 3', highlight: true }
    ],
    keyPoints: ['绝对值的几何意义', '负数的绝对值是它的相反数'],
    commonMistakes: ['选A认为绝对值后仍为负数', '选C或D混淆倒数概念'],
    similarQuestions: [
      { id: 'q1_4_1', content: '|-9| = ____，|5| = ____，|-3.6| = ____。', difficulty: 'easy' },
      { id: 'qz1_7', content: '|-2.5| = ____，-(-3) = ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz1_3',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_10',
    type: 'single_choice',
    content: '下列计算正确的是（）',
    options: ['-1 + 2 = -3', '-3 + 5 = -8', '(-2) × 3 = -6', '(-4) ÷ 2 = 2'],
    answer: 'C',
    analysis: '负数乘以正数得负数',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '海淀',
    examType: '期中',
    thinking: '逐项验证计算：A.-1+2=1；B.-3+5=2；C.(-2)×3=-6；D.(-4)÷2=-2。',
    steps: [
      { step: 1, title: '验证A', content: '-1 + 2 = 1 ≠ -3，错误', highlight: false },
      { step: 2, title: '验证B', content: '-3 + 5 = 2 ≠ -8，错误', highlight: false },
      { step: 3, title: '验证C', content: '(-2) × 3 = -6，异号相乘得负，正确', highlight: true },
      { step: 4, title: '验证D', content: '(-4) ÷ 2 = -2 ≠ 2，错误', highlight: false }
    ],
    keyPoints: ['有理数加法法则', '有理数乘法法则', '有理数除法法则'],
    commonMistakes: ['符号判断错误', '加减法计算错误'],
    similarQuestions: [
      { id: 'q1_6_1', content: '(-7) + (-4) = ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz1_4',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_12',
    type: 'single_choice',
    content: '计算 (-2)³ 的结果是（）',
    options: ['-6', '6', '-8', '8'],
    answer: 'C',
    analysis: '(-2)³ = (-2) × (-2) × (-2) = -8',
    difficulty: 'medium',
    points: 5,
    year: '2022',
    district: '西城',
    examType: '期末',
    thinking: '负数的奇次幂为负数。(-2)³表示3个-2相乘：(-2)×(-2)×(-2)。前两个相乘得4，再乘以-2得-8。',
    steps: [
      { step: 1, title: '理解乘方', content: '(-2)³ = (-2) × (-2) × (-2)', highlight: false },
      { step: 2, title: '分步计算', content: '(-2) × (-2) = 4', highlight: false },
      { step: 3, title: '得出结果', content: '4 × (-2) = -8', highlight: true }
    ],
    keyPoints: ['有理数的乘方', '负数的奇次幂为负'],
    commonMistakes: ['得-6（把乘方当乘法）', '得8（符号错误）'],
    similarQuestions: [
      { id: 'qz1_10', content: '计算：-2³ + (-2)² = ____。', difficulty: 'hard' }
    ]
  },
{
    id: 'qz1_5',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_12',
    type: 'single_choice',
    content: '数据5600000用科学记数法表示为（）',
    options: ['56×10⁵', '5.6×10⁶', '5.6×10⁷', '0.56×10⁷'],
    answer: 'B',
    analysis: '5600000 = 5.6×10⁶',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '海淀',
    examType: '期中',
    thinking: '科学记数法的形式为a×10ⁿ，其中1≤|a|<10，n为整数。5600000变为5.6，小数点向左移动6位，所以n=6。',
    steps: [
      { step: 1, title: '确定a', content: '5600000变为1到10之间的数：5.6', highlight: false },
      { step: 2, title: '确定n', content: '小数点向左移动6位，所以n=6', highlight: true },
      { step: 3, title: '写出结果', content: '5600000 = 5.6×10⁶', highlight: true }
    ],
    keyPoints: ['科学记数法的形式', '1≤|a|<10', 'n的确定方法'],
    commonMistakes: ['a的值不符合范围', 'n的值计算错误'],
    similarQuestions: [
      { id: 'qz1_11', content: '将125000用科学记数法表示为（）', difficulty: 'easy' }
    ]
  },
{
    id: 'qz1_6',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_2',
    type: 'single_choice',
    content: '在数轴上，与表示-1的点距离为3个单位长度的点表示的数是（）',
    options: ['2', '-4', '2或-4', '3或-3'],
    answer: 'C',
    analysis: '在-1右边3个单位是2，左边3个单位是-4',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '朝阳',
    examType: '期中',
    thinking: '数轴上与某点距离为定值的点有两个，分别在该点的左右两侧。左侧：-1-3=-4；右侧：-1+3=2。',
    steps: [
      { step: 1, title: '分析左侧点', content: '在-1左边3个单位：-1 - 3 = -4', highlight: false },
      { step: 2, title: '分析右侧点', content: '在-1右边3个单位：-1 + 3 = 2', highlight: false },
      { step: 3, title: '确定答案', content: '满足条件的点是2或-4，选C', highlight: true }
    ],
    keyPoints: ['数轴上两点距离', '数轴上左右对称的两点'],
    commonMistakes: ['只考虑一种情况', '计算错误：-1-3=-2'],
    similarQuestions: [
      { id: 'q1_1_2', content: '某地最低气温是-8℃，最高气温是+12℃，这一天的温差是多少？', difficulty: 'medium' }
    ]
  },
{
    id: 'qz1_7',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_4',
    type: 'fill_blank',
    content: '|-2.5| = ____，-(-3) = ____。',
    answer: '2.5，3',
    analysis: '绝对值和相反数的基本计算',
    difficulty: 'easy',
    points: 5,
    year: '2024',
    district: '东城',
    examType: '期中',
    thinking: '负数的绝对值是它的相反数，所以|-2.5|=2.5；负负得正，所以-(-3)=3。',
    steps: [
      { step: 1, title: '计算绝对值', content: '|-2.5| = 2.5（负数的绝对值是它的相反数）', highlight: false },
      { step: 2, title: '计算相反数', content: '-(-3) = 3（负负得正）', highlight: false }
    ],
    keyPoints: ['绝对值的计算', '多重符号化简'],
    commonMistakes: ['|-2.5|=-2.5', '-(-3)=-3'],
    similarQuestions: [
      { id: 'q1_4_1', content: '|-9| = ____，|5| = ____，|-3.6| = ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz1_8',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_6',
    type: 'fill_blank',
    content: '计算：(-5) + 8 + (-3) = ____。',
    answer: '0',
    analysis: '(-5)+8=3，3+(-3)=0',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '顺义',
    examType: '期末',
    thinking: '从左到右依次计算，或先把同号的数相加。(-5)+(-3)=-8，-8+8=0。',
    steps: [
      { step: 1, title: '方法一：从左到右', content: '(-5) + 8 = 3，然后 3 + (-3) = 0', highlight: false },
      { step: 2, title: '方法二：同号相加', content: '(-5) + (-3) = -8，然后 -8 + 8 = 0', highlight: true }
    ],
    keyPoints: ['有理数加法法则', '加法结合律'],
    commonMistakes: ['符号错误', '计算错误'],
    similarQuestions: [
      { id: 'q1_6_1', content: '(-7) + (-4) = ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz1_9',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_8',
    type: 'single_choice',
    content: '计算：(-1/2) × (-4) × (-3) =（）',
    options: ['-6', '6', '-12', '12'],
    answer: 'A',
    analysis: '负数乘负数得正，正数乘负数得负：2×(-3)=-6',
    difficulty: 'medium',
    points: 5,
    year: '2022',
    district: '昌平',
    examType: '期末',
    thinking: '先确定符号：三个负数相乘，负号个数为奇数，结果为负。再计算绝对值：1/2 × 4 × 3 = 6。所以结果是-6。',
    steps: [
      { step: 1, title: '确定符号', content: '三个负数相乘，负号个数为3（奇数），结果为负', highlight: true },
      { step: 2, title: '计算绝对值', content: '|-1/2| × |-4| × |-3| = 1/2 × 4 × 3 = 6', highlight: false },
      { step: 3, title: '得出结果', content: '结果为-6', highlight: true }
    ],
    keyPoints: ['有理数乘法法则', '多个数相乘的符号确定', '分数乘法'],
    commonMistakes: ['符号判断错误', '分数乘法计算错误'],
    similarQuestions: [
      { id: 'q1_8_1', content: '(-6) × 7 = ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz1_10',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_12',
    type: 'fill_blank',
    content: '计算：-2³ + (-2)² = ____。',
    answer: '-4',
    analysis: '-8 + 4 = -4，注意-2³=-8，(-2)²=4',
    difficulty: 'hard',
    points: 10,
    year: '2023',
    district: '海淀',
    examType: '期末',
    thinking: '关键是区分-2³和(-2)²：-2³表示2³的相反数，即-(2×2×2)=-8；(-2)²表示-2的平方，即(-2)×(-2)=4。',
    steps: [
      { step: 1, title: '计算-2³', content: '-2³ = -(2×2×2) = -8（注意：指数优先，2³=8，再取负）', highlight: true },
      { step: 2, title: '计算(-2)²', content: '(-2)² = (-2)×(-2) = 4（注意：括号内整体平方）', highlight: true },
      { step: 3, title: '求和', content: '-8 + 4 = -4', highlight: false }
    ],
    keyPoints: ['-aⁿ与(-a)ⁿ的区别', '运算顺序', '负数的乘方'],
    commonMistakes: ['认为-2³=-6', '认为(-2)²=-4', '混淆两种形式'],
    similarQuestions: [
      { id: 'qz1_4', content: '计算 (-2)³ 的结果是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'qz1_11',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_12',
    type: 'single_choice',
    content: '将125000用科学记数法表示为（）',
    options: ['1.25×10⁵', '12.5×10⁴', '0.125×10⁶', '1.25×10⁶'],
    answer: 'A',
    analysis: '125000 = 1.25×10⁵',
    difficulty: 'easy',
    points: 5,
    year: '2024',
    district: '西城',
    examType: '期中',
    thinking: '科学记数法要求a在1到10之间。125000=1.25×100000=1.25×10⁵。',
    steps: [
      { step: 1, title: '确定a', content: '125000 = 1.25 × 100000', highlight: false },
      { step: 2, title: '写成科学记数法', content: '1.25 × 10⁵', highlight: true }
    ],
    keyPoints: ['科学记数法a×10ⁿ', '1≤a<10'],
    commonMistakes: ['a的值不在1-10范围内', '指数计算错误'],
    similarQuestions: [
      { id: 'qz1_5', content: '数据5600000用科学记数法表示为（）', difficulty: 'medium' }
    ]
  },
  // 补充题目：数轴 (kp1_3)
  {
    id: 'qz1_12',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_3',
    type: 'single_choice',
    content: '数轴上，点A表示-3，点B表示2，则A、B两点之间的距离是（）',
    options: ['1', '5', '-1', '-5'],
    answer: 'B',
    analysis: '两点之间的距离等于两点所表示的数的差的绝对值，|2-(-3)|=5',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '东城',
    examType: '期中',
    thinking: '数轴上两点之间的距离等于这两点所表示的数的差的绝对值。点A表示-3，点B表示2，距离=|2-(-3)|=5。',
    steps: [
      { step: 1, title: '确定两点坐标', content: '点A表示-3，点B表示2', highlight: false },
      { step: 2, title: '计算距离', content: '距离 = |2 - (-3)| = |2 + 3| = 5', highlight: true }
    ],
    keyPoints: ['数轴上两点距离公式', '绝对值的计算'],
    commonMistakes: ['2-3=-1（符号错误）', '忘记取绝对值'],
    similarQuestions: [
      { id: 'qz1_6', content: '在数轴上，与表示-1的点距离为3个单位长度的点表示的数是（）', difficulty: 'medium' }
    ]
  },
  {
    id: 'qz1_13',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_3',
    type: 'fill_blank',
    content: '在数轴上与表示-2的点相距4个单位长度的点表示的数是____。',
    answer: '2或-6',
    analysis: '在-2右边4个单位是2，左边4个单位是-6',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '朝阳',
    examType: '期末',
    thinking: '数轴上与某点距离为定值的点有两个，分别在该点的左右两侧。右侧：-2+4=2；左侧：-2-4=-6。',
    steps: [
      { step: 1, title: '分析右侧点', content: '在-2右边4个单位：-2 + 4 = 2', highlight: false },
      { step: 2, title: '分析左侧点', content: '在-2左边4个单位：-2 - 4 = -6', highlight: false },
      { step: 3, title: '确定答案', content: '满足条件的点是2或-6', highlight: true }
    ],
    keyPoints: ['数轴上两点距离', '数轴上左右对称的两点'],
    commonMistakes: ['只考虑一种情况', '计算错误'],
    similarQuestions: [
      { id: 'qz1_12', content: '数轴上，点A表示-3，点B表示2，则A、B两点之间的距离是（）', difficulty: 'easy' }
    ]
  },
  // 补充题目：有理数的减法 (kp1_7)
  {
    id: 'qz1_14',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_7',
    type: 'single_choice',
    content: '计算：(-8) - (-5) - 3 =（）',
    options: ['-6', '0', '6', '-10'],
    answer: 'A',
    analysis: '(-8) - (-5) - 3 = (-8) + 5 - 3 = -6',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '海淀',
    examType: '期末',
    thinking: '连续减法运算，从左到右依次计算，减去一个负数等于加上它的相反数。',
    steps: [
      { step: 1, title: '去括号', content: '(-8) - (-5) - 3 = (-8) + 5 - 3', highlight: true },
      { step: 2, title: '从左到右计算', content: '(-8) + 5 = -3', highlight: false },
      { step: 3, title: '继续计算', content: '-3 - 3 = -6', highlight: true }
    ],
    keyPoints: ['有理数减法法则', '减去负数等于加正数', '连续运算的顺序'],
    commonMistakes: ['(-8)-(-5)=-13（符号错误）', '计算顺序错误'],
    similarQuestions: [
      { id: 'q1_7_1', content: '(-15) - (-8) = ____。', difficulty: 'easy' }
    ]
  },
  {
    id: 'qz1_15',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_7',
    type: 'fill_blank',
    content: '比-5小3的数是____。',
    answer: '-8',
    analysis: '-5 - 3 = -8',
    difficulty: 'easy',
    points: 5,
    year: '2024',
    district: '丰台',
    examType: '期中',
    thinking: '"比-5小3"表示在-5的基础上减去3，即-5-3=-8。',
    steps: [
      { step: 1, title: '理解题意', content: '"比-5小3"表示-5减去3', highlight: false },
      { step: 2, title: '列式计算', content: '-5 - 3 = -8', highlight: true }
    ],
    keyPoints: ['有理数减法', '"小"的含义是减法'],
    commonMistakes: ['-5+3=-2（理解为"大"）', '符号错误'],
    similarQuestions: [
      { id: 'qz1_14', content: '计算：(-8) - (-5) - 3 =（）', difficulty: 'medium' }
    ]
  },
  // 补充题目：有理数的除法 (kp1_9)
  {
    id: 'qz1_16',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_9',
    type: 'single_choice',
    content: '计算：(-24) ÷ 6 =（）',
    options: ['4', '-4', '18', '-18'],
    answer: 'B',
    analysis: '异号相除得负，24÷6=4，所以结果是-4',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '顺义',
    examType: '期中',
    thinking: '有理数除法：先确定符号，异号得负，再计算绝对值相除。',
    steps: [
      { step: 1, title: '确定符号', content: '被除数为负，除数为正，异号相除得负', highlight: true },
      { step: 2, title: '计算绝对值', content: '|-24| ÷ |6| = 24 ÷ 6 = 4', highlight: false },
      { step: 3, title: '得出结果', content: '结果是-4', highlight: true }
    ],
    keyPoints: ['有理数除法法则', '异号得负', '绝对值相除'],
    commonMistakes: ['得4（符号错误）', '得18（把除法当减法）'],
    similarQuestions: [
      { id: 'qz1_17', content: '计算：(-12) ÷ (-3) ÷ (-2) = ____', difficulty: 'medium' }
    ]
  },
  {
    id: 'qz1_17',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_9',
    type: 'fill_blank',
    content: '计算：(-12) ÷ (-3) ÷ (-2) = ____',
    answer: '-2',
    analysis: '(-12)÷(-3)=4，4÷(-2)=-2',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '西城',
    examType: '期末',
    thinking: '从左到右依次计算。先算(-12)÷(-3)，同号得正；再除以(-2)，异号得负。',
    steps: [
      { step: 1, title: '第一步计算', content: '(-12) ÷ (-3) = 4（同号得正）', highlight: true },
      { step: 2, title: '第二步计算', content: '4 ÷ (-2) = -2（异号得负）', highlight: true }
    ],
    keyPoints: ['有理数除法', '多个数相除的符号确定', '从左到右依次计算'],
    commonMistakes: ['符号判断错误', '计算顺序错误'],
    similarQuestions: [
      { id: 'qz1_16', content: '计算：(-24) ÷ 6 =（）', difficulty: 'easy' }
    ]
  },
  {
    id: 'qz1_18',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_9',
    type: 'single_choice',
    content: '一个数的倒数是-2，则这个数是（）',
    options: ['2', '-2', '1/2', '-1/2'],
    answer: 'D',
    analysis: '倒数为-2，则这个数是-1/2',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '昌平',
    examType: '期中',
    thinking: '倒数定义：若a×b=1，则a和b互为倒数。设这个数为x，则x×(-2)=1，解得x=-1/2。',
    steps: [
      { step: 1, title: '设未知数', content: '设这个数为x', highlight: false },
      { step: 2, title: '列方程', content: 'x × (-2) = 1', highlight: false },
      { step: 3, title: '求解', content: 'x = -1/2', highlight: true }
    ],
    keyPoints: ['倒数的定义', '倒数的计算'],
    commonMistakes: ['选B（混淆倒数和相反数）', '选C（符号错误）'],
    similarQuestions: [
      { id: 'qz1_16', content: '计算：(-24) ÷ 6 =（）', difficulty: 'easy' }
    ]
  },
  // 补充题目：有理数的乘方 (kp1_10)
  {
    id: 'qz1_19',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_10',
    type: 'single_choice',
    content: '计算：(-3)² =（）',
    options: ['-9', '9', '-6', '6'],
    answer: 'B',
    analysis: '(-3)² = (-3)×(-3) = 9',
    difficulty: 'easy',
    points: 5,
    year: '2024',
    district: '门头沟',
    examType: '期中',
    thinking: '负数的偶次幂为正数。(-3)²表示2个-3相乘。',
    steps: [
      { step: 1, title: '理解乘方', content: '(-3)² = (-3)×(-3)', highlight: false },
      { step: 2, title: '计算', content: '(-3)×(-3) = 9（负负得正）', highlight: true }
    ],
    keyPoints: ['乘方的定义', '负数的偶次幂为正'],
    commonMistakes: ['选A（符号错误）', '选C（把乘方当乘法）'],
    similarQuestions: [
      { id: 'qz1_4', content: '计算 (-2)³ 的结果是（）', difficulty: 'medium' }
    ]
  },
  {
    id: 'qz1_20',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_10',
    type: 'fill_blank',
    content: '计算：(-1)^2024 = ____。',
    answer: '1',
    analysis: '负数的偶次幂为正，(-1)的偶数次幂等于1',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '海淀',
    examType: '期末',
    thinking: '(-1)的奇数次幂为-1，偶数次幂为1。2024是偶数，所以(-1)^2024=1。',
    steps: [
      { step: 1, title: '判断指数奇偶', content: '2024是偶数', highlight: false },
      { step: 2, title: '应用规律', content: '(-1)的偶数次幂等于1', highlight: true }
    ],
    keyPoints: ['(-1)的幂的规律', '奇偶性判断'],
    commonMistakes: ['填-1（认为指数是奇数）', '计算错误'],
    similarQuestions: [
      { id: 'qz1_19', content: '计算：(-3)² =（）', difficulty: 'easy' }
    ]
  },
  // 补充题目：科学记数法 (kp1_11)
  {
    id: 'qz1_21',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_11',
    type: 'single_choice',
    content: '将0.00005用科学记数法表示为（）',
    options: ['5×10⁻⁵', '5×10⁻⁴', '0.5×10⁻⁴', '50×10⁻⁶'],
    answer: 'A',
    analysis: '0.00005 = 5×10⁻⁵',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '朝阳',
    examType: '期中',
    thinking: '小于1的正数用科学记数法表示时，指数是负数。0.00005=5×0.00001=5×10⁻⁵。',
    steps: [
      { step: 1, title: '确定a', content: '0.00005 = 5 × 0.00001', highlight: false },
      { step: 2, title: '确定指数', content: '0.00001 = 10⁻⁵，小数点向右移动5位', highlight: true },
      { step: 3, title: '写出结果', content: '0.00005 = 5×10⁻⁵', highlight: true }
    ],
    keyPoints: ['科学记数法', '小于1的数的科学记数法', '负指数'],
    commonMistakes: ['指数符号错误', 'a的值不符合范围'],
    similarQuestions: [
      { id: 'qz1_5', content: '数据5600000用科学记数法表示为（）', difficulty: 'medium' }
    ]
  },
  {
    id: 'qz1_22',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_11',
    type: 'fill_blank',
    content: '3.2×10⁵表示的原数是____。',
    answer: '320000',
    analysis: '3.2×10⁵ = 3.2×100000 = 320000',
    difficulty: 'easy',
    points: 5,
    year: '2024',
    district: '大兴',
    examType: '期末',
    thinking: '科学记数法还原：10⁵=100000，3.2×100000=320000，小数点向右移动5位。',
    steps: [
      { step: 1, title: '理解指数', content: '10⁵ = 100000', highlight: false },
      { step: 2, title: '计算', content: '3.2 × 100000 = 320000', highlight: true }
    ],
    keyPoints: ['科学记数法的还原', '指数与小数点移动'],
    commonMistakes: ['32000（移动位数错误）', '计算错误'],
    similarQuestions: [
      { id: 'qz1_21', content: '将0.00005用科学记数法表示为（）', difficulty: 'medium' }
    ]
  },
  {
    id: 'qz1_23',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_11',
    type: 'single_choice',
    content: '用科学记数法表示的数为2.34×10⁴，则原数有（）位整数',
    options: ['3', '4', '5', '6'],
    answer: 'C',
    analysis: '2.34×10⁴ = 23400，有5位整数',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '通州',
    examType: '期中',
    thinking: '2.34×10⁴=23400，数一下整数位数：2、3、4、0、0共5位。或者记住规律：科学记数法中，整数位数=指数+1（当a的整数部分是1位数时）。',
    steps: [
      { step: 1, title: '还原原数', content: '2.34×10⁴ = 23400', highlight: false },
      { step: 2, title: '数整数位数', content: '2、3、4、0、0共5位', highlight: true }
    ],
    keyPoints: ['科学记数法的还原', '整数位数的确定'],
    commonMistakes: ['选B（认为等于指数）', '选A（计算错误）'],
    similarQuestions: [
      { id: 'qz1_22', content: '3.2×10⁵表示的原数是____。', difficulty: 'easy' }
    ]
  }
]
