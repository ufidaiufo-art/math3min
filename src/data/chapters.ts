export interface ChapterData {
  id: string
  title: string
  subtitle: string
  description: string
  order: number
  knowledgePointIds: string[]
  questionCount: number
  difficulty: 'easy' | 'medium' | 'hard'
  estimatedTime: number
  color: string
  icon: string
  isKeyChapter: boolean
  sections: string[]
}

export const chapters: ChapterData[] = [
  {
    id: 'ch1',
    title: '有理数',
    subtitle: '正负数与运算',
    description: '有理数是初中数学的基础。本章从正数和负数的概念引入，学习有理数的分类、数轴、相反数、绝对值，以及有理数的四则运算、乘方和科学记数法。',
    order: 1,
    knowledgePointIds: ['kp1_1', 'kp1_2', 'kp1_3', 'kp1_4', 'kp1_5', 'kp1_6', 'kp1_7', 'kp1_8', 'kp1_9', 'kp1_10', 'kp1_11', 'kp1_12'],
    questionCount: 32,
    difficulty: 'medium',
    estimatedTime: 45,
    color: '#5B7CF9',
    icon: '🔢',
    isKeyChapter: true,
    sections: [
      '1.1 正数和负数',
      '1.2 有理数',
      '1.3 数轴',
      '1.4 相反数',
      '1.5 绝对值',
      '1.6 有理数的大小比较',
      '1.7 有理数的加法',
      '1.8 有理数的减法',
      '1.9 有理数的乘法',
      '1.10 有理数的除法',
      '1.11 乘方',
      '1.12 科学记数法'
    ]
  },
  {
    id: 'ch2',
    title: '整式的加减',
    subtitle: '单项式与多项式',
    description: '本章学习单项式、多项式、同类项的概念，掌握合并同类项、去括号和添括号的法则，能够进行整式的加减运算。本章只包含七年级整式加减内容，乘法公式和因式分解是八年级内容。',
    order: 2,
    knowledgePointIds: ['kp2_1', 'kp2_2', 'kp2_3', 'kp2_4', 'kp2_5', 'kp2_6'],
    questionCount: 16,
    difficulty: 'easy',
    estimatedTime: 35,
    color: '#10B981',
    icon: '📐',
    isKeyChapter: false,
    sections: [
      '2.1 代数式',
      '2.2 单项式',
      '2.3 多项式',
      '2.4 同类项',
      '2.5 去括号法则',
      '2.6 整式的加减'
    ]
  },
  {
    id: 'ch3',
    title: '一元一次方程',
    subtitle: '方程与解法',
    description: '本章学习一元一次方程的概念和等式的性质，掌握解一元一次方程的方法，能够列方程解决实际问题。',
    order: 3,
    knowledgePointIds: ['kp3_1', 'kp3_2', 'kp3_3', 'kp3_4', 'kp3_5', 'kp3_6'],
    questionCount: 15,
    difficulty: 'hard',
    estimatedTime: 50,
    color: '#F59E0B',
    icon: '⚡',
    isKeyChapter: true,
    sections: [
      '3.1 方程的基本概念',
      '3.2 等式的性质',
      '3.3 一元一次方程',
      '3.4 解一元一次方程的步骤',
      '3.5 实际问题与一元一次方程'
    ]
  },
  {
    id: 'ch4',
    title: '几何图形初步',
    subtitle: '点线面角',
    description: '本章从生活中的实物抽象出几何图形，学习立体图形和平面图形，掌握直线、射线、线段和角的概念及性质。',
    order: 4,
    knowledgePointIds: ['kp4_1', 'kp4_2', 'kp4_3', 'kp4_4', 'kp4_5'],
    questionCount: 11,
    difficulty: 'easy',
    estimatedTime: 30,
    color: '#8B5CF6',
    icon: '📐',
    isKeyChapter: false,
    sections: [
      '4.1 几何图形',
      '4.2 直线、射线、线段',
      '4.3 角',
      '4.4 角的互余与互补',
      '4.5 角平分线'
    ]
  },
  {
    id: 'ch5',
    title: '相交线与平行线',
    subtitle: '线与角的关系',
    description: '本章学习相交线和平行线的概念和性质，掌握平行线的判定方法和性质，理解平移的概念。',
    order: 5,
    knowledgePointIds: ['kp5_1', 'kp5_2', 'kp5_3', 'kp5_4', 'kp5_5', 'kp5_6'],
    questionCount: 14,
    difficulty: 'medium',
    estimatedTime: 40,
    color: '#EC4899',
    icon: '📏',
    isKeyChapter: true,
    sections: [
      '5.1 相交线',
      '5.2 三线八角',
      '5.3 平行线及其判定',
      '5.4 平行线的性质',
      '5.5 命题与定理',
      '5.6 平移'
    ]
  },
  {
    id: 'ch6',
    title: '实数',
    subtitle: '平方根与立方根',
    description: '本章学习平方根、立方根的概念，理解无理数和实数的概念，掌握实数的运算。',
    order: 6,
    knowledgePointIds: ['kp6_1', 'kp6_2', 'kp6_3', 'kp6_4'],
    questionCount: 22,
    difficulty: 'medium',
    estimatedTime: 35,
    color: '#06B6D4',
    icon: '√',
    isKeyChapter: false,
    sections: [
      '6.1 平方根',
      '6.2 立方根',
      '6.3 实数',
      '6.4 实数的运算'
    ]
  },
  {
    id: 'ch7',
    title: '平面直角坐标系',
    subtitle: '坐标与位置',
    description: '本章学习平面直角坐标系的概念，掌握点的坐标的确定方法，理解坐标方法的简单应用。',
    order: 7,
    knowledgePointIds: ['kp7_1', 'kp7_2', 'kp7_3', 'kp7_4', 'kp7_5'],
    questionCount: 11,
    difficulty: 'easy',
    estimatedTime: 25,
    color: '#84CC16',
    icon: '📍',
    isKeyChapter: false,
    sections: [
      '7.1 有序数对',
      '7.2 平面直角坐标系',
      '7.3 四个象限',
      '7.4 点坐标的平移',
      '7.5 对称点的坐标'
    ]
  },
  {
    id: 'ch8',
    title: '二元一次方程组',
    subtitle: '消元法求解',
    description: '本章学习二元一次方程组的概念和解法，掌握用二元一次方程组解决实际问题的方法。',
    order: 8,
    knowledgePointIds: ['kp8_1', 'kp8_2', 'kp8_3', 'kp8_4', 'kp8_5'],
    questionCount: 10,
    difficulty: 'hard',
    estimatedTime: 45,
    color: '#F97316',
    icon: '📊',
    isKeyChapter: true,
    sections: [
      '8.1 二元一次方程',
      '8.2 二元一次方程组',
      '8.3 解二元一次方程组——代入消元法',
      '8.4 解二元一次方程组——加减消元法',
      '8.5 实际问题与二元一次方程组'
    ]
  },
  {
    id: 'ch9',
    title: '不等式与不等式组',
    subtitle: '不等关系',
    description: '本章学习不等式的概念和性质，掌握一元一次不等式和不等式组的解法，能够解决实际问题。',
    order: 9,
    knowledgePointIds: ['kp9_1', 'kp9_2', 'kp9_3', 'kp9_4', 'kp9_5'],
    questionCount: 10,
    difficulty: 'medium',
    estimatedTime: 30,
    color: '#EF4444',
    icon: '⚖️',
    isKeyChapter: false,
    sections: [
      '9.1 不等式',
      '9.2 不等式的性质',
      '9.3 一元一次不等式',
      '9.4 一元一次不等式组',
      '9.5 一元一次不等式的应用'
    ]
  },
  {
    id: 'ch10',
    title: '数据的收集、整理与描述',
    subtitle: '统计基础',
    description: '本章学习统计调查的基本方法，掌握频数分布表和直方图的制作，能够选择合适的统计图描述数据。',
    order: 10,
    knowledgePointIds: ['kp10_1', 'kp10_2', 'kp10_3', 'kp10_4'],
    questionCount: 18,
    difficulty: 'easy',
    estimatedTime: 25,
    color: '#14B8A6',
    icon: '📈',
    isKeyChapter: false,
    sections: [
      '10.1 统计调查',
      '10.2 数据的整理',
      '10.3 直方图',
      '10.4 统计图的选择'
    ]
  }
]

export const getChapterById = (id: string): ChapterData | undefined => {
  // 支持两种格式: 'ch1' 或 'chapter-1'
  const normalizedId = id.startsWith('chapter-') 
    ? `ch${id.replace('chapter-', '')}` 
    : id
  return chapters.find(ch => ch.id === normalizedId)
}

export const getAllChapters = (): ChapterData[] => {
  return chapters.sort((a, b) => a.order - b.order)
}

// 总知识点数
export const totalKnowledgePoints = chapters.reduce((sum, ch) => sum + ch.sections.length, 0)

// 总题数
export const totalQuestions = chapters.reduce((sum, ch) => sum + ch.questionCount, 0)