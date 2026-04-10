// 初二数学题目数据文件
// 基于北京各区县2022-2024年真题整理
// 每个知识点分配5-10道相关题目
import { questions_continue } from './questions_continue'
import { questions_004 } from './questions_004'
import { questions_005 } from './questions_005'
import { questions_006 } from './questions_006'
import { questions_007 } from './questions_007'
import { questions_008 } from './questions_008'
import { questions_009 } from './questions_009'
import { questions_010 } from './questions_010'
import { questions_011 } from './questions_011'
import { questions_012 } from './questions_012'
import { questions_013 } from './questions_013'
import { questions_014 } from './questions_014'
import { questions_015 } from './questions_015'
import { questions_016 } from './questions_016'
import { questions_017 } from './questions_017'
import { questions_018 } from './questions_018'
import { questions_019 } from './questions_019'
import { questions_020 } from './questions_020'
import { questions_021 } from './questions_021'
import { questions_022 } from './questions_022'
import { questions_023 } from './questions_023'
import { questions_024 } from './questions_024'
import { questions_025 } from './questions_025'
import { questions_026 } from './questions_026'
import { questions_027 } from './questions_027'
import { questions_028 } from './questions_028'
import { questions_029 } from './questions_029'
import { questions_030 } from './questions_030'
import { questions_031 } from './questions_031'
import { questions_032 } from './questions_032'
import { questions_033 } from './questions_033'
import { questions_034 } from './questions_034'
import { questions_035 } from './questions_035'

