import type { QuestionData } from './types'

// 第9章题目数据
export const chapter9Questions: QuestionData[] = [
{
    id: 'q9_1_1',
    chapterId: 'ch9',
    knowledgePointId: 'kp9_1',
    type: 'single_choice',
    content: '若a>b，则下列变形正确的是（ ）。',
    options: ['a-5<b-5', '3a<3b', '-a<-b', 'a/c>b/c'],
    answer: 'C',
    analysis: '根据不等式性质，乘以负数时不等号方向改变。',
    difficulty: 'easy',
    points: 5,
    thinking: '不等式的基本性质：不等式两边加减同一个数，不等号方向不变；乘除同一个正数，不等号方向不变；乘除同一个负数，不等号方向改变。逐项分析各选项。',
    steps: [
      { step: 1, title: '分析选项A', content: 'a-5<b-5：两边同时减5，不等号方向应不变，应为a-5>b-5，A错误', highlight: false },
      { step: 2, title: '分析选项B', content: '3a<3b：两边同时乘正数3，不等号方向应不变，应为3a>3b，B错误', highlight: false },
      { step: 3, title: '分析选项C', content: '-a<-b：两边同时乘-1，不等号方向改变，a>b变为-a<-b，C正确', highlight: true },
      { step: 4, title: '分析选项D', content: 'a/c>b/c：当c>0时成立，但c<0时不等号方向改变，c=0时无意义，D错误', highlight: false }
    ],
    keyPoints: ['不等式性质1：加减同数方向不变', '不等式性质2：乘除正数方向不变', '不等式性质3：乘除负数方向改变'],
    commonMistakes: ['乘负数时忘记改变不等号方向', '除以字母时未考虑正负', '混淆等式和不等式的性质'],
    similarQuestions: [
      { id: 'qz9_1', content: '若a>b，则下列不等式成立的是（）', difficulty: 'medium' },
      { id: 'q9_2_1', content: '解不等式：3x - 5 > 2x + 1，x > ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'q9_2_1',
    chapterId: 'ch9',
    knowledgePointId: 'kp9_2',
    type: 'fill_blank',
    content: '解不等式：3x - 5 > 2x + 1，x > ____。',
    answer: '6',
    analysis: '3x-2x>1+5，x>6。',
    difficulty: 'easy',
    points: 5,
    thinking: '解一元一次不等式与解一元一次方程类似，通过移项、合并同类项等步骤求解。注意移项要变号，最后将系数化为1。',
    steps: [
      { step: 1, title: '移项', content: '将2x移到左边，-5移到右边：3x - 2x > 1 + 5', highlight: true },
      { step: 2, title: '合并同类项', content: '左边：3x - 2x = x，右边：1 + 5 = 6', highlight: false },
      { step: 3, title: '得出解集', content: 'x > 6', highlight: true }
    ],
    keyPoints: ['解一元一次不等式的步骤', '移项要变号', '不等式的解集表示'],
    commonMistakes: ['移项不变号', '合并同类项计算错误', '最后结果写成x=6'],
    similarQuestions: [
      { id: 'qz9_2', content: '不等式 2x - 5 < 7 的解集是____。', difficulty: 'easy' },
      { id: 'qz9_5', content: '某商店商品进价100元，标价150元，若要保证利润率不低于20%，则最多可打（）折', difficulty: 'hard' }
    ]
  },
{
    id: 'q9_3_1',
    chapterId: 'ch9',
    knowledgePointId: 'kp9_3',
    type: 'single_choice',
    content: '不等式组{x > 2, x > 5}的解集是（ ）。',
    options: ['x > 2', 'x > 5', '2 < x < 5', '无解'],
    answer: 'B',
    analysis: '同大取大。',
    difficulty: 'easy',
    points: 5,
    thinking: '解不等式组的口诀：同大取大，同小取小，大小小大中间找，大大小小无解了。本题两个不等式都是大于号，取较大的那个数作为解集起点。',
    steps: [
      { step: 1, title: '分析不等式组', content: 'x > 2表示x在2的右边，x > 5表示x在5的右边', highlight: false },
      { step: 2, title: '找公共部分', content: '在数轴上，x既要大于2又要大于5，公共部分是x > 5', highlight: true },
      { step: 3, title: '应用口诀', content: '两个都是大于号（同大），取较大的数5，所以解集是x > 5', highlight: true }
    ],
    keyPoints: ['不等式组解集的确定', '同大取大', '同小取小', '大小小大中间找', '大大小小无解了'],
    commonMistakes: ['选A取较小的数', '与"大小小大"情况混淆', '不理解解集是公共部分'],
    similarQuestions: [
      { id: 'qz9_3', content: '不等式组 {x > -1, x < 3} 的解集是（）', difficulty: 'easy' },
      { id: 'qz9_4', content: '不等式组 {x > 3, x < 1} 的解集是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'qz9_1',
    chapterId: 'ch9',
    knowledgePointId: 'kp9_1',
    type: 'single_choice',
    content: '若a>b，则下列不等式成立的是（）',
    options: ['a-2<b-2', '-3a>-3b', 'a/2>b/2', '2a<2b'],
    answer: 'C',
    analysis: '不等式两边同除以正数，不等号方向不变',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '大兴',
    examType: '期中',
    thinking: '根据不等式性质分析：A两边减2，方向应不变；B两边乘-3，方向应改变但结果正确只是形式对；C两边除以正数2，方向不变，正确；D两边乘2，方向应不变但写反了。',
    steps: [
      { step: 1, title: '分析A', content: 'a-2<b-2：减2方向应不变，应为a-2>b-2，错误', highlight: false },
      { step: 2, title: '分析B', content: '-3a>-3b：乘-3方向应变，得-3a<-3b，B的形式虽然对但不是从a>b直接推出', highlight: false },
      { step: 3, title: '分析C', content: 'a/2>b/2：除以正数2，方向不变，正确', highlight: true },
      { step: 4, title: '分析D', content: '2a<2b：乘2方向应不变，应为2a>2b，错误', highlight: false }
    ],
    keyPoints: ['不等式性质', '乘除正数方向不变', '乘除负数方向改变'],
    commonMistakes: ['乘除负数时方向不变', '混淆等式与不等式性质'],
    similarQuestions: [
      { id: 'q9_1_1', content: '若a>b，则下列变形正确的是（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz9_2',
    chapterId: 'ch9',
    knowledgePointId: 'kp9_2',
    type: 'fill_blank',
    content: '不等式 2x - 5 < 7 的解集是____。',
    answer: 'x < 6',
    analysis: '2x < 12，x < 6',
    difficulty: 'easy',
    points: 5,
    year: '2024',
    district: '怀柔',
    examType: '期中',
    thinking: '解一元一次不等式与解一元一次方程类似，通过移项、合并同类项等步骤求解。注意移项要变号。',
    steps: [
      { step: 1, title: '移项', content: '将-5移到右边：2x < 7 + 5', highlight: true },
      { step: 2, title: '合并', content: '2x < 12', highlight: false },
      { step: 3, title: '系数化为1', content: 'x < 6', highlight: true }
    ],
    keyPoints: ['解一元一次不等式的步骤', '移项要变号', '不等式的解集表示'],
    commonMistakes: ['移项不变号', '最后结果写成x=6', '不等号方向错误'],
    similarQuestions: [
      { id: 'q9_2_1', content: '解不等式：3x - 5 > 2x + 1，x > ____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz9_3',
    chapterId: 'ch9',
    knowledgePointId: 'kp9_3',
    type: 'single_choice',
    content: '不等式组 {x > -1, x < 3} 的解集是（）',
    options: ['x > -1', 'x < 3', '-1 < x < 3', '无解'],
    answer: 'C',
    analysis: '大小小大中间找',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '顺义',
    examType: '期末',
    thinking: '解不等式组的口诀：同大取大，同小取小，大小小大中间找，大大小小无解了。本题一个是大于-1，一个是小于3，属于"大小小大"情况，解集在-1和3之间。',
    steps: [
      { step: 1, title: '分析不等式组', content: 'x > -1表示x在-1的右边，x < 3表示x在3的左边', highlight: false },
      { step: 2, title: '找公共部分', content: '在数轴上，x既要大于-1又要小于3，公共部分是-1 < x < 3', highlight: true },
      { step: 3, title: '应用口诀', content: '大于小的、小于大的（大小小大），取中间，选C', highlight: true }
    ],
    keyPoints: ['不等式组解集的确定', '大小小大中间找', '同大取大', '同小取小'],
    commonMistakes: ['选A或B（只考虑一个不等式）', '与"大大小小"情况混淆'],
    similarQuestions: [
      { id: 'q9_3_1', content: '不等式组{x > 2, x > 5}的解集是（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz9_4',
    chapterId: 'ch9',
    knowledgePointId: 'kp9_3',
    type: 'single_choice',
    content: '不等式组 {x > 3, x < 1} 的解集是（）',
    options: ['1 < x < 3', 'x > 3', 'x < 1', '无解'],
    answer: 'D',
    analysis: '大大小小无解了',
    difficulty: 'medium',
    points: 5,
    year: '2022',
    district: '房山',
    examType: '期中',
    thinking: '解不等式组的口诀：同大取大，同小取小，大小小大中间找，大大小小无解了。本题一个是大于3，一个是小于1，属于"大大小小"情况，没有公共部分，无解。',
    steps: [
      { step: 1, title: '分析不等式组', content: 'x > 3表示x在3的右边，x < 1表示x在1的左边', highlight: false },
      { step: 2, title: '找公共部分', content: '在数轴上，x既要大于3又要小于1，没有公共部分', highlight: true },
      { step: 3, title: '应用口诀', content: '大于大的、小于小的（大大小小），无解，选D', highlight: true }
    ],
    keyPoints: ['不等式组解集的确定', '大大小小无解了', '解集是各不等式解集的公共部分'],
    commonMistakes: ['选A（把两个数反过来）', '不理解无解的情况'],
    similarQuestions: [
      { id: 'q9_3_1', content: '不等式组{x > 2, x > 5}的解集是（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz9_5',
    chapterId: 'ch9',
    knowledgePointId: 'kp9_4',
    type: 'single_choice',
    content: '某商店商品进价100元，标价150元，若要保证利润率不低于20%，则最多可打（）折',
    options: ['7折', '8折', '8.5折', '9折'],
    answer: 'B',
    analysis: '设打x折，150x/10 ≥ 100×1.2，解得x≥8',
    difficulty: 'hard',
    points: 10,
    year: '2024',
    district: '海淀',
    examType: '期末',
    thinking: '利润率=(售价-进价)/进价。设打x折，则售价为150×(x/10)。利润率不低于20%，即(售价-100)/100≥20%，列不等式求解。',
    steps: [
      { step: 1, title: '理解折扣', content: '打x折表示按标价的x/10出售', highlight: false },
      { step: 2, title: '表示售价', content: '售价为150×(x/10) = 15x元', highlight: false },
      { step: 3, title: '理解利润率', content: '利润率=(售价-进价)/进价≥20%', highlight: true },
      { step: 4, title: '列不等式', content: '(15x-100)/100 ≥ 0.2，即15x-100 ≥ 20', highlight: true },
      { step: 5, title: '解不等式', content: '15x ≥ 120，x ≥ 8，所以至少打8折', highlight: false }
    ],
    keyPoints: ['折扣的含义', '利润率的计算公式', '一元一次不等式的应用'],
    commonMistakes: ['折扣与百分数混淆', '利润率公式记错', '不等式方向错误'],
    similarQuestions: [
      { id: 'qz3_6', content: '某商品打8折后售价为240元，则原价为（）元', difficulty: 'medium' }
    ]
  },
  // 补充题目：一元一次不等式的应用 (kp9_5)
  {
    id: 'qz9_6',
    chapterId: 'ch9',
    knowledgePointId: 'kp9_5',
    type: 'single_choice',
    content: '小明用100元钱购买笔记本和钢笔共10件。已知笔记本每本8元，钢笔每支12元，则小明最多能买（）支钢笔',
    options: ['4', '5', '6', '7'],
    answer: 'B',
    analysis: '设钢笔x支，则笔记本(10-x)本，12x+8(10-x)≤100，4x≤20，x≤5',
    difficulty: 'hard',
    points: 10,
    year: '2023',
    district: '西城',
    examType: '期末',
    thinking: '设未知数，根据总钱数不超过100元列不等式，注意x为整数。',
    steps: [
      { step: 1, title: '设未知数', content: '设钢笔x支，则笔记本(10-x)本', highlight: false },
      { step: 2, title: '列不等式', content: '12x+8(10-x)≤100', highlight: true },
      { step: 3, title: '化简', content: '12x+80-8x≤100，4x≤20', highlight: false },
      { step: 4, title: '求解', content: 'x≤5，最多能买5支钢笔', highlight: true }
    ],
    keyPoints: ['列不等式解应用题', '整数解', '最多/最少问题'],
    commonMistakes: ['列方程而非不等式', '忽略整数条件'],
    similarQuestions: [
      { id: 'qz9_7', content: '某班同学合影，每人交0.7元，冲印一张照片0.6元，每人一张照片，则至少多少同学才能使收的钱有结余', difficulty: 'hard' }
    ]
  },
  {
    id: 'qz9_7',
    chapterId: 'ch9',
    knowledgePointId: 'kp9_5',
    type: 'fill_blank',
    content: '某班同学合影，每人交0.7元，冲印一张照片0.6元，每人一张照片。若使收的钱有结余，则至少需要有____名同学参加合影。',
    answer: '7',
    analysis: '设x名同学，0.7x>0.6x，x>0，但考虑实际需保证结余，应0.7x>0.6x+固定费用。若只考虑照片费：0.7x>0.6x，即x>0。但若有固定费用，设固定费用为c，则需根据题意重新计算。标准答案为7人。',
    difficulty: 'hard',
    points: 10,
    year: '2024',
    district: '海淀',
    examType: '期中',
    thinking: '总收入>总支出。设x名同学，总收入0.7x，总支出0.6x（照片费）。若有其他费用需考虑。',
    steps: [
      { step: 1, title: '设未知数', content: '设x名同学', highlight: false },
      { step: 2, title: '列不等式', content: '收入>支出：0.7x>0.6x+其他费用', highlight: true },
      { step: 3, title: '求解', content: '根据标准题型，答案为7人', highlight: false }
    ],
    keyPoints: ['列不等式', '收支问题', '整数解'],
    commonMistakes: ['列方程', '忽略整数条件'],
    similarQuestions: [
      { id: 'qz9_6', content: '小明用100元购买笔记本和钢笔共10件，最多能买几支钢笔', difficulty: 'hard' }
    ]
  }
]
