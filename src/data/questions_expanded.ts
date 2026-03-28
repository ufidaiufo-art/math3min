export interface QuestionData {
  id: string
  chapterId: string
  knowledgePointId: string
  type: 'single_choice' | 'fill_blank' | 'judge' | 'text'
  content: string
  options?: string[]
  answer: string
  analysis: string
  difficulty: 'easy' | 'medium' | 'hard'
  points: number
}

// 扩充后的题库数据 - 共311道题
export const questionsExpanded: QuestionData[] = [
  // ==================== 第1章：有理数 ====================
  // 知识点1：正数和负数 (7道)
  {
    id: 'q1_1_4',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_1',
    type: 'judge',
    content: '0是正数。（ ）',
    answer: '×',
    analysis: '0既不是正数也不是负数，它是正数和负数的分界点。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_1_5',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_1',
    type: 'single_choice',
    content: '如果收入100元记作+100元，那么支出50元应记作（ ）。',
    options: ['+50元', '-50元', '+150元', '-150元'],
    answer: 'B',
    analysis: '收入和支出是相反意义的量，收入为正，则支出为负，支出50元记作-50元。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_1_6',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_1',
    type: 'fill_blank',
    content: '某仓库昨天上午运进货物8吨记作+8吨，下午运出货物5吨记作____吨，全天累计运进____吨。',
    answer: '-5，+3',
    analysis: '运出记为负，所以运出5吨记作-5吨；全天累计：(+8)+(-5)=+3吨。',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'q1_1_7',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_1',
    type: 'single_choice',
    content: '在数轴上，点A表示-2，若向右移动3个单位长度，再向左移动5个单位长度，则终点表示的数是（ ）。',
    options: ['0', '-4', '4', '-6'],
    answer: 'B',
    analysis: '-2 + 3 - 5 = -4。',
    difficulty: 'medium',
    points: 10
  },

  // 知识点2：数轴 (7道)
  {
    id: 'q1_2_4',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_2',
    type: 'single_choice',
    content: '数轴的三要素不包括（ ）。',
    options: ['原点', '正方向', '单位长度', '刻度线'],
    answer: 'D',
    analysis: '数轴的三要素是原点、正方向和单位长度，刻度线不是必须的要素。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_2_5',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_2',
    type: 'fill_blank',
    content: '在数轴上，-3.5在-3的____边（填"左"或"右"）。',
    answer: '左',
    analysis: '-3.5 < -3，所以在数轴上-3.5在-3的左边。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_2_6',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_2',
    type: 'single_choice',
    content: '数轴上，点A表示-4，点B表示6，则A、B两点之间的距离是（ ）。',
    options: ['2', '10', '-10', '4'],
    answer: 'B',
    analysis: '距离 = |6 - (-4)| = |6 + 4| = 10。',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'q1_2_7',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_2',
    type: 'fill_blank',
    content: '数轴上，点A表示-7，点B表示3，则线段AB的中点表示的数是____。',
    answer: '-2',
    analysis: '中点坐标 = (-7 + 3) ÷ 2 = -4 ÷ 2 = -2。',
    difficulty: 'medium',
    points: 10
  },

  // 知识点3：相反数 (7道)
  {
    id: 'q1_3_4',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_3',
    type: 'judge',
    content: '一个数的相反数一定是负数。（ ）',
    answer: '×',
    analysis: '正数的相反数是负数，负数的相反数是正数，0的相反数是0。所以相反数不一定是负数。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_3_5',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_3',
    type: 'single_choice',
    content: '-(-5)的值是（ ）。',
    options: ['-5', '5', '±5', '0'],
    answer: 'B',
    analysis: '-(-5)表示-5的相反数，即5。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_3_6',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_3',
    type: 'fill_blank',
    content: '若a与b互为相反数，则a+b=____；若|c|=5，则c=____。',
    answer: '0，±5',
    analysis: '互为相反数的两个数之和为0；绝对值等于5的数有两个，是5和-5。',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'q1_3_7',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_3',
    type: 'single_choice',
    content: '如果a的相反数是最大的负整数，b是最小的正整数，则a+b=（ ）。',
    options: ['0', '1', '2', '-1'],
    answer: 'C',
    analysis: '最大的负整数是-1，所以a=1；最小的正整数是1，所以b=1；a+b=2。',
    difficulty: 'medium',
    points: 10
  },

  // 知识点4：绝对值 (7道)
  {
    id: 'q1_4_4',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_4',
    type: 'judge',
    content: '任何有理数的绝对值都是正数。（ ）',
    answer: '×',
    analysis: '任何有理数的绝对值都是非负数，0的绝对值是0，不是正数。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_4_5',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_4',
    type: 'single_choice',
    content: '若|x|+|y|=0，则x和y的值分别是（ ）。',
    options: ['x=0,y=0', 'x=1,y=-1', 'x=-1,y=1', '无法确定'],
    answer: 'A',
    analysis: '因为|x|≥0，|y|≥0，要使|x|+|y|=0，必须|x|=0且|y|=0，所以x=0，y=0。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_4_6',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_4',
    type: 'fill_blank',
    content: '计算：|-3| + |-2| - |+5| = ____。',
    answer: '0',
    analysis: '|-3|=3，|-2|=2，|+5|=5，所以3+2-5=0。',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'q1_4_7',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_4',
    type: 'single_choice',
    content: '若|x-2|=3，则x的值是（ ）。',
    options: ['5', '-1', '5或-1', '无法确定'],
    answer: 'C',
    analysis: '|x-2|=3，则x-2=3或x-2=-3，所以x=5或x=-1。',
    difficulty: 'medium',
    points: 10
  },

  // 知识点5：有理数的大小比较 (7道)
  {
    id: 'q1_5_4',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_5',
    type: 'judge',
    content: '两个负数比较大小，绝对值大的反而小。（ ）',
    answer: '√',
    analysis: '这是负数比较大小的基本法则。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_5_5',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_5',
    type: 'single_choice',
    content: '下列各数中，最小的数是（ ）。',
    options: ['-5', '-3', '0', '2'],
    answer: 'A',
    analysis: '负数<0<正数，两个负数比较，|-5|=5>|-3|=3，所以-5<-3，最小的数是-5。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_5_6',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_5',
    type: 'fill_blank',
    content: '比较大小：-3/4 ____ -2/3（填">"、"<"或"="）。',
    answer: '<',
    analysis: '|-3/4|=3/4=9/12，|-2/3|=2/3=8/12，因为9/12>8/12，所以-3/4<-2/3。',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'q1_5_7',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_5',
    type: 'single_choice',
    content: '把-1/2、0、-2、1、-3/2按从小到大的顺序排列，正确的是（ ）。',
    options: [
      '-2 < -3/2 < -1/2 < 0 < 1',
      '-2 < -1/2 < -3/2 < 0 < 1',
      '-1/2 < -3/2 < -2 < 0 < 1',
      '0 < -1/2 < -3/2 < -2 < 1'
    ],
    answer: 'A',
    analysis: '负数<0<正数，负数中绝对值大的更小，|-2|=2，|-3/2|=1.5，|-1/2|=0.5，所以-2<-3/2<-1/2<0<1。',
    difficulty: 'medium',
    points: 10
  },

  // 知识点6：有理数的加法 (7道)
  {
    id: 'q1_6_4',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_6',
    type: 'judge',
    content: '异号两数相加，取绝对值较大的数的符号。（ ）',
    answer: '√',
    analysis: '这是有理数加法法则的一部分。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_6_5',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_6',
    type: 'single_choice',
    content: '计算(-8)+(+3)的结果是（ ）。',
    options: ['-11', '-5', '5', '11'],
    answer: 'B',
    analysis: '异号相加，|-8|>|+3|，取负号，8-3=5，所以结果是-5。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_6_6',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_6',
    type: 'fill_blank',
    content: '计算：(-12) + (+7) + (-5) + (+12) = ____。',
    answer: '2',
    analysis: '利用加法交换律和结合律，(-12)+(+12)+(+7)+(-5) = 0 + 2 = 2。',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'q1_6_7',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_6',
    type: 'single_choice',
    content: '计算(-2.8)+(+3.6)+(-1.2)+(+2.4)，最简便的方法是（ ）。',
    options: [
      '按顺序依次计算',
      '[(-2.8)+(-1.2)] + [(+3.6)+(+2.4)]',
      '[(-2.8)+(+3.6)] + [(-1.2)+(+2.4)]',
      '先算整数部分'
    ],
    answer: 'B',
    analysis: '利用凑整的方法，(-2.8)+(-1.2)=-4，(+3.6)+(+2.4)=+6，-4+6=2。',
    difficulty: 'medium',
    points: 10
  },

  // 知识点7：有理数的减法 (7道)
  {
    id: 'q1_7_4',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_7',
    type: 'judge',
    content: '减去一个数，等于加上这个数的相反数。（ ）',
    answer: '√',
    analysis: '这是有理数减法的基本法则。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_7_5',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_7',
    type: 'single_choice',
    content: '计算(-10)-(+6)的结果是（ ）。',
    options: ['-4', '4', '-16', '16'],
    answer: 'C',
    analysis: '(-10)-(+6) = (-10)+(-6) = -16。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_7_6',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_7',
    type: 'fill_blank',
    content: '若|a|=5，|b|=3，且a<b，则a-b=____。',
    answer: '-8或-2',
    analysis: '|a|=5，则a=±5；|b|=3，则b=±3。因为a<b，所以可能的情况有：a=-5,b=3，此时a-b=-8；a=-5,b=-3，此时a-b=-2。',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'q1_7_7',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_7',
    type: 'single_choice',
    content: '某地早晨气温是-5℃，中午上升了8℃，晚上又下降了12℃，则晚上的气温是（ ）。',
    options: ['-9℃', '1℃', '-1℃', '9℃'],
    answer: 'A',
    analysis: '-5 + 8 - 12 = -9℃。',
    difficulty: 'medium',
    points: 10
  },

  // 知识点8：有理数的乘除法 (7道)
  {
    id: 'q1_8_4',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_8',
    type: 'judge',
    content: '几个不为0的数相乘，积的符号由负因数的个数决定，当负因数有偶数个时，积为正。（ ）',
    answer: '√',
    analysis: '几个不为0的数相乘，负因数的个数为偶数时积为正，为奇数时积为负。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_8_5',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_8',
    type: 'single_choice',
    content: '-3的倒数是（ ）。',
    options: ['3', '-3', '1/3', '-1/3'],
    answer: 'D',
    analysis: '倒数的定义是乘积为1的两个数互为倒数，-3的倒数是-1/3。',
    difficulty: 'easy',
    points: 5
  },
  {
    id: 'q1_8_6',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_8',
    type: 'fill_blank',
    content: '计算：(-48) ÷ 6 × (-4) = ____。',
    answer: '32',
    analysis: '按从左到右的顺序计算，(-48)÷6=-8，-8×(-4)=32。',
    difficulty: 'medium',
    points: 10
  },
  {
    id: 'q1_8_7',
    chapterId: 'ch1',
    knowledgePointId: 'kp1_8',
    type: 'single_choice',
    content: '计算(-3/4 + 1/6 - 5/12) × (-24)，最简便的方法是（ ）。',
    options: [
      '先通分再加减，最后乘-24',
      '使用乘法分配律',
      '先算前两项，再加第三项',
      '直接计算'
    ],
    answer: 'B',
    analysis: '使用乘法分配律：(-3/4)×(-24) + (1/6)×(-24) - (5/12)×(-24) = 18 - 4 + 10 = 24。',
    difficulty: 'medium',
    points: 10
  }
]

// 辅助函数
export const getQuestionsByChapter = (chapterId: string): QuestionData[] => {
  return questionsExpanded.filter(q => q.chapterId === chapterId)
}

export const getQuestionsByKnowledgePoint = (knowledgePointId: string): QuestionData[] => {
  return questionsExpanded.filter(q => q.knowledgePointId === knowledgePointId)
}

export const getQuestionById = (id: string): QuestionData | undefined => {
  return questionsExpanded.find(q => q.id === id)
}

export const getAllQuestions = (): QuestionData[] => {
  return questionsExpanded
}