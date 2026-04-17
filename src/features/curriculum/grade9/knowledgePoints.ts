import type { KnowledgePointData } from "../../../data/knowledgePoints";

export const knowledgePoints: KnowledgePointData[] = [
  {
    id: "kp9_001",
    chapterId: "ch1",
    order: 1,
    title: "二次函数的图像与性质",
    content:
      "理解抛物线的开口方向、对称轴、顶点位置以及图像变化和系数之间的关系。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 26,
    videoScript: `二次函数 y=ax²+bx+c 的图像是抛物线。
当 a>0 时开口向上，a<0 时开口向下。
对称轴是 x=-b/2a，顶点是图像的最高点或最低点。
研究图像时，要同时关注开口、对称轴、顶点和与坐标轴交点。`,
    examples: [
      {
        question: "已知二次函数 y = x² - 4x + 3，求它的对称轴和顶点坐标。",
        analysis:
          "对称轴 x = -b/2a = 2。把 x=2 代入得 y = -1，所以顶点坐标是 (2, -1)。",
      },
      {
        question: "已知抛物线 y = -x² + 2x + 3，判断它的开口方向，并求对称轴。",
        analysis: "因为 a=-1<0，所以开口向下。对称轴 x=-b/2a=-2÷(-2)=1。",
      },
    ],

    exercises: [
      {
        id: "kp9_001_1",
        question: "函数 y = -2x² + 1 的开口方向是____。",
        answer: "向下",
        analysis: "二次项系数 a=-2<0，所以抛物线开口向下。",
      },
      {
        id: "kp9_001_2",
        question: "二次函数 y = x² + 6x + 5 的对称轴是____。",
        answer: "x=-3",
        analysis: "对称轴公式是 x=-b/2a，所以 x=-6/2=-3。",
      },
      {
        id: "kp9_001_3",
        question: "函数 y = 2x² - 8x + 1 的对称轴是____。",
        answer: "x=2",
        analysis: "由对称轴公式 x=-b/2a=8/4=2。",
      },
      {
        id: "kp9_001_4",
        question: "若抛物线开口向上，则二次项系数 a 应满足____。",
        answer: "a>0",
        analysis: "二次项系数决定开口方向，a>0 时开口向上。",
      },
    ],
    formulas: ["对称轴：x = -b / 2a", "顶点纵坐标：y = (4ac - b²) / 4a"],
  },
  {
    id: "kp9_002",
    chapterId: "ch1",
    order: 2,
    title: "二次函数解析式求法",
    content:
      "掌握利用一般式、顶点式和交点式，以及待定系数法确定二次函数解析式。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 27,
    videoScript: `求二次函数解析式时，先判断已知条件最适合哪一种形式。
知道三个点，常用一般式待定系数法。
知道顶点和另一个点，优先用顶点式。
知道与 x 轴交点，优先考虑交点式。`,
    examples: [
      {
        question: "已知抛物线顶点为 (1, -2)，且经过点 (0, -1)，求解析式。",
        analysis:
          "设解析式为 y = a(x-1)² - 2。代入点 (0,-1) 得 a-2=-1，所以 a=1，解析式为 y=(x-1)²-2。",
      },
      {
        question: "已知抛物线经过点 (1,0)、(3,0) 且经过点 (0,3)，求其解析式。",
        analysis:
          "先设 y=a(x-1)(x-3)，代入 (0,3) 得 3a=3，所以 a=1，解析式为 y=(x-1)(x-3)。",
      },
    ],

    exercises: [
      {
        id: "kp9_002_1",
        question:
          "已知抛物线经过原点，且顶点在 y 轴上，则解析式最适合设成哪种形式？",
        answer: "顶点式或一般式",
        analysis:
          "顶点在 y 轴上说明对称轴是 x=0，可以优先考虑顶点式 y=ax²+k，也可用一般式简化求参。",
      },
      {
        id: "kp9_002_2",
        question: "若抛物线与 x 轴交于 x=1 和 x=3 两点，则可设解析式为____。",
        answer: "y=a(x-1)(x-3)",
        analysis: "已知两个零点，优先用交点式。",
      },
      {
        id: "kp9_002_3",
        question: "已知顶点为 (2,-1) 的抛物线解析式最适合设为____。",
        answer: "y=a(x-2)²-1",
        analysis: "知道顶点时优先用顶点式。",
      },
      {
        id: "kp9_002_4",
        question:
          "已知抛物线经过点 (0,0)、(2,0)、(1,3)，求解析式时应优先想到____。",
        answer: "交点式",
        analysis: "已知两个零点时优先考虑交点式，再代点求 a。",
      },
    ],
    formulas: [
      "一般式：y = ax² + bx + c",
      "顶点式：y = a(x-h)² + k",
      "交点式：y = a(x-x1)(x-x2)",
    ],
  },
  {
    id: "kp9_003",
    chapterId: "ch1",
    order: 3,
    title: "二次函数最值与综合",
    content: "把顶点、图像性质和实际问题结合起来，处理最值、面积和函数综合题。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 28,
    videoScript: `二次函数最值问题的核心是找顶点。
开口向上，顶点对应最小值；开口向下，顶点对应最大值。
做综合题时，要先判断自变量范围，再结合图像或代数式分析最值。`,
    examples: [
      {
        question: "函数 y = -x² + 4x - 1 的最大值是多少？",
        analysis:
          "因为 a<0，开口向下，所以顶点纵坐标就是最大值。对称轴 x=2，代入得 y=3，所以最大值是 3。",
      },
      {
        question: "函数 y = 2x² - 4x + 1 的最小值是多少？",
        analysis: "配方得 y=2(x-1)²-1，因为开口向上，所以最小值为 -1。",
      },
    ],

    exercises: [
      {
        id: "kp9_003_1",
        question: "抛物线 y = x² - 2x + 5 的最小值是____。",
        answer: "4",
        analysis: "配方得 y=(x-1)²+4，所以最小值是 4。",
      },
      {
        id: "kp9_003_2",
        question: "解决二次函数最值题时，第一步最关键的是____。",
        answer: "确定顶点或先化为顶点式",
        analysis: "最值和顶点直接相关，先找到顶点最稳。",
      },
      {
        id: "kp9_003_3",
        question: "函数 y = -x² + 6x 的最大值是____。",
        answer: "9",
        analysis: "对称轴 x=3，代入得 y=9。",
      },
      {
        id: "kp9_003_4",
        question:
          "二次函数最值题中，如果自变量有范围限制，还需要结合____一起判断。",
        answer: "区间端点",
        analysis: "最值可能出现在顶点，也可能出现在端点。",
      },
    ],
    formulas: [
      "最值通常由顶点决定",
      "配方法：ax²+bx+c = a(x + b/2a)² + (4ac-b²)/4a",
    ],
  },
  {
    id: "kp9_010",
    chapterId: "ch1",
    order: 4,
    title: "二次函数与坐标轴交点",
    content:
      "理解二次函数与 x 轴、y 轴交点的意义，并能利用交点信息分析图像和方程根。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 26,
    videoScript: `二次函数与 y 轴交点最直接，看常数项 c。
与 x 轴交点对应方程 ax²+bx+c=0 的实数根。
交点个数与判别式有关，所以图像和方程是连在一起的。`,
    examples: [
      {
        question:
          "函数 y = x² - 3x + 2 与 x 轴有几个交点？交点横坐标分别是多少？",
        analysis:
          "令 y=0，得 x²-3x+2=0，分解得 (x-1)(x-2)=0，所以有两个交点，横坐标分别是 1 和 2。",
      },
      {
        question: "函数 y = x² + x - 2 与 x 轴交于哪两点？",
        analysis:
          "令 y=0，得 x²+x-2=0，分解为 (x+2)(x-1)=0，所以交点横坐标为 -2 和 1。",
      },
    ],

    exercises: [
      {
        id: "kp9_010_1",
        question: "函数 y = x² + 2x + 1 与 x 轴有____个交点。",
        answer: "1",
        analysis:
          "因为 x²+2x+1=(x+1)²，对应两个相等实数根，所以只有 1 个交点。",
      },
      {
        id: "kp9_010_2",
        question: "二次函数 y = ax² + bx + c 与 y 轴的交点纵坐标是____。",
        answer: "c",
        analysis: "令 x=0，可得 y=c。",
      },
      {
        id: "kp9_010_3",
        question: "函数 y = x² - 9 与 x 轴交点横坐标为____。",
        answer: "-3和3",
        analysis: "令 y=0，得 x²=9，所以 x=±3。",
      },
      {
        id: "kp9_010_4",
        question: "二次函数与 x 轴交点个数，本质上取决于对应方程的____。",
        answer: "实数根个数",
        analysis: "交点横坐标就是方程的实数根。",
      },
    ],
    formulas: ["与 y 轴交点：x=0 时 y=c", "与 x 轴交点由 ax²+bx+c=0 的根决定"],
  },
  {
    id: "kp9_011",
    chapterId: "ch1",
    order: 5,
    title: "二次函数的面积与存在性问题",
    content:
      "把二次函数和三角形、矩形面积以及存在性条件结合，训练压轴题常见思路。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 28,
    videoScript: `面积问题常见做法是先用函数表达边长或高，再列面积式。
存在性问题常常需要把“存在某点”翻译成方程或最值条件。
做这类题先把变量关系写清，再看范围和几何意义。`,
    examples: [
      {
        question: "点 P 在抛物线 y = x² 上，点 P 到 x 轴的距离是多少？",
        analysis:
          "点 P 的纵坐标就是 y=x²，到 x 轴的距离等于纵坐标的绝对值，因为 x²≥0，所以距离是 x²。",
      },
      {
        question:
          "点 P 在抛物线 y=x²+1 上，若横坐标为 2，则点 P 到 x 轴的距离是多少？",
        analysis:
          "代入 x=2 得 y=5，点到 x 轴的距离等于纵坐标的绝对值，所以距离是 5。",
      },
    ],

    exercises: [
      {
        id: "kp9_011_1",
        question: "二次函数面积题最常见的第一步是____。",
        answer: "把边长或高表示成自变量的函数",
        analysis: "只有先把量表示出来，后面才能列面积式。",
      },
      {
        id: "kp9_011_2",
        question: "存在性问题里，“点在图像上”通常会转化成____。",
        answer: "点坐标满足函数解析式",
        analysis: "把图形关系翻译成代数关系，是存在性题的关键。",
      },
      {
        id: "kp9_011_3",
        question: "面积问题中若底和高都含未知量，通常要先做的是____。",
        answer: "把面积写成一个自变量的函数",
        analysis: "先统一变量，后面才能分析最值或存在性。",
      },
      {
        id: "kp9_011_4",
        question: "存在性题里，“面积等于定值”常会转化成____。",
        answer: "方程条件",
        analysis: "把几何条件翻译成代数方程是常见做法。",
      },
    ],
    formulas: ["面积问题通常先列函数关系，再做最值或解方程"],
  },
  {
    id: "kp9_004",
    chapterId: "ch2",
    order: 4,
    title: "一元二次方程的基本解法",
    content:
      "理解一元二次方程的标准形式，掌握配方法、公式法和因式分解法的适用场景。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 25,
    videoScript: `一元二次方程的一般形式是 ax²+bx+c=0，其中 a 不为 0。
常见解法有配方法、公式法和因式分解法。
遇到能直接提公因式或拆项的方程，优先想因式分解法。`,
    examples: [
      {
        question: "解方程 x² - 5x + 6 = 0。",
        analysis: "把方程因式分解为 (x-2)(x-3)=0，所以 x=2 或 x=3。",
      },
      {
        question: "解方程 x² + 3x = 0。",
        analysis: "提取公因式得 x(x+3)=0，所以 x=0 或 x=-3。",
      },
    ],

    exercises: [
      {
        id: "kp9_004_1",
        question: "方程 2x² + 1 = 0 在实数范围内有解吗？",
        answer: "无解",
        analysis: "因为 2x²≥0，所以 2x²+1 不可能等于 0。",
      },
      {
        id: "kp9_004_2",
        question: "解方程 x² - 4 = 0，最简便的方法是____。",
        answer: "因式分解法",
        analysis: "x²-4=(x-2)(x+2)，因式分解最直接。",
      },
      {
        id: "kp9_004_3",
        question: "方程 x²-7x+12=0 的解是____。",
        answer: "x=3或x=4",
        analysis: "分解因式得 (x-3)(x-4)=0。",
      },
      {
        id: "kp9_004_4",
        question: "若方程可以直接写成两个因式乘积等于 0，则优先考虑____。",
        answer: "因式分解法",
        analysis: "这是最简便的基本解法。",
      },
    ],
    formulas: [
      "一般形式：ax²+bx+c=0 (a≠0)",
      "求根公式：x = (-b ± √(b²-4ac)) / 2a",
    ],
  },
  {
    id: "kp9_012",
    chapterId: "ch2",
    order: 7,
    title: "配方法专题",
    content:
      "通过配方法把一元二次方程转化成熟悉形式，同时为二次函数顶点式和最值打基础。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 25,
    videoScript: `配方法的关键是把二次项和一次项凑成完全平方。
它不只是解方程的方法，也是函数变形的重要基础。
做题时先把二次项系数化成 1，会更稳。`,
    examples: [
      {
        question: "用配方法解方程 x² + 6x - 7 = 0。",
        analysis:
          "移项得 x²+6x=7，配方得 x²+6x+9=16，所以 (x+3)²=16，解得 x=1 或 x=-7。",
      },
      {
        question: "把方程 x² - 8x + 7 = 0 用配方法化成完全平方形式。",
        analysis: "移项或直接配方：x²-8x+16=9，所以 (x-4)²=9。",
      },
    ],

    exercises: [
      {
        id: "kp9_012_1",
        question: "把 x² + 4x + 1 配方后可写成____。",
        answer: "(x+2)²-3",
        analysis: "x²+4x+1 = x²+4x+4-3 = (x+2)²-3。",
      },
      {
        id: "kp9_012_2",
        question: "配方法最常见的第一步是____。",
        answer: "先把二次项系数化为 1",
        analysis: "这样凑完全平方最直接。",
      },
      {
        id: "kp9_012_3",
        question: "将 x²-10x 配方后可写成____。",
        answer: "(x-5)²-25",
        analysis: "凑成完全平方时要加上 25，再减去 25。",
      },
      {
        id: "kp9_012_4",
        question: "配方法中“凑平方”时，一次项系数应先____再平方。",
        answer: "除以2",
        analysis: "这是配方法的固定入口。",
      },
    ],
    formulas: ["x²+bx = (x+b/2)² - (b/2)²"],
  },
  {
    id: "kp9_005",
    chapterId: "ch2",
    order: 5,
    title: "判别式与根系关系",
    content:
      "利用判别式判断方程根的情况，理解根与系数关系在求参数和综合题中的作用。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 25,
    videoScript: `判别式 Δ=b²-4ac。
当 Δ>0 时，方程有两个不相等的实数根。
当 Δ=0 时，方程有两个相等的实数根。
当 Δ<0 时，方程没有实数根。`,
    examples: [
      {
        question: "判断方程 x² - 2x + 5 = 0 的根的情况。",
        analysis: "Δ=(-2)²-4×1×5=4-20=-16<0，所以方程没有实数根。",
      },
      {
        question: "判断方程 x²-6x+9=0 的根的情况。",
        analysis: "判别式 Δ=36-36=0，所以方程有两个相等的实数根。",
      },
    ],

    exercises: [
      {
        id: "kp9_005_1",
        question: "若方程有两个相等的实数根，则判别式 Δ = ____。",
        answer: "0",
        analysis: "两个相等实数根对应 Δ=0。",
      },
      {
        id: "kp9_005_2",
        question: "方程 x² + 4x + 1 = 0 的判别式是____。",
        answer: "12",
        analysis: "Δ=4²-4×1×1=16-4=12。",
      },
      {
        id: "kp9_005_3",
        question: "若方程没有实数根，则判别式应满足____。",
        answer: "Δ<0",
        analysis: "没有实数根对应判别式小于 0。",
      },
      {
        id: "kp9_005_4",
        question: "方程 x²-4x+3=0 的判别式为____。",
        answer: "4",
        analysis: "Δ=(-4)²-4×1×3=16-12=4。",
      },
    ],
    formulas: [
      "判别式：Δ = b² - 4ac",
      "根和：x1 + x2 = -b/a",
      "根积：x1x2 = c/a",
    ],
  },
  {
    id: "kp9_006",
    chapterId: "ch2",
    order: 6,
    title: "一元二次方程的实际应用",
    content:
      "把方程模型用于面积、增长、利润和几何问题，训练从文字到方程的建模能力。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 25,
    videoScript: `应用题先设未知数，再用题目中的数量关系列方程。
初三常见情境包括面积问题、增长率问题和几何构造中的边长关系。
列完方程后要结合实际意义验根。`,
    examples: [
      {
        question: "一个矩形面积为 48，长比宽多 2，求长和宽。",
        analysis:
          "设宽为 x，则长为 x+2。列方程 x(x+2)=48，得 x²+2x-48=0，解得 x=6 或 -8。结合实际，宽为 6，长为 8。",
      },
      {
        question:
          "某商品经过两次降价后价格从 100 元变为 81 元，设每次降价率为 x，列方程。",
        analysis: "两次降价后价格为 100(1-x)²=81，所以可列方程 (1-x)²=0.81。",
      },
    ],

    exercises: [
      {
        id: "kp9_006_1",
        question: "应用题求得两个根时，最后必须做的一步是____。",
        answer: "结合实际意义验根",
        analysis: "有些根虽然满足方程，但不符合实际背景。",
      },
      {
        id: "kp9_006_2",
        question: "“连续两年增长后达到某值”这类题通常适合建立哪类模型？",
        answer: "一元二次方程模型",
        analysis: "设增长率后往往会出现平方项，是初三高频应用模型。",
      },
      {
        id: "kp9_006_3",
        question: "应用题列出一元二次方程后，求根完成还要检查____。",
        answer: "根是否符合实际意义",
        analysis: "应用题必须验根。",
      },
      {
        id: "kp9_006_4",
        question: "增长率、降价率问题中，连续两次变化常出现____项。",
        answer: "平方",
        analysis: "两次按同一比例变化会形成平方结构。",
      },
    ],
    formulas: ["面积关系、增长率关系常转化为一元二次方程"],
  },
  {
    id: "kp9_013",
    chapterId: "ch2",
    order: 8,
    title: "方程与二次函数的联系",
    content:
      "从图像角度理解一元二次方程，把“根的情况”和“图像与 x 轴交点情况”联系起来。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 28,
    videoScript: `一元二次方程 ax²+bx+c=0 的根，对应函数 y=ax²+bx+c 与 x 轴交点的横坐标。
有两个不等实根，就有两个交点。
有两个相等实根，就有一个交点。
没有实根，就和 x 轴没有交点。`,
    examples: [
      {
        question:
          "若抛物线 y = x² - 4x + 4 与 x 轴只有一个交点，对应方程根的情况是什么？",
        analysis: "图像与 x 轴只有一个交点，说明方程有两个相等的实数根。",
      },
      {
        question: "抛物线 y=x²-2x-3 与 x 轴交于两点，说明对应方程有怎样的根？",
        analysis: "有两个交点，说明方程 x²-2x-3=0 有两个不相等的实数根。",
      },
    ],

    exercises: [
      {
        id: "kp9_013_1",
        question: "抛物线与 x 轴没有交点时，对应方程的判别式 Δ ____ 0。",
        answer: "<",
        analysis: "没有实数根，对应 Δ<0。",
      },
      {
        id: "kp9_013_2",
        question: "方程的实数根个数和图像与哪条坐标轴的交点个数对应？",
        answer: "x轴",
        analysis: "令 y=0 就是在找与 x 轴交点。",
      },
      {
        id: "kp9_013_3",
        question:
          "若方程有两个不相等的实数根，则对应抛物线与 x 轴有____个交点。",
        answer: "2",
        analysis: "两个不等实根对应两个交点。",
      },
      {
        id: "kp9_013_4",
        question: "抛物线与 x 轴只有一个交点时，判别式 Δ 应为____。",
        answer: "0",
        analysis: "切于 x 轴时对应两个相等实根。",
      },
    ],
    formulas: ["方程根 ↔ 抛物线与 x 轴交点横坐标"],
  },
  {
    id: "kp9_007",
    chapterId: "ch3",
    order: 7,
    title: "圆的基本性质",
    content: "掌握弦、弧、圆心角、圆周角以及垂径定理等圆的核心性质。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 30,
    videoScript: `圆中相等的弧所对的圆心角相等，所对的弦也相等。
同弧或等弧所对的圆周角相等。
垂径定理是圆中处理弦与半径关系的重要工具。`,
    examples: [
      {
        question: "已知圆心角 AOB = 80°，求所对圆周角的度数。",
        analysis: "同弧所对圆周角等于圆心角的一半，所以圆周角是 40°。",
      },
      {
        question: "已知同弧所对的圆心角为 100°，则对应圆周角是多少？",
        analysis: "圆周角等于圆心角的一半，所以对应圆周角是 50°。",
      },
    ],

    exercises: [
      {
        id: "kp9_007_1",
        question: "圆周角定理中，同弧所对圆周角与圆心角的关系是____。",
        answer: "圆周角等于圆心角的一半",
        analysis: "这是圆周角定理的核心结论。",
      },
      {
        id: "kp9_007_2",
        question: "若圆心到弦的距离最短，则这条线段与弦的位置关系是____。",
        answer: "垂直",
        analysis: "垂径定理和点到直线距离最短都指向垂直关系。",
      },
      {
        id: "kp9_007_3",
        question: "同弧所对的圆周角之间的关系是____。",
        answer: "相等",
        analysis: "这是圆周角定理的直接结论。",
      },
      {
        id: "kp9_007_4",
        question: "圆心角是 120°，所对圆周角是____。",
        answer: "60°",
        analysis: "圆周角等于圆心角的一半。",
      },
    ],
    formulas: [
      "圆周角 = 对应圆心角的一半",
      "垂直于弦的直径平分弦并平分弦所对的弧",
    ],
  },
  {
    id: "kp9_014",
    chapterId: "ch3",
    order: 10,
    title: "垂径定理与弧弦关系",
    content: "把垂径定理、弧弦关系和对称性结合，处理圆中长度与角度问题。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 30,
    videoScript: `垂径定理告诉我们：垂直于弦的直径，会平分弦和平分对应的弧。
圆中相等的弦对应相等的弧和相等的圆心角。
做题时要特别注意“同圆或等圆”这个前提。`,
    examples: [
      {
        question:
          "若直径垂直于一条弦，则它和这条弦之间最常见的两个结论是什么？",
        analysis: "会平分弦，并平分这条弦所对的弧。",
      },
      {
        question: "为什么垂直于弦的直径常常是圆题中的好辅助线？",
        analysis:
          "因为它同时能平分弦和平分弦所对的弧，能把长度关系和角度关系一起串起来。",
      },
    ],

    exercises: [
      {
        id: "kp9_014_1",
        question: "在同圆中，相等的弦所对的弧____。",
        answer: "相等",
        analysis: "这是弧弦关系的基础结论。",
      },
      {
        id: "kp9_014_2",
        question: "垂直于弦的直径是否一定经过弦的中点？",
        answer: "是",
        analysis: "这是垂径定理的直接结论。",
      },
      {
        id: "kp9_014_3",
        question: "在同圆中，若两条弦相等，则对应的圆心角____。",
        answer: "相等",
        analysis: "等弦对等圆心角。",
      },
      {
        id: "kp9_014_4",
        question: "垂径定理里的“垂直于弦的直径”会平分____和对应的弧。",
        answer: "弦",
        analysis: "这是垂径定理核心结论。",
      },
    ],
    formulas: ["垂径定理", "同圆中：等弦对等弧，等弧对等弦"],
  },
  {
    id: "kp9_008",
    chapterId: "ch3",
    order: 8,
    title: "切线与位置关系",
    content: "理解点与圆、直线与圆的位置关系，掌握切线的性质与判定。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 30,
    videoScript: `直线与圆的位置关系有相离、相切、相交三种。
经过切点的半径垂直于切线。
判定一条直线是不是切线，常见方法是证明它与过切点的半径垂直。`,
    examples: [
      {
        question: "为什么“半径垂直于经过端点的直线”常用来判定切线？",
        analysis:
          "因为切线性质的逆定理告诉我们：经过半径外端且垂直于该半径的直线是圆的切线。",
      },
      {
        question: "若圆心到直线的距离小于半径，直线与圆的位置关系是什么？",
        analysis: "距离小于半径，说明直线会穿过圆，所以直线与圆相交。",
      },
    ],

    exercises: [
      {
        id: "kp9_008_1",
        question: "若圆心到直线的距离等于半径，则直线与圆的位置关系是____。",
        answer: "相切",
        analysis: "圆心到直线距离与半径比较是判断位置关系的标准方法。",
      },
      {
        id: "kp9_008_2",
        question: "判定切线时，常见辅助线是____。",
        answer: "连接圆心与疑似切点",
        analysis: "这样才能利用“半径垂直切线”的判定思路。",
      },
      {
        id: "kp9_008_3",
        question: "若圆心到直线距离大于半径，则直线与圆____。",
        answer: "相离",
        analysis: "距离比较法：d>r 时相离。",
      },
      {
        id: "kp9_008_4",
        question: "判定切线时常要证明“半径与直线____”。",
        answer: "垂直",
        analysis: "这是切线判定的关键入口。",
      },
    ],
    formulas: ["d>r 相离，d=r 相切，d<r 相交", "切线垂直于过切点的半径"],
  },
  {
    id: "kp9_009",
    chapterId: "ch3",
    order: 9,
    title: "圆的综合问题",
    content: "把圆与相似、直角三角形、四边形等知识结合，处理初三几何综合题。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 30,
    videoScript: `圆综合题往往不是单独考圆，而是把圆和相似、四边形、函数坐标等内容连在一起。
遇到综合题，要先识别圆提供了哪些固定性质，再找能串联全题的中间量。`,
    examples: [
      {
        question: "圆内接四边形的一个内角为 70°，求它的对角。",
        analysis: "圆内接四边形对角互补，所以对角为 110°。",
      },
      {
        question: "圆综合题里为什么常先找“圆给出的固定关系”？",
        analysis:
          "因为圆中的圆周角、切线、弧弦关系往往是全题最稳定的已知，先抓它们更容易组织后续推理。",
      },
    ],

    exercises: [
      {
        id: "kp9_009_1",
        question: "圆内接四边形的对角和为____。",
        answer: "180°",
        analysis: "这是圆内接四边形的核心性质。",
      },
      {
        id: "kp9_009_2",
        question: "做圆综合题时，第一步更重要的是____。",
        answer: "识别圆的性质和关键关系",
        analysis: "先识别性质，后组织证明或计算路径。",
      },
      {
        id: "kp9_009_3",
        question: "圆综合题若出现切线和弦，常要联想到____。",
        answer: "切线与弦所成角",
        analysis: "这是圆综合题常见角度入口。",
      },
      {
        id: "kp9_009_4",
        question: "做圆综合题时，若同时出现四边形和圆，应优先检查是否为____。",
        answer: "圆内接四边形",
        analysis: "这样能立刻得到对角互补。",
      },
    ],
    formulas: [
      "圆内接四边形对角互补",
      "切线长定理：同一点引圆的两条切线长相等",
    ],
  },
  {
    id: "kp9_015",
    chapterId: "ch3",
    order: 11,
    title: "圆内接四边形与圆综合计算",
    content: "围绕圆内接四边形、切线长定理和角度转化，处理圆的中档综合题。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 30,
    videoScript: `圆内接四边形最核心的性质是对角互补。
如果题目里同时出现切线、弦和四边形，就要留意切线与弦所成角、圆周角以及互补关系能否串起来。`,
    examples: [
      {
        question: "圆内接四边形 ABCD 中，∠A=72°，则 ∠C=多少度？",
        analysis: "圆内接四边形对角互补，所以 ∠C = 180°-72° = 108°。",
      },
      {
        question: "圆内接四边形中，若一个外角为 68°，它的内对角是多少？",
        analysis: "圆内接四边形的外角等于内对角，所以内对角是 68°。",
      },
    ],

    exercises: [
      {
        id: "kp9_015_1",
        question: "同一点引圆的两条切线长____。",
        answer: "相等",
        analysis: "这是切线长定理。",
      },
      {
        id: "kp9_015_2",
        question: "圆内接四边形中，一个内角增大时，它的对角会____。",
        answer: "减小",
        analysis: "因为两角和固定为 180°。",
      },
      {
        id: "kp9_015_3",
        question: "圆内接四边形一个角是 95°，它的对角是____。",
        answer: "85°",
        analysis: "对角互补，所以 180°-95°=85°。",
      },
      {
        id: "kp9_015_4",
        question: "圆内接四边形中若已知一个外角，常可直接得到它的____。",
        answer: "内对角",
        analysis: "外角等于内对角。",
      },
    ],
    formulas: ["圆内接四边形对角互补", "切线长定理"],
  },
  {
    id: "kp9_016",
    chapterId: "ch4",
    order: 12,
    title: "比例线段与相似三角形判定",
    content: "掌握比例线段的基本概念，理解相似三角形的常见判定方法。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 33,
    videoScript: `相似三角形的判定主要看角和边的比例关系。
常见判定有：两角对应相等，两边成比例且夹角相等，三边对应成比例。
看到比例线段时，要先确认对应关系是否一一匹配。`,
    examples: [
      {
        question: "若两个三角形有两组对应角相等，可以判定它们相似吗？",
        analysis: "可以。根据两角对应相等判定，两三角形相似。",
      },
      {
        question: "若两个三角形中一组角相等，夹角两边对应成比例，能否判相似？",
        analysis: "能。根据两边成比例且夹角相等，可以用 SAS 判定两三角形相似。",
      },
    ],

    exercises: [
      {
        id: "kp9_016_1",
        question: "判定两个三角形相似时，最常见的角条件是____。",
        answer: "两角对应相等",
        analysis: "这是最直接、最常用的相似判定方法。",
      },
      {
        id: "kp9_016_2",
        question: "如果只知道两边成比例，但夹角不确定，能否直接判定相似？",
        answer: "不能",
        analysis: "还需要夹角相等，或者第三边也成比例。",
      },
      {
        id: "kp9_016_3",
        question: "相似判定中，若三边对应成比例，可用____判定。",
        answer: "SSS",
        analysis: "三边对应成比例即可判相似。",
      },
      {
        id: "kp9_016_4",
        question: "判相似前最容易出错的是没看清____。",
        answer: "对应关系",
        analysis: "对应边和对应角必须一一匹配。",
      },
    ],
    formulas: ["相似判定：AA、SAS、SSS"],
  },
  {
    id: "kp9_017",
    chapterId: "ch4",
    order: 13,
    title: "相似三角形性质",
    content:
      "理解相似三角形对应边成比例、对应角相等，以及周长比、面积比等重要性质。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 33,
    videoScript: `相似三角形的对应角相等，对应边成比例。
周长比等于相似比，面积比等于相似比的平方。
做题时先确定对应边，再写比例式，不要急着连乘。`,
    examples: [
      {
        question: "若两个相似三角形的相似比为 2:3，则面积比是多少？",
        analysis: "面积比等于相似比的平方，所以面积比是 4:9。",
      },
      {
        question: "两个相似三角形相似比为 3:5，则对应高的比是多少？",
        analysis: "对应高的比和相似比相同，所以是 3:5。",
      },
    ],

    exercises: [
      {
        id: "kp9_017_1",
        question: "相似三角形的周长比与相似比的关系是____。",
        answer: "相等",
        analysis: "周长比等于对应边的比，也就是相似比。",
      },
      {
        id: "kp9_017_2",
        question: "相似比为 1:2 时，面积比为____。",
        answer: "1:4",
        analysis: "面积比等于相似比平方。",
      },
      {
        id: "kp9_017_3",
        question: "相似三角形的面积比等于相似比的____。",
        answer: "平方",
        analysis: "面积比=相似比²。",
      },
      {
        id: "kp9_017_4",
        question: "若相似比为 2:5，则周长比为____。",
        answer: "2:5",
        analysis: "周长比等于相似比。",
      },
    ],
    formulas: ["周长比 = 相似比", "面积比 = 相似比²"],
  },
  {
    id: "kp9_018",
    chapterId: "ch4",
    order: 14,
    title: "位似与图形放缩",
    content: "理解位似图形的中心、位似比和放缩规律，掌握坐标背景下的位似问题。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 33,
    videoScript: `位似是相似的一种特殊情况，关键是所有对应点与位似中心在同一直线上。
位似比决定图形放大还是缩小。
在坐标题里，位似常和点坐标成比例联系。`,
    examples: [
      {
        question: "位似比大于 1 时，图形是放大还是缩小？",
        analysis: "位似比大于 1 表示图形放大。",
      },
      {
        question: "位似图形中，若位似比为 2，表示原图形是放大还是缩小？",
        analysis: "位似比大于 1，表示图形被放大。",
      },
    ],

    exercises: [
      {
        id: "kp9_018_1",
        question: "位似图形的对应点与位似中心的位置关系是____。",
        answer: "在同一直线上",
        analysis: "这是位似图形最核心的识别特征。",
      },
      {
        id: "kp9_018_2",
        question: "位似比为 1:3 时，图形变化属于____。",
        answer: "缩小",
        analysis: "位似比小于 1，表示缩小。",
      },
      {
        id: "kp9_018_3",
        question: "位似图形的对应点与位似中心一定____。",
        answer: "共线",
        analysis: "这是位似最核心的特征。",
      },
      {
        id: "kp9_018_4",
        question: "位似比小于 1 时，图形变化通常是____。",
        answer: "缩小",
        analysis: "位似比小于 1 表示缩小。",
      },
    ],
    formulas: ["位似图形对应点与位似中心三点共线"],
  },
  {
    id: "kp9_019",
    chapterId: "ch4",
    order: 15,
    title: "锐角三角函数",
    content: "掌握正弦、余弦、正切的定义和特殊角函数值，为解直角三角形做准备。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 34,
    videoScript: `锐角三角函数研究的是直角三角形中边与角的关系。
sin 看对边比斜边，cos 看邻边比斜边，tan 看对边比邻边。
30°、45°、60° 的函数值必须熟练。`,
    examples: [
      {
        question: "在直角三角形中，sinA 表示什么？",
        analysis: "sinA 表示角 A 的对边与斜边的比。",
      },
      {
        question:
          "在直角三角形中，一个锐角的对边为 3，邻边为 4，则 tanA 等于多少？",
        analysis: "tanA=对边/邻边=3/4。",
      },
    ],

    exercises: [
      {
        id: "kp9_019_1",
        question: "tanA 的定义是____。",
        answer: "对边比邻边",
        analysis: "正切是对边与邻边的比。",
      },
      {
        id: "kp9_019_2",
        question: "sin45° = ____。",
        answer: "√2/2",
        analysis: "45° 是必须熟记的特殊角函数值。",
      },
      {
        id: "kp9_019_3",
        question: "cosA 在直角三角形中表示____。",
        answer: "邻边比斜边",
        analysis: "余弦是邻边与斜边的比。",
      },
      {
        id: "kp9_019_4",
        question: "sin30° 的值是____。",
        answer: "1/2",
        analysis: "30° 特殊角函数值要熟记。",
      },
    ],
    formulas: ["sinA=对边/斜边", "cosA=邻边/斜边", "tanA=对边/邻边"],
  },
  {
    id: "kp9_020",
    chapterId: "ch4",
    order: 16,
    title: "解直角三角形与实际应用",
    content: "把锐角三角函数用于求边、求角，以及仰角俯角、测高测距等实际问题。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 34,
    videoScript: `解直角三角形就是已知部分边角，求其他边角。
实际应用题常见关键词是仰角、俯角、坡度、测高。
做题时先画出示意图，再确定哪一条边是对边、邻边、斜边。`,
    examples: [
      {
        question: "解决仰角问题时，为什么要先画示意图？",
        analysis: "因为必须先辨认直角三角形中的边和角，才能正确选择三角函数。",
      },
      {
        question: "测高问题中，若已知仰角和水平距离，通常优先用哪个三角函数？",
        analysis:
          "如果要求高，常把高看作对边、水平距离看作邻边，优先考虑正切 tan。",
      },
    ],

    exercises: [
      {
        id: "kp9_020_1",
        question: "解直角三角形应用题最关键的第一步是____。",
        answer: "画示意图并标清边角关系",
        analysis: "只有图形清楚，三角函数才不会选错。",
      },
      {
        id: "kp9_020_2",
        question: "仰角问题通常和哪类数学模型联系最紧？",
        answer: "直角三角形模型",
        analysis: "仰角俯角本质上是解直角三角形的应用。",
      },
      {
        id: "kp9_020_3",
        question: "仰角、俯角应用题里，常先把实际情境转化成____。",
        answer: "直角三角形",
        analysis: "这是函数应用的基本模型。",
      },
      {
        id: "kp9_020_4",
        question: "已知斜边和一个锐角，要求对边长度，优先考虑____。",
        answer: "正弦",
        analysis: "sin=对边/斜边。",
      },
    ],
    formulas: ["仰角、俯角问题常转化为解直角三角形"],
  },
  {
    id: "kp9_021",
    chapterId: "ch5",
    order: 17,
    title: "反比例函数的图像与性质",
    content:
      "掌握反比例函数的图像分布、增减性与基本特征，理解它和一次函数、二次函数的不同。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 32,
    videoScript: `反比例函数最常见的形式是 y=k/x。
k>0 时图像在第一、三象限，k<0 时图像在第二、四象限。
图像靠近坐标轴但永远不与坐标轴相交。`,
    examples: [
      {
        question: "反比例函数 y=3/x 的图像在哪两个象限？",
        analysis: "因为 k=3>0，所以图像在第一、三象限。",
      },
      {
        question: "反比例函数 y=-2/x 的图像在哪两个象限？",
        analysis: "因为 k=-2<0，所以图像在第二、四象限。",
      },
    ],
    exercises: [
      {
        id: "kp9_021_1",
        question: "函数 y=-5/x 的图像位于____象限。",
        answer: "第二、四",
        analysis: "k<0 时，图像在第二、四象限。",
      },
      {
        id: "kp9_021_2",
        question: "反比例函数图像与坐标轴的位置关系是____。",
        answer: "无限接近但不相交",
        analysis: "反比例函数图像的两支双曲线都不与坐标轴相交。",
      },
      {
        id: "kp9_021_3",
        question: "若反比例函数图像在第一、三象限，则参数 k 应满足____。",
        answer: "k>0",
        analysis: "第一、三象限对应 k 为正。",
      },
      {
        id: "kp9_021_4",
        question:
          "反比例函数与一次函数图像相比，最明显的区别之一是它有____支图像。",
        answer: "两",
        analysis: "反比例函数图像由两支双曲线组成。",
      },
    ],
    formulas: ["y=k/x（k≠0）", "k>0 在第一、三象限；k<0 在第二、四象限"],
  },
  {
    id: "kp9_022",
    chapterId: "ch5",
    order: 18,
    title: "参数 k 与象限判断",
    content:
      "理解反比例函数中参数 k 的符号和大小意义，会通过点坐标、图像位置求 k。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 32,
    videoScript: `反比例函数里的核心参数只有一个，就是 k。
如果图像经过某点 (x,y)，就能用 k=xy 求出参数。
判断 k 的正负时，先看点在第几象限，再看 x 和 y 的符号。`,
    examples: [
      {
        question: "若双曲线经过点 (2,3)，参数 k 等于多少？",
        analysis: "把点坐标代入 y=k/x，可得 k=2×3=6。",
      },
      {
        question: "若双曲线经过点 (-3,-2)，参数 k 等于多少？",
        analysis: "由 k=xy，可得 k=(-3)×(-2)=6。",
      },
    ],
    exercises: [
      {
        id: "kp9_022_1",
        question: "双曲线经过点 (-2,4)，则 k=____。",
        answer: "-8",
        analysis: "k=xy=(-2)×4=-8。",
      },
      {
        id: "kp9_022_2",
        question: "若双曲线位于第一、三象限，则 k 的符号是____。",
        answer: "正",
        analysis: "第一、三象限对应 k>0。",
      },
      {
        id: "kp9_022_3",
        question: "若点在第二象限的反比例函数图像上，则参数 k 的符号为____。",
        answer: "负",
        analysis: "第二、四象限对应 k<0。",
      },
      {
        id: "kp9_022_4",
        question: "若双曲线经过点 (m,2)，且 k=-6，则 m=____。",
        answer: "-3",
        analysis: "由 k=xy，可得 2m=-6，所以 m=-3。",
      },
    ],
    formulas: ["经过点 (x,y) 时，k=xy"],
  },
  {
    id: "kp9_023",
    chapterId: "ch5",
    order: 19,
    title: "反比例函数中的面积问题",
    content:
      "掌握反比例函数与坐标轴、矩形面积之间的关系，理解“面积定值”是该专题的高频特征。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 32,
    videoScript: `反比例函数最经典的性质之一就是面积定值。
如果点 P(x,y) 在双曲线上，那么以点 P 和坐标轴围成的矩形面积常和 |k| 有关。
做题时先把面积写成 x·y，再代入 y=k/x。`,
    examples: [
      {
        question: "点 P 在 y=6/x 上，若以 P 和坐标轴围成矩形，则面积是多少？",
        analysis: "面积为 |xy|=|6|=6。",
      },
      {
        question:
          "点 P 在 y=8/x 上，若点 P 的横坐标为 4，则围成矩形面积是多少？",
        analysis: "此时 y=2，面积为 |xy|=|4×2|=8。",
      },
    ],
    exercises: [
      {
        id: "kp9_023_1",
        question: "点 P 在 y=-4/x 上，与坐标轴围成矩形面积的绝对值为____。",
        answer: "4",
        analysis: "面积绝对值为 |xy|=|-4|=4。",
      },
      {
        id: "kp9_023_2",
        question: "反比例函数面积题常用的第一步是把面积写成____。",
        answer: "x 与 y 的乘积",
        analysis: "这样才能利用 y=k/x 转化出定值。",
      },
      {
        id: "kp9_023_3",
        question:
          "若点 P 在 y=10/x 上，则与坐标轴围成矩形面积的绝对值恒为____。",
        answer: "10",
        analysis: "矩形面积绝对值恒为 |k|。",
      },
      {
        id: "kp9_023_4",
        question: "反比例函数面积定值问题里，最核心的不变量常是____。",
        answer: "|k|",
        analysis: "面积定值通常直接对应参数的绝对值。",
      },
    ],
    formulas: ["矩形面积常用 S=|xy|=|k|"],
  },
  {
    id: "kp9_024",
    chapterId: "ch5",
    order: 20,
    title: "参数型问题与待定系数",
    content:
      "学会由图像、点坐标、交点条件求反比例函数参数，并能处理简单的参数型综合题。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 37,
    videoScript: `参数型问题通常先找“图像经过点”或“图像落在哪个象限”。
只要点在双曲线上，就能先通过 k=xy 建立参数关系。
如果还结合几何图形，就要把长度、面积和点坐标再联系起来。`,
    examples: [
      {
        question: "若反比例函数 y=k/x 经过点 (4,-2)，则 k 为多少？",
        analysis: "k=4×(-2)=-8。",
      },
      {
        question: "若反比例函数经过点 (-5,2)，则参数 k 是多少？",
        analysis: "由 k=xy，可得 k=(-5)×2=-10。",
      },
    ],
    exercises: [
      {
        id: "kp9_024_1",
        question: "若双曲线经过点 (1,m)，且 k=5，则 m=____。",
        answer: "5",
        analysis: "由 k=xy，可得 1×m=5，所以 m=5。",
      },
      {
        id: "kp9_024_2",
        question: "反比例函数参数题最常见的入口公式是____。",
        answer: "k=xy",
        analysis: "只要点在双曲线上，就优先考虑 k=xy。",
      },
      {
        id: "kp9_024_3",
        question: "若双曲线经过点 (2,n)，且位于第二、四象限，则 n 应是____数。",
        answer: "负",
        analysis: "第二、四象限中 x 与 y 异号，这里 x=2 为正，所以 n 为负。",
      },
      {
        id: "kp9_024_4",
        question: "参数型问题里，若已知“图像经过点”，优先就能建立____关系。",
        answer: "k=xy",
        analysis: "这是反比例函数参数题最稳的入口。",
      },
    ],
    formulas: ["点在双曲线上时可直接用 k=xy"],
  },
  {
    id: "kp9_025",
    chapterId: "ch5",
    order: 21,
    title: "反比例函数综合题入门",
    content:
      "把反比例函数和坐标、几何、面积、参数结合起来，形成中考函数综合题的基本处理思路。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 36,
    videoScript: `反比例函数综合题经常和矩形、三角形、面积定值结合。
解题时先抓双曲线本身提供的等式，再把图形量转成坐标关系。
不要一开始就陷入复杂图形，先找 k。`,
    examples: [
      {
        question: "反比例函数综合题里最常先抓住什么量？",
        analysis: "通常先抓住参数 k 或由此带来的面积定值。",
      },
      {
        question: "反比例函数和矩形综合题里，为什么常先求 k？",
        analysis:
          "因为求出 k 后，很多面积和坐标关系都会立刻变成定值或简单等式。",
      },
    ],
    exercises: [
      {
        id: "kp9_025_1",
        question: "反比例函数综合题若涉及矩形面积，优先考虑的核心量常是____。",
        answer: "k 或 |k|",
        analysis: "因为面积通常能转化成 |xy|，进一步转成 |k|。",
      },
      {
        id: "kp9_025_2",
        question: "做反比例函数综合题时，先找参数关系比先画复杂辅助线更____。",
        answer: "有效",
        analysis: "先抓参数和定值，往往能更快建立主线。",
      },
      {
        id: "kp9_025_3",
        question:
          "反比例函数综合题中，若图形里同时出现面积和点坐标，常要先想到____。",
        answer: "用xy或k建立关系",
        analysis: "面积和点坐标往往都能回到 xy 或 k 上。",
      },
      {
        id: "kp9_025_4",
        question: "做反比例函数综合题时，“先找 k”本质上是在先找____。",
        answer: "主线定量",
        analysis: "先找到定量，后面的综合关系会更容易串起来。",
      },
    ],
    formulas: ["综合题先找 k，再找图形关系"],
  },
  {
    id: "kp9_026",
    chapterId: "ch6",
    order: 22,
    title: "平均数、中位数、众数",
    content:
      "掌握三类常见统计量的意义和适用场景，会根据数据特征选择合适的统计量描述样本。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 31,
    videoScript: `平均数看整体水平，中位数看中间位置，众数看出现最多。
数据里如果有明显极端值，就要警惕平均数是否失真。
做题时不要只会算，还要会判断哪个统计量更能代表数据。`,
    examples: [
      {
        question: "一组数据有极端值时，为什么常优先关注中位数？",
        analysis: "因为中位数受极端值影响较小，更能反映中间水平。",
      },
      {
        question: "为什么描述“最常见水平”时常会用到众数？",
        analysis: "因为众数表示出现次数最多的数据，最能体现“最常见”的情况。",
      },
    ],
    exercises: [
      {
        id: "kp9_026_1",
        question: "描述“出现次数最多的数据”时，应使用____。",
        answer: "众数",
        analysis: "众数表示出现频率最高的那个数据。",
      },
      {
        id: "kp9_026_2",
        question: "一组数据有明显极端值时，比平均数更稳的统计量常是____。",
        answer: "中位数",
        analysis: "中位数对极端值不敏感。",
      },
      {
        id: "kp9_026_3",
        question: "描述一组数据的整体平均水平时，通常优先考虑____。",
        answer: "平均数",
        analysis: "平均数最能直接反映整体水平。",
      },
      {
        id: "kp9_026_4",
        question: "若一组数据排序后中间两个数分别是 6 和 8，则中位数是____。",
        answer: "7",
        analysis: "偶数个数据时，中位数取中间两个数的平均数。",
      },
    ],
    formulas: ["平均数 = 数据总和 ÷ 个数", "中位数要先排序再取中间值"],
  },
  {
    id: "kp9_027",
    chapterId: "ch6",
    order: 23,
    title: "方差与波动大小",
    content: "理解方差反映数据离散程度，会比较两组数据的稳定性和波动大小。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 31,
    videoScript: `方差不看“高不高”，看“散不散”。
平均数相同的两组数据，方差越大，说明波动越大。
中考里常见的不是硬算复杂方差，而是结合情境比较稳定性。`,
    examples: [
      {
        question: "两组数据平均数相同，如何判断谁更稳定？",
        analysis: "比较方差，方差较小的那组更稳定。",
      },
      {
        question: "为什么方差大并不代表平均水平高？",
        analysis: "因为方差只描述波动大小，不表示数据整体大小。",
      },
    ],
    exercises: [
      {
        id: "kp9_027_1",
        question: "若两组数据平均数相同，则更稳定的一组方差应更____。",
        answer: "小",
        analysis: "方差越小，波动越小。",
      },
      {
        id: "kp9_027_2",
        question: "方差主要用来描述数据的____。",
        answer: "波动大小",
        analysis: "方差衡量离散程度。",
      },
      {
        id: "kp9_027_3",
        question: "平均数相同的两组数据中，更整齐稳定的一组方差通常更____。",
        answer: "小",
        analysis: "越稳定，离散程度越低。",
      },
      {
        id: "kp9_027_4",
        question: "比较稳定性时，只看平均数而不看方差，结论往往会____。",
        answer: "不完整",
        analysis: "平均数说明水平，方差说明稳定性，两者作用不同。",
      },
    ],
    formulas: ["方差越小，数据越稳定"],
  },
  {
    id: "kp9_028",
    chapterId: "ch6",
    order: 24,
    title: "统计图表分析",
    content:
      "会从条形图、折线图、扇形图和频数分布图中读取信息，完成趋势判断、比例换算和总量还原。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 31,
    videoScript: `图表题最怕“看图快，读条件慢”。
先明确图表横纵轴表示什么，再看单位、总量和局部变化。
扇形图重点看百分比，折线图重点看趋势，条形图重点看大小比较。
如果图中给的是比值或百分比，别急着下结论，先还原成具体人数。`,
    examples: [
      {
        question: "扇形图题第一眼最该先看什么？",
        analysis:
          "先看各部分对应的百分比或圆心角，再判断整体总量，必要时还原成具体人数。",
      },
      {
        question: "条形图和折线图放在一起时，为什么要先分清各自表示的量？",
        analysis:
          "因为一个图可能表示人数，另一个图可能表示变化趋势，混着看容易误读信息。",
      },
    ],
    exercises: [
      {
        id: "kp9_028_1",
        question: "折线图最适合观察数据的____。",
        answer: "变化趋势",
        analysis: "折线图突出随时间或顺序的变化。",
      },
      {
        id: "kp9_028_2",
        question: "扇形图中各部分通常表示总体中的____。",
        answer: "占比",
        analysis: "扇形图强调部分与整体的关系。",
      },
      {
        id: "kp9_028_3",
        question: "图表题中若给出百分比，常要先把它还原成____。",
        answer: "具体数量",
        analysis: "只有还原成数量，后面才能继续比较或求概率。",
      },
      {
        id: "kp9_028_4",
        question: "折线图最容易帮助判断数据的____。",
        answer: "增减变化",
        analysis: "折线图突出趋势变化。",
      },
    ],
    formulas: [
      "扇形图常用“部分 ÷ 总体”求占比",
      "图表综合题常先由占比或比值还原人数",
    ],
  },
  {
    id: "kp9_029",
    chapterId: "ch6",
    order: 25,
    title: "列表法与树状图求概率",
    content:
      "掌握在有限等可能情形下，使用列表法和树状图统计结果并求概率，特别注意有序结果和条件筛选。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 31,
    videoScript: `古典概率题先数“所有可能”，再数“符合条件”。
两个步骤、两个对象的问题常用列表法；分支更清楚时可画树状图。
关键不是画得漂亮，而是保证不重不漏。
如果题目是连续两次操作，要注意前后顺序通常不能随便合并。`,
    examples: [
      {
        question: "为什么概率题经常要画树状图？",
        analysis:
          "因为树状图能帮助我们把所有可能情况列全且不重复，还能清楚保留先后顺序。",
      },
      {
        question: "掷一枚硬币两次，为什么“正反”和“反正”要分开统计？",
        analysis: "因为两次操作有先后顺序，它们是两个不同的有序结果。",
      },
    ],
    exercises: [
      {
        id: "kp9_029_1",
        question: "古典概率的基本公式是____。",
        answer: "符合条件的结果数 ÷ 全部等可能结果数",
        analysis: "古典概率就是有利结果与总结果的比值。",
      },
      {
        id: "kp9_029_2",
        question: "两个对象依次取值、容易重复遗漏时，常用____帮助统计。",
        answer: "列表法或树状图",
        analysis: "两种方法都能帮助不重不漏地列出结果。",
      },
      {
        id: "kp9_029_3",
        question: "连续两次操作的概率题里，最容易漏掉的是结果的____。",
        answer: "顺序",
        analysis: "有序结果不能随便合并。",
      },
      {
        id: "kp9_029_4",
        question: "若样本空间列得不全，求出的概率通常会____。",
        answer: "出错",
        analysis: "古典概率最怕总结果数统计不完整。",
      },
    ],
    formulas: [
      "P(A)=符合条件的结果数/全部等可能结果数",
      "连续两次操作时常用有序数对或树状图保留顺序",
    ],
  },
  {
    id: "kp9_030",
    chapterId: "ch6",
    order: 26,
    title: "统计与概率综合题入门",
    content:
      "把统计图表、样本数据和概率模型结合起来，形成初三统计与概率综合题的基本处理主线。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 31,
    videoScript: `统计与概率综合题常先给图表，再让你判断趋势、计算数量，最后再求概率。
解题顺序要稳：先读图表得到数据，再还原人数或分类数量，最后建立样本空间谈概率。
不要把“看图”和“求概率”混成一步。`,
    examples: [
      {
        question: "统计与概率综合题为什么要先读清图表再求概率？",
        analysis:
          "因为概率模型里的总数、分类数量和有利结果通常都来自图表信息。",
      },
      {
        question:
          "统计与概率综合题里，为什么“先还原人数”往往比直接列概率更稳？",
        analysis:
          "因为人数和分类数弄清后，样本空间才会稳定，不容易把概率列错。",
      },
    ],
    exercises: [
      {
        id: "kp9_030_1",
        question: "统计与概率综合题常见的第一步是____。",
        answer: "先从图表中读出有效数据",
        analysis: "没有先读出数据，后面概率模型就无从建立。",
      },
      {
        id: "kp9_030_2",
        question: "如果图表信息没读清，就直接求概率，最容易导致____。",
        answer: "总结果数或有利结果数统计错误",
        analysis: "概率题最怕样本空间数错。",
      },
      {
        id: "kp9_030_3",
        question: "统计与概率综合题中，图表读完后通常下一步是____。",
        answer: "整理数量关系",
        analysis: "先把分类数量整理出来，再谈概率更稳。",
      },
      {
        id: "kp9_030_4",
        question: "综合题把“看图”和“求概率”分两步做，主要是为了避免____。",
        answer: "样本空间混乱",
        analysis: "数据没理顺就求概率最容易出错。",
      },
    ],
    formulas: [
      "综合题先读图，再列数据，再求概率",
      "比值/百分比类综合题先还原人数再建概率模型",
    ],
  },
  {
    id: "kp9_031",
    chapterId: "ch7",
    order: 27,
    title: "常见辅助线策略",
    content:
      "识别几何综合题里最常见的辅助线入口，学会在平行、垂直、中点、圆半径之间做出第一步判断。",
    videoBvid: "BV1so4y1W7a3",
    videoPage: 28,
    videoScript: `几何综合题最怕一上来乱作线。
先看题目已有的条件：平行、垂直、中点、圆、切线，往往已经在提示你该补哪条线。
辅助线不是越多越好，而是要服务于相似、等腰、直角或圆的性质。`,
    examples: [
      {
        question: "几何题中出现“切线”时，为什么常先想到连接圆心与切点？",
        analysis: "因为圆的切线垂直于过切点的半径，这条半径常是关键辅助线。",
      },
      {
        question: "几何题里出现“平行”时，为什么常先考虑作平行线或追同位角？",
        analysis: "因为平行关系最容易带出角关系，进一步为相似或等腰结构服务。",
      },
    ],
    exercises: [
      {
        id: "kp9_031_1",
        question: "题目出现“切线”条件时，常优先补的辅助线是____。",
        answer: "连接圆心与切点的半径",
        analysis: "半径垂直切线，是切线题的常见入口。",
      },
      {
        id: "kp9_031_2",
        question: "辅助线的首要原则是____。",
        answer: "围绕已知条件服务于后续定理使用",
        analysis: "辅助线不是随便作，而是为相似、直角、圆性质等服务。",
      },
      {
        id: "kp9_031_3",
        question: "几何综合题里，辅助线若不能服务后续推理，通常说明它____。",
        answer: "不够合适",
        analysis: "辅助线要服务于角、边、相似、直角等主线。",
      },
      {
        id: "kp9_031_4",
        question: "看到“中点”条件时，常要联想到中线、倍长或____。",
        answer: "垂直平分线",
        analysis: "中点条件经常对应这些基础辅助线入口。",
      },
    ],
    formulas: ["切线 ⟂ 过切点的半径", "中点常联想到中线、垂直平分线或倍长"],
  },
  {
    id: "kp9_032",
    chapterId: "ch7",
    order: 28,
    title: "相似与圆综合",
    content:
      "把相似三角形和圆周角、切线、弧弦关系结合起来，形成中考圆几何综合题的常见处理主线。",
    videoBvid: "BV1so4y1W7a3",
    videoPage: 31,
    videoScript: `圆与相似综合题常见两条主线：先从角追出相似，再用相似比做计算；
或者先由切线、圆周角得到角关系，再回到相似。
看到圆不要只想圆，很多时候真正落地的是相似三角形。`,
    examples: [
      {
        question: "圆与相似综合题里，为什么常常先追角？",
        analysis:
          "因为角关系往往是建立相似三角形的第一步，后续长度和面积都靠相似比展开。",
      },
      {
        question: "为什么圆和相似放在一起时，常常“圆只是给角，相似负责算边”？",
        analysis:
          "因为圆的性质常先提供角关系，而真正展开长度和面积计算时更依赖相似比。",
      },
    ],
    exercises: [
      {
        id: "kp9_032_1",
        question: "圆与相似综合题里，建立相似三角形前最常先做的是____。",
        answer: "先追角找对应角相等",
        analysis: "先有角关系，后面才更容易判相似。",
      },
      {
        id: "kp9_032_2",
        question: "切线题若要和相似结合，常需要先利用切线与半径的____关系。",
        answer: "垂直",
        analysis: "半径垂直切线可以帮助构造直角或补出角关系。",
      },
      {
        id: "kp9_032_3",
        question:
          "圆与相似综合题中，若已经追出两个角相等，下一步常要考虑____。",
        answer: "建立相似三角形",
        analysis: "角关系的目标通常就是服务相似判定。",
      },
      {
        id: "kp9_032_4",
        question: "切线、圆周角、相似放在同一题时，最核心的中间桥梁常是____。",
        answer: "角关系",
        analysis: "先有角关系，后面才能顺利连到相似。",
      },
    ],
    formulas: ["同弧所对圆周角相等", "切线与半径垂直", "相似后对应边成比例"],
  },
  {
    id: "kp9_033",
    chapterId: "ch7",
    order: 29,
    title: "四边形与三角形综合",
    content:
      "把平行四边形、矩形、菱形、梯形和三角形中的角、边、面积关系放到一题中统筹处理。",
    videoBvid: "BV1so4y1W7a3",
    videoPage: 21,
    videoScript: `四边形综合题不是新知识，而是旧知识叠在一起。
关键是先认出题里哪个图形最“稳定”：平行、等腰、直角、对角线性质通常都是突破口。
别急着全图通吃，先抓住一个能推出更多关系的图形。`,
    examples: [
      {
        question: "四边形综合题中为什么常先看平行关系？",
        analysis:
          "因为平行关系能快速带出内错角、同位角，也常帮助建立相似或面积关系。",
      },
      {
        question: "平行四边形综合题里，为什么经常先抓对边平行和对边相等？",
        analysis: "因为这两组性质最稳定，能帮助快速建立角关系和边长关系。",
      },
    ],
    exercises: [
      {
        id: "kp9_033_1",
        question: "四边形综合题里若出现两组平行，常优先想到____。",
        answer: "平行带来的角关系和相似入口",
        analysis: "平行既能追角，也常为相似做铺垫。",
      },
      {
        id: "kp9_033_2",
        question: "矩形、菱形、平行四边形综合题都要先辨认它们的____。",
        answer: "特殊性质",
        analysis: "不同四边形的对边、对角、对角线性质是后续推理基础。",
      },
      {
        id: "kp9_033_3",
        question: "四边形综合题若出现平行关系，常可优先得到____角关系。",
        answer: "同位角或内错角",
        analysis: "平行最直接的作用就是追角。",
      },
      {
        id: "kp9_033_4",
        question:
          "四边形与三角形综合题里，先抓“最稳定图形”的目的主要是为了____。",
        answer: "建立主线",
        analysis: "先找稳定图形，后面推理会更有抓手。",
      },
    ],
    formulas: [
      "平行线可带出同位角、内错角",
      "面积题常联动同底、同高与比例关系",
    ],
  },
  {
    id: "kp9_034",
    chapterId: "ch7",
    order: 30,
    title: "几何计算与最值入门",
    content:
      "处理几何综合题中的长度、角度、面积和简单最值问题，建立“先转化，再计算”的主线。",
    videoBvid: "BV1so4y1W7a3",
    videoPage: 20,
    videoScript: `几何最值题不一定真的难，关键是先把变化量和定量分开。
很多题要先用相似、勾股、面积公式把量写出来，再看哪些是不变的，哪些在变。
不要一开始就死盯“最值”两个字，先把表达式搭起来。`,
    examples: [
      {
        question: "几何最值题为什么常要先把长度或面积写成代数式？",
        analysis:
          "因为只有先把几何量表达清楚，后面才有可能分析它的变化趋势和最值位置。",
      },
      {
        question: "为什么几何最值题里常常要先区分“定量”和“变量”？",
        analysis:
          "因为只有分清哪些量不变、哪些量在变，才能判断最值到底由谁决定。",
      },
    ],
    exercises: [
      {
        id: "kp9_034_1",
        question: "几何最值题里，第一步通常是先把几何量____。",
        answer: "转化成可计算或可比较的表达式",
        analysis: "先表达，再分析，最值才有抓手。",
      },
      {
        id: "kp9_034_2",
        question: "若题目问面积最值，常要先分清哪些量是____、哪些量在变化。",
        answer: "定量",
        analysis: "最值分析的前提是看清定量和变量。",
      },
      {
        id: "kp9_034_3",
        question: "几何最值题中，“先表达再分析”里的“表达”通常指____。",
        answer: "把几何量写成式子",
        analysis: "要先把长度、面积等量代数化。",
      },
      {
        id: "kp9_034_4",
        question: "若几何量无法写成表达式，最值题往往会缺少____。",
        answer: "抓手",
        analysis: "没有表达式，就很难分析变化趋势。",
      },
    ],
    formulas: ["最值题先找变量，再找不变量", "面积常通过底高、比例或割补转化"],
  },
  {
    id: "kp9_035",
    chapterId: "ch7",
    order: 31,
    title: "几何存在性入门",
    content:
      "认识几何存在性问题的基本问法，学会围绕分类讨论、边界位置和构造条件展开分析。",
    videoBvid: "BV1so4y1W7a3",
    videoPage: 29,
    videoScript: `存在性题最怕一句话就想完。
这类题常要先判断“能不能作出来”，再看“能作几个”，最后才是具体位置。
很多存在性题都离不开分类讨论，尤其是点在线段内外、圆内外、锐角钝角这些情形。`,
    examples: [
      {
        question: "几何存在性题为什么经常要分类讨论？",
        analysis:
          "因为图形位置变化后，关系式和构造条件可能会发生变化，不分类就容易漏情况。",
      },
      {
        question: "为什么存在性题不能只看一种点位情况？",
        analysis: "因为点在线段内外、锐角钝角、圆内外等位置变化都会影响结论。",
      },
    ],
    exercises: [
      {
        id: "kp9_035_1",
        question: "存在性题常见的关键过程之一是____。",
        answer: "分类讨论不同位置或不同情形",
        analysis: "不同位置往往对应不同结论，必须分类。",
      },
      {
        id: "kp9_035_2",
        question: "存在性题如果只讨论一种位置，最容易导致____。",
        answer: "漏解",
        analysis: "存在性题最常见的问题就是分类不全。",
      },
      {
        id: "kp9_035_3",
        question: "存在性题里，分类讨论前最需要先看清的是点或图形的____。",
        answer: "位置变化",
        analysis: "位置不同，关系式常常不同。",
      },
      {
        id: "kp9_035_4",
        question: "存在性题若分类边界不清，最常出现的问题是____。",
        answer: "重解或漏解",
        analysis: "分类讨论最怕边界混乱。",
      },
    ],
    formulas: ["存在性题常配合分类讨论", "先判存在，再数个数，再定位置"],
  },
  {
    id: "kp9_036",
    chapterId: "ch8",
    order: 32,
    title: "函数与方程综合",
    content:
      "把函数图像、方程的根、交点坐标和解析式联系起来，建立代数综合题的基本联动主线。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 35,
    videoScript: `代数综合题里，函数和方程经常不是两件事。
图像和 x 轴的交点，对应的是方程的根；两个函数的交点，对应的是联立方程的解。
看到“交点、根、解析式”这些词，要立刻想到它们之间能互相转化。`,
    examples: [
      {
        question: "为什么函数图像与 x 轴的交点常能转成方程问题？",
        analysis: "因为交点处 y=0，所以本质上是在解对应函数值等于 0 的方程。",
      },
      {
        question: "为什么两个函数图像的交点问题常要回到联立方程？",
        analysis: "因为交点必须同时满足两条函数关系，所以本质上是联立求解。",
      },
    ],
    exercises: [
      {
        id: "kp9_036_1",
        question: "函数图像与 x 轴交点的横坐标，本质上对应方程的____。",
        answer: "根",
        analysis: "交点满足 y=0，所以横坐标就是方程解。",
      },
      {
        id: "kp9_036_2",
        question: "两个函数图像交点的坐标，本质上对应____的解。",
        answer: "联立方程组",
        analysis: "交点同时满足两个函数关系。",
      },
      {
        id: "kp9_036_3",
        question:
          "函数与方程综合题里，若题目提到“交点横坐标”，常要优先想到____。",
        answer: "方程的解",
        analysis: "横坐标通常就是令两个函数值相等后的解。",
      },
      {
        id: "kp9_036_4",
        question: "函数图像与 x 轴交点个数，本质上反映对应方程____。",
        answer: "实数根个数",
        analysis: "交点和根是同一件事的两种表达。",
      },
    ],
    formulas: ["图像与 x 轴交点满足 y=0", "两个函数交点满足联立方程"],
  },
  {
    id: "kp9_037",
    chapterId: "ch8",
    order: 33,
    title: "参数型问题入门",
    content:
      "识别代数综合题中的参数入口，学会先找参数取值范围、再根据条件建立等式或不等式。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 37,
    videoScript: `参数题最怕一上来就硬算。
先看参数控制了什么：控制开口方向、根的个数、交点位置，还是表达式范围。
参数题的第一步通常不是求值，而是先判断它必须满足哪些条件。`,
    examples: [
      {
        question: "参数题为什么常先讨论范围而不是直接求参数？",
        analysis:
          "因为很多参数题先要满足“有解、交点在某处、图像满足某性质”等前提，范围是第一层门槛。",
      },
      {
        question: "为什么参数题里“先列条件”比“先代数值”更稳？",
        analysis: "因为参数题的核心往往是条件限制，条件不清就容易把方向算偏。",
      },
    ],
    exercises: [
      {
        id: "kp9_037_1",
        question:
          "参数题中，若题目要求方程有两个不相等的实数根，通常要先想到____。",
        answer: "判别式大于 0",
        analysis: "这是最基本的有根条件。",
      },
      {
        id: "kp9_037_2",
        question:
          "处理参数题时，第一步常不是代入求值，而是先找参数应满足的____。",
        answer: "条件或范围",
        analysis: "参数题往往先有限制条件，再谈具体求值。",
      },
      {
        id: "kp9_037_3",
        question: "若题目要求方程有实数根，参数题中常要先检查____。",
        answer: "判别式",
        analysis: "有根条件最常由判别式给出。",
      },
      {
        id: "kp9_037_4",
        question: "参数题里“有两个不等实根”对应的最基本条件是____。",
        answer: "Δ>0",
        analysis: "这是最常见的参数入口条件。",
      },
    ],
    formulas: ["参数题先列条件，再讨论范围", "有两个不等实根常用 Δ>0"],
  },
  {
    id: "kp9_038",
    chapterId: "ch8",
    order: 34,
    title: "分类讨论主线",
    content:
      "判断代数综合题何时必须分类讨论，并学会按符号、范围、位置或根的情况进行不重不漏地分情况。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 37,
    videoScript: `分类讨论不是为了显得难，而是因为题目本身就分情况。
看到绝对值、参数、最值、根的个数、点的位置这些信息时，都要警惕是否需要分情况。
分类讨论最怕的是漏和乱，所以每一类都要有明确边界。`,
    examples: [
      {
        question: "为什么分类讨论最容易失分？",
        analysis:
          "因为很多同学知道要分情况，但边界划分不清，或者讨论不完整，导致漏解。",
      },
      {
        question: "为什么绝对值题常常要先分情况再解？",
        analysis: "因为绝对值在不同符号范围内会对应不同的去绝对值方式。",
      },
    ],
    exercises: [
      {
        id: "kp9_038_1",
        question: "代数题出现绝对值、参数或根的个数时，往往需要____。",
        answer: "分类讨论",
        analysis: "这些信息常意味着题目本身存在多种情形。",
      },
      {
        id: "kp9_038_2",
        question: "分类讨论最关键的是保证____。",
        answer: "不重不漏",
        analysis: "分类的边界必须完整且不重复。",
      },
      {
        id: "kp9_038_3",
        question: "分类讨论开始前，最关键的是先定清楚每一类的____。",
        answer: "边界",
        analysis: "边界清楚，讨论才不容易乱。",
      },
      {
        id: "kp9_038_4",
        question: "若分类讨论遗漏了一种情况，最终结果通常会出现____。",
        answer: "漏解",
        analysis: "分类不全会直接导致结论不完整。",
      },
    ],
    formulas: ["分类讨论要先定边界，再逐类求解"],
  },
  {
    id: "kp9_039",
    chapterId: "ch8",
    order: 35,
    title: "代数最值与范围",
    content:
      "处理代数综合题中的表达式最值、取值范围和条件约束，建立“先化简、再找变量关系”的主线。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 37,
    videoScript: `代数最值题不是一看到最值就开始猜。
先把式子化到更容易看结构的形式，再看变量之间有没有约束。
有些题的关键不是求具体值，而是先判断这个式子能不能取到某个值。`,
    examples: [
      {
        question: "代数最值题为什么常要先化简表达式？",
        analysis: "因为只有结构看清了，才能判断变量关系和最值入口。",
      },
      {
        question: "为什么代数最值题里“是否能取到某个值”也很重要？",
        analysis: "因为有些题不只是求最值大小，还要判断这个值是否真的能达到。",
      },
    ],
    exercises: [
      {
        id: "kp9_039_1",
        question: "代数最值题里，求最值前常要先把表达式____。",
        answer: "化简或转化",
        analysis: "结构不清时，很难判断最值入口。",
      },
      {
        id: "kp9_039_2",
        question: "若表达式取值受参数限制，求范围前常要先分析变量之间的____。",
        answer: "关系或约束",
        analysis: "范围题常不是单独看一个变量，而是看它们的联动。",
      },
      {
        id: "kp9_039_3",
        question: "代数最值题中，若式子结构杂乱，第一步通常是先____。",
        answer: "化简",
        analysis: "先把结构看清，后面才方便找最值入口。",
      },
      {
        id: "kp9_039_4",
        question: "范围题里若忽略变量之间的约束，结论往往会____。",
        answer: "偏大或偏小",
        analysis: "脱离约束谈范围很容易出错。",
      },
    ],
    formulas: ["最值题先看结构，再看约束", "范围题常先化简再讨论"],
  },
  {
    id: "kp9_040",
    chapterId: "ch8",
    order: 36,
    title: "压轴题拆解方法",
    content:
      "建立中考压轴题的阅读和拆解顺序，学会从题面里先找主线、再拆层次，而不是被题目长度吓住。",
    videoBvid: "BV1UZfRYZEQU",
    videoPage: 37,
    videoScript: `压轴题难，不只是因为算，而是因为信息多。
先看问法，再看条件，判断它属于函数、方程、参数、分类还是最值哪条主线。
压轴题通常不是一口吃掉，而是先做出第一层关系，再顺着往下走。`,
    examples: [
      {
        question: "压轴题为什么要先拆层次而不是直接往下写？",
        analysis:
          "因为压轴题往往是多层条件叠加，不拆主线就容易从第一步开始走偏。",
      },
      {
        question: "为什么压轴题里“先做第一问”常常不是机械步骤，而是寻找主线？",
        analysis:
          "因为第一问往往就是后续几问的入口，先吃透它才能顺着主线往后推。",
      },
    ],
    exercises: [
      {
        id: "kp9_040_1",
        question: "处理压轴题时，第一步更推荐先做的是____。",
        answer: "判断主线并拆分层次",
        analysis: "先判断题目属于哪类综合，再决定从哪一问或哪一层关系入手。",
      },
      {
        id: "kp9_040_2",
        question: "压轴题常见误区之一是____。",
        answer: "一上来不拆题就直接硬算",
        analysis: "信息还没理顺就硬算，通常会越做越乱。",
      },
      {
        id: "kp9_040_3",
        question: "处理压轴题时，先判断它属于哪条主线的目的主要是____。",
        answer: "决定入口",
        analysis: "主线判断清楚，才知道先做函数、方程、参数还是分类。",
      },
      {
        id: "kp9_040_4",
        question: "压轴题若不拆层次，最常见的后果是____。",
        answer: "思路混乱",
        analysis: "信息多时不分层，很容易越做越乱。",
      },
    ],
    formulas: ["压轴题先找主线，再拆层次", "先做稳的一层关系，再进下一层"],
  },
];
