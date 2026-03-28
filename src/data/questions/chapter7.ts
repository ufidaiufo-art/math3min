import type { QuestionData } from './types'

// 第7章题目数据
export const chapter7Questions: QuestionData[] = [
{
    id: 'q7_1_1',
    chapterId: 'ch7',
    knowledgePointId: 'kp7_1',
    type: 'single_choice',
    content: '点P(3,-2)在第（ ）象限。',
    options: ['一', '二', '三', '四'],
    answer: 'D',
    analysis: '横坐标为正，纵坐标为负，在第四象限。',
    difficulty: 'easy',
    points: 5,
    thinking: '平面直角坐标系分为四个象限：第一象限(+,+)、第二象限(-,+)、第三象限(-,-)、第四象限(+,-)。根据点P的坐标(3,-2)，横坐标为正，纵坐标为负，在第四象限。',
    steps: [
      { step: 1, title: '确定横坐标符号', content: '点P的横坐标是3，为正数', highlight: false },
      { step: 2, title: '确定纵坐标符号', content: '点P的纵坐标是-2，为负数', highlight: false },
      { step: 3, title: '判断象限', content: '横坐标为正，纵坐标为负，符合第四象限的特征(+,-)', highlight: true }
    ],
    keyPoints: ['四个象限的坐标特征', '第一象限(+,+)', '第二象限(-,+)', '第三象限(-,-)', '第四象限(+,-)'],
    commonMistakes: ['混淆象限顺序', '符号判断错误', '把第四象限说成第二象限'],
    similarQuestions: [
      { id: 'qz7_1', content: '点P(-2, 3)在（）', difficulty: 'easy' },
      { id: 'qz7_2', content: '点M(-3, 2)到x轴的距离是（）', difficulty: 'easy' },
      { id: 'q7_2_1', content: '若点P(a,b)在第三象限，则（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'q7_2_1',
    chapterId: 'ch7',
    knowledgePointId: 'kp7_2',
    type: 'single_choice',
    content: '若点P(a,b)在第三象限，则（ ）。',
    options: ['a>0,b>0', 'a<0,b<0', 'a>0,b<0', 'a<0,b>0'],
    answer: 'B',
    analysis: '第三象限横纵坐标都为负。',
    difficulty: 'easy',
    points: 5,
    thinking: '第三象限的坐标特征是横坐标为负，纵坐标也为负（-,-）。因此a<0且b<0。',
    steps: [
      { step: 1, title: '回忆第三象限特征', content: '第三象限的点横坐标为负，纵坐标为负', highlight: true },
      { step: 2, title: '分析条件', content: '点P(a,b)在第三象限，所以a<0，b<0', highlight: true },
      { step: 3, title: '选择答案', content: '符合条件的是选项B', highlight: false }
    ],
    keyPoints: ['第三象限坐标特征(-,-)', '横坐标a<0', '纵坐标b<0'],
    commonMistakes: ['混淆第三象限和第二象限', '符号判断错误', '只考虑一个坐标符号'],
    similarQuestions: [
      { id: 'qz7_5', content: '若点A(a-1, 2a+3)在第二象限，则a的取值范围是____。', difficulty: 'hard' },
      { id: 'q7_1_1', content: '点P(3,-2)在第（ ）象限。', difficulty: 'easy' }
    ]
  },
{
    id: 'q7_3_1',
    chapterId: 'ch7',
    knowledgePointId: 'kp7_3',
    type: 'single_choice',
    content: '点P(2,-5)关于x轴对称的点的坐标是（ ）。',
    options: ['(-2,5)', '(2,5)', '(-2,-5)', '(2,-5)'],
    answer: 'B',
    analysis: '关于x轴对称y变号，所以是(2,5)。',
    difficulty: 'easy',
    points: 5,
    thinking: '关于x轴对称的点，横坐标不变，纵坐标变为相反数。点P(2,-5)关于x轴对称后，横坐标仍为2，纵坐标-5的相反数是5，所以对称点是(2,5)。',
    steps: [
      { step: 1, title: '理解对称规律', content: '关于x轴对称：横坐标不变，纵坐标变号', highlight: true },
      { step: 2, title: '确定横坐标', content: '点P横坐标为2，关于x轴对称后横坐标不变，仍为2', highlight: false },
      { step: 3, title: '确定纵坐标', content: '点P纵坐标为-5，关于x轴对称后变为相反数5', highlight: true },
      { step: 4, title: '写出答案', content: '对称点的坐标为(2,5)，选B', highlight: false }
    ],
    keyPoints: ['关于x轴对称的规律', '横坐标不变，纵坐标变号', '关于y轴对称的规律（横坐标变号，纵坐标不变）'],
    commonMistakes: ['关于x轴对称记成横坐标变号', '与关于y轴对称混淆', '与关于原点对称混淆'],
    similarQuestions: [
      { id: 'qz7_3', content: '点P(3, -2)关于原点对称的点的坐标是（）', difficulty: 'medium' },
      { id: 'qz7_4', content: '将点A(2, -3)向右平移3个单位，再向上平移2个单位，得到点B的坐标为（）', difficulty: 'medium' }
    ]
  },
{
    id: 'qz7_1',
    chapterId: 'ch7',
    knowledgePointId: 'kp7_2',
    type: 'single_choice',
    content: '点P(-2, 3)在（）',
    options: ['第一象限', '第二象限', '第三象限', '第四象限'],
    answer: 'B',
    analysis: 'x<0,y>0，在第二象限',
    difficulty: 'easy',
    points: 5,
    year: '2022',
    district: '海淀',
    examType: '期末',
    thinking: '第二象限的坐标特征是横坐标为负，纵坐标为正。点P(-2,3)横坐标-2<0，纵坐标3>0，符合第二象限特征。',
    steps: [
      { step: 1, title: '判断横坐标符号', content: 'x = -2 < 0', highlight: false },
      { step: 2, title: '判断纵坐标符号', content: 'y = 3 > 0', highlight: false },
      { step: 3, title: '确定象限', content: 'x<0,y>0，在第二象限', highlight: true }
    ],
    keyPoints: ['第二象限坐标特征(-,+)', '四个象限的符号规律'],
    commonMistakes: ['符号判断错误', '象限顺序记错'],
    similarQuestions: [
      { id: 'q7_1_1', content: '点P(3,-2)在第（ ）象限。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz7_2',
    chapterId: 'ch7',
    knowledgePointId: 'kp7_1',
    type: 'single_choice',
    content: '点M(-3, 2)到x轴的距离是（）',
    options: ['-3', '2', '3', '√13'],
    answer: 'B',
    analysis: '到x轴距离是纵坐标的绝对值|2|=2',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '昌平',
    examType: '期末',
    thinking: '点到x轴的距离等于该点纵坐标的绝对值。点M(-3,2)的纵坐标是2，所以到x轴的距离是|2|=2。',
    steps: [
      { step: 1, title: '理解距离概念', content: '点到x轴的距离等于纵坐标的绝对值', highlight: true },
      { step: 2, title: '确定纵坐标', content: '点M(-3, 2)的纵坐标是2', highlight: false },
      { step: 3, title: '计算距离', content: '到x轴的距离 = |2| = 2，选B', highlight: true }
    ],
    keyPoints: ['点到x轴的距离等于纵坐标的绝对值', '点到y轴的距离等于横坐标的绝对值'],
    commonMistakes: ['选A（混淆横坐标和距离）', '选C（取横坐标的绝对值）', '选D（误用两点间距离公式）'],
    similarQuestions: [
      { id: 'q7_1_1', content: '点P(3,-2)在第（ ）象限。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz7_3',
    chapterId: 'ch7',
    knowledgePointId: 'kp7_3',
    type: 'single_choice',
    content: '点P(3, -2)关于原点对称的点的坐标是（）',
    options: ['(-3, 2)', '(3, 2)', '(-3, -2)', '(3, -2)'],
    answer: 'A',
    analysis: '关于原点对称，横纵坐标都变号',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '海淀',
    examType: '期中',
    thinking: '关于原点对称的点，横坐标和纵坐标都变为相反数。点P(3,-2)关于原点对称后，横坐标3变为-3，纵坐标-2变为2，所以对称点是(-3,2)。',
    steps: [
      { step: 1, title: '理解对称规律', content: '关于原点对称：横纵坐标都变号', highlight: true },
      { step: 2, title: '确定横坐标', content: '点P横坐标为3，关于原点对称后变为-3', highlight: false },
      { step: 3, title: '确定纵坐标', content: '点P纵坐标为-2，关于原点对称后变为2', highlight: false },
      { step: 4, title: '写出答案', content: '对称点的坐标为(-3, 2)，选A', highlight: true }
    ],
    keyPoints: ['关于原点对称的规律', '横纵坐标都变号', '与关于x轴、y轴对称的区别'],
    commonMistakes: ['与关于x轴对称混淆', '与关于y轴对称混淆', '只变一个坐标'],
    similarQuestions: [
      { id: 'q7_3_1', content: '点P(2,-5)关于x轴对称的点的坐标是（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz7_4',
    chapterId: 'ch7',
    knowledgePointId: 'kp7_4',
    type: 'single_choice',
    content: '将点A(2, -3)向右平移3个单位，再向上平移2个单位，得到点B的坐标为（）',
    options: ['(5, -1)', '(-1, -5)', '(5, -5)', '(-1, -1)'],
    answer: 'A',
    analysis: '右移：2+3=5，上移：-3+2=-1，B(5, -1)',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '西城',
    examType: '期末',
    thinking: '点的平移规律：向右平移，横坐标增加；向左平移，横坐标减小；向上平移，纵坐标增加；向下平移，纵坐标减小。',
    steps: [
      { step: 1, title: '向右平移3个单位', content: '横坐标增加3：2 + 3 = 5', highlight: true },
      { step: 2, title: '向上平移2个单位', content: '纵坐标增加2：-3 + 2 = -1', highlight: true },
      { step: 3, title: '确定B点坐标', content: 'B(5, -1)，选A', highlight: false }
    ],
    keyPoints: ['点的平移规律', '右加左减（横坐标）', '上加下减（纵坐标）'],
    commonMistakes: ['向右平移横坐标减小', '向上平移纵坐标减小', '平移方向与坐标变化混淆'],
    similarQuestions: [
      { id: 'q7_3_1', content: '点P(2,-5)关于x轴对称的点的坐标是（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz7_5',
    chapterId: 'ch7',
    knowledgePointId: 'kp7_2',
    type: 'fill_blank',
    content: '若点A(a-1, 2a+3)在第二象限，则a的取值范围是____。',
    answer: '-3/2 < a < 1',
    analysis: '第二象限：x<0,y>0，即a-1<0且2a+3>0',
    difficulty: 'hard',
    points: 10,
    year: '2024',
    district: '朝阳',
    examType: '期末',
    thinking: '第二象限点的特征是横坐标小于0，纵坐标大于0。根据A(a-1, 2a+3)在第二象限，列不等式组：a-1<0且2a+3>0，解不等式组即可。',
    steps: [
      { step: 1, title: '列不等式组', content: '第二象限：x<0,y>0，所以a-1<0且2a+3>0', highlight: true },
      { step: 2, title: '解第一个不等式', content: 'a-1<0，得a<1', highlight: false },
      { step: 3, title: '解第二个不等式', content: '2a+3>0，2a>-3，得a>-3/2', highlight: false },
      { step: 4, title: '确定解集', content: 'a>-3/2且a<1，即-3/2 < a < 1', highlight: true }
    ],
    keyPoints: ['第二象限坐标特征', '解一元一次不等式组', '不等式组的解集'],
    commonMistakes: ['象限特征记错', '解不等式时符号错误', '不等式组解集确定错误'],
    similarQuestions: [
      { id: 'q7_2_1', content: '若点P(a,b)在第三象限，则（ ）。', difficulty: 'easy' }
    ]
  },
  // 补充题目：对称点的坐标 (kp7_5)
  {
    id: 'qz7_6',
    chapterId: 'ch7',
    knowledgePointId: 'kp7_5',
    type: 'single_choice',
    content: '点P(4,-3)关于y轴对称的点的坐标是（）',
    options: ['(-4,-3)', '(4,3)', '(-4,3)', '(4,-3)'],
    answer: 'A',
    analysis: '关于y轴对称：横坐标变号，纵坐标不变，(-4,-3)',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '海淀',
    examType: '期中',
    thinking: '关于y轴对称的规律：横坐标变为相反数，纵坐标不变。',
    steps: [
      { step: 1, title: '理解对称规律', content: '关于y轴对称：横坐标变号，纵坐标不变', highlight: true },
      { step: 2, title: '确定坐标', content: 'P(4,-3)关于y轴对称：(-4,-3)', highlight: true }
    ],
    keyPoints: ['关于y轴对称的规律', '横坐标变号，纵坐标不变'],
    commonMistakes: ['选B（与关于x轴对称混淆）', '选C（与关于原点对称混淆）'],
    similarQuestions: [
      { id: 'qz7_7', content: '点A(2,5)关于原点对称的点的坐标为____', difficulty: 'easy' }
    ]
  },
  {
    id: 'qz7_7',
    chapterId: 'ch7',
    knowledgePointId: 'kp7_5',
    type: 'fill_blank',
    content: '点A(2,5)关于原点对称的点的坐标为____。',
    answer: '(-2,-5)',
    analysis: '关于原点对称：横纵坐标都变号，(2,5)→(-2,-5)',
    difficulty: 'easy',
    points: 5,
    year: '2024',
    district: '东城',
    examType: '期末',
    thinking: '关于原点对称的规律：横坐标和纵坐标都变为相反数。',
    steps: [
      { step: 1, title: '理解对称规律', content: '关于原点对称：横纵坐标都变号', highlight: true },
      { step: 2, title: '确定坐标', content: 'A(2,5)关于原点对称：(-2,-5)', highlight: true }
    ],
    keyPoints: ['关于原点对称的规律', '横纵坐标都变号'],
    commonMistakes: ['(2,-5)（只变一个坐标）', '(-2,5)（只变横坐标）'],
    similarQuestions: [
      { id: 'qz7_6', content: '点P(4,-3)关于y轴对称的点的坐标是（）', difficulty: 'easy' }
    ]
  },
  {
    id: 'qz7_8',
    chapterId: 'ch7',
    knowledgePointId: 'kp7_5',
    type: 'single_choice',
    content: '已知点M(a,3)与点N(2,b)关于x轴对称，则a+b=（）',
    options: ['-1', '1', '5', '-5'],
    answer: 'A',
    analysis: '关于x轴对称：a=2，b=-3，a+b=2+(-3)=-1',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '西城',
    examType: '期末',
    thinking: '关于x轴对称的规律：横坐标相同，纵坐标互为相反数。所以a=2，b=-3。',
    steps: [
      { step: 1, title: '利用对称规律', content: '关于x轴对称：横坐标相同，纵坐标互为相反数', highlight: true },
      { step: 2, title: '求a、b', content: 'a=2，b=-3', highlight: true },
      { step: 3, title: '计算', content: 'a+b=2+(-3)=-1', highlight: false }
    ],
    keyPoints: ['关于x轴对称的规律', '横坐标相同，纵坐标互为相反数'],
    commonMistakes: ['b=3（忘记变号）', '计算错误'],
    similarQuestions: [
      { id: 'qz7_6', content: '点P(4,-3)关于y轴对称的点的坐标是（）', difficulty: 'easy' }
    ]
  }
]
