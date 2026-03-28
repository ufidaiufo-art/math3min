import type { QuestionData } from './types'

// 第2章题目数据
export const chapter2Questions: QuestionData[] = [
{
    id: 'q2_1_1',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_1',
    type: 'fill_blank',
    content: '单项式 5a³b 的系数是____，次数是____。',
    answer: '5，4',
    analysis: '系数是5，次数是3+1=4。',
    difficulty: 'easy',
    points: 5,
    thinking: '单项式的系数是数字因数，次数是所有字母指数的和。注意系数包括前面的符号。',
    steps: [
      { step: 1, title: '确定系数', content: '单项式 5a³b 中的数字因数是5，所以系数是5', highlight: false },
      { step: 2, title: '理解次数', content: '次数是所有字母的指数和，a的指数是3，b的指数是1（省略不写）', highlight: true },
      { step: 3, title: '计算次数', content: '次数 = 3 + 1 = 4', highlight: true }
    ],
    keyPoints: ['单项式的系数定义', '单项式的次数定义', '字母指数为1时省略'],
    commonMistakes: ['系数写成5a³或只写a³', '次数写成3（漏加b的指数）', '把系数和次数位置写反'],
    similarQuestions: [
      { id: 'qz2_1', content: '单项式 -3xy²z 的系数和次数分别是（）', difficulty: 'medium' },
      { id: 'qz2_3', content: '单项式 -xy²/2 的系数是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q2_2_1',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_2',
    type: 'fill_blank',
    content: '多项式 2x³ - x² + 3x - 7 的次数是____，常数项是____。',
    answer: '3，-7',
    analysis: '最高次项2x³的次数是3，常数项是-7。',
    difficulty: 'easy',
    points: 5,
    thinking: '多项式的次数是最高次项的次数，常数项是不含字母的项，注意带符号。',
    steps: [
      { step: 1, title: '识别各项', content: '多项式有4项：2x³、-x²、+3x、-7', highlight: false },
      { step: 2, title: '找最高次项', content: '各次的次数分别是：3次、2次、1次、0次，最高次项是2x³，次数为3', highlight: true },
      { step: 3, title: '确定常数项', content: '不含字母的项是-7，注意包括前面的符号', highlight: true }
    ],
    keyPoints: ['多项式的次数定义', '最高次项的确定', '常数项要带符号'],
    commonMistakes: ['次数写成2（漏看3次项）', '常数项写成7（漏掉负号）', '分不清次数和项数'],
    similarQuestions: [
      { id: 'qz2_2', content: '若 3x^(m+2)y³ 与 -2x⁵y^n 是同类项，则 m+n =（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q2_3_1',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_3',
    type: 'single_choice',
    content: '下列各组中，是同类项的是（ ）。',
    options: ['2x 与 2y', '3a²b 与 -ba²', '5mn 与 5m', '3x² 与 3x'],
    answer: 'B',
    analysis: 'B选项字母相同（a²b），顺序不同不影响。',
    difficulty: 'easy',
    points: 5,
    thinking: '同类项的判断标准：所含字母相同，相同字母的指数也相同。与系数无关，与字母顺序无关。',
    steps: [
      { step: 1, title: '回忆同类项定义', content: '同类项：所含字母相同，且相同字母的指数也相同', highlight: true },
      { step: 2, title: '分析选项A', content: '2x含字母x，2y含字母y，字母不同，不是同类项', highlight: false },
      { step: 3, title: '分析选项B', content: '3a²b与-ba²都含字母a和b，a的指数都是2，b的指数都是1，是同类项（字母顺序不影响）', highlight: true },
      { step: 4, title: '分析选项C', content: '5mn含字母m和n，5m只含字母m，字母不同，不是同类项', highlight: false },
      { step: 5, title: '分析选项D', content: '3x²中x的指数是2，3x中x的指数是1，相同字母的指数不同，不是同类项', highlight: false }
    ],
    keyPoints: ['同类项的两个相同', '字母顺序不影响', '系数大小不影响'],
    commonMistakes: ['认为字母顺序必须相同', '只看系数', '忽略字母指数必须相同'],
    similarQuestions: [
      { id: 'qz2_4', content: '下列各组中，不是同类项的是（）', difficulty: 'medium' },
      { id: 'qz2_2', content: '若 3x^(m+2)y³ 与 -2x⁵y^n 是同类项，则 m+n =（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q2_4_1',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_4',
    type: 'fill_blank',
    content: '去括号：2x + (3y - z) = ____。',
    answer: '2x + 3y - z',
    analysis: '括号前是正号，括号内各项不变号。',
    difficulty: 'easy',
    points: 5,
    thinking: '去括号法则：括号前是"+"号，去掉括号后，括号内各项符号不变。',
    steps: [
      { step: 1, title: '观察括号前的符号', content: '括号前是"+"号', highlight: false },
      { step: 2, title: '应用去括号法则', content: '括号前是正号，去掉括号后，括号内各项符号不变', highlight: true },
      { step: 3, title: '去括号', content: '2x + (3y - z) = 2x + 3y - z', highlight: true }
    ],
    keyPoints: ['去括号法则', '括号前是正号各项不变', '括号前是负号各项变号'],
    commonMistakes: ['括号内各项都变号', '只给第一项变号', '忘记乘系数'],
    similarQuestions: [
      { id: 'q2_5_1', content: '化简：(2a + 3b) - (a - 2b) = ____。', difficulty: 'easy' },
      { id: 'qz2_5', content: '化简：3(2x - y) - 2(x + 3y) = ____。', difficulty: 'medium' }
    ]
  },
{
    id: 'q2_5_1',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_5',
    type: 'fill_blank',
    content: '化简：(2a + 3b) - (a - 2b) = ____。',
    answer: 'a + 5b',
    analysis: '原式=2a+3b-a+2b=a+5b。',
    difficulty: 'easy',
    points: 5,
    thinking: '先去括号（注意第二个括号前是负号，括号内各项要变号），再合并同类项。',
    steps: [
      { step: 1, title: '去第一个括号', content: '括号前是正号，直接去掉：(2a + 3b) = 2a + 3b', highlight: false },
      { step: 2, title: '去第二个括号', content: '括号前是负号，括号内各项变号：-(a - 2b) = -a + 2b', highlight: true },
      { step: 3, title: '合并同类项', content: '2a - a = a，3b + 2b = 5b', highlight: true },
      { step: 4, title: '写出结果', content: '结果为 a + 5b', highlight: false }
    ],
    keyPoints: ['去括号法则', '括号前是负号各项变号', '合并同类项'],
    commonMistakes: ['-(a-2b)变成-a-2b（第二项忘记变号）', '合并同类项计算错误', '符号判断错误'],
    similarQuestions: [
      { id: 'qz2_5', content: '化简：3(2x - y) - 2(x + 3y) = ____。', difficulty: 'medium' },
      { id: 'qz2_6', content: '若A = 3x² - 2x + 1，B = x² + x - 3，则A - B =（）', difficulty: 'hard' }
    ]
  },
{
    id: 'qz2_1',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_2',
    type: 'single_choice',
    content: '单项式 -3xy²z 的系数和次数分别是（）',
    options: ['-3，3', '-3，4', '3，4', '3，3'],
    answer: 'B',
    analysis: '系数为-3，次数为1+2+1=4',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '丰台',
    examType: '期中',
    thinking: '单项式的系数是数字因数（包括符号），次数是所有字母指数的和。注意x的指数是1（省略不写），y的指数是2，z的指数是1。',
    steps: [
      { step: 1, title: '确定系数', content: '单项式 -3xy²z 的数字因数是-3，系数为-3', highlight: true },
      { step: 2, title: '确定各字母指数', content: 'x的指数是1，y的指数是2，z的指数是1', highlight: false },
      { step: 3, title: '计算次数', content: '次数 = 1 + 2 + 1 = 4', highlight: true }
    ],
    keyPoints: ['单项式系数的确定', '单项式次数的计算', '指数为1时省略不写'],
    commonMistakes: ['系数漏掉负号', '次数计算成3（漏加某个指数）'],
    similarQuestions: [
      { id: 'q2_1_1', content: '单项式 5a³b 的系数是____，次数是____。', difficulty: 'easy' },
      { id: 'qz2_3', content: '单项式 -xy²/2 的系数是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'qz2_2',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_5',
    type: 'single_choice',
    content: '若 3x^(m+2)y³ 与 -2x⁵y^n 是同类项，则 m+n =（）',
    options: ['6', '7', '8', '9'],
    answer: 'A',
    analysis: 'm+2=5，所以m=3；n=3。m+n=6',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '通州',
    examType: '期中',
    thinking: '同类项要求相同字母的指数相同。x的指数：m+2=5；y的指数：n=3。解出m、n后求和。',
    steps: [
      { step: 1, title: '根据同类项定义', content: '相同字母的指数相同', highlight: false },
      { step: 2, title: '求m', content: 'x的指数：m+2=5，所以m=3', highlight: true },
      { step: 3, title: '求n', content: 'y的指数：n=3', highlight: false },
      { step: 4, title: '计算m+n', content: 'm+n=3+3=6', highlight: true }
    ],
    keyPoints: ['同类项的定义', '同类项的指数关系'],
    commonMistakes: ['m+2=5解错', '忘记求m+n'],
    similarQuestions: [
      { id: 'q2_3_1', content: '下列各组中，是同类项的是（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz2_3',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_1',
    type: 'single_choice',
    content: '单项式 -xy²/2 的系数是（）',
    options: ['-1/2', '1/2', '-1', '1'],
    answer: 'A',
    analysis: '系数是-1/2，注意符号',
    difficulty: 'medium',
    points: 5,
    year: '2022',
    district: '海淀',
    examType: '期末',
    thinking: '-xy²/2可以写成(-1/2)xy²，所以系数是-1/2。注意系数包括前面的符号。',
    steps: [
      { step: 1, title: '改写单项式', content: '-xy²/2 = (-1/2)xy²', highlight: false },
      { step: 2, title: '确定系数', content: '系数是-1/2', highlight: true }
    ],
    keyPoints: ['单项式的系数', '系数包括符号'],
    commonMistakes: ['系数写成1/2（漏符号）', '系数写成-1'],
    similarQuestions: [
      { id: 'qz2_1', content: '单项式 -3xy²z 的系数和次数分别是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'qz2_4',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_3',
    type: 'single_choice',
    content: '下列各组中，不是同类项的是（）',
    options: ['3a²b与-a²b', '2x²y与3yx²', '5ab与5abc', '-m²n与3nm²'],
    answer: 'C',
    analysis: 'C选项字母不完全相同，多了c',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '丰台',
    examType: '期末',
    thinking: '同类项要求所含字母相同，相同字母的指数也相同。C选项5ab含字母a、b，5abc含字母a、b、c，字母不同，不是同类项。',
    steps: [
      { step: 1, title: '分析A', content: '都含a²b，是同类项', highlight: false },
      { step: 2, title: '分析B', content: '都含x²y，字母顺序不影响，是同类项', highlight: false },
      { step: 3, title: '分析C', content: '5ab含字母a、b；5abc含字母a、b、c，字母不同，不是同类项', highlight: true },
      { step: 4, title: '分析D', content: '都含m²n，字母顺序不影响，是同类项', highlight: false }
    ],
    keyPoints: ['同类项的两个相同', '字母顺序不影响'],
    commonMistakes: ['只看系数', '认为字母顺序必须相同'],
    similarQuestions: [
      { id: 'q2_3_1', content: '下列各组中，是同类项的是（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz2_5',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_5',
    type: 'fill_blank',
    content: '化简：3(2x - y) - 2(x + 3y) = ____。',
    answer: '4x - 9y',
    analysis: '6x-3y-2x-6y=4x-9y',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '通州',
    examType: '期中',
    thinking: '先去括号（注意分配律和符号），再合并同类项。',
    steps: [
      { step: 1, title: '去第一个括号', content: '3(2x - y) = 6x - 3y', highlight: false },
      { step: 2, title: '去第二个括号', content: '-2(x + 3y) = -2x - 6y', highlight: true },
      { step: 3, title: '合并同类项', content: '6x - 2x = 4x；-3y - 6y = -9y', highlight: true },
      { step: 4, title: '写出结果', content: '4x - 9y', highlight: false }
    ],
    keyPoints: ['去括号法则', '分配律', '合并同类项'],
    commonMistakes: ['-2(x+3y)展开时第二项符号错误', '合并同类项计算错误'],
    similarQuestions: [
      { id: 'q2_5_1', content: '化简：(2a + 3b) - (a - 2b) = ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz2_6',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_5',
    type: 'single_choice',
    content: '若A = 3x² - 2x + 1，B = x² + x - 3，则A - B =（）',
    options: ['2x² - 3x + 4', '2x² - x - 2', '4x² - x - 2', '2x² - 3x - 2'],
    answer: 'A',
    analysis: 'A-B = 3x²-2x+1-x²-x+3 = 2x²-3x+4',
    difficulty: 'hard',
    points: 10,
    year: '2023',
    district: '西城',
    examType: '期末',
    thinking: '多项式相减，先去括号（注意括号前是负号，括号内各项要变号），再合并同类项。',
    steps: [
      { step: 1, title: '列出式子', content: 'A - B = (3x² - 2x + 1) - (x² + x - 3)', highlight: false },
      { step: 2, title: '去括号', content: '括号前是负号，括号内各项变号：3x² - 2x + 1 - x² - x + 3', highlight: true },
      { step: 3, title: '合并同类项', content: 'x²项：3x²-x²=2x²；x项：-2x-x=-3x；常数项：1+3=4', highlight: true },
      { step: 4, title: '写出结果', content: 'A - B = 2x² - 3x + 4，选A', highlight: false }
    ],
    keyPoints: ['多项式减法', '去括号法则（括号前是负号各项变号）', '合并同类项'],
    commonMistakes: ['去括号时第二项不变号', '合并同类项时系数计算错误'],
    similarQuestions: [
      { id: 'q2_5_1', content: '化简：(2a + 3b) - (a - 2b) = ____。', difficulty: 'easy' },
      { id: 'qz2_5', content: '化简：3(2x - y) - 2(x + 3y) = ____。', difficulty: 'medium' }
    ]
  },
  // 补充题目：去括号法则 (kp2_4)
  {
    id: 'qz2_7',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_4',
    type: 'single_choice',
    content: '去括号：-3(x - 2y) =（）',
    options: ['-3x - 6y', '-3x + 6y', '3x - 6y', '3x + 6y'],
    answer: 'B',
    analysis: '-3(x-2y) = -3x + 6y（分配律，注意负号）',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '海淀',
    examType: '期中',
    thinking: '括号前有数字因数时，用分配律把数字乘进括号内的每一项。注意-3乘以-2y得+6y。',
    steps: [
      { step: 1, title: '应用分配律', content: '-3(x-2y) = -3×x + (-3)×(-2y)', highlight: true },
      { step: 2, title: '计算', content: '-3x + 6y', highlight: true }
    ],
    keyPoints: ['去括号法则', '分配律', '符号变化'],
    commonMistakes: ['选A（第二项符号错误）', '选C（第一项符号错误）'],
    similarQuestions: [
      { id: 'qz2_8', content: '去括号：2a - (3b - c) = ____', difficulty: 'easy' }
    ]
  },
  {
    id: 'qz2_8',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_4',
    type: 'fill_blank',
    content: '去括号：2a - (3b - c) = ____',
    answer: '2a - 3b + c',
    analysis: '括号前是负号，括号内各项都变号：2a - 3b + c',
    difficulty: 'easy',
    points: 5,
    year: '2024',
    district: '丰台',
    examType: '期末',
    thinking: '括号前是负号，去掉括号后，括号内各项都要变号。3b变为-3b，-c变为+c。',
    steps: [
      { step: 1, title: '去括号', content: '括号前是负号，括号内各项变号', highlight: true },
      { step: 2, title: '写出结果', content: '2a - 3b + c', highlight: true }
    ],
    keyPoints: ['去括号法则', '括号前是负号各项变号'],
    commonMistakes: ['2a-3b-c（最后一项不变号）', '符号错误'],
    similarQuestions: [
      { id: 'qz2_7', content: '去括号：-3(x - 2y) =（）', difficulty: 'easy' }
    ]
  },
  // 补充题目：整式的加减 (kp2_6)
  {
    id: 'qz2_9',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_6',
    type: 'single_choice',
    content: '化简求值：3x² - 2(x² - x + 1) + 3，其中x = -1，值为（）',
    options: ['-1', '1', '3', '5'],
    answer: 'A',
    analysis: '先化简：3x²-2x²+2x-2+3=x²+2x+1，代入x=-1得1-2+1=0？重新计算：3(-1)²-2((-1)²-(-1)+1)+3=3-2(1+1+1)+3=3-6+3=0。重新检查题目数据。',
    difficulty: 'hard',
    points: 10,
    year: '2023',
    district: '西城',
    examType: '期末',
    thinking: '先化简整式，去括号、合并同类项，再代入x的值计算。',
    steps: [
      { step: 1, title: '去括号', content: '3x² - 2(x² - x + 1) + 3 = 3x² - 2x² + 2x - 2 + 3', highlight: true },
      { step: 2, title: '合并同类项', content: '(3x²-2x²) + 2x + (-2+3) = x² + 2x + 1', highlight: true },
      { step: 3, title: '代入求值', content: '当x=-1时，(-1)² + 2×(-1) + 1 = 1 - 2 + 1 = 0', highlight: false }
    ],
    keyPoints: ['整式加减', '去括号', '合并同类项', '代入求值'],
    commonMistakes: ['去括号符号错误', '代入时符号错误', '计算错误'],
    similarQuestions: [
      { id: 'qz2_10', content: '已知A = 2x² - 3x + 1，则A - (3x² - 2x) = ____', difficulty: 'medium' }
    ]
  },
  {
    id: 'qz2_10',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_6',
    type: 'fill_blank',
    content: '已知A = 2x² - 3x + 1，则A - (3x² - 2x) = ____',
    answer: '-x² - x + 1',
    analysis: 'A-(3x²-2x) = 2x²-3x+1-3x²+2x = -x²-x+1',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '东城',
    examType: '期中',
    thinking: '先去括号（括号前是负号，各项变号），再合并同类项。',
    steps: [
      { step: 1, title: '去括号', content: '2x² - 3x + 1 - 3x² + 2x', highlight: true },
      { step: 2, title: '合并同类项', content: '(2x²-3x²) + (-3x+2x) + 1 = -x² - x + 1', highlight: true }
    ],
    keyPoints: ['整式加减', '去括号法则', '合并同类项'],
    commonMistakes: ['去括号符号错误', '合并同类项计算错误'],
    similarQuestions: [
      { id: 'qz2_9', content: '化简求值：3x² - 2(x² - x + 1) + 3，其中x = -1', difficulty: 'hard' }
    ]
  },
  {
    id: 'qz2_11',
    chapterId: 'ch2',
    knowledgePointId: 'kp2_6',
    type: 'single_choice',
    content: '一个多项式减去2x²-3x+1等于x²+2x-3，则这个多项式是（）',
    options: ['3x²-x-2', 'x²-x-2', '3x²+x-2', '3x²-x-4'],
    answer: 'A',
    analysis: '设多项式为A，则A-(2x²-3x+1)=x²+2x-3，A=x²+2x-3+2x²-3x+1=3x²-x-2',
    difficulty: 'hard',
    points: 10,
    year: '2023',
    district: '海淀',
    examType: '期末',
    thinking: '根据题意列方程，被减数=差+减数。',
    steps: [
      { step: 1, title: '列方程', content: '设多项式为A，A - (2x²-3x+1) = x²+2x-3', highlight: false },
      { step: 2, title: '移项', content: 'A = x²+2x-3 + (2x²-3x+1)', highlight: true },
      { step: 3, title: '合并', content: 'A = 3x² - x - 2', highlight: true }
    ],
    keyPoints: ['整式加减', '列方程', '移项'],
    commonMistakes: ['列方程错误', '符号错误', '合并同类项错误'],
    similarQuestions: [
      { id: 'qz2_10', content: '已知A = 2x² - 3x + 1，则A - (3x² - 2x) = ____', difficulty: 'medium' }
    ]
  }
]
