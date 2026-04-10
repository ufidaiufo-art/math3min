import type { KnowledgePointData } from '../../../data/knowledgePoints'
import { kp_030, kp_030_example } from './knowledgePoints_30'
import { kp_031, kp_031_example } from './knowledgePoints_31'
import { kp_032, kp_032_example } from './knowledgePoints_32'
import { kp_033, kp_033_example } from './knowledgePoints_33'
import { kp_034, kp_034_example } from './knowledgePoints_34'
import { kp_035, kp_035_example } from './knowledgePoints_35'

export const knowledgePoints: KnowledgePointData[] = [
  // 代数基础 - 第1章: 实数概念 (kp_001)
  {
    id: 'kp_001',
    chapterId: 'ch1',
    order: 1,
    title: '实数概念',
    content: '理解实数的定义和分类，掌握有理数和无理数的区别，能够准确识别不同类型的实数。',
    videoScript: `实数定义：有理数和无理数的统称。
有理数：可以表示为分数形式的数，包括整数、分数、有限小数和循环小数。
无理数：不能表示为分数形式的数，包括无限不循环小数和特殊常数。
实数分类：正实数、负实数、零。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 1,
    example: {
      question: `将下列各数分类：-3, 0, 3.14, √2, 22/7, -0.1010010001...`,
      analysis: `-3, 0, 22/7是有理数；3.14是有限小数，也是有理数；√2是无理数；-0.1010010001...是无限不循环小数，是无理数。`,
    },
    exercises: [
      {
        id: 'kp_001_1',
        question: `下列实数中，有理数的个数是：0.333..., -5, √9, π, 0.123456...`,
        answer: '3个',
        analysis: `0.333...是循环小数，-5是整数，√9=3是整数，都是有理数；π和0.123456...是无理数。`,
      },
      {
        id: 'kp_001_2',
        question: `判断：所有的分数都是有理数，所有的整数也都是有理数。`,
        answer: '正确',
        analysis: `分数形式p/q（q≠0）定义的就是有理数，整数可以看作分母为1的分数。`,
      },
      {
        id: 'kp_001_3',
        question: `在实数范围内，最小的数是（ ）A. -∞ B. 0 C. 不存在 D. -1`,
        answer: 'C',
        analysis: `实数范围没有最小值，负无穷不是实数。`,
      }
    ],
    formulas: ['实数 = 有理数 ∪ 无理数', '有理数 = 整数 ∪ 分数']
  },
  // 实数概念 - 例题讲解
  {
    id: 'kp_001_example',
    chapterId: 'ch1',
    order: 2,
    title: '实数概念 - 例题讲解',
    content: '通过典型例题巩固实数分类方法，掌握实数运算的基本技巧。',
    videoScript: `例题1：实数分类练习
例题2：实数大小比较
例题3：实数运算基础`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 2,
    example: {
      question: `比较下列实数的大小：-√2, -1.5, -1.414, -4/3`,
      analysis: `将各数转换为小数形式：-√2≈-1.4142, -1.5, -1.414, -4/3≈-1.333。按从大到小排列：-4/3 > -1.4142 > -1.414 > -1.5。`,
    },
    exercises: [
      {
        id: 'kp_001_example_1',
        question: `已知a是最小的正整数，b是最大的负整数，c是绝对值最小的实数，求a+b+c的值。`,
        answer: '0',
        analysis: `a=1, b=-1, c=0, 所以1+(-1)+0=0。`,
      },
      {
        id: 'kp_001_example_2',
        question: `实数a、b在数轴上的位置如图所示，化简|a-b|-|a+b|。`,
        answer: '-2b',
        analysis: `根据数轴判断a<0<b且|a|<|b|，所以a-b<0, a+b>0，原式=-(a-b)-(a+b)=-2b。`,
      }
    ]
  },

  // 代数基础 - 第2章: 整式运算 (kp_002)
  {
    id: 'kp_002',
    chapterId: 'ch1',
    order: 3,
    title: '整式运算',
    content: '掌握整式的加减乘除运算，理解合并同类项的原理，能够熟练进行整式的化简求值。',
    videoScript: `整式定义：单项式和多项式的统称。
同类项：所含字母相同，相同字母的指数也相同。
合并同类项：系数相加，字母和字母的指数不变。
整式加减：去括号，合并同类项。
整式乘除：系数相乘除，同底数幂相乘除。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 3,
    example: {
      question: `计算：(3x²y - 2xy² + 5) - (2x²y + 4xy² - 3)`,
      analysis: `去括号得3x²y - 2xy² + 5 - 2x²y - 4xy² + 3，合并同类项得x²y - 6xy² + 8。`,
    },
    exercises: [
      {
        id: 'kp_002_1',
        question: `下列各组是同类项的是（ ）
A. 2x²y和3xy²
B. -ab和3ba
C. -3xy和-3x²y
D. 2x和2x²`,
        answer: 'B',
        analysis: `同类项要求字母相同且指数相同，-ab和3ba字母都是a、b，指数都是1。`,
      },
      {
        id: 'kp_002_2',
        question: `计算：2a²b - [3ab² - (4a²b + 2ab²) - a²b]`,
        answer: '7a²b - 5ab²',
        analysis: `去括号得2a²b - 3ab² + 4a²b + 2ab² - a²b，合并同类项得7a²b - ab²。`,
      },
      {
        id: 'kp_002_3',
        question: `若M=3x²-5x+2，N=3x²-5x-2，则M-N的结果是（ ）
A. 4
B. -4
C. 0
D. 2x²-10x`,
        answer: 'A',
        analysis: `M-N=(3x²-5x+2)-(3x²-5x-2)=3x²-5x+2-3x²+5x+2=4。`,
      }
    ],
    formulas: ['am × an = am+n', '(am)n = amn', '(ab)n = anbn']
  },
  // 整式运算 - 例题讲解
  {
    id: 'kp_002_example',
    chapterId: 'ch1',
    order: 4,
    title: '整式运算 - 例题讲解',
    content: '通过典型例题掌握整式运算技巧，理解运算中的常见错误点。',
    videoScript: `例题1：复杂整式化简
例题2：整式求值
例题3：整式运算应用`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 4,
    example: {
      question: `先化简，再求值：3(2x² - 3x + 1) - 2(x² + 2x - 4)，其中x = -2`,
      analysis: `原式=6x²-9x+3-2x²-4x+8=4x²-13x+11。当x=-2时，原式=4×4-13×(-2)+11=16+26+11=53。`,
    },
    exercises: [
      {
        id: 'kp_002_example_1',
        question: `若|x+2|+(y-3)²=0，求3x²y-[2xy²-(2x²y-xy²)]的值。`,
        answer: '48',
        analysis: `由非负性得x=-2,y=3。原式=3x²y-2xy²+2x²y-xy²=5x²y-3xy²=5×4×3-3×(-2)×9=60+54=114。`,
      },
      {
        id: 'kp_002_example_2',
        question: `已知A=2x²+3xy-2x，B=x²-xy+2x，求3A-2B。`,
        answer: '4x²+11xy-10x',
        analysis: `3A-2B=3(2x²+3xy-2x)-2(x²-xy+2x)=6x²+9xy-6x-2x²+2xy-4x=4x²+11xy-10x。`,
      }
    ]
  },

  // 代数基础 - 第3章: 分式方程 (kp_003)
  {
    id: 'kp_003',
    chapterId: 'ch1',
    order: 5,
    title: '分式方程',
    content: '理解分式方程的概念，掌握去分母的方法，能够解可化为一元一次方程的分式方程。',
    videoScript: `分式方程定义：分母中含有未知数的方程。
解法步骤：1.找最简公分母 2.去分母 3.解整式方程 4.验根
最简公分母：所有分母的最小公倍式。
增根：使最简公分母为零的根。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 5,
    example: {
      question: `解方程：1/(x-2) + 2 = 3/(x-2)`,
      analysis: `最简公分母是x-2。去分母得1+2(x-2)=3，展开得1+2x-4=3，解得2x=6，x=3。检验：x=3时，x-2≠0，所以x=3是解。`,
    },
    exercises: [
      {
        id: 'kp_003_1',
        question: `下列方程中是分式方程的是（ ）
A. (x+1)/2 = 3
B. 1/(x+1) = 2
C. x/(x+1) + 1 = 0
D. B和C都是`,
        answer: 'D',
        analysis: `分式方程要求分母中含有未知数，A中分母是常数2，B和C分母都含未知数。`,
      },
      {
        id: 'kp_003_2',
        question: `解方程：2/x = 1/(x-3)`,
        answer: 'x=6',
        analysis: `最简公分母是x(x-3)。去分母得2(x-3)=x，展开得2x-6=x，解得x=6。检验：x=6时，分母不为零。`,
      },
      {
        id: 'kp_003_3',
        question: `若分式方程(x-1)/(x+1)=m/(x+1)有增根，则m的值为（ ）
A. 0
B. 1
C. -1
D. 2`,
        answer: 'D',
        analysis: `增根是x=-1（使分母为零）。去分母得x-1=m，当x=-1时，m=-2。`,
      }
    ],
    formulas: ['最简公分母', '去分母方法', '验根条件']
  },
  // 分式方程 - 例题讲解
  {
    id: 'kp_003_example',
    chapterId: 'ch1',
    order: 6,
    title: '分式方程 - 例题讲解',
    content: '通过复杂例题掌握分式方程解法，理解增根产生的原因和检验方法。',
    videoScript: `例题1：复杂分式方程
例题2：含参数的分式方程
例题3：分式方程应用`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 6,
    example: {
      question: `解方程：(x+1)/(x-1) - (x-1)/(x+1) = 4/(x²-1)`,
      analysis: `最简公分母是(x-1)(x+1)。去分母得(x+1)²-(x-1)²=4，展开得(x²+2x+1)-(x²-2x+1)=4，化简得4x=4，x=1。检验：x=1时，分母为零，是增根，所以方程无解。`,
    },
    exercises: [
      {
        id: 'kp_003_example_1',
        question: `若关于x的方程(2x+m)/(x-3)=1无解，则m的值为（ ）
A. -3
B. 3
C. -6
D. 6`,
        answer: 'C',
        analysis: `去分母得2x+m=x-3，解得x=-m-3。当x=3时是增根，所以-m-3=3，m=-6。`,
      },
      {
        id: 'kp_003_example_2',
        question: `甲、乙两人从相距180千米的两地同时出发，相向而行，甲的速度是乙的1.5倍，2小时后相遇，求两人的速度。`,
        answer: '甲45km/h，乙30km/h',
        analysis: `设乙速为v，则甲速为1.5v。(1.5v+v)×2=180，解得v=30，1.5v=45。`,
      }
    ]
  },

  // 代数基础 - 第4章: 二次根式 (kp_004)
  {
    id: 'kp_004',
    chapterId: 'ch1',
    order: 7,
    title: '二次根式',
    content: '理解二次根式的概念，掌握性质和化简方法，能够进行二次根式的运算。',
    videoScript: `二次根式定义：形如√a(a≥0)的式子。
性质：√(a²)=|a|，(√a)²=a(a≥0)，√(ab)=√a·√b(a≥0,b≥0)。
化简：将被开方数化为完全平方数。
同类二次根式：化为最简后，被开方数相同。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 7,
    example: {
      question: `化简：√(48) - √(12) + √(27)`,
      analysis: `√48=4√3，√12=2√3，√27=3√3。原式=4√3-2√3+3√3=5√3。`,
    },
    exercises: [
      {
        id: 'kp_004_1',
        question: `函数y=√(x-2)的自变量取值范围是（ ）
A. x>2
B. x≥2
C. x<2
D. x≤2`,
        answer: 'B',
        analysis: `被开方数必须非负，x-2≥0，所以x≥2。`,
      },
      {
        id: 'kp_004_2',
        question: `计算：√(8) × √(2) = （ ）
A. 2
B. 4
C. 2√2
D. 4√2`,
        answer: 'B',
        analysis: `√8×√2=√16=4。`,
      },
      {
        id: 'kp_004_3',
        question: `若√(a+1)与√(8)是同类二次根式，则a的值是（ ）
A. 7
B. 8
C. 9
D. 10`,
        answer: 'A',
        analysis: `√8=2√2，要使√(a+1)与√8是同类二次根式，则a+1=2，a=1。`,
      }
    ],
    formulas: ['√(a²)=|a|', '√(ab)=√a·√b', '√(a/b)=√a/√b']
  },
  // 二次根式 - 例题讲解
  {
    id: 'kp_004_example',
    chapterId: 'ch1',
    order: 8,
    title: '二次根式 - 例题讲解',
    content: '通过典型例题掌握二次根式运算技巧，理解有理化因式的应用。',
    videoScript: `例题1：复杂二次根式化简
例题2：二次根式四则运算
例题3：有理化分母`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 8,
    example: {
      question: `计算：(√3+√2)(√3-√2) + (√5+2)(√5-2)`,
      analysis: `第一项用平方差公式：(√3)²-(√2)²=3-2=1。第二项：(√5)²-2²=5-4=1。原式=1+1=2。`,
    },
    exercises: [
      {
        id: 'kp_004_example_1',
        question: `化简：√(5+2√6) = （ ）
A. √2+√3
B. √2-√3
C. √3+√2
D. √3-√2`,
        answer: 'A',
        analysis: `设√(5+2√6)=√a+√b，则a+b=5，2√(ab)=2√6，所以ab=6。解得a=2,b=3。`,
      },
      {
        id: 'kp_004_example_2',
        question: `计算：1/(√2+1) + 1/(√3+1)`,
        answer: '√2+√3-2',
        analysis: `有理化分母：1/(√2+1)=√2-1，1/(√3+1)=(√3-1)/2。原式=√2-1+(√3-1)/2=(2√2+√3-3)/2。`,
      }
    ]
  },

  // 方程与不等式 - 第5章: 一元一次方程 (kp_005)
  {
    id: 'kp_005',
    chapterId: 'ch2',
    order: 9,
    title: '一元一次方程',
    content: '理解一元一次方程的概念，掌握等式性质和解方程步骤，能够列方程解应用题。',
    videoScript: `一元一次方程定义：只含一个未知数，未知数的最高次数为1的方程。
等式性质：等式两边同时加(减)同一个数，等式仍成立；等式两边同时乘(除)同一个非零数，等式仍成立。
解方程步骤：去分母、去括号、移项、合并同类项、系数化为1。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 9,
    example: {
      question: `解方程：2(x-3) - 5 = 3(2x+1) - 4x`,
      analysis: `去括号得2x-6-5=6x+3-4x，整理得2x-11=2x+3。移项得2x-2x=3+11，即0=14，矛盾，所以方程无解。`,
    },
    exercises: [
      {
        id: 'kp_005_1',
        question: `下列方程中是一元一次方程的是（ ）
A. x²+1=0
B. 2x+3y=7
C. 3x-2=5x+1
D. x(x-1)=2`,
        answer: 'C',
        analysis: `A是二次方程，B是二元一次方程，D化简后是二次方程，C是一元一次方程。`,
      },
      {
        id: 'kp_005_2',
        question: `若关于x的方程2x+3=5和4x+k=7的解相同，则k的值为（ ）
A. -1
B. 1
C. 2
D. 3`,
        answer: 'D',
        analysis: `由第一个方程得x=1，代入第二个方程得4+k=7，k=3。`,
      },
      {
        id: 'kp_005_3',
        question: `方程3(2x-1)=2(3x+4)的解是（ ）
A. x=5
B. x=11
C. x=11/0
D. 无解`,
        answer: 'D',
        analysis: `去括号得6x-3=6x+8，移项得6x-6x=8+3，即0=11，矛盾，所以无解。`,
      }
    ],
    formulas: ['等式性质1', '等式性质2', '解方程步骤']
  },
  // 一元一次方程 - 例题讲解
  {
    id: 'kp_005_example',
    chapterId: 'ch2',
    order: 10,
    title: '一元一次方程 - 例题讲解',
    content: '通过应用题掌握列方程的方法，理解等量关系的建立。',
    videoScript: `例题1：行程问题
例题2：工程问题
例题3：利润问题`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 10,
    example: {
      question: `某商品按标价的8折出售，可获利20%。若该商品的进价为200元，求标价。`,
      analysis: `设标价为x元。0.8x=200×(1+20%)=240，解得x=300。所以标价为300元。`,
    },
    exercises: [
      {
        id: 'kp_005_example_1',
        question: `甲、乙两人从同一地点出发，甲以每分钟60米的速度前进，乙以每分钟80米的速度追赶，若乙比甲晚出发3分钟，问乙几分钟能追上甲？`,
        answer: '9分钟',
        analysis: `设乙用x分钟追上。60(x+3)=80x，解得60x+180=80x，x=9。`,
      },
      {
        id: 'kp_005_example_2',
        question: `某工厂计划生产一批零件，如果每天生产200个，比计划晚1天完成；如果每天生产250个，可提前1天完成。求计划天数和零件总数。`,
        answer: '9天，2000个',
        analysis: `设计划x天。200(x+1)=250(x-1)，解得200x+200=250x-250，50x=450，x=9。计划9天完成，则实际零件总数=200×(9+1)=2000。`,
      }
    ]
  },

  // 方程与不等式 - 第6章: 二元一次方程组 (kp_006)
  {
    id: 'kp_006',
    chapterId: 'ch2',
    order: 11,
    title: '二元一次方程组',
    content: '理解二元一次方程组的概念，掌握代入消元法和加减消元法，能够解二元一次方程组。',
    videoScript: `二元一次方程组定义：含有两个未知数，每个方程都是一次方程的方程组。
代入消元法：将一个方程的某个未知数用另一个未知数表示，代入另一个方程。
加减消元法：通过方程相加或相减消去一个未知数。
解的情况：唯一解、无解、无穷多解。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 11,
    example: {
      question: `解方程组：
{x + 2y = 7
3x - 2y = 5`,
      analysis: `用加减消元法。两式相加得4x=12，x=3。代入第一个方程得3+2y=7，y=2。所以解为x=3,y=2。`,
    },
    exercises: [
      {
        id: 'kp_006_1',
        question: `下列方程组中是二元一次方程组的是（ ）
A. {x+y=2, xy=3}
B. {2x+3y=5, x-2=0}
C. {x²+y=4, x-y=1}
D. {x+y=1, x+z=2}`,
        answer: 'B',
        analysis: `A中xy=3是二次方程，C中x²+y=4是二次方程，D含有三个未知数，B是二元一次方程组。`,
      },
      {
        id: 'kp_006_2',
        question: `用代入法解方程组：
{x+y=5
2x-y=1`,
        answer: 'x=2,y=3',
        analysis: `由第一个方程得y=5-x。代入第二个方程得2x-(5-x)=1，3x-5=1，x=2。y=5-2=3。`,
      },
      {
        id: 'kp_006_3',
        question: `方程组{x+2y=4, 2x+4y=8}的解的情况是（ ）
A. 唯一解
B. 无解
C. 无穷多解
D. 无法确定`,
        answer: 'C',
        analysis: `第二个方程是第一个方程的2倍，两个方程等价，所以有无穷多解。`,
      }
    ],
    formulas: ['代入消元法', '加减消元法', '方程组的解']
  },
  // 二元一次方程组 - 例题讲解
  {
    id: 'kp_006_example',
    chapterId: 'ch2',
    order: 12,
    title: '二元一次方程组 - 例题讲解',
    content: '通过应用题掌握列方程组的方法，理解实际问题中的等量关系。',
    videoScript: `例题1：鸡兔同笼问题
例题2：行程问题
例题3：工程问题`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 12,
    example: {
      question: `鸡兔同笼，共有35个头，94只脚，问鸡兔各多少只？`,
      analysis: `设鸡x只，兔y只。{x+y=35, 2x+4y=94}。解得x=23,y=12。所以鸡23只，兔12只。`,
    },
    exercises: [
      {
        id: 'kp_006_example_1',
        question: `甲、乙两人从相距120千米的两地同时出发，相向而行，2小时后相遇。若甲的速度是乙的2倍，求两人的速度。`,
        answer: '甲40km/h，乙20km/h',
        analysis: `设乙速为v，则甲速为2v。(2v+v)×2=120，6v=120，v=20，2v=40。`,
      },
      {
        id: 'kp_006_example_2',
        question: `某工厂有甲、乙两种原料共500千克，甲种原料每吨可生产产品20件，乙种每吨可生产30件，若总共产出12000件，求两种原料各多少千克。`,
        answer: '甲300kg，乙200kg',
        analysis: `设甲x千克，乙y千克。{x+y=500, 0.02x+0.03y=12}。解得x=300,y=200。`,
      }
    ]
  },

  // 方程与不等式 - 第7章: 不等式与不等式组 (kp_007)
  {
    id: 'kp_007',
    chapterId: 'ch2',
    order: 13,
    title: '不等式与不等式组',
    content: '理解不等式的概念，掌握不等式的性质，能够解一元一次不等式和一元一次不等式组。',
    videoScript: `不等式定义：用>、<、≥、≤表示不等关系的式子。
不等式性质：1.两边同时加(减)同一个数，不等号方向不变 2.两边同时乘(除)同一个正数，不等号方向不变 3.两边同时乘(除)同一个负数，不等号方向改变。
解法：类似解方程，注意不等号方向变化。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 13,
    example: {
      question: `解不等式：3(x-2) < 2x + 5`,
      analysis: `去括号得3x-6 < 2x+5。移项得3x-2x < 5+6，即x < 11。所以解集为x < 11。`,
    },
    exercises: [
      {
        id: 'kp_007_1',
        question: `下列不等式中是一元一次不等式的是（ ）
A. x²+1>0
B. 2x+3y<5
C. 3x-2>5x+1
D. x(x-1)≤2`,
        answer: 'C',
        analysis: `A是二次不等式，B是二元一次不等式，D化简后是二次不等式，C是一元一次不等式。`,
      },
      {
        id: 'kp_007_2',
        question: `不等式3x-5>1的解集是（ ）
A. x>2
B. x<2
C. x>-2
D. x<-2`,
        answer: 'A',
        analysis: `3x-5>1，3x>6，x>2。`,
      },
      {
        id: 'kp_007_3',
        question: `若a<b，且am>bm，则m的取值范围是（ ）
A. m>0
B. m<0
C. m=0
D. m为任意实数`,
        answer: 'B',
        analysis: `不等式两边同乘负数，不等号方向改变。所以m<0。`,
      }
    ],
    formulas: ['不等式性质1', '不等式性质2', '不等式性质3']
  },
  // 不等式与不等式组 - 例题讲解
  {
    id: 'kp_007_example',
    chapterId: 'ch2',
    order: 14,
    title: '不等式与不等式组 - 例题讲解',
    content: '通过典型例题掌握不等式组的解法，理解数轴表示解集的方法。',
    videoScript: `例题1：一元一次不等式
例题2：一元一次不等式组
例题3：不等式的应用`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 14,
    example: {
      question: `解不等式组：
{2x-1>3
x+2≤6`,
      analysis: `解第一个不等式：2x>4，x>2。解第二个不等式：x≤4。所以解集为2<x≤4。在数轴上表示为(2,4]。`,
    },
    exercises: [
      {
        id: 'kp_007_example_1',
        question: `不等式组{x>2, x<a}无解的充要条件是（ ）
A. a≤2
B. a<2
C. a>2
D. a≥2`,
        answer: 'A',
        analysis: `当a≤2时，x>2和x<a无交集，所以无解。`,
      },
      {
        id: 'kp_007_example_2',
        question: `某商品原价m元，先降价20%，再涨价10%，最终价格不超过原价的1.1倍，求m的取值范围。`,
        answer: 'm≥0',
        analysis: `最终价格=0.8m×1.1=0.88m。由0.88m≤1.1m，得0.88≤1.1，恒成立。所以m≥0。`,
      }
    ]
  },

  // 函数初步 - 第8章: 函数概念 (kp_008)
  {
    id: 'kp_008',
    chapterId: 'ch3',
    order: 15,
    title: '函数概念',
    content: '理解函数的概念，掌握函数的三种表示方法，能够判断函数关系。',
    videoScript: `函数定义：在一个变化过程中，有两个变量x和y，如果对于x的每一个值，y都有唯一确定的值与之对应，那么y是x的函数。
函数表示法：解析法、列表法、图像法。
函数三要素：定义域、对应关系、值域。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 15,
    example: {
      question: `下列关系式中，y不是x的函数的是（ ）
A. y=2x+1
B. y=x²
C. y=±√x
D. y=1/x`,
      analysis: `对于C，当x>0时，y有两个值与x对应，不符合函数定义。A、B、D中y都是x的唯一函数值。`,
    },
    exercises: [
      {
        id: 'kp_008_1',
        question: `函数y=√(x-1)的自变量取值范围是（ ）
A. x>1
B. x≥1
C. x<1
D. x≤1`,
        answer: 'B',
        analysis: `被开方数必须非负，x-1≥0，所以x≥1。`,
      },
      {
        id: 'kp_008_2',
        question: `下列各组函数中，表示同一函数的是（ ）
A. y=x和y=√(x²)
B. y=|x|和y=√(x²)
C. y=x和y=(√x)²
D. y=x²和y=|x|`,
        answer: 'B',
        analysis: `A中√(x²)=|x|≠x；B中√(x²)=|x|；C中(√x)²=x(x≥0)；D中x²≠|x|。`,
      },
      {
        id: 'kp_008_3',
        question: `已知函数y=2x-1，当x=3时，函数值是（ ）
A. 5
B. -5
C. 7
D. -7`,
        answer: 'A',
        analysis: `y=2×3-1=6-1=5。`,
      }
    ],
    formulas: ['函数定义', '函数三要素', '函数表示法']
  },
  // 函数概念 - 例题讲解
  {
    id: 'kp_008_example',
    chapterId: 'ch3',
    order: 16,
    title: '函数概念 - 例题讲解',
    content: '通过典型例题掌握函数的图像表示和性质分析。',
    videoScript: `例题1：函数图像
例题2：函数定义域
例题3：函数值域`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 16,
    example: {
      question: `画出函数y=|x-2|的图像，并求其最小值。`,
      analysis: `当x≥2时，y=x-2；当x<2时，y=2-x。图像为V字形，顶点在(2,0)。最小值为0，在x=2处取得。`,
    },
    exercises: [
      {
        id: 'kp_008_example_1',
        question: `函数y=1/(x-1)的图像关于（ ）对称
A. x轴
B. y轴
C. 原点
D. 直线x=1`,
        answer: 'D',
        analysis: `函数y=1/(x-1)是将y=1/x向右平移1个单位，所以关于x=1对称。`,
      },
      {
        id: 'kp_008_example_2',
        question: `若函数y=kx+b的图像经过第一、二、四象限，则k和b的取值范围是（ ）
A. k>0,b>0
B. k>0,b<0
C. k<0,b>0
D. k<0,b<0`,
        answer: 'C',
        analysis: `直线经过一、二、四象限，说明斜率k<0，截距b>0。`,
      }
    ]
  },

  // 函数初步 - 第9章: 一次函数 (kp_009)
  {
    id: 'kp_009',
    chapterId: 'ch3',
    order: 17,
    title: '一次函数',
    content: '理解一次函数的概念，掌握一次函数的图像和性质，能够求解一次函数应用题。',
    videoScript: `一次函数定义：形如y=kx+b(k≠0)的函数。
图像：一条直线，k是斜率，b是截距。
性质：当k>0时，y随x增大而增大；当k<0时，y随x增大而减小。
特殊位置：k>0,b>0(一、二、三象限)；k>0,b<0(一、三、四象限)；k<0,b>0(一、二、四象限)；k<0,b<0(二、三、四象限)。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 17,
    example: {
      question: `已知一次函数y=kx+3，当x=2时，y=7，求k的值，并判断函数的增减性。`,
      analysis: `代入x=2,y=7得7=2k+3，解得k=2。因为k=2>0，所以y随x增大而增大。`,
    },
    exercises: [
      {
        id: 'kp_009_1',
        question: `下列函数中是一次函数的是（ ）
A. y=2x²+1
B. y=1/x
C. y=3x-2
D. y=√x`,
        answer: 'C',
        analysis: `A是二次函数，B是反比例函数，D是幂函数，C是一次函数。`,
      },
      {
        id: 'kp_009_2',
        question: `若一次函数y=(m-2)x+3的y随x增大而减小，则m的取值范围是（ ）
A. m>2
B. m<2
C. m≠2
D. m=2`,
        answer: 'B',
        analysis: `y随x增大而减小，说明斜率k=m-2<0，所以m<2。`,
      },
      {
        id: 'kp_009_3',
        question: `直线y=2x+1与y轴的交点坐标是（ ）
A. (0,1)
B. (1,0)
C. (0,-1)
D. (-1,0)`,
        answer: 'A',
        analysis: `与y轴交点即x=0，y=2×0+1=1，所以交点为(0,1)。`,
      }
    ],
    formulas: ['一次函数', '斜率公式', '两点间距离']
  },
  // 一次函数 - 例题讲解
  {
    id: 'kp_009_example',
    chapterId: 'ch3',
    order: 18,
    title: '一次函数 - 例题讲解',
    content: '通过应用题掌握一次函数模型的建立方法。',
    videoScript: `例题1：一次函数应用
例题2：图像信息题
例题3：方案选择问题`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 18,
    example: {
      question: `某市出租车收费标准为：起步价8元（3公里内），超过3公里，每公里收费2元。写出车费y(元)与路程x(公里)的函数关系式。`,
      analysis: `当0≤x≤3时，y=8；当x>3时，y=8+2(x-3)=2x+2。所以分段函数为：y=8(0≤x≤3)，y=2x+2(x>3)。`,
    },
    exercises: [
      {
        id: 'kp_009_example_1',
        question: `某商品进价30元，售价50元，每天可卖出20件。若每件降价x元，每天多卖出2x件。要使每天利润最大，应降价多少元？`,
        answer: '5元',
        analysis: `利润=(50-30-x)(20+2x)=(20-x)(20+2x)=-2x²+20x+400。当x=-20/(2×(-2))=5时，利润最大。`,
      },
      {
        id: 'kp_009_example_2',
        question: `甲、乙两地相距100km，一辆汽车从甲地出发，速度为60km/h，写出汽车距乙地的距离s(km)与时间t(h)的函数关系式。`,
        answer: 's=100-60t(0≤t≤5/3)',
        analysis: `汽车向乙地行驶，距离逐渐减少，s=100-60t。当s=0时，t=100/60=5/3小时。`,
      }
    ]
  },

  // 函数初步 - 第10章: 反比例函数 (kp_010)
  {
    id: 'kp_010',
    chapterId: 'ch3',
    order: 19,
    title: '反比例函数',
    content: '理解反比例函数的概念，掌握反比例函数的图像和性质，能够求解反比例函数应用题。',
    videoScript: `反比例函数定义：形如y=k/x(k≠0)的函数。
图像：双曲线，关于原点对称。
性质：当k>0时，图像在一、三象限，y随x增大而减小；当k<0时，图像在二、四象限，y随x增大而增大。
k的几何意义：|k|表示图像上任意一点到坐标轴的距离。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 19,
    example: {
      question: `已知反比例函数y=k/x的图像经过点(2,3)，求k的值，并判断点(-2,-3)是否在图像上。`,
      analysis: `代入(2,3)得3=k/2，k=6。函数为y=6/x。当x=-2时，y=6/(-2)=-3，所以(-2,-3)在图像上。`,
    },
    exercises: [
      {
        id: 'kp_010_1',
        question: `下列函数中是反比例函数的是（ ）
A. y=2x
B. y=2/x
C. y=x/2
D. y=2x²`,
        answer: 'B',
        analysis: `A是一次函数，C是一次函数，D是二次函数，B是反比例函数。`,
      },
      {
        id: 'kp_010_2',
        question: `若反比例函数y=k/x的图像在二、四象限，则k的取值范围是（ ）
A. k>0
B. k<0
C. k≠0
D. k=0`,
        answer: 'B',
        analysis: `图像在二、四象限时，k<0。`,
      },
      {
        id: 'kp_010_3',
        question: `反比例函数y=6/x的图像上有两点(x1,y1)、(x2,y2)，若x1<x2<0，则y1与y2的大小关系是（ ）
A. y1>y2
B. y1<y2
C. y1=y2
D. 无法确定`,
        answer: 'A',
        analysis: `当x<0时，函数在第二象限，y随x增大而增大，所以x1<x2<0时，y1<y2。`,
      }
    ],
    formulas: ['反比例函数', 'k的几何意义', '图像性质']
  },
  // 反比例函数 - 例题讲解
  {
    id: 'kp_010_example',
    chapterId: 'ch3',
    order: 20,
    title: '反比例函数 - 例题讲解',
    content: '通过应用题掌握反比例函数模型的建立方法。',
    videoScript: `例题1：反比例函数应用
例题2：k的几何意义
例题3：综合应用`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 20,
    example: {
      question: `某水池容积为100立方米，用一根水管注水，注水速度为v立方米/小时，注满所需时间为t小时。写出t与v的函数关系式。`,
      analysis: `vt=100，所以t=100/v，是反比例函数。当v增大时，t减小。`,
    },
    exercises: [
      {
        id: 'kp_010_example_1',
        question: `在反比例函数y=8/x的图像上，点P到x轴的距离为2，到y轴的距离为4，求点P的坐标。`,
        answer: '(4,2)或(-4,-2)',
        analysis: `点P(x,y)满足|y|=2，|x|=4，且y=8/x。所以可能为(4,2)或(-4,-2)。`,
      },
      {
        id: 'kp_010_example_2',
        question: `已知y是x的反比例函数，当x=2时，y=6。(1)求y与x的函数关系式；(2)当x=4时，求y的值。`,
        answer: 'y=12/x，y=3',
        analysis: `设y=k/x，代入x=2,y=6得k=12。所以y=12/x。当x=4时，y=12/4=3。`,
      }
    ]
  },

  // 函数初步 - 第11章: 二次函数初步 (kp_011)
  {
    id: 'kp_011',
    chapterId: 'ch3',
    order: 21,
    title: '二次函数初步',
    content: '理解二次函数的概念，掌握二次函数的图像和性质，能够求解简单的二次函数问题。',
    videoScript: `二次函数定义：形如y=ax²+bx+c(a≠0)的函数。
图像：抛物线，开口方向由a决定(a>0向上，a<0向下)。
顶点：(-b/(2a), c-b²/(4a))，对称轴x=-b/(2a)。
最值：a>0时有最小值，a<0时有最大值。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 21,
    example: {
      question: `已知二次函数y=x²-4x+3，求：(1)顶点坐标；(2)对称轴；(3)最值。`,
      analysis: `a=1,b=-4,c=3。顶点横坐标x=-b/(2a)=4/2=2。纵坐标y=2²-4×2+3=4-8+3=-1。所以顶点(2,-1)。对称轴x=2。因为a>0，有最小值-1。`,
    },
    exercises: [
      {
        id: 'kp_011_1',
        question: `下列函数中是二次函数的是（ ）
A. y=2x+1
B. y=3x²
C. y=1/x
D. y=√x`,
        answer: 'B',
        analysis: `A是一次函数，C是反比例函数，D是幂函数，B是二次函数。`,
      },
      {
        id: 'kp_011_2',
        question: `二次函数y=2x²-4x+1的图像开口方向是（ ）
A. 向上
B. 向下
C. 向左
D. 向右`,
        answer: 'A',
        analysis: `因为a=2>0，所以开口向上。`,
      },
      {
        id: 'kp_011_3',
        question: `抛物线y=x²+2x+1的顶点坐标是（ ）
A. (1,0)
B. (-1,0)
C. (0,1)
D. (0,-1)`,
        answer: 'B',
        analysis: `y=(x+1)²，顶点为(-1,0)。`,
      }
    ],
    formulas: ['二次函数', '顶点公式', '对称轴公式']
  },
  // 二次函数初步 - 例题讲解
  {
    id: 'kp_011_example',
    chapterId: 'ch3',
    order: 22,
    title: '二次函数初步 - 例题讲解',
    content: '通过应用题掌握二次函数模型的建立和最值问题的求解。',
    videoScript: `例题1：二次函数应用
例题2：最值问题
例题3：图像变换`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 22,
    example: {
      question: `用20米长的篱笆围成一个矩形菜园，一边靠墙，求菜园的最大面积。`,
      analysis: `设靠墙的一边为x米，则另一边为(20-2x)/2=10-x米。面积S=x(10-x)=-x²+10x。顶点横坐标x=-10/(2×(-1))=5。最大面积S=-25+50=25平方米。`,
    },
    exercises: [
      {
        id: 'kp_011_example_1',
        question: `某商品每天销售20件，每件盈利40元。若每件降价1元，每天多卖2件。要使每天盈利最大，应降价多少元？`,
        answer: '15元',
        analysis: `设降价x元，则盈利=(40-x)(20+2x)=-2x²+60x+800。当x=-60/(2×(-2))=15时，盈利最大。`,
      },
      {
        id: 'kp_011_example_2',
        question: `抛物线y=ax²+bx+c的顶点为(2,3)，且过点(0,1)，求a、b、c的值。`,
        answer: 'a=-0.5,b=2,c=1',
        analysis: `由顶点公式-b/(2a)=2，c-b²/(4a)=3。由过点(0,1)得c=1。解得a=-0.5,b=2,c=1。`,
      }
    ]
  },

  // 三角形与全等 - 第12章: 三角形概念 (kp_012)
  {
    id: 'kp_012',
    chapterId: 'ch4',
    order: 23,
    title: '三角形概念',
    content: '理解三角形的概念，掌握三角形的分类和性质，能够识别不同类型的三角形。',
    videoScript: `三角形定义：由不在同一直线上的三条线段首尾顺次相接组成的图形。
三角形分类：按边分(等边、等腰、不等边)；按角分(锐角、直角、钝角)。
三角形性质：内角和180°，外角和360°，两边之和大于第三边。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 23,
    example: {
      question: `若一个三角形的三边长为3、4、5，则这个三角形是（ ）
A. 锐角三角形
B. 直角三角形
C. 钝角三角形
D. 无法确定`,
      analysis: `因为3²+4²=9+16=25=5²，符合勾股定理，所以是直角三角形。`,
    },
    exercises: [
      {
        id: 'kp_012_1',
        question: `下列长度的三条线段能组成三角形的是（ ）
A. 1,2,3
B. 2,3,4
C. 3,4,8
D. 5,5,10`,
        answer: 'B',
        analysis: `三角形两边之和大于第三边。A:1+2=3，不行；B:2+3>4，可以；C:3+4<8，不行；D:5+5=10，不行。`,
      },
      {
        id: 'kp_012_2',
        question: `若一个三角形的一个外角为110°，则这个三角形是（ ）
A. 锐角三角形
B. 直角三角形
C. 钝角三角形
D. 无法确定`,
        answer: 'A',
        analysis: `外角=不相邻两内角和。若外角110°，则不相邻两内角和110°，所以相邻内角70°，三个内角都小于90°，是锐角三角形。`,
      },
      {
        id: 'kp_012_3',
        question: `等腰三角形的两边长分别为3和7，则周长为（ ）
A. 13
B. 17
C. 13或17
D. 无法确定`,
        answer: 'B',
        analysis: `等腰三角形的两边可能是3,3,7或3,7,7。3+3<7不满足三角形条件，所以只能是3,7,7，周长17。`,
      }
    ],
    formulas: ['三角形内角和', '三角形外角和', '三角形三边关系']
  },
  // 三角形概念 - 例题讲解
  {
    id: 'kp_012_example',
    chapterId: 'ch4',
    order: 24,
    title: '三角形概念 - 例题讲解',
    content: '通过典型例题掌握三角形性质的运用。',
    videoScript: `例题1：三角形内角和
例题2：三角形分类
例题3：三角形三边关系`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 24,
    example: {
      question: `在△ABC中，∠A:∠B:∠C=1:2:3，求各角的度数。`,
      analysis: `设∠A=x，则∠B=2x，∠C=3x。由三角形内角和x+2x+3x=180°，得6x=180°，x=30°。所以∠A=30°，∠B=60°，∠C=90°。`,
    },
    exercises: [
      {
        id: 'kp_012_example_1',
        question: `若一个三角形的一个角是另一个角的2倍，第三个角比第一个角大20°，求三个角的度数。`,
        answer: '40°,80°,60°',
        analysis: `设第一个角x°，则第二个角2x°，第三个角(x+20)°。x+2x+x+20=180，4x=160，x=40。所以三个角为40°,80°,60°。`,
      },
      {
        id: 'kp_012_example_2',
        question: `已知等腰三角形的底边长为6，周长为20，求腰长。`,
        answer: '7',
        analysis: `设腰长为x，则2x+6=20，2x=14，x=7。`,
      }
    ]
  },

  // 三角形与全等 - 第13章: 全等三角形 (kp_013)
  {
    id: 'kp_013',
    chapterId: 'ch4',
    order: 25,
    title: '全等三角形',
    content: '理解全等三角形的概念，掌握全等三角形的判定条件，能够证明三角形全等。',
    videoScript: `全等三角形定义：能够完全重合的两个三角形。
全等符号：≌，对应顶点、对应边、对应角。
判定条件：SSS(三边相等)、SAS(两边夹角)、ASA(两角夹边)、AAS(两角一边)、HL(直角三角形斜边直角边)。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 25,
    example: {
      question: `已知△ABC和△DEF，AB=DE，∠A=∠D，AC=DF，求证：△ABC≌△DEF。`,
      analysis: `AB=DE，∠A=∠D，AC=DF，符合SAS判定条件，所以△ABC≌△DEF。`,
    },
    exercises: [
      {
        id: 'kp_013_1',
        question: `下列不能判定两个三角形全等的是（ ）
A. SSS
B. SAS
C. AAA
D. ASA`,
        answer: 'C',
        analysis: `AAA只能判定相似，不能判定全等。`,
      },
      {
        id: 'kp_013_2',
        question: `已知△ABC中，AB=AC，∠BAD=∠CAD，AD=AD，则△ABD≌△ACD的判定依据是（ ）
A. SSS
B. SAS
C. ASA
D. AAS`,
        answer: 'B',
        analysis: `AB=AC，∠BAD=∠CAD，AD=AD，符合SAS条件。`,
      },
      {
        id: 'kp_013_3',
        question: `在Rt△ABC和Rt△DEF中，∠C=∠F=90°，AB=DE，AC=DF，则全等的判定依据是（ ）
A. SSS
B. SAS
C. HL
D. ASA`,
        answer: 'C',
        analysis: `直角三角形中，斜边AB=DE，直角边AC=DF，符合HL条件。`,
      }
    ],
    formulas: ['全等三角形判定', '全等三角形性质', 'HL判定']
  },
  // 全等三角形 - 例题讲解
  {
    id: 'kp_013_example',
    chapterId: 'ch4',
    order: 26,
    title: '全等三角形 - 例题讲解',
    content: '通过复杂图形掌握全等三角形的证明方法。',
    videoScript: `例题1：多组全等证明
例题2：添加辅助线
例题3：综合应用`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 26,
    example: {
      question: `已知：AB=CD，∠1=∠2，∠3=∠4。求证：△ABE≌△CDE。`,
      analysis: `∠1=∠2，AB=CD，∠3=∠4，符合ASA判定条件，所以△ABE≌△CDE。`,
    },
    exercises: [
      {
        id: 'kp_013_example_1',
        question: `已知：AD∥BC，∠1=∠2，∠3=∠4。求证：△AED≌△BEC。`,
        answer: 'ASA',
        analysis: `∠1=∠2，∠ADE=∠BCE（平行线内错角），∠3=∠4，符合AAS条件。`,
      },
      {
        id: 'kp_013_example_2',
        question: `已知：AB=AC，∠1=∠2。求证：△ABD≌△ACD。`,
        answer: 'SAS',
        analysis: `AB=AC，∠1=∠2，AD=AD，符合SAS条件。`,
      }
    ]
  },

  // 三角形与全等 - 第14章: 等腰三角形 (kp_014)
  {
    id: 'kp_014',
    chapterId: 'ch4',
    order: 27,
    title: '等腰三角形',
    content: '理解等腰三角形的性质，掌握等腰三角形的判定，能够解决等腰三角形的相关问题。',
    videoScript: `等腰三角形定义：有两条边相等的三角形。
性质：等边对等角，等角对等边；三线合一（顶角平分线、底边中线、底边高线）。
判定：两边相等或两角相等。
等边三角形：三边相等，各角60°。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 27,
    example: {
      question: `等腰三角形的一个底角是50°，求顶角的度数。`,
      analysis: `等腰三角形两个底角相等，所以另一个底角也是50°。顶角=180°-50°-50°=80°。`,
    },
    exercises: [
      {
        id: 'kp_014_1',
        question: `等腰三角形的周长是24，底边长是6，求腰长。`,
        answer: '9',
        analysis: `设腰长为x，则2x+6=24，2x=18，x=9。`,
      },
      {
        id: 'kp_014_2',
        question: `若等腰三角形的一个角是80°，则这个三角形的顶角是（ ）
A. 20°
B. 80°
C. 20°或80°
D. 50°`,
        answer: 'C',
        analysis: `80°可能是顶角，也可能是底角。若是底角，则顶角=180°-80°-80°=20°。`,
      },
      {
        id: 'kp_014_3',
        question: `等边三角形的对称轴有（ ）条
A. 1
B. 2
C. 3
D. 6`,
        answer: 'C',
        analysis: `等边三角形有三条对称轴，每条高线都是对称轴。`,
      }
    ],
    formulas: ['等腰三角形性质', '等边三角形性质', '三线合一']
  },
  // 等腰三角形 - 例题讲解
  {
    id: 'kp_014_example',
    chapterId: 'ch4',
    order: 28,
    title: '等腰三角形 - 例题讲解',
    content: '通过复杂图形掌握等腰三角形的性质和判定。',
    videoScript: `例题1：等腰三角形证明
例题2：分类讨论
例题3：综合应用`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 28,
    example: {
      question: `已知△ABC中，AB=AC，∠BAD=∠CAD。求证：BD=CD，∠B=∠C。`,
      analysis: `AB=AC，∠BAD=∠CAD，AD=AD，所以△BAD≌△CAD（SAS）。所以BD=CD，∠B=∠C。`,
    },
    exercises: [
      {
        id: 'kp_014_example_1',
        question: `已知：AB=AC，∠B=∠C。求证：△ABC是等腰三角形。`,
        answer: '等角对等边',
        analysis: `∠B=∠C，所以AB=AC，△ABC是等腰三角形。`,
      },
      {
        id: 'kp_014_example_2',
        question: `等腰三角形的一边长为6，另一边长为8，则周长为（ ）
A. 20
B. 22
C. 20或22
D. 无法确定`,
        answer: 'C',
        analysis: `可能是6,6,8（周长20）或6,8,8（周长22）。两种情况都满足三角形条件。`,
      }
    ]
  },

  // 三角形与全等 - 第15章: 直角三角形与勾股定理 (kp_015)
  {
    id: 'kp_015',
    chapterId: 'ch4',
    order: 29,
    title: '直角三角形与勾股定理',
    content: '理解直角三角形的性质，掌握勾股定理及其逆定理，能够解决直角三角形相关问题。',
    videoScript: `勾股定理：直角三角形两直角边的平方和等于斜边的平方。公式：a²+b²=c²。
勾股定理逆定理：若三角形三边满足a²+b²=c²，则这个三角形是直角三角形。
直角三角形性质：两锐角互余；斜边上的中线等于斜边的一半。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 29,
    example: {
      question: `已知直角三角形的两条直角边分别为3和4，求斜边的长度。`,
      analysis: `根据勾股定理，斜边c=√(3²+4²)=√(9+16)=√25=5。`,
    },
    exercises: [
      {
        id: 'kp_015_1',
        question: `下列各组数中是勾股数的是（ ）
A. 2,3,4
B. 3,4,5
C. 4,5,6
D. 5,6,7`,
        answer: 'B',
        analysis: `3²+4²=9+16=25=5²，符合勾股定理。`,
      },
      {
        id: 'kp_015_2',
        question: `若三角形的三边长为5,12,13，则这个三角形是（ ）
A. 锐角三角形
B. 直角三角形
C. 钝角三角形
D. 无法确定`,
        answer: 'B',
        analysis: `5²+12²=25+144=169=13²，符合勾股定理逆定理，是直角三角形。`,
      },
      {
        id: 'kp_015_3',
        question: `在Rt△ABC中，∠C=90°，AB=10，BC=6，求AC的长度。`,
        answer: '8',
        analysis: `AB是斜边，AC=√(AB²-BC²)=√(100-36)=√64=8。`,
      }
    ],
    formulas: ['勾股定理', '勾股定理逆定理', '直角三角形性质']
  },
  // 直角三角形与勾股定理 - 例题讲解
  {
    id: 'kp_015_example',
    chapterId: 'ch4',
    order: 30,
    title: '直角三角形与勾股定理 - 例题讲解',
    content: '通过复杂问题掌握勾股定理的应用。',
    videoScript: `例题1：勾股定理应用
例题2：勾股定理逆定理
例题3：综合几何问题`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 30,
    example: {
      question: `在△ABC中，AD⊥BC于D，AB=13，AC=15，BC=14，求AD的长度。`,
      analysis: `设BD=x，则CD=14-x。在Rt△ABD中，x²+AD²=13²。在Rt△ACD中，(14-x)²+AD²=15²。两式相减得(14-x)²-x²=15²-13²，即196-28x=56，x=5。所以AD=√(13²-5²)=√144=12。`,
    },
    exercises: [
      {
        id: 'kp_015_example_1',
        question: `已知直角三角形的两边长分别为5和12，则第三边长为（ ）
A. 13
B. 13或√119
C. 13或8
D. 无法确定`,
        answer: 'B',
        analysis: `5和12可能都是直角边（5²+12²=13²），也可能12是斜边（12²-5²=119）。所以第三边是13或√119。`,
      },
      {
        id: 'kp_015_example_2',
        question: `在Rt△ABC中，∠C=90°，AB=2AC，求∠B的度数。`,
        answer: '30°',
        analysis: `设AC=x，则AB=2x，BC=√(AB²-AC²)=√(4x²-x²)=√3x。tanB=AC/BC=1/√3，所以∠B=30°。`,
      }
    ]
  },

  // 四边形 - 第16章: 平行四边形 (kp_016)
  {
    id: 'kp_016',
    chapterId: 'ch5',
    order: 31,
    title: '平行四边形',
    content: '理解平行四边形的概念，掌握平行四边形的性质和判定，能够解决平行四边形相关问题。',
    videoScript: `平行四边形定义：两组对边分别平行的四边形。
性质：对边相等、对角相等、对角线互相平分；是中心对称图形。
判定：两组对边分别平行；两组对边分别相等；一组对边平行且相等；对角线互相平分；两组对角分别相等。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 31,
    example: {
      question: `在平行四边形ABCD中，AB=8，BC=6，求CD和AD的长度。`,
      analysis: `平行四边形对边相等，所以CD=AB=8，AD=BC=6。`,
    },
    exercises: [
      {
        id: 'kp_016_1',
        question: `下列图形中一定是平行四边形的是（ ）
A. 两组对边分别相等的四边形
B. 对角线相等的四边形
C. 一组对边平行且相等的四边形
D. 对角线互相垂直的四边形`,
        answer: 'C',
        analysis: `A可能是等腰梯形，B可能是矩形，D可能是菱形，C符合平行四边形判定条件。`,
      },
      {
        id: 'kp_016_2',
        question: `在平行四边形ABCD中，∠A=60°，则∠C=（ ）
A. 30°
B. 60°
C. 120°
D. 180°`,
        answer: 'B',
        analysis: `平行四边形对角相等，所以∠C=∠A=60°。`,
      },
      {
        id: 'kp_016_3',
        question: `平行四边形的周长是40，两条邻边之比是3:2，则较长边是（ ）
A. 8
B. 12
C. 16
D. 20`,
        answer: 'B',
        analysis: `设两边为3x和2x，则2(3x+2x)=40，10x=40，x=4。较长边3x=12。`,
      }
    ],
    formulas: ['平行四边形性质', '平行四边形判定', '中心对称']
  },
  // 平行四边形 - 例题讲解
  {
    id: 'kp_016_example',
    chapterId: 'ch5',
    order: 32,
    title: '平行四边形 - 例题讲解',
    content: '通过复杂图形掌握平行四边形的证明方法。',
    videoScript: `例题1：平行四边形证明
例题2：对角线性质
例题3：综合应用`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 32,
    example: {
      question: `已知：四边形ABCD中，AB∥CD，AD∥BC。求证：ABCD是平行四边形。`,
      analysis: `两组对边分别平行，所以ABCD是平行四边形。`,
    },
    exercises: [
      {
        id: 'kp_016_example_1',
        question: `在平行四边形ABCD中，对角线AC和BD相交于O，若AO=6，则AC=（ ）
A. 6
B. 12
C. 18
D. 24`,
        answer: 'B',
        analysis: `平行四边形对角线互相平分，所以AO=OC=6，AC=12。`,
      },
      {
        id: 'kp_016_example_2',
        question: `已知：AB=CD，AD=BC。求证：ABCD是平行四边形。`,
        answer: '两组对边分别相等',
        analysis: `两组对边分别相等，所以ABCD是平行四边形。`,
      }
    ]
  },

  // 四边形 - 第17章: 矩形菱形正方形 (kp_017)
  {
    id: 'kp_017',
    chapterId: 'ch5',
    order: 33,
    title: '矩形菱形正方形',
    content: '理解矩形、菱形、正方形的特殊性质，掌握它们的判定方法，能够解决特殊四边形问题。',
    videoScript: `矩形定义：有一个角是直角的平行四边形。性质：四个角都是直角，对角线相等。
菱形定义：有一组邻边相等的平行四边形。性质：四边相等，对角线互相垂直。
正方形定义：既是矩形又是菱形的四边形。性质：具有矩形和菱形的所有性质。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 33,
    example: {
      question: `在矩形ABCD中，对角线AC=10，求BD的长度。`,
      analysis: `矩形的对角线相等，所以BD=AC=10。`,
    },
    exercises: [
      {
        id: 'kp_017_1',
        question: `下列四边形中既是轴对称图形又是中心对称图形的是（ ）
A. 矩形
B. 菱形
C. 正方形
D. 平行四边形`,
        answer: 'C',
        analysis: `矩形和菱形是轴对称图形，正方形既是轴对称又是中心对称，平行四边形只是中心对称。`,
      },
      {
        id: 'kp_017_2',
        question: `菱形的周长是40，则边长是（ ）
A. 8
B. 10
C. 12
D. 16`,
        answer: 'B',
        analysis: `菱形四边相等，40÷4=10。`,
      },
      {
        id: 'kp_017_3',
        question: `正方形具有而矩形不具有的性质是（ ）
A. 对角线相等
B. 对角线互相平分
C. 对角线互相垂直
D. 四个角都是直角`,
        answer: 'C',
        analysis: `菱形的对角线互相垂直，正方形具有菱形的性质。`,
      }
    ],
    formulas: ['矩形性质', '菱形性质', '正方形性质']
  },
  // 矩形菱形正方形 - 例题讲解
  {
    id: 'kp_017_example',
    chapterId: 'ch5',
    order: 34,
    title: '矩形菱形正方形 - 例题讲解',
    content: '通过综合问题掌握特殊四边形的判定和性质。',
    videoScript: `例题1：矩形判定
例题2：菱形判定
例题3：正方形综合应用`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 34,
    example: {
      question: `已知：平行四边形ABCD中，∠A=90°，AB=BC。求证：ABCD是正方形。`,
      analysis: `∠A=90°，所以是矩形。AB=BC，邻边相等，所以是菱形。既是矩形又是菱形，所以是正方形。`,
    },
    exercises: [
      {
        id: 'kp_017_example_1',
        question: `在菱形ABCD中，对角线AC=8，BD=6，求边长。`,
        answer: '5',
        analysis: `菱形对角线互相垂直平分，边长=√((8/2)²+(6/2)²)=√(16+9)=5。`,
      },
      {
        id: 'kp_017_example_2',
        question: `在矩形ABCD中，AB=6，BC=8，则对角线AC=（ ）
A. 10
B. 12
C. 14
D. 16`,
        answer: 'A',
        analysis: `AC=√(AB²+BC²)=√(36+64)=10。`,
      }
    ]
  },

  // 四边形 - 第18章: 梯形 (kp_018)
  {
    id: 'kp_018',
    chapterId: 'ch5',
    order: 35,
    title: '梯形',
    content: '理解梯形的概念，掌握等腰梯形的性质和判定，能够解决梯形相关问题。',
    videoScript: `梯形定义：一组对边平行而另一组对边不平行的四边形。
等腰梯形：两腰相等的梯形，同一底上的两个角相等，对角线相等。
直角梯形：有一个角是直角的梯形。
梯形中位线：连接两腰中点的线段，平行于底边，等于两底和的一半。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 35,
    example: {
      question: `在梯形ABCD中，AB∥CD，AD=BC，∠A=70°，求∠B的度数。`,
      analysis: `AD=BC，所以是等腰梯形。同一底上的两个角相等，所以∠B=∠A=70°。`,
    },
    exercises: [
      {
        id: 'kp_018_1',
        question: `下列四边形中一定是梯形的是（ ）
A. 两组对边分别平行
B. 一组对边平行且相等
C. 一组对边平行而另一组不平行
D. 两组对边分别相等`,
        answer: 'C',
        analysis: `A是平行四边形，B可能是平行四边形，C符合梯形定义，D可能是平行四边形。`,
      },
      {
        id: 'kp_018_2',
        question: `等腰梯形的对角线（ ）
A. 相等
B. 不相等
C. 互相垂直
D. 互相平分`,
        answer: 'A',
        analysis: `等腰梯形的对角线相等。`,
      },
      {
        id: 'kp_018_3',
        question: `梯形的上底和下底分别为4和10，高为6，求中位线的长度。`,
        answer: '7',
        analysis: `中位线=(上底+下底)/2=(4+10)/2=7。`,
      }
    ],
    formulas: ['梯形定义', '等腰梯形性质', '梯形中位线']
  },
  // 梯形 - 例题讲解
  {
    id: 'kp_018_example',
    chapterId: 'ch5',
    order: 36,
    title: '梯形 - 例题讲解',
    content: '通过复杂图形掌握梯形的性质和辅助线作法。',
    videoScript: `例题1：等腰梯形证明
例题2：梯形中位线
例题3：梯形辅助线`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 36,
    example: {
      question: `在等腰梯形ABCD中，AB∥CD，AD=BC，对角线AC⊥BD，若AB=8，CD=12，求梯形的高。`,
      analysis: `设对角线交于O。在等腰梯形中，对角线相等，AO=CO，BO=DO。由AC⊥BD，利用面积公式和勾股定理可求得高为√(8×12)=√96=4√6。`,
    },
    exercises: [
      {
        id: 'kp_018_example_1',
        question: `直角梯形的两底分别为3和5，高为4，则斜腰长为（ ）
A. 5
B. √17
C. √20
D. 6`,
        answer: 'C',
        analysis: `斜腰=√((5-3)²+4²)=√(4+16)=√20=2√5。`,
      },
      {
        id: 'kp_018_example_2',
        question: `等腰梯形的周长为30，上底为8，腰长为5，求下底长。`,
        answer: '12',
        analysis: `下底=30-8-5-5=12。`,
      }
    ]
  },

  // 相似形 - 第19章: 相似形概念 (kp_019)
  {
    id: 'kp_019',
    chapterId: 'ch6',
    order: 37,
    title: '相似形概念',
    content: '理解相似形的概念，掌握相似多边形的性质，能够判断两个图形是否相似。',
    videoScript: `相似形定义：形状相同的图形。
相似比：相似图形对应边的比。
相似多边形性质：对应角相等，对应边成比例，周长比等于相似比，面积比等于相似比的平方。
相似三角形：三个角对应相等，三条边对应成比例。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 37,
    example: {
      question: `两个相似三角形的相似比是2:3，较小三角形的周长是16，求较大三角形的周长。`,
      analysis: `周长比等于相似比，所以较大三角形周长=16×(3/2)=24。`,
    },
    exercises: [
      {
        id: 'kp_019_1',
        question: `下列图形中一定相似的是（ ）
A. 两个矩形
B. 两个菱形
C. 两个正方形
D. 两个平行四边形`,
        answer: 'C',
        analysis: `正方形形状相同，所以一定相似。`,
      },
      {
        id: 'kp_019_2',
        question: `若两个相似三角形的面积比是4:9，则相似比是（ ）
A. 2:3
B. 3:2
C. 4:9
D. 9:4`,
        answer: 'A',
        analysis: `面积比等于相似比的平方，所以相似比=√(4/9)=2/3。`,
      },
      {
        id: 'kp_019_3',
        question: `在比例尺为1:50000的地图上，两点间距离为4cm，则实际距离是（ ）
A. 2km
B. 20km
C. 200km
D. 2000km`,
        answer: 'A',
        analysis: `实际距离=4×50000=200000cm=2000m=2km。`,
      }
    ],
    formulas: ['相似形性质', '相似比', '面积比公式']
  },
  // 相似形概念 - 例题讲解
  {
    id: 'kp_019_example',
    chapterId: 'ch6',
    order: 38,
    title: '相似形概念 - 例题讲解',
    content: '通过典型例题掌握相似形的判定和性质应用。',
    videoScript: `例题1：相似三角形判定
例题2：相似比计算
例题3：相似应用`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 38,
    example: {
      question: `在△ABC和△DEF中，∠A=∠D，∠B=∠E，AB=6，DE=9，求相似比。`,
      analysis: `两角对应相等，所以三角形相似。相似比=AB/DE=6/9=2/3。`,
    },
    exercises: [
      {
        id: 'kp_019_example_1',
        question: `在△ABC中，DE∥BC，AD=3，DB=6，DE=4，求BC的长度。`,
        answer: '12',
        analysis: `DE∥BC，所以△ADE∽△ABC。AD/AB=DE/BC，即3/9=4/BC，BC=12。`,
      },
      {
        id: 'kp_019_example_2',
        question: `两个相似多边形的相似比是3:4，较小多边形的周长是24，求较大多边形的周长。`,
        answer: '32',
        analysis: `周长比等于相似比，24×(4/3)=32。`,
      }
    ]
  },

  // 相似形 - 第20章: 相似三角形 (kp_020)
  {
    id: 'kp_020',
    chapterId: 'ch6',
    order: 39,
    title: '相似三角形',
    content: '掌握相似三角形的判定定理，能够证明三角形相似，并解决相关计算问题。',
    videoScript: `相似三角形判定：
1. 两角对应相等(AA)
2. 两边对应成比例且夹角相等(SAS)
3. 三边对应成比例(SSS)
4. 直角三角形斜边和一条直角边对应成比例(HL)
性质：对应角相等，对应边成比例。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 39,
    example: {
      question: `在△ABC和△DEF中，AB/DE=AC/DF=2/3，∠A=∠D。求证：△ABC∽△DEF。`,
      analysis: `两边对应成比例且夹角相等，符合SAS判定条件，所以△ABC∽△DEF。`,
    },
    exercises: [
      {
        id: 'kp_020_1',
        question: `下列不能判定两个三角形相似的是（ ）
A. 两角对应相等
B. 三边对应成比例
C. 两边对应成比例且夹角相等
D. 两边对应成比例且一边的对角相等`,
        answer: 'D',
        analysis: `两边对应成比例且一边的对角相等，不能保证相似。`,
      },
      {
        id: 'kp_020_2',
        question: `在Rt△ABC和Rt△DEF中，∠C=∠F=90°，AB/DE=3/4，AC/DF=3/4，则全等的判定依据是（ ）
A. SSS
B. SAS
C. HL
D. AA`,
        answer: 'C',
        analysis: `直角三角形斜边和一条直角边对应成比例，符合HL判定条件。`,
      },
      {
        id: 'kp_020_3',
        question: `在△ABC中，DE∥BC，若AD=2，DB=3，DE=4，则BC=（ ）
A. 6
B. 8
C. 10
D. 12`,
        answer: 'C',
        analysis: `DE∥BC，所以△ADE∽△ABC。AD/AB=DE/BC，即2/5=4/BC，BC=10。`,
      }
    ],
    formulas: ['相似三角形判定', '相似三角形性质', 'HL判定']
  },
  // 相似三角形 - 例题讲解
  {
    id: 'kp_020_example',
    chapterId: 'ch6',
    order: 40,
    title: '相似三角形 - 例题讲解',
    content: '通过复杂图形掌握相似三角形的证明方法。',
    videoScript: `例题1：多组相似证明
例题2：相似比计算
例题3：综合应用`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 40,
    example: {
      question: `已知：AB=AC，AD⊥BC于D，BE⊥AC于E。求证：△ABD∽△BEC。`,
      analysis: `∠ADB=∠BEC=90°。∠BAD=∠CBE（等角的余角相等）。所以△ABD∽△BEC（AA）。`,
    },
    exercises: [
      {
        id: 'kp_020_example_1',
        question: `在△ABC中，DE∥BC，AD=4，AB=10，BC=15，求DE的长度。`,
        answer: '6',
        analysis: `DE/BC=AD/AB，即DE/15=4/10，DE=6。`,
      },
      {
        id: 'kp_020_example_2',
        question: `在△ABC中，∠C=90°，CD⊥AB于D。求证：△ACD∽△ABC。`,
        answer: 'AA',
        analysis: `∠ADC=∠ACB=90°，∠A=∠A，所以△ACD∽△ABC。`,
      }
    ]
  },

  // 相似形 - 第21章: 位似变换 (kp_021)
  {
    id: 'kp_021',
    chapterId: 'ch6',
    order: 41,
    title: '位似变换',
    content: '理解位似变换的概念，掌握位似图形的性质，能够进行位似作图。',
    videoScript: `位似定义：如果两个图形不仅是相似图形，而且每组对应点所在直线都经过同一个点，那么这两个图形是位似图形。
位似中心：对应点连线的交点。
位似比：位似图形对应边的比。
位似性质：位似图形上任意一对对应点到位似中心的距离之比等于位似比。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 41,
    example: {
      question: `两个位似图形的位似比是3:2，若位似中心到一个对应点的距离是6，求另一个对应点到中心点的距离。`,
      analysis: `距离比等于位似比，所以距离=6×(2/3)=4。`,
    },
    exercises: [
      {
        id: 'kp_021_1',
        question: `下列说法中正确的是（ ）
A. 位似图形一定是相似图形
B. 相似图形一定是位似图形
C. 位似图形的对应点连线交于一点
D. 位似图形的对应边平行`,
        answer: 'B',
        analysis: `位似图形一定是相似图形，但相似图形不一定是位似图形。`,
      },
      {
        id: 'kp_021_2',
        question: `两个位似图形的位似比是2:5，若较大图形的周长是30，则较小图形的周长是（ ）
A. 6
B. 12
C. 15
D. 24`,
        answer: 'B',
        analysis: `周长比等于位似比，30×(2/5)=12。`,
      },
      {
        id: 'kp_021_3',
        question: `已知点O是△ABC和△A'B'C'的位似中心，OA=4，OA'=6，则位似比是（ ）
A. 2:3
B. 3:2
C. 4:6
D. 6:4`,
        answer: 'A',
        analysis: `位似比=OA:OA'=4:6=2:3。`,
      }
    ],
    formulas: ['位似定义', '位似中心', '位似比']
  },
  // 位似变换 - 例题讲解
  {
    id: 'kp_021_example',
    chapterId: 'ch6',
    order: 42,
    title: '位似变换 - 例题讲解',
    content: '通过作图题掌握位似变换的应用。',
    videoScript: `例题1：位似作图
例题2：位似中心确定
例题3：位似比计算`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 42,
    example: {
      question: `已知△ABC，以点O为位似中心，位似比为2:1，作出△ABC的位似图形。`,
      analysis: `连接OA、OB、OC，分别在射线OA、OB、OC上取OA'=2OA，OB'=2OB，OC'=2OC，连接A'B'C'即为所求。`,
    },
    exercises: [
      {
        id: 'kp_021_example_1',
        question: `在平面直角坐标系中，△ABC的顶点A(2,3)，以原点O为位似中心，位似比为1:2，求A'的坐标。`,
        answer: '(1,1.5)',
        analysis: `位似比1:2，所以A'=((2×1)/2, (3×1)/2)=(1,1.5)。`,
      },
      {
        id: 'kp_021_example_2',
        question: `两个位似圆的半径之比为3:2，若两圆心距离为10，求位似中心到较小圆心的距离。`,
        answer: '4',
        analysis: `设距离为x，则x:(10-x)=2:3，解得3x=20-2x，5x=20，x=4。`,
      }
    ]
  },

  // 相似形 - 第22章: 比例线段 (kp_022)
  {
    id: 'kp_022',
    chapterId: 'ch6',
    order: 43,
    title: '比例线段',
    content: '理解比例线段的概念，掌握平行线分线段成比例定理，能够解决比例线段问题。',
    videoScript: `比例线段定义：如果四条线段a,b,c,d满足a/b=c/d，则称这四条线段成比例。
平行线分线段成比例定理：三条平行线截两条直线，所得的对应线段成比例。
合比性质：若a/b=c/d，则(a+b)/b=(c+d)/d。
等比性质：若a/b=c/d，则(a-c)/(b-d)=a/b。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 43,
    example: {
      question: `在△ABC中，DE∥BC，AD=3，DB=6，AE=4，求EC的长度。`,
      analysis: `DE∥BC，所以AD/AB=AE/AC。即3/9=4/(4+EC)。解得EC=8。`,
    },
    exercises: [
      {
        id: 'kp_022_1',
        question: `若a/b=c/d=2/3，则(a+c)/(b+d)=（ ）
A. 2/3
B. 4/6
C. 1
D. 无法确定`,
        answer: 'A',
        analysis: `由合比性质，(a+c)/(b+d)=a/b=2/3。`,
      },
      {
        id: 'kp_022_2',
        question: `若a:b=c:d=2:3，则(a-c):(b-d)=（ ）
A. 2:3
B. 3:2
C. 1:1
D. 无法确定`,
        answer: 'A',
        analysis: `由等比性质，(a-c):(b-d)=a:b=2:3。`,
      },
      {
        id: 'kp_022_3',
        question: `在△ABC中，DE∥BC，AD=4，AB=10，BC=15，求DE的长度。`,
        answer: '6',
        analysis: `AD/AB=DE/BC，即4/10=DE/15，DE=6。`,
      }
    ],
    formulas: ['比例线段', '平行线分线段成比例', '合比性质', '等比性质']
  },
  // 比例线段 - 例题讲解
  {
    id: 'kp_022_example',
    chapterId: 'ch6',
    order: 44,
    title: '比例线段 - 例题讲解',
    content: '通过复杂图形掌握比例线段的应用。',
    videoScript: `例题1：平行线分线段
例题2：合比等比性质
例题3：综合几何问题`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 44,
    example: {
      question: `在△ABC中，DE∥BC，DF∥AC。求证：AE/EB=AF/FC。`,
      analysis: `DE∥BC，所以AE/EB=AD/DB。DF∥AC，所以AF/FC=AD/DB。所以AE/EB=AF/FC。`,
    },
    exercises: [
      {
        id: 'kp_022_example_1',
        question: `在△ABC中，DE∥BC，AD=5，DB=3，DE=7，求BC的长度。`,
        answer: '56/5',
        analysis: `AD/AB=DE/BC，即5/8=7/BC，BC=56/5。`,
      },
      {
        id: 'kp_022_example_2',
        question: `若a,b,c,d成比例，且a+b=10，b+c=15，c+d=20，则a=（ ）
A. 4
B. 5
C. 6
D. 8`,
        answer: 'A',
        analysis: `设a/b=c/d=k，则a=bk，c=dk。由a+b=10得bk+b=10，b(k+1)=10。由c+d=20得dk+d=20，d(k+1)=20。由b+c=15得bk+dk=15，k(b+d)=15。解得k=1/2，b=20/3，a=10/3。`,
      }
    ]
  },

  // 概率统计 - 第23章: 数据收集与整理 (kp_023)
  {
    id: 'kp_023',
    chapterId: 'ch7',
    order: 45,
    title: '数据收集与整理',
    content: '理解数据收集的基本方法，掌握数据整理的步骤，能够制作统计图表。',
    videoScript: `数据收集方法：问卷调查、实地观察、实验测量、网络搜索。
数据整理步骤：1.收集数据 2.分类整理 3.制作表格 4.绘制图表。
统计图表：条形图、折线图、扇形图、直方图。
频数分布：数据在各个类别中出现的次数。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 45,
    example: {
      question: `某班50名学生，其中男生30人，女生20人。制作性别分布的扇形图，求男生所占扇形的圆心角。`,
      analysis: `男生比例=30/50=3/5。圆心角=360°×3/5=216°。`,
    },
    exercises: [
      {
        id: 'kp_023_1',
        question: `下列调查方式中，适合用抽样调查的是（ ）
A. 了解全班同学的身高
B. 了解全校教师的年龄结构
C. 了解某班级的作业完成情况
D. 了解某校的运动成绩`,
        answer: 'B',
        analysis: `A、C、D适合全面调查，B适合抽样调查。`,
      },
      {
        id: 'kp_023_2',
        question: `将数据分组：10-20, 20-30, 30-40, 40-50。若某数据为30，应归入（ ）
A. 20-30
B. 30-40
C. 都可以
D. 无法确定`,
        answer: 'B',
        analysis: `数据分组时，一般遵循"上组限不在内"原则，30归入30-40。`,
      },
      {
        id: 'kp_023_3',
        question: `某班40人，其中12人喜欢篮球，占比例为（ ）
A. 30%
B. 25%
C. 20%
D. 15%`,
        answer: 'A',
        analysis: `12/40=0.3=30%。`,
      }
    ],
    formulas: ['数据收集方法', '数据整理步骤', '扇形图圆心角计算']
  },
  // 数据收集与整理 - 例题讲解
  {
    id: 'kp_023_example',
    chapterId: 'ch7',
    order: 46,
    title: '数据收集与整理 - 例题讲解',
    content: '通过实际案例掌握数据收集和整理的方法。',
    videoScript: `例题1：问卷调查设计
例题2：数据分类整理
例题3：统计图表制作`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 46,
    example: {
      question: `某校调查学生最喜欢的体育活动，结果如下：篮球25%，足球20%，排球15%，羽毛球18%，乒乓球22%。制作条形图，并求喜欢篮球的学生比喜欢排球的多多少人（总人数200人）。`,
      analysis: `25%-15%=10%，200×10%=20人。`,
    },
    exercises: [
      {
        id: 'kp_023_example_1',
        question: `某班50人，其中参加数学兴趣小组的有20人，占比例为（ ）
A. 40%
B. 30%
C. 25%
D. 20%`,
        answer: 'A',
        analysis: `20/50=0.4=40%。`,
      },
      {
        id: 'kp_023_example_2',
        question: `将数据分组：0-10, 10-20, 20-30。若某数据为10，应归入（ ）
A. 0-10
B. 10-20
C. 都可以
D. 无法确定`,
        answer: 'B',
        analysis: `遵循"上组限不在内"原则，10归入10-20。`,
      }
    ]
  },

  // 概率统计 - 第24章: 统计图表 (kp_024)
  {
    id: 'kp_024',
    chapterId: 'ch7',
    order: 47,
    title: '统计图表',
    content: '掌握各种统计图表的特点和适用情况，能够正确解读和制作统计图表。',
    videoScript: `条形图：显示各类别数据的大小，适合比较不同类别的数据。
折线图：显示数据的变化趋势，适合表示时间序列数据。
扇形图：显示各部分占总体的比例，适合表示构成比。
直方图：显示数据的分布情况，适合表示连续数据的频数分布。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 47,
    example: {
      question: `某公司2018-2022年的销售额分别为：100万、120万、150万、130万、160万。制作折线图，并判断哪一年增长最快。`,
      analysis: `2019年增长20万，2020年增长30万，2021年减少20万，2022年增长30万。2020年和2022年都是增长30万，但2020年增长率更高(25%)，所以2020年增长最快。`,
    },
    exercises: [
      {
        id: 'kp_024_1',
        question: `要表示某班学生身高的分布情况，应选用（ ）
A. 条形图
B. 折线图
C. 扇形图
D. 直方图`,
        answer: 'D',
        analysis: `身高是连续数据，用直方图表示分布情况。`,
      },
      {
        id: 'kp_024_2',
        question: `要表示某公司各部门销售额占总销售额的比例，应选用（ ）
A. 条形图
B. 折线图
C. 扇形图
D. 直方图`,
        answer: 'C',
        analysis: `表示部分与整体的比例关系，用扇形图。`,
      },
      {
        id: 'kp_024_3',
        question: `某条形图显示A、B、C三类产品销量分别为50、80、70，则B类产品比A类多（ ）
A. 30%
B. 40%
C. 50%
D. 60%`,
        answer: 'D',
        analysis: `(80-50)/50=30/50=0.6=60%。`,
      }
    ],
    formulas: ['条形图特点', '折线图特点', '扇形图特点', '直方图特点']
  },
  // 统计图表 - 例题讲解
  {
    id: 'kp_024_example',
    chapterId: 'ch7',
    order: 48,
    title: '统计图表 - 例题讲解',
    content: '通过实际数据掌握统计图表的制作和分析方法。',
    videoScript: `例题1：图表选择
例题2：图表解读
例题3：数据可视化`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 48,
    example: {
      question: `某班学生最喜欢的颜色调查结果：红色30%，蓝色25%，绿色20%，黄色15%，其他10%。制作扇形图，并求喜欢红色和蓝色的学生共占多少比例。`,
      analysis: `30%+25%=55%。`,
    },
    exercises: [
      {
        id: 'kp_024_example_1',
        question: `某折线图显示2019-2023年某商品价格分别为：100、120、150、130、140元。哪一年价格最高？哪一年最低？`,
        answer: '2020年最高，2019年最低',
        analysis: `从折线图可以看出2020年价格150元最高，2019年价格100元最低。`,
      },
      {
        id: 'kp_024_example_2',
        question: `某直方图显示学生成绩分布：60-70分10人，70-80分20人，80-90分15人，90-100分5人。求及格率(60分以上)。`,
        answer: '100%',
        analysis: `所有学生都在60分以上，所以及格率100%。`,
      }
    ]
  },

  // 概率统计 - 第25章: 频数分布 (kp_025)
  {
    id: 'kp_025',
    chapterId: 'ch7',
    order: 49,
    title: '频数分布',
    content: '理解频数分布的概念，掌握频数分布表和频数分布直方图的制作，能够分析数据分布特征。',
    videoScript: `频数分布：将数据按一定区间分组，统计各组的频数。
频数分布表：显示各组的频数、频率、累计频数、累计频率。
频数分布直方图：用矩形高度表示各组的频数。
数据分布特征：集中趋势(平均数、中位数、众数)、离散程度(极差、方差)。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 49,
    example: {
      question: `某班50名学生数学成绩：60-70分8人，70-80分15人，80-90分20人，90-100分7人。制作频数分布表，并求80分以上的学生人数。`,
      analysis: `80-90分20人，90-100分7人，共27人。`,
    },
    exercises: [
      {
        id: 'kp_025_1',
        question: `频数分布直方图中，各矩形的宽度表示（ ）
A. 组距
B. 频数
C. 频率
D. 组中值`,
        answer: 'A',
        analysis: `矩形宽度表示组距，高度表示频数。`,
      },
      {
        id: 'kp_025_2',
        question: `某频数分布表中，70-80分组有20人，总人数100人，则频率为（ ）
A. 0.2
B. 0.25
C. 0.3
D. 0.5`,
        answer: 'A',
        analysis: `频率=频数/总数=20/100=0.2。`,
      },
      {
        id: 'kp_025_3',
        question: `频数分布直方图可以直观显示（ ）
A. 数据的集中趋势
B. 数据的离散程度
C. 数据的分布形态
D. 数据的变化趋势`,
        answer: 'C',
        analysis: `直方图显示数据的分布形态。`,
      }
    ],
    formulas: ['频数分布', '频数分布表', '频率计算', '组距确定']
  },
  // 频数分布 - 例题讲解
  {
    id: 'kp_025_example',
    chapterId: 'ch7',
    order: 50,
    title: '频数分布 - 例题讲解',
    content: '通过实际数据掌握频数分布表和直方图的制作方法。',
    videoScript: `例题1：频数分布表制作
例题2：频数分布直方图
例题3：数据分析`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 50,
    example: {
      question: `某校100名学生的体重数据，最小40kg，最大70kg，制作频数分布表，取组距为5kg。`,
      analysis: `极差=70-40=30kg，组距5kg，组数=30/5=6组。分组：40-45,45-50,50-55,55-60,60-65,65-70。统计各组频数，制作频数分布表。`,
    },
    exercises: [
      {
        id: 'kp_025_example_1',
        question: `某频数分布直方图中，80-90分组的高度是其他组的2倍，说明（ ）
A. 该组频数最大
B. 该组频率最大
C. 该组人数最多
D. 以上都对`,
        answer: 'D',
        analysis: `直方图高度表示频数，频数最大，频率也最大，人数也最多。`,
      },
      {
        id: 'kp_025_example_2',
        question: `已知某组数据的频数分布表中，60-70分组的频率是0.3，频数是15人，则总人数是（ ）
A. 40人
B. 45人
C. 50人
D. 55人`,
        answer: 'C',
        analysis: `总人数=频数/频率=15/0.3=50人。`,
      }
    ]
  },

  // 概率统计 - 第26章: 数据特征分析 (kp_026)
  {
    id: 'kp_026',
    chapterId: 'ch7',
    order: 51,
    title: '数据特征分析',
    content: '掌握集中趋势和离散程度的度量方法，能够分析数据的基本特征。',
    videoScript: `集中趋势：平均数(算术平均、加权平均)、中位数、众数。
离散程度：极差、方差、标准差。
平均数：所有数据之和除以数据个数。
中位数：将数据排序后位于中间位置的数。
众数：出现次数最多的数。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 51,
    example: {
      question: `某班10名学生数学成绩：85, 90, 78, 92, 88, 76, 95, 89, 84, 91。求平均分、中位数、众数。`,
      analysis: `平均分=(85+90+78+92+88+76+95+89+84+91)/10=868/10=86.8分。排序后：76,78,84,85,88,89,90,91,92,95。中位数=(88+89)/2=88.5分。没有众数(所有数出现一次)。`,
    },
    exercises: [
      {
        id: 'kp_026_1',
        question: `数据5, 7, 8, 8, 9, 10的平均数是（ ）
A. 7.5
B. 8
C. 8.5
D. 9`,
        answer: 'B',
        analysis: `(5+7+8+8+9+10)/6=47/6≈7.83，最接近8。`,
      },
      {
        id: 'kp_026_2',
        question: `数据6, 8, 8, 10, 12的众数是（ ）
A. 6
B. 8
C. 10
D. 没有众数`,
        answer: 'B',
        analysis: `8出现两次，其他数出现一次，所以众数是8。`,
      },
      {
        id: 'kp_026_3',
        question: `数据2, 4, 6, 8, 10的中位数是（ ）
A. 4
B. 5
C. 6
D. 8`,
        answer: 'C',
        analysis: `数据已排序，中间位置是第三个数6。`,
      }
    ],
    formulas: ['平均数公式', '中位数求法', '众数定义', '极差公式']
  },
  // 数据特征分析 - 例题讲解
  {
    id: 'kp_026_example',
    chapterId: 'ch7',
    order: 52,
    title: '数据特征分析 - 例题讲解',
    content: '通过实际数据掌握数据特征的计算和分析方法。',
    videoScript: `例题1：平均数计算
例题2：中位数和众数
例题3：数据分布分析`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 52,
    example: {
      question: `某公司5名员工月薪：5000, 6000, 7000, 8000, 50000元。求平均数，并分析是否具有代表性。`,
      analysis: `平均数=(5000+6000+7000+8000+50000)/5=76000/5=15200元。但50000元远高于其他工资，使平均数偏高，不具有代表性。中位数7000元更能代表一般水平。`,
    },
    exercises: [
      {
        id: 'kp_026_example_1',
        question: `数据3, 5, 7, 9, 11的平均数是（ ）
A. 5
B. 6
C. 7
D. 8`,
        answer: 'C',
        analysis: `(3+5+7+9+11)/5=35/5=7。`,
      },
      {
        id: 'kp_026_example_2',
        question: `在一组数据中，每个数都增加5，则（ ）
A. 平均数增加5
B. 中位数不变
C. 众数不变
D. 方差增加5`,
        answer: 'A',
        analysis: `每个数增加5，平均数增加5，中位数和众数也增加5，方差不变。`,
      }
    ]
  },

  // 概率统计 - 第27章: 事件分类 (kp_027)
  {
    id: 'kp_027',
    chapterId: 'ch7',
    order: 53,
    title: '事件分类',
    content: '理解必然事件、不可能事件、随机事件的概念，能够区分不同类型的事件。',
    videoScript: `必然事件：在一定条件下一定会发生的事件，概率为1。
不可能事件：在一定条件下一定不会发生的事件，概率为0。
随机事件：在一定条件下可能发生也可能不发生的事件，概率介于0和1之间。
确定性事件：必然事件和不可能事件的统称。
不确定性事件：随机事件的统称。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 53,
    example: {
      question: `下列事件中：(1)太阳从东方升起；(2)掷骰子出现7点；(3)明天下雨；(4)三角形的内角和为180°。其中必然事件、不可能事件、随机事件分别是哪些？`,
      analysis: `(1)和(4)是必然事件；(2)是不可能事件；(3)是随机事件。`,
    },
    exercises: [
      {
        id: 'kp_027_1',
        question: `下列事件中，必然事件是（ ）
A. 掷一枚硬币正面朝上
B. 在一个标准大气压下，水加热到100℃沸腾
C. 明天下雨
D. 买彩票中奖`,
        answer: 'B',
        analysis: `在标准大气压下，水加热到100℃沸腾是必然事件。`,
      },
      {
        id: 'kp_027_2',
        question: `下列事件中，随机事件是（ ）
A. 地球绕太阳转
B. 掷一枚骰子出现偶数点
C. 1+1=3
D. 三角形内角和为360°`,
        answer: 'B',
        analysis: `掷骰子可能出现偶数点，也可能出现奇数点，是随机事件。`,
      },
      {
        id: 'kp_027_3',
        question: `下列事件中，不可能事件是（ ）
A. 负数大于正数
B. 两个负数相乘结果为正数
C. 两个奇数之和为偶数
D. 一个数的平方为负数`,
        answer: 'D',
        analysis: `任何实数的平方都是非负数，不可能为负数。`,
      }
    ],
    formulas: ['必然事件', '不可能事件', '随机事件', '确定性事件']
  },
  // 事件分类 - 例题讲解
  {
    id: 'kp_027_example',
    chapterId: 'ch7',
    order: 54,
    title: '事件分类 - 例题讲解',
    content: '通过实际例子掌握事件分类的方法。',
    videoScript: `例题1：事件分类
例题2：概率初步判断
例题3：生活实例分析`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 54,
    example: {
      question: `判断下列事件的类型：(1)抛掷一枚质地均匀的硬币，正面朝上；(2)在一个不透明的袋子中装有3个红球，摸出一个白球；(3)在常温下，铁块熔化。`,
      analysis: `(1)是随机事件，可能正面也可能反面；(2)是不可能事件，袋中没有白球；(3)是不可能事件，常温下铁块不会熔化。`,
    },
    exercises: [
      {
        id: 'kp_027_example_1',
        question: `下列事件中，是确定性事件的是（ ）
A. 明天会下雨
B. 抛掷一枚硬币正面朝上
C. 两个负数的积为正数
D. 购买一张彩票，中500万大奖`,
        answer: 'C',
        analysis: `两个负数相乘结果为正数是必然事件，属于确定性事件。`,
      },
      {
        id: 'kp_027_example_2',
        question: `下列事件中，是随机事件的是（ ）
A. 水在100℃沸腾
B. 三角形的内角和为180°
C. 掷一枚骰子，出现点数小于7
D. 从装有红球的袋中摸出白球`,
        answer: 'C',
        analysis: `掷骰子可能出现1-6点，都小于7，但具体是哪个点是随机的。`,
      }
    ]
  },

  // 概率统计 - 第28章: 概率计算 (kp_028)
  {
    id: 'kp_028',
    chapterId: 'ch7',
    order: 55,
    title: '概率计算',
    content: '掌握概率的基本计算方法，能够计算简单事件的概率。',
    videoScript: `概率定义：事件A发生的概率P(A)=事件A包含的基本事件数/基本事件总数。
古典概型：每个基本事件发生的可能性相等。
几何概型：概率与几何度量成正比。
概率性质：0≤P(A)≤1，P(必然事件)=1，P(不可能事件)=0。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 55,
    example: {
      question: `掷一枚质地均匀的骰子，求出现偶数点的概率。`,
      analysis: `基本事件总数6个(1-6)。偶数点有2,4,6三个。概率=3/6=1/2。`,
    },
    exercises: [
      {
        id: 'kp_028_1',
        question: `从一副扑克牌(54张)中随机抽取一张，抽到大王的概率是（ ）
A. 1/54
B. 2/54
C. 1/27
D. 1/18`,
        answer: 'A',
        analysis: `只有一张大王，概率=1/54。`,
      },
      {
        id: 'kp_028_2',
        question: `掷两枚骰子，点数之和为7的概率是（ ）
A. 1/6
B. 1/9
C. 1/12
D. 1/18`,
        answer: 'A',
        analysis: `总共有36种等可能结果，和为7的有(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)共6种，概率=6/36=1/6。`,
      },
      {
        id: 'kp_028_3',
        question: `在一个不透明的袋子中装有3个红球和2个白球，随机摸出一个红球的概率是（ ）
A. 2/5
B. 3/5
C. 1/3
D. 2/3`,
        answer: 'B',
        analysis: `红球3个，总共5个球，概率=3/5。`,
      }
    ],
    formulas: ['概率公式', '古典概型', '几何概型', '概率性质']
  },
  // 概率计算 - 例题讲解
  {
    id: 'kp_028_example',
    chapterId: 'ch7',
    order: 56,
    title: '概率计算 - 例题讲解',
    content: '通过复杂例题掌握概率计算方法。',
    videoScript: `例题1：古典概型
例题2：几何概型
例题3：概率应用`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 56,
    example: {
      question: `从1,2,3,4,5中随机选取两个数，求它们的和为偶数的概率。`,
      analysis: `基本事件有(1,2),(1,3),(1,4),(1,5),(2,3),(2,4),(2,5),(3,4),(3,5),(4,5)共10种。和为偶数的有(1,3),(1,5),(2,4),(3,5)共4种。概率=4/10=2/5。`,
    },
    exercises: [
      {
        id: 'kp_028_example_1',
        question: `从1,2,3,4,5中随机选取两个数，求它们的积为偶数的概率。`,
        answer: '7/10',
        analysis: `积为偶数的情况：至少有一个是偶数。偶数有2,4。总情况10种，积为奇数的情况只有(1,3),(1,5),(3,5)3种。所以积为偶数的概率=1-3/10=7/10。`,
      },
      {
        id: 'kp_028_example_2',
        question: `在一个边长为2的正方形内随机取一点，求该点到四个顶点的距离都大于1的概率。`,
        answer: '1-π/4',
        analysis: `满足条件的区域是正方形去掉四个半径为1的四分之一圆。面积=4-π。概率=(4-π)/4=1-π/4。`,
      }
    ]
  },

  // 概率统计 - 第29章: 概率应用 (kp_029)
  {
    id: 'kp_029',
    chapterId: 'ch7',
    order: 57,
    title: '概率应用',
    content: '掌握概率在实际问题中的应用，能够解决生活中的概率问题。',
    videoScript: `概率应用：彩票中奖概率、产品合格率、天气预报、风险评估等。
条件概率：在事件A发生的条件下，事件B发生的概率P(B|A)=P(A∩B)/P(A)。
独立事件：两个事件互不影响，P(A∩B)=P(A)P(B)。
互斥事件：两个事件不能同时发生，P(A∪B)=P(A)+P(B)。`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 57,
    example: {
      question: `某产品合格率是95%，随机抽取3件，求至少有一件不合格的概率。`,
      analysis: `先求全部合格的概率=0.95³=0.857375。至少一件不合格的概率=1-0.857375=0.142625≈14.3%。`,
    },
    exercises: [
      {
        id: 'kp_029_1',
        question: `某彩票中奖概率是1/1000，购买1000张彩票，中奖的概率是多少？`,
        answer: '约63%',
        analysis: `不中奖的概率=(1-1/1000)¹⁰⁰⁰≈e⁻¹≈0.37。中奖的概率=1-0.37≈0.63。`,
      },
      {
        id: 'kp_029_2',
        question: `甲、乙两人独立射击同一目标，命中率分别为0.8和0.6，求目标被击中的概率。`,
        answer: '0.92',
        analysis: `目标不被击中的概率=(1-0.8)×(1-0.6)=0.2×0.4=0.08。被击中的概率=1-0.08=0.92。`,
      },
      {
        id: 'kp_029_3',
        question: `某工厂产品合格率为90%，随机抽取5件，求恰好有3件合格的概率。`,
        answer: '0.0729',
        analysis: `用二项分布公式：C(5,3)×0.9³×0.1²=10×0.729×0.01=0.0729。`,
      }
    ],
    formulas: ['条件概率', '独立事件', '互斥事件', '二项分布']
  },
  // 概率应用 - 例题讲解
  {
    id: 'kp_029_example',
    chapterId: 'ch7',
    order: 58,
    title: '概率应用 - 例题讲解',
    content: '通过实际案例掌握概率分析方法。',
    videoScript: `例题1：产品质量检验
例题2：天气预报概率
例题3：风险评估`,
    videoBvid: 'BV1V2EXzqEJW',
    videoPage: 58,
    example: {
      question: `某天气预报准确率为80%，连续预报3天，求至少2天准确的概率。`,
      analysis: `用二项分布：P(2天准确)=C(3,2)×0.8²×0.2=3×0.64×0.2=0.384。P(3天准确)=0.8³=0.512。总概率=0.384+0.512=0.896≈89.6%。`,
    },
    exercises: [
      {
        id: 'kp_029_example_1',
        question: `某考试通过率为60%，10人参加考试，求至少有8人通过的概率。`,
        answer: '约16.7%',
        analysis: `P(8人)=C(10,8)×0.6⁸×0.4²=45×0.0168×0.16≈0.1209。P(9人)=10×0.6⁹×0.4≈0.0403。P(10人)=0.6¹⁰≈0.0060。总概率≈0.1672。`,
      },
      {
        id: 'kp_029_example_2',
        question: `从1-20中随机选取一个数，求选出的数是3的倍数或5的倍数的概率。`,
        answer: '9/20',
        analysis: `3的倍数：3,6,9,12,15,18共6个。5的倍数：5,10,15,20共4个。15被重复计算一次。总共9个。概率=9/20。`,
      }
    ]
  },
  kp_030,
  kp_030_example,
  kp_031,
  kp_031_example,
  kp_032,
  kp_032_example,
  kp_033,
  kp_033_example,
  kp_034,
  kp_034_example,
  kp_035,
  kp_035_example,
]

// 知识点数据分批创建，避免上下文超长
// 第1批：代数基础 - 实数概念 (kp_001)
// 第2批：代数基础 - 整式运算 (kp_002)
// 第3批：代数基础 - 分式方程 (kp_003)
// 第4批：代数基础 - 二次根式 (kp_004)
// 第5批：代数基础 - 一元一次方程 (kp_005)
// 第6批：方程与不等式 - 二元一次方程组 (kp_006)
// 第7批：方程与不等式 - 不等式与不等式组 (kp_007)
// 第8批：函数初步 - 函数概念 (kp_008)
// 第9批：函数初步 - 一次函数 (kp_009)
// 第10批：函数初步 - 反比例函数 (kp_010)
// 第11批：函数初步 - 二次函数初步 (kp_011)
// 第12批：三角形与全等 - 三角形概念 (kp_012)
// 第13批：三角形与全等 - 全等三角形 (kp_013)
// 第14批：三角形与全等 - 等腰三角形 (kp_014)
// 第15批：三角形与全等 - 直角三角形与勾股定理 (kp_015)
// 第16批：四边形 - 平行四边形 (kp_016)
// 第17批：四边形 - 矩形菱形正方形 (kp_017)
// 第18批：四边形 - 梯形 (kp_018)
// 第19批：相似形 - 相似形概念 (kp_019)
// 第20批：相似形 - 相似三角形 (kp_020)
// 第21批：相似形 - 位似变换 (kp_021)
// 第22批：相似形 - 比例线段 (kp_022)
// 第23批：概率统计 - 数据收集与整理 (kp_023)
// 第24批：概率统计 - 统计图表 (kp_024)
// 第25批：概率统计 - 频数分布 (kp_025)
// 第26批：概率统计 - 数据特征分析 (kp_026)
// 第27批：概率统计 - 事件分类 (kp_027)
// 第28批：概率统计 - 概率计算 (kp_028)
// 第29批：概率统计 - 概率应用 (kp_029)
// 第30批：综合应用 - 代数几何综合 (kp_030)
// 第31批：综合应用 - 函数与几何 (kp_031)
// 第32批：综合应用 - 方程与几何 (kp_032)
// 第33批：综合应用 - 最值问题 (kp_033)
// 第34批：综合应用 - 实际应用问题 (kp_034)
