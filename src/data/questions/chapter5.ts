import type { QuestionData } from './types'

// 第5章题目数据
export const chapter5Questions: QuestionData[] = [
{
    id: 'q5_1_1',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_1',
    type: 'fill_blank',
    content: '两条直线相交，形成____对对顶角，____对邻补角。',
    answer: '2，4',
    analysis: '基本概念。',
    difficulty: 'easy',
    points: 5,
    thinking: '两条直线相交于一点，形成4个角。对顶角是没有公共边的两个角，有2对；邻补角是有公共边且互补的两个角，有4对。',
    steps: [
      { step: 1, title: '画图理解', content: '两条直线AB和CD相交于点O，形成∠AOC、∠COB、∠BOD、∠DOA四个角', highlight: false },
      { step: 2, title: '找对顶角', content: '对顶角：∠AOC与∠BOD，∠COB与∠DOA，共2对', highlight: true },
      { step: 3, title: '找邻补角', content: '邻补角：∠AOC与∠COB，∠COB与∠BOD，∠BOD与∠DOA，∠DOA与∠AOC，共4对', highlight: true }
    ],
    keyPoints: ['对顶角的定义', '邻补角的定义', '对顶角相等', '邻补角互补'],
    commonMistakes: ['对顶角和邻补角数量记混', '不理解邻补角必须有公共边', '忽略对顶角没有公共边'],
    similarQuestions: [
      { id: 'qz5_2', content: '两条直线相交于一点，形成____对对顶角。', difficulty: 'easy' },
      { id: 'qz5_1', content: '直线AB、CD相交于点O，OE⊥AB，垂足为O。若∠COE=55°，则∠BOD=（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q5_2_1',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_2',
    type: 'single_choice',
    content: '点到直线的距离是指（ ）。',
    options: ['这点到直线的垂线的长度', '这点到直线的垂线段', '这点到直线的垂线段的长度', '过这点垂直于直线的直线'],
    answer: 'C',
    analysis: '点到直线的距离是指垂线段的长度。',
    difficulty: 'easy',
    points: 5,
    thinking: '距离是一个数量（长度），而不是图形。垂线是直线（无限长），垂线段是图形，只有垂线段的长度才是距离。',
    steps: [
      { step: 1, title: '理解概念', content: '点到直线的距离是一个数量，表示点到直线的远近程度', highlight: true },
      { step: 2, title: '分析选项A', content: '垂线是直线，向两方无限延伸，没有长度，错误', highlight: false },
      { step: 3, title: '分析选项B', content: '垂线段是图形，不是长度，错误', highlight: false },
      { step: 4, title: '分析选项C', content: '垂线段的长度是数量，符合距离的定义，正确', highlight: true },
      { step: 5, title: '分析选项D', content: '这是垂线的描述，不是距离，错误', highlight: false }
    ],
    keyPoints: ['点到直线的距离定义', '距离是一个数量', '垂线与垂线段的区别'],
    commonMistakes: ['选A混淆垂线和垂线段', '选B把图形当成距离', '不理解距离是数量'],
    similarQuestions: [
      { id: 'qz5_3', content: '如图，PO⊥AB于点O，OC是射线，则图中与∠AOC互余的角是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q5_3_1',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_3',
    type: 'fill_blank',
    content: '两条直线被第三条直线所截，形成____对同位角，____对内错角，____对同旁内角。',
    answer: '4，2，2',
    analysis: '基本概念。',
    difficulty: 'easy',
    points: 5,
    thinking: '两条直线被第三条直线（截线）所截，形成8个角。根据角的位置关系：同位角在截线同侧且在被截线同方向，有4对；内错角在截线两侧且在被截线之间，有2对；同旁内角在截线同侧且在被截线之间，有2对。',
    steps: [
      { step: 1, title: '画图分析', content: '画出两条直线被第三条直线所截的基本图形（三线八角）', highlight: false },
      { step: 2, title: '找同位角', content: '同位角位置：截线同侧，被截线同方向。共4对：左上-左上、右上-右上、左下-左下、右下-右下', highlight: true },
      { step: 3, title: '找内错角', content: '内错角位置：截线两侧，被截线之间。共2对：左上-右下、右上-左下', highlight: true },
      { step: 4, title: '找同旁内角', content: '同旁内角位置：截线同侧，被截线之间。共2对：左上-左下、右上-右下', highlight: true }
    ],
    keyPoints: ['三线八角模型', '同位角的位置特征', '内错角的位置特征', '同旁内角的位置特征'],
    commonMistakes: ['同位角数量记错', '内错角和同旁内角混淆', '不理解"内"指两直线之间'],
    similarQuestions: [
      { id: 'qz5_6', content: '如图，直线AB、CD被EF所截，∠1和∠5是____角。', difficulty: 'easy' },
      { id: 'q5_5_1', content: '如图，AB∥CD，∠1 = 55°，则∠2 =（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'q5_5_1',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_5',
    type: 'single_choice',
    content: '如图，AB∥CD，∠1 = 55°，则∠2 =（ ）。',
    options: ['55°', '125°', '35°', '145°'],
    answer: 'A',
    analysis: '∠1与∠2是同位角，两直线平行，同位角相等。',
    difficulty: 'easy',
    points: 5,
    thinking: '两直线平行时，被第三条直线所截形成的同位角相等。根据题意，∠1和∠2是同位角，所以∠2=∠1=55°。',
    steps: [
      { step: 1, title: '识别角的关系', content: '观察图形，确定∠1和∠2的位置关系是同位角', highlight: true },
      { step: 2, title: '应用平行线性质', content: '两直线平行，同位角相等', highlight: true },
      { step: 3, title: '计算结果', content: '因为AB∥CD，所以∠2 = ∠1 = 55°', highlight: false }
    ],
    keyPoints: ['同位角的识别', '平行线的性质：同位角相等', '两直线平行的条件'],
    commonMistakes: ['混淆同位角和内错角', '记错性质（如认为同位角互补）', '图形分析错误'],
    similarQuestions: [
      { id: 'qz5_4', content: '如图，AB∥CD，AD平分∠BAC，∠BAD=70°，则∠ACD=（）', difficulty: 'hard' },
      { id: 'qz5_5', content: '下列命题中，是真命题的是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'qz5_1',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_4',
    type: 'single_choice',
    content: '直线AB、CD相交于点O，OE⊥AB，垂足为O。若∠COE=55°，则∠BOD=（）',
    options: ['35°', '45°', '55°', '65°'],
    answer: 'A',
    analysis: '∠AOE=90°，∠AOC=90°-55°=35°，∠BOD=∠AOC=35°',
    difficulty: 'medium',
    points: 5,
    year: '2022',
    district: '海淀',
    examType: '期末',
    thinking: '利用垂直的定义和对顶角相等的性质。OE⊥AB得∠AOE=90°，通过角的差求出∠AOC，再利用对顶角相等得到∠BOD。',
    steps: [
      { step: 1, title: '利用垂直', content: 'OE⊥AB，所以∠AOE=90°', highlight: false },
      { step: 2, title: '求∠AOC', content: '∠AOC = ∠AOE - ∠COE = 90° - 55° = 35°', highlight: true },
      { step: 3, title: '利用对顶角', content: '∠BOD和∠AOC是对顶角，所以∠BOD=∠AOC=35°', highlight: true }
    ],
    keyPoints: ['垂直的定义', '对顶角相等', '角的和差计算'],
    commonMistakes: ['角的和差关系错误', '对顶角识别错误'],
    similarQuestions: [
      { id: 'q5_1_1', content: '两条直线相交，形成____对对顶角，____对邻补角。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz5_2',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_1',
    type: 'fill_blank',
    content: '两条直线相交于一点，形成____对对顶角。',
    answer: '2',
    analysis: '基本概念',
    difficulty: 'easy',
    points: 5,
    year: '2022',
    district: '昌平',
    examType: '期中',
    thinking: '两条直线相交于一点，形成4个角。对顶角是没有公共边的两个角，有2对。可以想象成"X"形，上下一对，左右一对。',
    steps: [
      { step: 1, title: '画图理解', content: '两条直线相交于一点，形成4个角', highlight: false },
      { step: 2, title: '找对顶角', content: '对顶角是没有公共边的两个角，有2对', highlight: true }
    ],
    keyPoints: ['对顶角的定义', '两条直线相交形成2对对顶角'],
    commonMistakes: ['填4（把角的个数当成对数）', '不理解对顶角的定义'],
    similarQuestions: [
      { id: 'q5_1_1', content: '两条直线相交，形成____对对顶角，____对邻补角。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz5_3',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_2',
    type: 'single_choice',
    content: '如图，PO⊥AB于点O，OC是射线，则图中与∠AOC互余的角是（）',
    options: ['∠BOC', '∠POC', '∠POA', '∠BOP'],
    answer: 'B',
    analysis: '∠AOC + ∠POC = ∠AOP = 90°',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '西城',
    examType: '期末',
    thinking: 'PO⊥AB说明∠AOP=90°。观察图形，∠AOP由∠AOC和∠POC组成，所以∠AOC+∠POC=90°，即∠POC与∠AOC互余。',
    steps: [
      { step: 1, title: '利用垂直条件', content: 'PO⊥AB，所以∠AOP = 90°', highlight: true },
      { step: 2, title: '分析角的组成', content: '∠AOP = ∠AOC + ∠POC', highlight: false },
      { step: 3, title: '得出互余关系', content: '∠AOC + ∠POC = 90°，所以∠POC与∠AOC互余，选B', highlight: true }
    ],
    keyPoints: ['互余的定义（和为90°）', '垂直的定义', '角的和差关系'],
    commonMistakes: ['选A（∠BOC与∠AOC互补）', '图形分析错误'],
    similarQuestions: [
      { id: 'q5_2_1', content: '点到直线的距离是指（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz5_4',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_5',
    type: 'single_choice',
    content: '如图，AB∥CD，AD平分∠BAC，∠BAD=70°，则∠ACD=（）',
    options: ['40°', '50°', '60°', '70°'],
    answer: 'A',
    analysis: '∠BAC=140°，∠ACD=180°-140°=40°（同旁内角互补）',
    difficulty: 'hard',
    points: 10,
    year: '2024',
    district: '海淀',
    examType: '期末',
    thinking: 'AD平分∠BAC，所以∠BAC=2∠BAD=140°。AB∥CD，∠BAC和∠ACD是同旁内角，互补，所以∠ACD=180°-140°=40°。',
    steps: [
      { step: 1, title: '利用角平分线', content: 'AD平分∠BAC，所以∠BAC = 2∠BAD = 2×70° = 140°', highlight: true },
      { step: 2, title: '利用平行线性质', content: 'AB∥CD，∠BAC和∠ACD是同旁内角，同旁内角互补', highlight: false },
      { step: 3, title: '计算结果', content: '∠ACD = 180° - ∠BAC = 180° - 140° = 40°', highlight: true }
    ],
    keyPoints: ['角平分线的定义', '平行线的性质（同旁内角互补）', '角的和差计算'],
    commonMistakes: ['角平分线性质应用错误', '同旁内角和内错角混淆'],
    similarQuestions: [
      { id: 'q5_5_1', content: '如图，AB∥CD，∠1 = 55°，则∠2 =（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz5_5',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_6',
    type: 'single_choice',
    content: '下列命题中，是真命题的是（）',
    options: ['相等的角是对顶角', '同旁内角互补', '内错角相等', '在同一平面内，垂直于同一条直线的两条直线平行'],
    answer: 'D',
    analysis: 'D是平行线的判定定理',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '朝阳',
    examType: '期中',
    thinking: '分析每个选项：A错，相等的角不一定是对顶角（如两直线平行时的同位角）；B错，只有两直线平行时同旁内角才互补；C错，只有两直线平行时内错角才相等；D正确，这是平行线的判定方法之一。',
    steps: [
      { step: 1, title: '分析A', content: '相等的角不一定是对顶角，如平行线的同位角相等但不是对顶角，A错误', highlight: false },
      { step: 2, title: '分析B', content: '同旁内角互补的前提是两直线平行，B错误', highlight: false },
      { step: 3, title: '分析C', content: '内错角相等的前提是两直线平行，C错误', highlight: false },
      { step: 4, title: '分析D', content: '在同一平面内，垂直于同一条直线的两条直线平行，这是真命题，D正确', highlight: true }
    ],
    keyPoints: ['对顶角的性质', '平行线的性质（前提是有平行线）', '平行线的判定'],
    commonMistakes: ['忽略平行线的前提条件', '混淆性质和判定'],
    similarQuestions: [
      { id: 'q5_5_1', content: '如图，AB∥CD，∠1 = 55°，则∠2 =（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz5_6',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_3',
    type: 'fill_blank',
    content: '如图，直线AB、CD被EF所截，∠1和∠5是____角。',
    answer: '同位',
    analysis: '同位角位置特征：在截线同侧，在被截线同方向',
    difficulty: 'easy',
    points: 5,
    year: '2022',
    district: '丰台',
    examType: '期中',
    thinking: '同位角的识别：两条直线被第三条直线所截，在截线同侧，在被截线同方向的角是同位角。可以想象成"F"形。',
    steps: [
      { step: 1, title: '回忆同位角定义', content: '在截线同侧，在被截线同方向的角是同位角', highlight: true },
      { step: 2, title: '判断位置关系', content: '∠1和∠5在截线EF的同侧，在被截线AB、CD的同方向（上方）', highlight: false },
      { step: 3, title: '确定答案', content: '∠1和∠5是同位角', highlight: true }
    ],
    keyPoints: ['同位角的定义', '同位角的位置特征（"F"形）', '三线八角模型'],
    commonMistakes: ['与同旁内角混淆', '与内错角混淆', '位置判断错误'],
    similarQuestions: [
      { id: 'q5_3_1', content: '两条直线被第三条直线所截，形成____对同位角，____对内错角，____对同旁内角。', difficulty: 'easy' }
    ]
  },
  // 补充题目：平行线的判定 (kp5_4)
  {
    id: 'qz5_7',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_4',
    type: 'single_choice',
    content: '如图，直线a、b被直线c所截，下列条件中能判定a∥b的是（）',
    options: ['∠1=∠2', '∠1=∠3', '∠1+∠4=180°', '∠1+∠2=180°'],
    answer: 'B',
    analysis: '∠1和∠3是同位角，同位角相等，两直线平行',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '海淀',
    examType: '期中',
    thinking: '平行线的判定方法：同位角相等，两直线平行；内错角相等，两直线平行；同旁内角互补，两直线平行。',
    steps: [
      { step: 1, title: '分析选项A', content: '∠1和∠2是对顶角，对顶角相等不能判定平行', highlight: false },
      { step: 2, title: '分析选项B', content: '∠1和∠3是同位角，同位角相等可判定a∥b', highlight: true },
      { step: 3, title: '分析选项C、D', content: '∠1和∠4、∠1和∠2都不是同旁内角关系', highlight: false }
    ],
    keyPoints: ['平行线的判定', '同位角相等，两直线平行'],
    commonMistakes: ['混淆同位角和对顶角', '记错判定条件'],
    similarQuestions: [
      { id: 'qz5_8', content: '如图，∠1=∠2，可判定哪两条直线平行？', difficulty: 'medium' }
    ]
  },
  {
    id: 'qz5_8',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_4',
    type: 'fill_blank',
    content: '如图，∠1=120°，∠2=120°，则直线a与b的位置关系是____。',
    answer: '平行（或a∥b）',
    analysis: '∠1和∠2是同位角，同位角相等，两直线平行',
    difficulty: 'easy',
    points: 5,
    year: '2024',
    district: '西城',
    examType: '期末',
    thinking: '观察图形，∠1和∠2是同位角。同位角相等（都等于120°），则两直线平行。',
    steps: [
      { step: 1, title: '判断角的关系', content: '∠1和∠2是同位角', highlight: true },
      { step: 2, title: '应用判定定理', content: '∠1=∠2=120°，同位角相等，两直线平行', highlight: true }
    ],
    keyPoints: ['同位角的识别', '同位角相等，两直线平行'],
    commonMistakes: ['答"相等"（问的是位置关系）', '判定定理记错'],
    similarQuestions: [
      { id: 'qz5_7', content: '如图，直线a、b被直线c所截，下列条件中能判定a∥b的是（）', difficulty: 'medium' }
    ]
  },
  // 补充题目：平移 (kp5_6)
  {
    id: 'qz5_9',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_6',
    type: 'single_choice',
    content: '将三角形ABC向右平移3个单位，再向上平移2个单位得到三角形A\'B\'C\'，若点A的坐标为(1,1)，则点A\'的坐标为（）',
    options: ['(4,3)', '(4,-1)', '(-2,3)', '(-2,-1)'],
    answer: 'A',
    analysis: '向右平移3个单位：1+3=4；向上平移2个单位：1+2=3，A\'(4,3)',
    difficulty: 'easy',
    points: 5,
    year: '2023',
    district: '朝阳',
    examType: '期中',
    thinking: '平移规律：向右平移横坐标增加，向上平移纵坐标增加。',
    steps: [
      { step: 1, title: '向右平移', content: '横坐标：1+3=4', highlight: true },
      { step: 2, title: '向上平移', content: '纵坐标：1+2=3', highlight: true },
      { step: 3, title: '得出坐标', content: 'A\'(4,3)', highlight: false }
    ],
    keyPoints: ['平移规律', '右加左减（横坐标）', '上加下减（纵坐标）'],
    commonMistakes: ['符号错误', '横纵坐标混淆'],
    similarQuestions: [
      { id: 'qz5_10', content: '点P(-2,3)向左平移2个单位，再向下平移1个单位后的坐标为____', difficulty: 'easy' }
    ]
  },
  {
    id: 'qz5_10',
    chapterId: 'ch5',
    knowledgePointId: 'kp5_6',
    type: 'fill_blank',
    content: '点P(-2,3)向左平移2个单位，再向下平移1个单位后的坐标为____。',
    answer: '(-4,2)',
    analysis: '向左平移2个单位：-2-2=-4；向下平移1个单位：3-1=2',
    difficulty: 'easy',
    points: 5,
    year: '2024',
    district: '昌平',
    examType: '期末',
    thinking: '平移规律：向左平移横坐标减小，向下平移纵坐标减小。',
    steps: [
      { step: 1, title: '向左平移', content: '横坐标：-2-2=-4', highlight: true },
      { step: 2, title: '向下平移', content: '纵坐标：3-1=2', highlight: true },
      { step: 3, title: '得出坐标', content: '(-4,2)', highlight: false }
    ],
    keyPoints: ['平移规律', '左减（横坐标）', '下减（纵坐标）'],
    commonMistakes: ['(-4,4)（向下算成加）', '(0,2)（向左算成加）'],
    similarQuestions: [
      { id: 'qz5_9', content: '将三角形ABC向右平移3个单位，再向上平移2个单位，若A(1,1)，则A\'的坐标为（）', difficulty: 'easy' }
    ]
  }
]
