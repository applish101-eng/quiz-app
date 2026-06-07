import type { Question, Subject } from '../types'

export const subjects: Subject[] = [
  {
    name: 'mathematics',
    label: 'Mathematics',
    icon: '📐',
    description: 'Algebra, Geometry, Calculus & more',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'science',
    label: 'Science',
    icon: '🔬',
    description: 'Physics, Chemistry, Biology',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    name: 'history',
    label: 'History',
    icon: '📜',
    description: 'World events & civilizations',
    color: 'from-amber-500 to-amber-600',
  },
  {
    name: 'computers',
    label: 'Computer Science',
    icon: '💻',
    description: 'Programming, Networks, AI',
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'operationalResearch',
    label: 'Operational Research',
    icon: '📊',
    description: 'Transportation, Simplex, Queuing & more',
    color: 'from-rose-500 to-rose-600',
  },
]

export const quizData: Question[] = [
  // Mathematics
  {
    id: 1,
    subject: 'mathematics',
    question: 'What is the value of π (pi) rounded to 2 decimal places?',
    options: ['3.12', '3.14', '3.16', '3.18'],
    correctAnswer: '3.14',
    explanation:
      'Pi (π) is approximately equal to 3.14159. Rounded to 2 decimal places, it is 3.14.',
  },
  {
    id: 2,
    subject: 'mathematics',
    question: 'What is the square root of 144?',
    options: ['10', '11', '12', '13'],
    correctAnswer: '12',
    explanation:
      '12 × 12 = 144, so the square root of 144 is 12.',
  },
  {
    id: 3,
    subject: 'mathematics',
    question: 'If a triangle has angles 90°, 45°, and 45°, what type of triangle is it?',
    options: [
      'Equilateral',
      'Isosceles right',
      'Scalene',
      'Obtuse',
    ],
    correctAnswer: 'Isosceles right',
    explanation:
      'A triangle with a 90° angle is a right triangle. With two equal angles (45° each), it is also isosceles, making it an isosceles right triangle.',
  },
  {
    id: 4,
    subject: 'mathematics',
    question: 'What is the derivative of x²?',
    options: ['x', '2x', '2', 'x²'],
    correctAnswer: '2x',
    explanation:
      'Using the power rule, d/dx (xⁿ) = n·xⁿ⁻¹. So d/dx (x²) = 2x.',
  },
  {
    id: 5,
    subject: 'mathematics',
    question: 'What is 15% of 200?',
    options: ['20', '25', '30', '35'],
    correctAnswer: '30',
    explanation:
      '15% of 200 = (15/100) × 200 = 0.15 × 200 = 30.',
  },

  // Science
  {
    id: 6,
    subject: 'science',
    question: 'What is the chemical symbol for water?',
    options: ['H₂O', 'CO₂', 'NaCl', 'O₂'],
    correctAnswer: 'H₂O',
    explanation:
      'Water consists of two hydrogen atoms and one oxygen atom, giving it the chemical formula H₂O.',
  },
  {
    id: 7,
    subject: 'science',
    question: 'What planet is known as the Red Planet?',
    options: ['Venus', 'Jupiter', 'Mars', 'Saturn'],
    correctAnswer: 'Mars',
    explanation:
      'Mars appears reddish due to iron oxide (rust) on its surface, earning it the nickname "Red Planet."',
  },
  {
    id: 8,
    subject: 'science',
    question: 'What is the speed of light in vacuum (approximately)?',
    options: [
      '3 × 10⁶ m/s',
      '3 × 10⁷ m/s',
      '3 × 10⁸ m/s',
      '3 × 10⁹ m/s',
    ],
    correctAnswer: '3 × 10⁸ m/s',
    explanation:
      'Light travels at approximately 299,792,458 m/s in a vacuum, commonly rounded to 3 × 10⁸ m/s.',
  },
  {
    id: 9,
    subject: 'science',
    question: 'What subatomic particle has a negative charge?',
    options: ['Proton', 'Neutron', 'Electron', 'Positron'],
    correctAnswer: 'Electron',
    explanation:
      'Electrons are negatively charged subatomic particles that orbit the nucleus of an atom.',
  },
  {
    id: 10,
    subject: 'science',
    question: 'What gas do plants absorb from the atmosphere during photosynthesis?',
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
    correctAnswer: 'Carbon dioxide',
    explanation:
      'Plants absorb carbon dioxide (CO₂) from the atmosphere and convert it into glucose and oxygen during photosynthesis.',
  },

  // History
  {
    id: 11,
    subject: 'history',
    question: 'In what year did World War II end?',
    options: ['1943', '1944', '1945', '1946'],
    correctAnswer: '1945',
    explanation:
      'World War II ended in 1945 with the surrender of Germany in May and Japan in September.',
  },
  {
    id: 12,
    subject: 'history',
    question: 'Who was the first President of the United States?',
    options: [
      'Thomas Jefferson',
      'George Washington',
      'Abraham Lincoln',
      'John Adams',
    ],
    correctAnswer: 'George Washington',
    explanation:
      'George Washington served as the first President of the United States from 1789 to 1797.',
  },
  {
    id: 13,
    subject: 'history',
    question: 'Which ancient civilization built the pyramids of Giza?',
    options: ['Roman', 'Greek', 'Egyptian', 'Mesopotamian'],
    correctAnswer: 'Egyptian',
    explanation:
      'The pyramids of Giza were built by the ancient Egyptians during the Old Kingdom period, around 2580–2560 BCE.',
  },
  {
    id: 14,
    subject: 'history',
    question: 'What was the Renaissance a rebirth of?',
    options: [
      'Religion',
      'Art and learning',
      'Military power',
      'Trade routes',
    ],
    correctAnswer: 'Art and learning',
    explanation:
      'The Renaissance (14th–17th century) was a cultural movement marking the rebirth of art, science, and classical learning after the Middle Ages.',
  },
  {
    id: 15,
    subject: 'history',
    question: 'Who discovered America in 1492?',
    options: [
      'Vasco da Gama',
      'Ferdinand Magellan',
      'Christopher Columbus',
      'Amerigo Vespucci',
    ],
    correctAnswer: 'Christopher Columbus',
    explanation:
      'Christopher Columbus, sailing under the Spanish flag, reached the Americas on October 12, 1492.',
  },

  // Computer Science
  {
    id: 16,
    subject: 'computers',
    question: 'What does CPU stand for?',
    options: [
      'Central Processing Unit',
      'Computer Personal Unit',
      'Central Program Utility',
      'Core Processing Unit',
    ],
    correctAnswer: 'Central Processing Unit',
    explanation:
      'The CPU (Central Processing Unit) is the brain of the computer that executes instructions from programs.',
  },
  {
    id: 17,
    subject: 'computers',
    question: 'Which data structure uses FIFO (First In, First Out)?',
    options: ['Stack', 'Queue', 'Array', 'Tree'],
    correctAnswer: 'Queue',
    explanation:
      'A queue follows the FIFO principle, where the first element added is the first one to be removed.',
  },
  {
    id: 18,
    subject: 'computers',
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
    correctAnswer: 'O(log n)',
    explanation:
      'Binary search repeatedly divides the search space in half, giving it a logarithmic time complexity of O(log n).',
  },
  {
    id: 19,
    subject: 'computers',
    question: 'What does HTML stand for?',
    options: [
      'HyperText Markup Language',
      'High Tech Modern Language',
      'HyperTransfer Markup Language',
      'Home Tool Markup Language',
    ],
    correctAnswer: 'HyperText Markup Language',
    explanation:
      'HTML (HyperText Markup Language) is the standard language for creating web pages and web applications.',
  },
  {
    id: 20,
    subject: 'computers',
    question: 'Which protocol is used to send emails?',
    options: ['FTP', 'HTTP', 'SMTP', 'TCP'],
    correctAnswer: 'SMTP',
    explanation:
      'SMTP (Simple Mail Transfer Protocol) is the standard protocol for sending emails across the Internet.',
  },

  // Operational Research
  {
    id: 21,
    subject: 'operationalResearch',
    question: 'Which of the following is the main objective of Operations Research?',
    options: [
      'Minimize cost',
      'Maximize profit',
      'Optimize performance under given constraints',
      'Reduce manpower',
    ],
    correctAnswer: 'Optimize performance under given constraints',
    explanation:
      'Operations Research is fundamentally about finding optimal solutions under resource constraints using mathematical models. While cost minimization and profit maximization are specific applications, the overarching goal is system optimization within given limitations.',
  },
  {
    id: 22,
    subject: 'operationalResearch',
    question: 'Linear programming deals with problems that can be expressed in terms of:',
    options: [
      'Linear objective function only',
      'Linear constraints only',
      'Both objective function and constraints being linear',
      'None of the above',
    ],
    correctAnswer: 'Both objective function and constraints being linear',
    explanation:
      'A linear programming problem requires both the objective function and all constraint equations to be linear. This linearity ensures the feasible region is convex and allows the simplex method to find global optima efficiently.',
  },
  {
    id: 23,
    subject: 'operationalResearch',
    question: 'Operation researchers do not:',
    options: [
      'Take responsibility for solution implementation',
      'Collect essential data',
      'Predict future actions and operations',
      'Build more than one model',
    ],
    correctAnswer: 'Take responsibility for solution implementation',
    explanation:
      'Operation researchers build models, collect data, and predict outcomes, but implementation is typically the responsibility of management and decision-makers. The OR analyst provides recommendations — not execution authority.',
  },
  {
    id: 24,
    subject: 'operationalResearch',
    question: 'Simplex method of solving LPP uses:',
    options: [
      'All the points in the feasible region',
      'Only corner points of the feasible region',
      'Only the interior points in the feasible region',
      'None of the above',
    ],
    correctAnswer: 'Only corner points of the feasible region',
    explanation:
      'The simplex method exploits the fundamental property that an optimal solution to an LPP lies at a vertex (corner point) of the feasible region. It iteratively moves from one corner point to an adjacent one, improving the objective each time, until optimality is reached.',
  },
  {
    id: 25,
    subject: 'operationalResearch',
    question: 'The degeneracy in the transportation problem indicates that:',
    options: [
      'Dummy allocation needed to be added',
      'The problem has no feasible solution',
      'The multiple optimal solution exists',
      'a and b but not c',
    ],
    correctAnswer: 'Dummy allocation needed to be added',
    explanation:
      'Degeneracy in a transportation problem occurs when the number of occupied cells is less than m + n - 1 (where m = sources, n = destinations). To proceed with the optimality test (MODI method), we allocate a very small positive quantity (ε) to an unoccupied cell — effectively adding a dummy allocation.',
  },
  {
    id: 26,
    subject: 'operationalResearch',
    question: 'Which of the following methods is used for testing optimality in a transportation problem?',
    options: [
      'MODI Method',
      'Simplex Method',
      'North-West Corner Method',
      'Dual Simplex Method',
    ],
    correctAnswer: 'MODI Method',
    explanation:
      'The MODI (Modified Distribution) Method is the standard technique for checking whether a feasible transportation solution is optimal. It computes opportunity costs (uᵢ + vⱼ) for each unoccupied cell and determines if any can reduce total cost.',
  },
  {
    id: 27,
    subject: 'operationalResearch',
    question: 'The transportation tableau shows:',
    options: [
      'Only the costs',
      'Only the supplies and demands',
      'Costs, allocations, supplies, and demands',
      'Only allocations',
    ],
    correctAnswer: 'Costs, allocations, supplies, and demands',
    explanation:
      'A transportation tableau is a comprehensive matrix that displays unit transportation costs in each cell, current allocation quantities, supply values (row totals), and demand values (column totals) all in one structured view.',
  },
  {
    id: 28,
    subject: 'operationalResearch',
    question: 'The assignment problem is a special case of:',
    options: [
      'Linear programming',
      'Transportation problem',
      'Game theory',
      'Inventory model',
    ],
    correctAnswer: 'Transportation problem',
    explanation:
      'The assignment problem is a special type of transportation problem where each source has a supply of 1 and each destination has a demand of 1. It can be solved using the Hungarian method, which is derived from transportation techniques.',
  },
  {
    id: 29,
    subject: 'operationalResearch',
    question: 'An assignment problem is said to be balanced when:',
    options: [
      'Number of tasks = Number of agents',
      'Cost of assignment is minimized',
      'All rows have zero elements',
      'None of the above',
    ],
    correctAnswer: 'Number of tasks = Number of agents',
    explanation:
      'A balanced assignment problem has an equal number of tasks (jobs) and agents (workers). When they are unequal, dummy rows or columns with zero costs are added to balance the problem before applying the Hungarian method.',
  },
  {
    id: 30,
    subject: 'operationalResearch',
    question: 'The solution to an assignment problem must satisfy:',
    options: [
      'Each job is assigned to one person',
      'Each person is assigned one job',
      'Both A and B',
      'Only one job is unassigned',
    ],
    correctAnswer: 'Both A and B',
    explanation:
      'In a standard assignment problem, the constraint is one-to-one matching: every job must be assigned to exactly one person, and every person must be assigned exactly one job. This is known as the "assignment constraint."',
  },
  {
    id: 31,
    subject: 'operationalResearch',
    question: 'Which of the following statements is true for an assignment problem?',
    options: [
      'It has more variables than constraints',
      'It is always balanced',
      'It always has an optimal solution',
      'It cannot be solved using linear programming',
    ],
    correctAnswer: 'It always has an optimal solution',
    explanation:
      'An assignment problem always has at least one optimal solution because it is a special case of the transportation problem with a bounded feasible region. The Hungarian method guarantees finding the optimal assignment.',
  },
  {
    id: 32,
    subject: 'operationalResearch',
    question: 'If the arrival rate λ > service rate μ, the queue will:',
    options: [
      'Stay stable',
      'Clear instantly',
      'Increase indefinitely',
      'Not form at all',
    ],
    correctAnswer: 'Increase indefinitely',
    explanation:
      'In queuing theory, when the arrival rate (λ) exceeds the service rate (μ), the system is unstable. Customers arrive faster than they can be served, causing the queue length to grow without bound over time.',
  },
  {
    id: 33,
    subject: 'operationalResearch',
    question: 'In queuing systems, "jockeying" refers to:',
    options: [
      'Changing queue disciplines',
      'Leaving the queue after waiting',
      'Switching between queues',
      'Waiting indefinitely',
    ],
    correctAnswer: 'Switching between queues',
    explanation:
      'Jockeying occurs when a customer moves from one queue to another (typically a shorter one) in a multi-server or multi-line system, hoping to reduce their waiting time. This differs from "reneging" (leaving the queue entirely).',
  },
  {
    id: 34,
    subject: 'operationalResearch',
    question: 'A solution is unbounded in the Simplex Method if:',
    options: [
      'Objective function is zero',
      'All entries in pivot column are non-positive',
      'More than one pivot row exists',
      'Slack variable is missing',
    ],
    correctAnswer: 'All entries in pivot column are non-positive',
    explanation:
      'In the simplex method, if all entries in the chosen pivot column are ≤ 0, the entering variable can increase indefinitely without violating any constraint. This means the feasible region is unbounded and the objective can improve without limit.',
  },
  {
    id: 35,
    subject: 'operationalResearch',
    question: 'Dual of the dual is:',
    options: [
      'Primal',
      'Dual',
      'None of these',
      'Either primal or dual',
    ],
    correctAnswer: 'Primal',
    explanation:
      'Duality is an involution property in linear programming: taking the dual of the dual problem returns the original primal problem. This is a fundamental symmetry in LP duality theory.',
  },
  {
    id: 36,
    subject: 'operationalResearch',
    question: 'Which of the following methods is commonly used to solve assignment problems?',
    options: [
      'Stepping stone method',
      'Hungarian method',
      'North west corner method',
      'Vogel method',
    ],
    correctAnswer: 'Hungarian method',
    explanation:
      'The Hungarian method (developed by Kuhn, based on the work of Hungarian mathematicians König and Egerváry) is the standard algorithm for solving assignment problems. It uses matrix reduction and covering techniques to find the optimal one-to-one assignment.',
  },
  {
    id: 37,
    subject: 'operationalResearch',
    question: 'In simplex, a minimization problem is optimal when Cj - Zj values are:',
    options: [
      'Either zero or positive',
      'Either zero or negative',
      'Positive only',
      'Negative only',
    ],
    correctAnswer: 'Either zero or positive',
    explanation:
      'For a minimization problem in the simplex method, optimality is reached when all Cj - Zj ≥ 0 (non-negative). This indicates that no non-basic variable can enter the basis to reduce the objective function further.',
  },
  {
    id: 38,
    subject: 'operationalResearch',
    question: 'A resource which is completely utilized is called in simplex:',
    options: [
      'Null resource',
      'Scarce resource',
      'Abundant resource',
      'Zero resource',
    ],
    correctAnswer: 'Scarce resource',
    explanation:
      'A scarce resource is one that is fully consumed (slack variable = 0 at the optimal solution). It has a positive shadow price, meaning increasing its availability would improve the objective function.',
  },
  {
    id: 39,
    subject: 'operationalResearch',
    question: 'If the order quantity (size of order) is increased:',
    options: [
      'Holding costs decrease and ordering costs increase',
      'Holding costs increase and ordering costs decrease',
      'The total costs increase and then decrease',
      'Storage cost as well as stock-out cost increase',
    ],
    correctAnswer: 'Holding costs increase and ordering costs decrease',
    explanation:
      'In the EOQ (Economic Order Quantity) model, larger order quantities mean more inventory is held on average, increasing holding/carrying costs. However, fewer orders are placed per year, reducing annual ordering costs. The EOQ finds the optimal balance between these two.',
  },
  {
    id: 40,
    subject: 'operationalResearch',
    question: 'The solution to a transportation problem with m-sources and n-destinations is feasible if the number of allocations are:',
    options: [
      'm + n',
      'mn',
      'm - n',
      'm + n - 1',
    ],
    correctAnswer: 'm + n - 1',
    explanation:
      'A basic feasible solution to a transportation problem must have exactly m + n - 1 independent allocations (occupied cells). This is because there are m supply constraints and n demand constraints, giving m + n equations, but one is redundant, leaving m + n - 1 independent basis variables.',
  },
]
