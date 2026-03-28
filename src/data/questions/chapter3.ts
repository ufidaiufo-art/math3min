import type { QuestionData } from './types'

// 第3章题目数据
export const chapter3Questions: QuestionData[] = [
{
    id: 'q3_1_1',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_1',
    type: 'single_choice',
    content: '下列是一元一次方程的是（ ）。',
    options: ['x + y = 5', 'x² = 4', '2x - 3 = 7', '1/x = 2'],
    answer: 'C',
    analysis: 'A有两个未知数，B未知数次数为2，D不是整式方程。',
    difficulty: 'easy',
    points: 5,
    thinking: '一元一次方程的三个要素：①整式方程 ②只含一个未知数 ③未知数次数为1。三者缺一不可。',
    steps: [
      { step: 1, title: '理解定义', content: '一元一次方程必须满足：只含一个未知数，未知数次数为1，是整式方程', highlight: true },
      { step: 2, title: '分析选项A', content: 'x + y = 5 含有两个未知数x和y，是二元方程，不是一元', highlight: false },
      { step: 3, title: '分析选项B', content: 'x² = 4 中未知数x的次数是2，是一元二次方程', highlight: false },
      { step: 4, title: '分析选项C', content: '2x - 3 = 7 只含一个未知数x，次数为1，是整式方程，是一元一次方程', highlight: true },
      { step: 5, title: '分析选项D', content: '1/x = 2 不是整式方程（分母含未知数），是分式方程', highlight: false }
    ],
    keyPoints: ['一元一次方程三要素', '只含一个未知数', '未知数次数为1', '整式方程'],
    commonMistakes: ['只看是否含一个字母', '忽略整式方程的要求', '混淆次数和系数'],
    similarQuestions: [
      { id: 'qz3_1', content: '下列方程中，解为x=2的是（）', difficulty: 'easy' },
      { id: 'qz8_1', content: '下列方程组中，是二元一次方程组的是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q3_2_1',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_2',
    type: 'single_choice',
    content: '若 a = b，则下列变形正确的是（ ）。',
    options: ['a + 2 = b - 2', '2a = 3b', 'a/3 = b/3', 'a - c = b + c'],
    answer: 'C',
    analysis: 'C符合等式性质2，两边都除以3。',
    difficulty: 'easy',
    points: 5,
    thinking: '等式的性质：等式两边同时加减同一个数或式子，结果仍相等；等式两边同时乘除同一个不为0的数，结果仍相等。',
    steps: [
      { step: 1, title: '回忆等式性质', content: '等式性质1：两边同时加减同一个数，等式仍成立；等式性质2：两边同时乘除同一个不为0的数，等式仍成立', highlight: true },
      { step: 2, title: '分析选项A', content: 'a+2 = b-2，左边加2，右边减2，运算不同，错误', highlight: false },
      { step: 3, title: '分析选项B', content: '2a = 3b，左边乘2，右边乘3，乘的数不同，错误', highlight: false },
      { step: 4, title: '分析选项C', content: 'a/3 = b/3，两边同时除以3，符合等式性质2，正确', highlight: true },
      { step: 5, title: '分析选项D', content: 'a-c = b+c，左边减c，右边加c，运算不同，错误', highlight: false }
    ],
    keyPoints: ['等式性质1：同加减', '等式性质2：同乘除（不为0）', '两边必须同时进行相同运算'],
    commonMistakes: ['一边加一边减', '乘除的数不同', '除以0'],
    similarQuestions: [
      { id: 'q3_3_1', content: '解方程：3x - 7 = 2x + 5，x = ____。', difficulty: 'easy' },
      { id: 'qz3_2', content: '解方程：2(x-3)-3(2x-1)=7，x=（）', difficulty: 'hard' }
    ]
  },
{
    id: 'q3_3_1',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_3',
    type: 'fill_blank',
    content: '解方程：3x - 7 = 2x + 5，x = ____。',
    answer: '12',
    analysis: '3x - 2x = 5 + 7，x = 12。',
    difficulty: 'easy',
    points: 5,
    thinking: '解一元一次方程的基本步骤：移项（把含未知数的项移到一边，常数项移到另一边），合并同类项，系数化为1。',
    steps: [
      { step: 1, title: '移项', content: '把2x移到左边（变号为-2x），把-7移到右边（变号为+7）：3x - 2x = 5 + 7', highlight: true },
      { step: 2, title: '合并同类项', content: '左边：3x - 2x = x，右边：5 + 7 = 12', highlight: false },
      { step: 3, title: '得出结果', content: 'x = 12', highlight: true },
      { step: 4, title: '检验', content: '左边：3×12-7=29，右边：2×12+5=29，左边=右边，正确', highlight: false }
    ],
    keyPoints: ['移项要变号', '合并同类项', '系数化为1'],
    commonMistakes: ['移项不变号', '移项时符号错误', '计算错误'],
    similarQuestions: [
      { id: 'qz3_4', content: '方程 2x + 5 = 3(x - 1) 的解是 x = ____。', difficulty: 'medium' },
      { id: 'qz3_2', content: '解方程：2(x-3)-3(2x-1)=7，x=（）', difficulty: 'hard' }
    ]
  },
{
    id: 'q3_4_1',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_4',
    type: 'single_choice',
    content: '一个数的3倍与这个数的2倍的和是30，这个数是（ ）。',
    options: ['5', '6', '10', '15'],
    answer: 'B',
    analysis: '设这个数为x，3x+2x=30，5x=30，x=6。',
    difficulty: 'medium',
    points: 10,
    thinking: '用方程解决实际问题的关键是设未知数，根据题意找等量关系，列出方程求解。',
    steps: [
      { step: 1, title: '设未知数', content: '设这个数为x', highlight: false },
      { step: 2, title: '列方程', content: '这个数的3倍是3x，这个数的2倍是2x，它们的和是30，所以3x + 2x = 30', highlight: true },
      { step: 3, title: '解方程', content: '3x + 2x = 30，5x = 30，x = 6', highlight: true },
      { step: 4, title: '检验', content: '3×6 + 2×6 = 18 + 12 = 30，符合题意，答案是B', highlight: false }
    ],
    keyPoints: ['设未知数', '找等量关系', '列方程', '解方程', '检验'],
    commonMistakes: ['设错未知数', '列方程时运算错误', '解方程错误', '忘记检验'],
    similarQuestions: [
      { id: 'qz3_3', content: '一个数的3倍与7的差等于11，设这个数为x，可列方程为（）', difficulty: 'easy' },
      { id: 'qz3_5', content: '一项工程，甲单独做需要10天完成，乙单独做需要15天完成。两人合作需要（）天完成', difficulty: 'hard' }
    ]
  },
{
    id: 'qz3_1',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_3',
    type: 'single_choice',
    content: '下列方程中，解为x=2的是（）',
    options: ['2x+1=3', '3x-2=4', 'x-1=1', '2x=6'],
    answer: 'B',
    analysis: '将x=2代入选项B：3×2-2=4，成立',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '房山',
    examType: '期中',
    thinking: '验证一个数是否为方程的解，只需将该数代入方程左右两边，看是否相等。',
    steps: [
      { step: 1, title: '验证选项A', content: 'x=2代入：左边=2×2+1=5，右边=3，5≠3，不是解', highlight: false },
      { step: 2, title: '验证选项B', content: 'x=2代入：左边=3×2-2=4，右边=4，4=4，是解', highlight: true },
      { step: 3, title: '验证选项C', content: 'x=2代入：左边=2-1=1，右边=1，虽然成立，但答案是B', highlight: false },
      { step: 4, title: '验证选项D', content: 'x=2代入：左边=2×2=4，右边=6，4≠6，不是解', highlight: false }
    ],
    keyPoints: ['方程的解的定义', '验证解的方法'],
    commonMistakes: ['解方程而不是代入验证', '计算错误'],
    similarQuestions: [
      { id: 'q3_3_1', content: '解方程：3x - 7 = 2x + 5，x = ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz3_2',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_3',
    type: 'single_choice',
    content: '解方程：2(x-3)-3(2x-1)=7，x=（）',
    options: ['-2', '-2.5', '-3', '-4'],
    answer: 'B',
    analysis: '2x-6-6x+3=7，-4x=10，x=-2.5',
    difficulty: 'hard',
    points: 10,
    year: '2022',
    district: '门头沟',
    examType: '期末',
    thinking: '先去括号（注意分配律和符号），再移项、合并同类项、系数化为1。',
    steps: [
      { step: 1, title: '去括号', content: '2(x-3) = 2x-6；-3(2x-1) = -6x+3', highlight: true },
      { step: 2, title: '合并', content: '2x-6-6x+3 = 7，即-4x-3=7', highlight: false },
      { step: 3, title: '移项', content: '-4x = 7+3 = 10', highlight: false },
      { step: 4, title: '求解', content: 'x = -2.5', highlight: true }
    ],
    keyPoints: ['去括号法则', '移项变号', '解一元一次方程步骤'],
    commonMistakes: ['去括号时符号错误', '-3(2x-1)展开错误'],
    similarQuestions: [
      { id: 'q3_3_1', content: '解方程：3x - 7 = 2x + 5，x = ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz3_3',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_4',
    type: 'single_choice',
    content: '一个数的3倍与7的差等于11，设这个数为x，可列方程为（）',
    options: ['3x + 7 = 11', '3x - 7 = 11', '3(x - 7) = 11', '3(x + 7) = 11'],
    answer: 'B',
    analysis: '3倍即3x，与7的差即-7',
    difficulty: 'easy',
    points: 5,
    year: '2024',
    district: '东城',
    examType: '期中',
    thinking: '一个数的3倍是3x，与7的差是3x-7，等于11，所以方程为3x-7=11。',
    steps: [
      { step: 1, title: '理解题意', content: '一个数的3倍：3x', highlight: false },
      { step: 2, title: '列方程', content: '与7的差：3x-7=11', highlight: true }
    ],
    keyPoints: ['列方程解应用题', '关键词理解'],
    commonMistakes: ['"差"理解为加法', '列错方程'],
    similarQuestions: [
      { id: 'q3_4_1', content: '一个数的3倍与这个数的2倍的和是30，这个数是（ ）。', difficulty: 'medium' }
    ]
  },
{
    id: 'qz3_4',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_3',
    type: 'fill_blank',
    content: '方程 2x + 5 = 3(x - 1) 的解是 x = ____。',
    answer: '8',
    analysis: '2x+5=3x-3，5+3=3x-2x，x=8',
    difficulty: 'medium',
    points: 5,
    year: '2022',
    district: '房山',
    examType: '期末',
    thinking: '先去括号，再移项、合并同类项、系数化为1。',
    steps: [
      { step: 1, title: '去括号', content: '3(x-1) = 3x-3', highlight: false },
      { step: 2, title: '移项', content: '2x+5=3x-3，5+3=3x-2x', highlight: true },
      { step: 3, title: '求解', content: '8=x，即x=8', highlight: true }
    ],
    keyPoints: ['去括号', '移项变号', '解方程步骤'],
    commonMistakes: ['去括号错误', '移项不变号'],
    similarQuestions: [
      { id: 'qz3_2', content: '解方程：2(x-3)-3(2x-1)=7，x=（）', difficulty: 'hard' }
    ]
  },
{
    id: 'qz3_5',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_6',
    type: 'single_choice',
    content: '一项工程，甲单独做需要10天完成，乙单独做需要15天完成。两人合作需要（）天完成',
    options: ['5', '6', '8', '25'],
    answer: 'B',
    analysis: '甲效率1/10，乙效率1/15，合作效率1/10+1/15=1/6，需要6天',
    difficulty: 'hard',
    points: 10,
    year: '2023',
    district: '海淀',
    examType: '期末',
    thinking: '工程问题中，工作总量通常设为1。工作效率=工作总量÷工作时间。两人合作时，效率相加。',
    steps: [
      { step: 1, title: '设工作总量', content: '设工作总量为1', highlight: false },
      { step: 2, title: '求甲的效率', content: '甲单独10天完成，甲的效率为1/10（每天完成1/10）', highlight: false },
      { step: 3, title: '求乙的效率', content: '乙单独15天完成，乙的效率为1/15', highlight: false },
      { step: 4, title: '求合作效率', content: '合作效率 = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6', highlight: true },
      { step: 5, title: '求合作时间', content: '合作时间 = 1 ÷ (1/6) = 6天', highlight: true }
    ],
    keyPoints: ['工程问题的基本关系', '工作效率=工作总量÷工作时间', '合作效率=各效率之和'],
    commonMistakes: ['效率计算错误', '时间直接相加', '混淆效率和时间的运算'],
    similarQuestions: [
      { id: 'q3_4_1', content: '一个数的3倍与这个数的2倍的和是30，这个数是（ ）。', difficulty: 'medium' }
    ]
  },
{
    id: 'qz3_6',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_4',
    type: 'single_choice',
    content: '某商品打8折后售价为240元，则原价为（）元',
    options: ['192', '300', '280', '320'],
    answer: 'B',
    analysis: '设原价x元，0.8x=240，x=300',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '朝阳',
    examType: '期中',
    thinking: '打8折表示按原价的80%出售。设原价为x元，则0.8x=240，解出x即可。',
    steps: [
      { step: 1, title: '设未知数', content: '设原价为x元', highlight: false },
      { step: 2, title: '列方程', content: '打8折后售价：0.8x = 240', highlight: true },
      { step: 3, title: '求解', content: 'x = 240 ÷ 0.8 = 300', highlight: true }
    ],
    keyPoints: ['折扣的含义', '列方程解应用题'],
    commonMistakes: ['240×0.8（方向错误）', '计算错误'],
    similarQuestions: [
      { id: 'qz9_5', content: '某商店商品进价100元，标价150元，若要保证利润率不低于20%，则最多可打（）折', difficulty: 'hard' }
    ]
  },
  // 补充题目：等式的性质 (kp3_2)
  {
    id: 'qz3_7',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_2',
    type: 'single_choice',
    content: '若3x = 6，则下列变形正确的是（）',
    options: ['3x+1=5', '3x-2=4', '6x=6', 'x=18'],
    answer: 'B',
    analysis: '等式两边同时减2：3x-2=6-2=4',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '朝阳',
    examType: '期中',
    thinking: '根据等式性质1，等式两边同时加减同一个数，等式仍成立。',
    steps: [
      { step: 1, title: '分析原式', content: '3x = 6', highlight: false },
      { step: 2, title: '验证选项B', content: '两边同时减2：3x-2=6-2=4，正确', highlight: true }
    ],
    keyPoints: ['等式性质1', '等式两边同时加减'],
    commonMistakes: ['选A（加1得7≠5）', '选C（乘2得12x=12）'],
    similarQuestions: [
      { id: 'qz3_8', content: '若2x-3=5，则4x-6=____', difficulty: 'medium' }
    ]
  },
  {
    id: 'qz3_8',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_2',
    type: 'fill_blank',
    content: '若2x-3=5，则4x-6=____',
    answer: '10',
    analysis: '4x-6=2(2x-3)=2×5=10，或解得x=4，代入得10',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '海淀',
    examType: '期末',
    thinking: '观察发现4x-6=2(2x-3)，整体代入得2×5=10。或者先解方程得x=4，再代入计算。',
    steps: [
      { step: 1, title: '方法一：整体代入', content: '4x-6 = 2(2x-3) = 2×5 = 10', highlight: true },
      { step: 2, title: '方法二：先解后代', content: '2x=8，x=4，4×4-6=10', highlight: false }
    ],
    keyPoints: ['等式性质2', '整体思想', '整体代入'],
    commonMistakes: ['直接填5', '解方程错误'],
    similarQuestions: [
      { id: 'qz3_7', content: '若3x = 6，则下列变形正确的是（）', difficulty: 'easy' }
    ]
  },
  // 补充题目：一元一次方程的应用（行程问题） (kp3_5)
  {
    id: 'qz3_9',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_5',
    type: 'single_choice',
    content: '甲、乙两地相距300千米，A车从甲地出发，速度为60千米/时；B车从乙地出发，速度为40千米/时。两车相向而行，几小时后相遇？',
    options: ['2小时', '3小时', '4小时', '5小时'],
    answer: 'B',
    analysis: '设x小时相遇，60x+40x=300，100x=300，x=3',
    difficulty: 'medium',
    points: 10,
    year: '2023',
    district: '西城',
    examType: '期中',
    thinking: '相遇问题：两车行驶路程之和等于总路程。设相遇时间为x小时，列方程求解。',
    steps: [
      { step: 1, title: '设未知数', content: '设x小时后相遇', highlight: false },
      { step: 2, title: '列方程', content: 'A车行驶60x千米，B车行驶40x千米，60x+40x=300', highlight: true },
      { step: 3, title: '解方程', content: '100x=300，x=3', highlight: true }
    ],
    keyPoints: ['相遇问题', '路程=速度×时间', '路程之和=总路程'],
    commonMistakes: ['列方程错误', '计算错误', '单位错误'],
    similarQuestions: [
      { id: 'qz3_10', content: '小明和小红同时从同一地点出发，小明速度为5千米/时，小红速度为3千米/时，同向而行，几小时后小明比小红多走6千米？', difficulty: 'medium' }
    ]
  },
  {
    id: 'qz3_10',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_5',
    type: 'fill_blank',
    content: '小明和小红同时从同一地点出发，小明速度为5千米/时，小红速度为3千米/时，同向而行，____小时后小明比小红多走6千米。',
    answer: '3',
    analysis: '设x小时后，5x-3x=6，2x=6，x=3',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '丰台',
    examType: '期末',
    thinking: '追及问题：同向而行时，快者比慢者多走的路程等于两者的路程差。设时间为x，列方程5x-3x=6。',
    steps: [
      { step: 1, title: '设未知数', content: '设x小时后小明比小红多走6千米', highlight: false },
      { step: 2, title: '列方程', content: '小明走5x千米，小红走3x千米，5x-3x=6', highlight: true },
      { step: 3, title: '解方程', content: '2x=6，x=3', highlight: true }
    ],
    keyPoints: ['追及问题', '路程差=速度差×时间'],
    commonMistakes: ['列方程错误', '5x+3x=6（错误）', '计算错误'],
    similarQuestions: [
      { id: 'qz3_9', content: '甲、乙两地相距300千米，A车速度60千米/时，B车速度40千米/时，相向而行，几小时后相遇？', difficulty: 'medium' }
    ]
  },
  {
    id: 'qz3_11',
    chapterId: 'ch3',
    knowledgePointId: 'kp3_5',
    type: 'single_choice',
    content: '一艘船在静水中的速度为20千米/时，水流速度为4千米/时。从甲码头到乙码头顺水航行需要3小时，则两码头之间的距离是（）千米',
    options: ['48', '60', '72', '80'],
    answer: 'C',
    analysis: '顺水速度=20+4=24千米/时，距离=24×3=72千米',
    difficulty: 'hard',
    points: 10,
    year: '2023',
    district: '海淀',
    examType: '期末',
    thinking: '顺逆水问题：顺水速度=静水速度+水流速度，逆水速度=静水速度-水流速度。距离=速度×时间。',
    steps: [
      { step: 1, title: '求顺水速度', content: '顺水速度 = 静水速度 + 水流速度 = 20 + 4 = 24千米/时', highlight: true },
      { step: 2, title: '求距离', content: '距离 = 顺水速度 × 时间 = 24 × 3 = 72千米', highlight: true }
    ],
    keyPoints: ['顺逆水问题', '顺水速度=静水速度+水流速度', '逆水速度=静水速度-水流速度'],
    commonMistakes: ['直接用静水速度计算', '逆水速度公式记错'],
    similarQuestions: [
      { id: 'qz3_9', content: '甲、乙两地相距300千米，两车相向而行，几小时后相遇？', difficulty: 'medium' }
    ]
  }
]