export const questions = [
  // kp_001: 实数概念 - 10道题
  {
    id: 'kp_001_001',
    knowledgePointId: 'kp_001',
    type: 'choice',
    difficulty: 1,
    question: '下列各数中是正数的是（）\nA. 0  B. -1  C. -(-0.5)  D. -(+2)',
    answer: 'C',
    analysis: '-(-0.5) = 0.5 > 0，是正数',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_001_002',
    knowledgePointId: 'kp_001',
    type: 'choice',
    difficulty: 1,
    question: '实数3的相反数是（）\nA. 3  B. 1/3  C. -1/3  D. -3',
    answer: 'D',
    analysis: '相反数是指数值相等、符号相反的数',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_001_003',
    knowledgePointId: 'kp_001',
    type: 'choice',
    difficulty: 1,
    question: '|-3|的值是（）\nA. -3  B. 3  C. -1/3  D. 1/3',
    answer: 'B',
    analysis: '负数的绝对值是它的相反数',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_001_004',
    knowledgePointId: 'kp_001',
    type: 'choice',
    difficulty: 2,
    question: '(-3)²的值是（）\nA. -9  B. 9  C. -6  D. 6',
    answer: 'B',
    analysis: '(-3)² = (-3) × (-3) = 9',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_001_005',
    knowledgePointId: 'kp_001',
    type: 'choice',
    difficulty: 2,
    question: '中国自主研发的某手机芯片内集成了约153亿个晶体管，将15300000000用科学记数法表示应为（）\nA. 0.153×10¹⁰  B. 1.53×10⁹  C. 1.53×10¹⁰  D. 15.3×10⁹',
    answer: 'C',
    analysis: '15300000000 = 1.53×10¹⁰',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_001_006',
    knowledgePointId: 'kp_001',
    type: 'fill',
    difficulty: 1,
    question: '如果收入100元记作+100元，那么支出80元记作______元。',
    answer: '-80',
    analysis: '支出与收入相反，记作负数',
    source: '2024北京北京中学初一（上）期中数学'
  },
  {
    id: 'kp_001_007',
    knowledgePointId: 'kp_001',
    type: 'choice',
    difficulty: 2,
    question: '在实数范围内，最小的数是（ ）\nA. -∞  B. 0  C. 不存在  D. -1',
    answer: 'C',
    analysis: '实数范围没有最小值，负无穷不是实数',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_001_008',
    knowledgePointId: 'kp_001',
    type: 'choice',
    difficulty: 2,
    question: '计算(-2)³的结果是（）\nA. -6  B. 6  C. -8  D. 8',
    answer: 'C',
    analysis: '(-2)³ = (-2) × (-2) × (-2) = -8',
    source: '2022北京西城初一（上）期末数学试卷'
  },
  {
    id: 'kp_001_009',
    knowledgePointId: 'kp_001',
    type: 'fill',
    difficulty: 2,
    question: '计算：(-1)²⁰²² + (-1)²⁰²³ = ______',
    answer: '0',
    analysis: '(-1)的偶数次方为1，奇数次方为-1，所以1 + (-1) = 0',
    source: '2023北京东城初一（上）期中数学试卷'
  },
  {
    id: 'kp_001_010',
    knowledgePointId: 'kp_001',
    type: 'choice',
    difficulty: 2,
    question: '9的算术平方根是（）\nA. ±3  B. 3  C. -3  D. ±9',
    answer: 'B',
    analysis: '算术平方根是非负根',
    source: '2022北京怀柔初一（下）期末数学试卷'
  },

  // kp_002: 整式运算 - 8道题
  {
    id: 'kp_002_001',
    knowledgePointId: 'kp_002',
    type: 'choice',
    difficulty: 2,
    question: '对于多项式3x² - 4x + y，下列说法正确的是（）\nA. 二次项系数是3\nB. 常数项是4\nC. 次数是3\nD. 项数是2',
    answer: 'A',
    analysis: '多项式3x² - 4x + y的二次项是3x²，系数为3',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_002_002',
    knowledgePointId: 'kp_002',
    type: 'choice',
    difficulty: 2,
    question: '下列整式中与2ab是同类项的为（）\nA. a²b  B. -ab²  C. ab  D. 2abc',
    answer: 'C',
    analysis: '同类项要求字母相同，相同字母的指数也相同',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_002_003',
    knowledgePointId: 'kp_002',
    type: 'solution',
    difficulty: 2,
    question: '化简：3a + 2b - 5a + 4b',
    answer: '-2a + 6b',
    analysis: '合并同类项：(3a - 5a) + (2b + 4b) = -2a + 6b',
    source: '2024北京重点校期中真题汇编'
  },
  {
    id: 'kp_002_004',
    knowledgePointId: 'kp_002',
    type: 'solution',
    difficulty: 3,
    question: '先化简，再求值：2(x² - 2xy) - 3(x² - xy)，其中x = -1，y = 2',
    answer: '1',
    analysis: '原式 = 2x² - 4xy - 3x² + 3xy = -x² - xy。当x=-1，y=2时：-(-1)² - (-1)×2 = -1 + 2 = 1',
    source: '2023北京海淀初一（上）期中数学试卷'
  },
  {
    id: 'kp_002_005',
    knowledgePointId: 'kp_002',
    type: 'choice',
    difficulty: 2,
    question: '单项式 -3xy²z 的系数和次数分别是（）\nA. -3，3  B. -3，4  C. 3，4  D. 3，3',
    answer: 'B',
    analysis: '系数为-3，次数为1+2+1=4',
    source: '2023北京丰台初一（上）期中数学试卷'
  },
  {
    id: 'kp_002_006',
    knowledgePointId: 'kp_002',
    type: 'fill',
    difficulty: 2,
    question: '若 3x^(m+2)y³ 与 -2x⁵y^n 是同类项，则 m+n =______',
    answer: '6',
    analysis: 'm+2=5，所以m=3；n=3。m+n=6',
    source: '2023北京通州初一（上）期中数学试卷'
  },
  {
    id: 'kp_002_007',
    knowledgePointId: 'kp_002',
    type: 'fill',
    difficulty: 3,
    question: '化简：2(a - 3b) - 3(2a - b) = ______',
    answer: '-4a - 3b',
    analysis: '2a - 6b - 6a + 3b = -4a - 3b',
    source: '2024北京昌平初一（上）期中数学试卷'
  },
  {
    id: 'kp_002_008',
    knowledgePointId: 'kp_002',
    type: 'solution',
    difficulty: 3,
    question: '计算：3(x - 2y) - 2(2x - y)',
    answer: '-x - 4y',
    analysis: '3x - 6y - 4x + 2y = -x - 4y',
    source: '2024北京重点校期中真题汇编'
  },
  ...questions_continue,
  ...questions_004,
  ...questions_005,
  ...questions_006,
  ...questions_007,
  ...questions_008,
  ...questions_009,
  ...questions_010,
  ...questions_011,
  ...questions_012,
  ...questions_013,
  ...questions_014,
  ...questions_015,
  ...questions_016,
  ...questions_017,
  ...questions_018,
  ...questions_019,
  ...questions_020,
  ...questions_021,
  ...questions_022,
  ...questions_023,
  ...questions_024,
  ...questions_025,
  ...questions_026,
  ...questions_027,
  ...questions_028,
  ...questions_029,
  ...questions_030,
  ...questions_031,
  ...questions_032,
  ...questions_033,
  ...questions_034,
  ...questions_035,
];
