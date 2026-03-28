import type { QuestionData } from './types'

// 第6章题目数据
export const chapter6Questions: QuestionData[] = [
{
    id: 'q6_1_1',
    chapterId: 'ch6',
    knowledgePointId: 'kp6_1',
    type: 'fill_blank',
    content: '√9 = ____，√0.04 = ____。',
    answer: '3，0.2',
    analysis: '根据算术平方根定义计算。',
    difficulty: 'easy',
    points: 5,
    thinking: '算术平方根是非负数，满足(√a)²=a。9的算术平方根是3（不是±3）；0.04=4/100，算术平方根是2/10=0.2。',
    steps: [
      { step: 1, title: '计算√9', content: '因为3²=9，且算术平方根为非负数，所以√9=3', highlight: true },
      { step: 2, title: '计算√0.04', content: '0.04=4/100，(0.2)²=0.04，所以√0.04=0.2', highlight: true }
    ],
    keyPoints: ['算术平方根的定义', '算术平方根的非负性', '常见数的算术平方根'],
    commonMistakes: ['√9写成±3（混淆算术平方根和平方根）', '计算错误：√0.04=0.02', '负数没有算术平方根'],
    similarQuestions: [
      { id: 'qz6_1', content: '9的算术平方根是（）', difficulty: 'easy' },
      { id: 'qz6_3', content: '³√(-8) + √16 =（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q6_2_1',
    chapterId: 'ch6',
    knowledgePointId: 'kp6_2',
    type: 'single_choice',
    content: '16的平方根是（ ）。',
    options: ['4', '-4', '±4', '256'],
    answer: 'C',
    analysis: '正数有两个平方根，互为相反数。',
    difficulty: 'easy',
    points: 5,
    thinking: '平方根的定义：如果x²=a，则x是a的平方根。正数有两个平方根，互为相反数；0的平方根是0；负数没有实数平方根。16的平方根是±4。',
    steps: [
      { step: 1, title: '理解平方根定义', content: '如果x²=16，则x是16的平方根', highlight: false },
      { step: 2, title: '找出平方根', content: '4²=16，(-4)²=16，所以4和-4都是16的平方根', highlight: true },
      { step: 3, title: '表示平方根', content: '16的平方根记作±√16=±4', highlight: true }
    ],
    keyPoints: ['平方根的定义', '正数有两个平方根互为相反数', '平方根与算术平方根的区别'],
    commonMistakes: ['选A只写正的平方根', '选B只写负的平方根', '混淆平方根和算术平方根'],
    similarQuestions: [
      { id: 'qz6_2', content: '25的平方根是____。', difficulty: 'easy' },
      { id: 'qz6_4', content: '在实数 √4、π、1/3、√8 中，无理数有（）个', difficulty: 'medium' }
    ]
  },
{
    id: 'q6_3_1',
    chapterId: 'ch6',
    knowledgePointId: 'kp6_3',
    type: 'fill_blank',
    content: '³√64 = ____，³√(-27) = ____。',
    answer: '4，-3',
    analysis: '根据立方根定义计算。',
    difficulty: 'easy',
    points: 5,
    thinking: '立方根的定义：如果x³=a，则x是a的立方根。正数的立方根是正数，负数的立方根是负数，0的立方根是0。每个数只有一个立方根。',
    steps: [
      { step: 1, title: '计算³√64', content: '因为4³=4×4×4=64，所以³√64=4', highlight: true },
      { step: 2, title: '计算³√(-27)', content: '因为(-3)³=(-3)×(-3)×(-3)=-27，所以³√(-27)=-3', highlight: true }
    ],
    keyPoints: ['立方根的定义', '正数的立方根为正', '负数的立方根为负', '每个数只有一个立方根'],
    commonMistakes: ['³√(-27)=3（忽略负号）', '混淆立方根和平方根的性质', '计算错误：认为³√64=8'],
    similarQuestions: [
      { id: 'qz6_3', content: '³√(-8) + √16 =（）', difficulty: 'medium' },
      { id: 'qz6_5', content: '估算 √20 的值在整数____和____之间。', difficulty: 'medium' }
    ]
  },
{
    id: 'q6_4_1',
    chapterId: 'ch6',
    knowledgePointId: 'kp6_4',
    type: 'single_choice',
    content: '在实数√5、0、-3.14、22/7、π/2中，无理数有（ ）个。',
    options: ['1', '2', '3', '4'],
    answer: 'B',
    analysis: '√5和π/2是无理数。',
    difficulty: 'medium',
    points: 10,
    thinking: '无理数是无限不循环小数。分析每个数：√5是开方开不尽的数，是无理数；0是整数，是有理数；-3.14是有限小数，是有理数；22/7是分数，是有理数；π是无理数，所以π/2也是无理数。',
    steps: [
      { step: 1, title: '分析√5', content: '5不是完全平方数，√5是开方开不尽的数，是无理数', highlight: true },
      { step: 2, title: '分析0', content: '0是整数，属于有理数', highlight: false },
      { step: 3, title: '分析-3.14', content: '-3.14是有限小数，可以化为分数，是有理数', highlight: false },
      { step: 4, title: '分析22/7', content: '22/7是分数，属于有理数（注意：22/7≠π）', highlight: false },
      { step: 5, title: '分析π/2', content: 'π是无理数，无理数除以非零有理数仍是无理数，所以π/2是无理数', highlight: true }
    ],
    keyPoints: ['无理数的定义', '无理数的常见类型', '有理数的分类', 'π是无理数'],
    commonMistakes: ['认为22/7是无理数（与π混淆）', '漏看√5是无理数', '认为-3.14是无理数'],
    similarQuestions: [
      { id: 'qz6_4', content: '在实数 √4、π、1/3、√8 中，无理数有（）个', difficulty: 'medium' },
      { id: 'qz6_5', content: '估算 √20 的值在整数____和____之间。', difficulty: 'medium' }
    ]
  },
{
    id: 'qz6_1',
    chapterId: 'ch6',
    knowledgePointId: 'kp6_1',
    type: 'single_choice',
    content: '9的算术平方根是（）',
    options: ['±3', '3', '-3', '±9'],
    answer: 'B',
    analysis: '算术平方根为非负数',
    difficulty: 'easy',
    points: 5,
    year: '2022',
    district: '怀柔',
    examType: '期末',
    thinking: '算术平方根是指非负的平方根。9的平方根有±3两个，其中正的平方根3就是算术平方根。',
    steps: [
      { step: 1, title: '理解概念', content: '算术平方根是非负的平方根', highlight: true },
      { step: 2, title: '找出平方根', content: '9的平方根是±3', highlight: false },
      { step: 3, title: '确定算术平方根', content: '非负的平方根是3，所以9的算术平方根是3', highlight: true }
    ],
    keyPoints: ['算术平方根的定义', '算术平方根的非负性'],
    commonMistakes: ['选A混淆平方根和算术平方根', '选C符号错误'],
    similarQuestions: [
      { id: 'q6_1_1', content: '√9 = ____，√0.04 = ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz6_2',
    chapterId: 'ch6',
    knowledgePointId: 'kp6_2',
    type: 'fill_blank',
    content: '25的平方根是____。',
    answer: '±5',
    analysis: '正数有两个平方根',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '门头沟',
    examType: '期末',
    thinking: '平方根的定义：如果x²=a，则x是a的平方根。正数有两个平方根，互为相反数。因为5²=25，(-5)²=25，所以25的平方根是±5。',
    steps: [
      { step: 1, title: '理解平方根定义', content: '如果x²=25，则x是25的平方根', highlight: false },
      { step: 2, title: '找出平方根', content: '5²=25，(-5)²=25，所以5和-5都是25的平方根', highlight: true },
      { step: 3, title: '表示平方根', content: '25的平方根记作±√25=±5', highlight: true }
    ],
    keyPoints: ['平方根的定义', '正数有两个平方根互为相反数', '平方根与算术平方根的区别'],
    commonMistakes: ['只写5（漏掉负的平方根）', '写成√25（这是算术平方根）', '混淆平方根和算术平方根'],
    similarQuestions: [
      { id: 'q6_2_1', content: '16的平方根是（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz6_3',
    chapterId: 'ch6',
    knowledgePointId: 'kp6_3',
    type: 'single_choice',
    content: '³√(-8) + √16 =（）',
    options: ['2', '6', '-2', '4'],
    answer: 'A',
    analysis: '-2 + 4 = 2',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '东城',
    examType: '期中',
    thinking: '分别计算立方根和算术平方根，再相加。³√(-8)=-2（因为(-2)³=-8），√16=4（算术平方根为非负数），所以-2+4=2。',
    steps: [
      { step: 1, title: '计算立方根', content: '³√(-8) = -2（因为(-2)³ = -8）', highlight: true },
      { step: 2, title: '计算算术平方根', content: '√16 = 4（算术平方根为非负数）', highlight: true },
      { step: 3, title: '求和', content: '-2 + 4 = 2，选A', highlight: false }
    ],
    keyPoints: ['立方根的计算', '算术平方根的计算', '负数的立方根为负数'],
    commonMistakes: ['³√(-8)=2（忽略负号）', '√16=±4（混淆平方根和算术平方根）', '计算错误：-2+4=-6'],
    similarQuestions: [
      { id: 'q6_3_1', content: '³√64 = ____，³√(-27) = ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz6_4',
    chapterId: 'ch6',
    knowledgePointId: 'kp6_4',
    type: 'single_choice',
    content: '在实数 √4、π、1/3、√8 中，无理数有（）个',
    options: ['1', '2', '3', '4'],
    answer: 'B',
    analysis: 'π和√8是无理数，√4=2是有理数',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '通州',
    examType: '期末',
    thinking: '无理数是无限不循环小数。分析每个数：√4=2是整数，是有理数；π是无限不循环小数，是无理数；1/3是分数，是有理数；√8=2√2是开方开不尽的数，是无理数。',
    steps: [
      { step: 1, title: '分析√4', content: '√4=2，是整数，属于有理数', highlight: false },
      { step: 2, title: '分析π', content: 'π是无限不循环小数，是无理数', highlight: true },
      { step: 3, title: '分析1/3', content: '1/3是分数，属于有理数', highlight: false },
      { step: 4, title: '分析√8', content: '√8=2√2，是开方开不尽的数，是无理数', highlight: true }
    ],
    keyPoints: ['无理数的定义', '无理数的常见类型', '有理数的分类'],
    commonMistakes: ['认为√4是无理数', '忽略π是无理数', '认为分数是无理数'],
    similarQuestions: [
      { id: 'q6_4_1', content: '在实数√5、0、-3.14、22/7、π/2中，无理数有（ ）个。', difficulty: 'medium' }
    ]
  },
{
    id: 'qz6_5',
    chapterId: 'ch6',
    knowledgePointId: 'kp6_4',
    type: 'fill_blank',
    content: '估算 √20 的值在整数____和____之间。',
    answer: '4，5',
    analysis: '√16 < √20 < √25，所以4 < √20 < 5',
    difficulty: 'medium',
    points: 5,
    year: '2022',
    district: '房山',
    examType: '期中',
    thinking: '估算无理数的大小，可以找它附近的完全平方数。16<20<25，所以√16<√20<√25，即4<√20<5。',
    steps: [
      { step: 1, title: '找附近的完全平方数', content: '16 < 20 < 25', highlight: true },
      { step: 2, title: '开方', content: '√16 < √20 < √25，即4 < √20 < 5', highlight: true }
    ],
    keyPoints: ['无理数的估算', '利用完全平方数估算平方根', '被开方数越大，算术平方根越大'],
    commonMistakes: ['找错完全平方数', '比较时符号方向错误', '填写顺序错误'],
    similarQuestions: [
      { id: 'q6_4_1', content: '在实数√5、0、-3.14、22/7、π/2中，无理数有（ ）个。', difficulty: 'medium' }
    ]
  }
]
