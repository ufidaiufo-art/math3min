import type { QuestionData } from './types'

// 第10章题目数据
export const chapter10Questions: QuestionData[] = [
{
    id: 'q10_1_1',
    chapterId: 'ch10',
    knowledgePointId: 'kp10_1',
    type: 'single_choice',
    content: '下列调查中，适合采用全面调查的是（ ）。',
    options: ['调查某批次灯泡的使用寿命', '调查某班学生的身高', '调查全国中学生的视力情况', '调查某批次食品的质量'],
    answer: 'B',
    analysis: 'B范围小，适合全面调查。',
    difficulty: 'easy',
    points: 5,
    thinking: '全面调查（普查）适用于：范围小、容易调查、必须精确的情况。抽样调查适用于：范围大、具有破坏性、不必要全面调查的情况。分析各选项特点。',
    steps: [
      { step: 1, title: '分析选项A', content: '调查灯泡使用寿命需要点亮灯泡直至损坏，具有破坏性，适合抽样调查', highlight: false },
      { step: 2, title: '分析选项B', content: '一个班的学生人数少，范围小，容易调查，适合全面调查', highlight: true },
      { step: 3, title: '分析选项C', content: '全国中学生数量巨大，范围太大，适合抽样调查', highlight: false },
      { step: 4, title: '分析选项D', content: '调查食品质量可能需要破坏食品，具有破坏性，适合抽样调查', highlight: false }
    ],
    keyPoints: ['全面调查的适用条件', '抽样调查的适用条件', '破坏性试验适合抽样', '范围太大适合抽样'],
    commonMistakes: ['对范围大的调查选择全面调查', '忽视破坏性试验的特点', '混淆两种调查方式'],
    similarQuestions: [
      { id: 'qz10_1', content: '下列调查中，适合采用全面调查（普查）方式的是（）', difficulty: 'medium' },
      { id: 'qz10_5', content: '下列调查中，适合采用抽样调查的是（）', difficulty: 'medium' }
    ]
  },
{
    id: 'q10_2_1',
    chapterId: 'ch10',
    knowledgePointId: 'kp10_2',
    type: 'fill_blank',
    content: '在频数分布表中，各组的频率之和等于____。',
    answer: '1',
    analysis: '所有频率之和为1（或100%）。',
    difficulty: 'easy',
    points: 5,
    thinking: '频率=频数÷总数。所有组的频数之和等于数据总数，所以各组频率之和=（各组频数之和）÷总数=总数÷总数=1。',
    steps: [
      { step: 1, title: '理解频率定义', content: '频率 = 频数 ÷ 数据总数', highlight: false },
      { step: 2, title: '分析各组频数', content: '所有组的频数之和 = 数据总数', highlight: false },
      { step: 3, title: '计算频率之和', content: '各组频率之和 = （各组频数之和）÷ 总数 = 总数 ÷ 总数 = 1', highlight: true }
    ],
    keyPoints: ['频率的定义', '频率之和为1', '频率可以用百分数表示'],
    commonMistakes: ['填100（混淆了百分数）', '填总数', '不理解频率的性质'],
    similarQuestions: [
      { id: 'qz10_2', content: '某班50名学生数学成绩分布：90-100分10人，80-89分20人，70-79分12人，60-69分5人，60分以下3人。则80-89分的频率是____。', difficulty: 'medium' }
    ]
  },
{
    id: 'q10_3_1',
    chapterId: 'ch10',
    knowledgePointId: 'kp10_3',
    type: 'single_choice',
    content: '要清楚地表示出各部分在总体中所占的百分比，应选用（ ）统计图。',
    options: ['条形', '扇形', '折线', '直方图'],
    answer: 'B',
    analysis: '扇形统计图显示百分比。',
    difficulty: 'easy',
    points: 5,
    thinking: '不同统计图有不同特点：条形统计图适合比较数量多少；扇形统计图适合显示各部分占总体的百分比；折线统计图适合显示数据变化趋势；直方图适合显示数据分布情况。',
    steps: [
      { step: 1, title: '分析条形统计图', content: '条形统计图用于比较不同类别之间的数量多少，不适合显示百分比', highlight: false },
      { step: 2, title: '分析扇形统计图', content: '扇形统计图用整个圆表示总体，各扇形表示各部分，直观显示各部分所占百分比', highlight: true },
      { step: 3, title: '分析折线统计图', content: '折线统计图用于显示数据随时间或其他因素的变化趋势，不适合显示百分比', highlight: false },
      { step: 4, title: '分析直方图', content: '频数分布直方图用于显示数据的分布情况，不适合显示百分比', highlight: false }
    ],
    keyPoints: ['条形统计图的特点', '扇形统计图的特点', '折线统计图的特点', '直方图的特点'],
    commonMistakes: ['混淆各种统计图的特点', '选条形统计图', '不理解扇形统计图的用途'],
    similarQuestions: [
      { id: 'qz10_3', content: '要清楚地反映某同学一学期数学成绩的变化趋势，应选用（）统计图', difficulty: 'easy' }
    ]
  },
{
    id: 'qz10_1',
    chapterId: 'ch10',
    knowledgePointId: 'kp10_1',
    type: 'single_choice',
    content: '下列调查中，适合采用全面调查（普查）方式的是（）',
    options: ['了解某市学生的视力情况', '了解一批节能灯的使用寿命', '了解某校七年级（1）班学生的身高情况', '了解全国中学生的课外阅读情况'],
    answer: 'C',
    analysis: '范围小的适合全面调查',
    difficulty: 'medium',
    points: 5,
    year: '2022',
    district: '房山',
    examType: '期末',
    thinking: '全面调查适用于范围小、容易调查、不需要破坏调查对象的情况。一个班的学生范围最小，适合全面调查。',
    steps: [
      { step: 1, title: '分析A', content: '某市学生范围大，适合抽样调查', highlight: false },
      { step: 2, title: '分析B', content: '测试使用寿命有破坏性，适合抽样调查', highlight: false },
      { step: 3, title: '分析C', content: '一个班的学生范围小，容易调查，适合全面调查', highlight: true },
      { step: 4, title: '分析D', content: '全国中学生范围太大，适合抽样调查', highlight: false }
    ],
    keyPoints: ['全面调查的适用条件', '抽样调查的适用条件'],
    commonMistakes: ['对大范围调查选择全面调查'],
    similarQuestions: [
      { id: 'q10_1_1', content: '下列调查中，适合采用全面调查的是（ ）。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz10_2',
    chapterId: 'ch10',
    knowledgePointId: 'kp10_2',
    type: 'fill_blank',
    content: '某班50名学生数学成绩分布：90-100分10人，80-89分20人，70-79分12人，60-69分5人，60分以下3人。则80-89分的频率是____。',
    answer: '0.4',
    analysis: '20÷50=0.4',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '昌平',
    examType: '期末',
    thinking: '频率=频数÷总数。80-89分的频数是20人，总人数是50人，所以频率=20÷50=0.4。',
    steps: [
      { step: 1, title: '确定频数', content: '80-89分的人数是20人', highlight: false },
      { step: 2, title: '确定总数', content: '总人数是50人', highlight: false },
      { step: 3, title: '计算频率', content: '频率 = 20 ÷ 50 = 0.4', highlight: true }
    ],
    keyPoints: ['频率的定义', '频率=频数÷总数', '频率之和为1'],
    commonMistakes: ['计算错误：20÷50=0.2', '与频数混淆直接填20', '填写成百分数40'],
    similarQuestions: [
      { id: 'q10_2_1', content: '在频数分布表中，各组的频率之和等于____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz10_3',
    chapterId: 'ch10',
    knowledgePointId: 'kp10_3',
    type: 'single_choice',
    content: '要清楚地反映某同学一学期数学成绩的变化趋势，应选用（）统计图',
    options: ['条形', '扇形', '折线', '频数分布直方图'],
    answer: 'C',
    analysis: '折线统计图适合表示变化趋势',
    difficulty: 'easy',
    points: 5,
    year: '2022',
    district: '门头沟',
    examType: '期中',
    thinking: '不同统计图有不同特点：条形统计图适合比较数量多少；扇形统计图适合显示各部分占总体的百分比；折线统计图适合显示数据变化趋势；直方图适合显示数据分布情况。题目要求反映"变化趋势"，应选折线统计图。',
    steps: [
      { step: 1, title: '分析条形统计图', content: '用于比较不同类别之间的数量多少，不适合显示变化趋势', highlight: false },
      { step: 2, title: '分析扇形统计图', content: '用于显示各部分占总体的百分比，不适合显示变化趋势', highlight: false },
      { step: 3, title: '分析折线统计图', content: '用于显示数据随时间或其他因素的变化趋势，符合题意', highlight: true },
      { step: 4, title: '分析直方图', content: '用于显示数据的分布情况，不适合显示变化趋势', highlight: false }
    ],
    keyPoints: ['折线统计图的特点', '不同统计图的适用场景'],
    commonMistakes: ['选条形统计图', '选扇形统计图', '混淆各种统计图的特点'],
    similarQuestions: [
      { id: 'q10_3_1', content: '要清楚地表示出各部分在总体中所占的百分比，应选用（ ）统计图。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz10_4',
    chapterId: 'ch10',
    knowledgePointId: 'kp10_4',
    type: 'single_choice',
    content: '样本容量为100，最大值为120，最小值为60，取组距为10，则可分成（）组',
    options: ['5', '6', '7', '8'],
    answer: 'C',
    analysis: '(120-60)÷10=6，需要7组',
    difficulty: 'medium',
    points: 5,
    year: '2024',
    district: '西城',
    examType: '期末',
    thinking: '组数的计算方法：先求极差（最大值-最小值），再除以组距。如果整除，组数=商；如果有余数，组数=商+1。本题极差=120-60=60，60÷10=6，刚好整除，但需要考虑边界值，实际分成7组。',
    steps: [
      { step: 1, title: '计算极差', content: '极差 = 最大值 - 最小值 = 120 - 60 = 60', highlight: false },
      { step: 2, title: '计算组数', content: '组数 = 极差 ÷ 组距 = 60 ÷ 10 = 6', highlight: false },
      { step: 3, title: '确定最终组数', content: '由于要包含所有数据，实际分成7组：60-70,70-80,80-90,90-100,100-110,110-120,120-130', highlight: true }
    ],
    keyPoints: ['极差的计算', '组数的确定', '组距、组数、极差的关系'],
    commonMistakes: ['选6（忘记加1）', '计算错误', '不理解组数确定方法'],
    similarQuestions: [
      { id: 'q10_2_1', content: '在频数分布表中，各组的频率之和等于____。', difficulty: 'easy' }
    ]
  },
{
    id: 'qz10_5',
    chapterId: 'ch10',
    knowledgePointId: 'kp10_1',
    type: 'single_choice',
    content: '下列调查中，适合采用抽样调查的是（）',
    options: ['了解某班学生的视力情况', '调查神舟飞船零件的质量', '了解一批灯泡的使用寿命', '了解某校学生的体育达标情况'],
    answer: 'C',
    analysis: '灯泡测试具有破坏性，适合抽样调查',
    difficulty: 'medium',
    points: 5,
    year: '2023',
    district: '朝阳',
    examType: '期中',
    thinking: '全面调查（普查）适用于：范围小、容易调查、必须精确的情况。抽样调查适用于：范围大、具有破坏性、不必要全面调查的情况。分析各选项特点。',
    steps: [
      { step: 1, title: '分析选项A', content: '一个班的学生范围小，适合全面调查', highlight: false },
      { step: 2, title: '分析选项B', content: '神舟飞船零件质量要求高，必须精确，适合全面调查', highlight: false },
      { step: 3, title: '分析选项C', content: '测试灯泡使用寿命需要点亮直至损坏，具有破坏性，适合抽样调查', highlight: true },
      { step: 4, title: '分析选项D', content: '一个学校的学生可以全面调查', highlight: false }
    ],
    keyPoints: ['全面调查的适用条件', '抽样调查的适用条件', '破坏性试验适合抽样'],
    commonMistakes: ['对重要零件选择抽样调查', '对破坏性调查选择全面调查'],
    similarQuestions: [
      { id: 'q10_1_1', content: '下列调查中，适合采用全面调查的是（ ）。', difficulty: 'easy' }
    ]
  }
]
