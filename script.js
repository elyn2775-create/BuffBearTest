// 问卷题目和分数数据
const quizData = [
    { question: "1. 你的专业是？", options: [{ text: "A. 工科", scores: { hr: 1, sales: 1, supply: 3, brand: 1, finance: 2, it: 3 } }, { text: "B. 文科", scores: { hr: 3, sales: 2, supply: 1, brand: 2, finance: 1, it: 1 } }, { text: "C. 商科", scores: { hr: 3, sales: 3, supply: 2, brand: 3, finance: 3, it: 1 } }, { text: "D. 理科", scores: { hr: 1, sales: 1, supply: 2, brand: 1, finance: 3, it: 2 } }, { text: "E. 交叉学科", scores: { hr: 2, sales: 2, supply: 3, brand: 2, finance: 2, it: 3 } }] },
    { question: "2. 当需要完成一项陌生任务时，你会先？", options: [{ text: "A. 寻求过往经验避免“踩坑”", scores: { hr: 3, sales: 2, supply: 1, brand: 2, finance: 1, it: 1 } }, { text: "B. 自己查阅资料梳理框架", scores: { hr: 1, sales: 1, supply: 2, brand: 1, finance: 3, it: 3 } }, { text: "C. 先实践并不断调整策略", scores: { hr: 1, sales: 2, supply: 3, brand: 2, finance: 2, it: 2 } }, { text: "D. 召集同事头脑风暴，创新想法", scores: { hr: 2, sales: 3, supply: 1, brand: 3, finance: 1, it: 1 } }] },
    { question: "3. 团队中出现意见分歧时，你更倾向于做一个？", options: [{ text: "A. 调和各方观点的调停者", scores: { hr: 3, sales: 2, supply: 2, brand: 2, finance: 1, it: 1 } }, { text: "B. 基于事实数据理性抉择的决策者", scores: { hr: 1, sales: 1, supply: 1, brand: 1, finance: 3, it: 3 } }, { text: "C. 鼓励表达集思广益的引导者", scores: { hr: 2, sales: 2, supply: 1, brand: 3, finance: 1, it: 2 } }, { text: "D. 聚焦解决核心问题的高效行动家", scores: { hr: 1, sales: 3, supply: 3, brand: 1, finance: 2, it: 1 } }] },
    { question: "4. 结束一天的学习/工作后，你通过哪种方式恢复精力？", options: [{ text: "A. 和朋友聊天、参加社交活动", scores: { hr: 3, sales: 3, supply: 1, brand: 2, finance: 1, it: 1 } }, { text: "B. 独自看书、整理思路或做喜欢的小事", scores: { hr: 1, sales: 1, supply: 2, brand: 1, finance: 3, it: 3 } }, { text: "C. 复盘当天的任务，规划第二天的安排", scores: { hr: 2, sales: 2, supply: 3, brand: 1, finance: 2, it: 3 } }, { text: "D. 尝试新的兴趣活动，比如学新技能、看创意内容", scores: { hr: 1, sales: 2, supply: 1, brand: 3, finance: 1, it: 2 } }] },
    { question: "5. 以下三类工作内容，你最想长期聚焦的是？", options: [{ text: "A. 与人相关", scores: { hr: 3, sales: 3, supply: 1, brand: 2, finance: 1, it: 1 } }, { text: "B. 与数据/逻辑相关", scores: { hr: 1, sales: 1, supply: 2, brand: 1, finance: 3, it: 3 } }, { text: "C. 与创意/落地相关", scores: { hr: 1, sales: 2, supply: 2, brand: 3, finance: 1, it: 1 } }] },
    { question: "6. 面对“从0到1搭建一个项目”，你最想负责的环节是？", options: [{ text: "A. 需求挖掘", scores: { hr: 3, sales: 3, supply: 1, brand: 2, finance: 1, it: 1 } }, { text: "B. 方案设计", scores: { hr: 1, sales: 1, supply: 2, brand: 1, finance: 3, it: 3 } }, { text: "C. 创意落地", scores: { hr: 1, sales: 2, supply: 1, brand: 3, finance: 1, it: 1 } }, { text: "D. 团队统筹", scores: { hr: 2, sales: 2, supply: 3, brand: 2, finance: 2, it: 2 } }] },
    { question: "7. 你认为“有价值的工作”最核心的体现是？", options: [{ text: "A. 帮助他人解决问题，让团队/用户感受到温度", scores: { hr: 3, sales: 2, supply: 1, brand: 2, finance: 1, it: 1 } }, { text: "B. 用数据证明成果，为组织带来可量化的收益", scores: { hr: 1, sales: 3, supply: 2, brand: 1, finance: 3, it: 2 } }, { text: "C. 产出独特的创意，让产品/品牌被更多人认可", scores: { hr: 1, sales: 2, supply: 1, brand: 3, finance: 1, it: 1 } }, { text: "D. 优化现有模式，让工作流程更高效、更顺畅", scores: { hr: 1, sales: 1, supply: 3, brand: 2, finance: 2, it: 3 } }] },
    { question: "8. 你喜欢独立专注还是协作沟通？", options: [{ text: "A. 非常独立专注", scores: { hr: 1, sales: 1, supply: 3, brand: 1, finance: 3, it: 3 } }, { text: "B. 比较喜欢独立专注", scores: { hr: 1, sales: 1, supply: 3, brand: 1, finance: 3, it: 3 } }, { text: "C. 一样", scores: { hr: 2, sales: 2, supply: 2, brand: 2, finance: 2, it: 2 } }, { text: "D. 比较喜欢协作沟通", scores: { hr: 3, sales: 2, supply: 2, brand: 3, finance: 2, it: 1 } }, { text: "E. 非常喜欢协作沟通", scores: { hr: 3, sales: 3, supply: 1, brand: 3, finance: 1, it: 1 } }] },
    { question: "9. 你喜欢固定明确还是弹性自主的工作节奏？", options: [{ text: "A. 非常喜欢固定明确", scores: { hr: 1, sales: 1, supply: 3, brand: 1, finance: 1, it: 3 } }, { text: "B. 比较喜欢固定明确", scores: { hr: 1, sales: 2, supply: 3, brand: 1, finance: 2, it: 2 } }, { text: "C. 一样", scores: { hr: 2, sales: 2, supply: 2, brand: 2, finance: 2, it: 2 } }, { text: "D. 比较喜欢弹性自主", scores: { hr: 2, sales: 2, supply: 1, brand: 3, finance: 2, it: 1 } }, { text: "E. 非常喜欢弹性自主", scores: { hr: 3, sales: 3, supply: 1, brand: 3, finance: 3, it: 1 } }] },
    { question: "10. 当工作中出现“计划外的突发问题”，你会？", options: [{ text: "A. 先安抚相关人员情绪，再一起分析解决方案", scores: { hr: 3, sales: 2, supply: 1, brand: 2, finance: 1, it: 1 } }, { text: "B. 立刻暂停现有工作，优先梳理问题根源和影响范围", scores: { hr: 1, sales: 1, supply: 2, brand: 1, finance: 3, it: 3 } }, { text: "C. 快速提出2-3个临时应对方案，边执行边完善", scores: { hr: 1, sales: 3, supply: 3, brand: 2, finance: 2, it: 2 } }, { text: "D. 第一时间联系相关负责人，明确分工后同步推进", scores: { hr: 2, sales: 2, supply: 2, brand: 1, finance: 1, it: 2 } }] },
    { question: "11. 做重要决策时，你更依赖的依据是？", options: [{ text: "A. 人的反馈", scores: { hr: -1, sales: 3, supply: 1, brand: 2, finance: 1, it: 1 } }, { text: "B. 客观数据", scores: { hr: 0, sales: 1, supply: 2, brand: 1, finance: 3, it: 3 } }, { text: "C. 创新价值", scores: { hr: 1, sales: 2, supply: 1, brand: 3, finance: 1, it: 1 } }, { text: "D. 实操可行性", scores: { hr: 2, sales: 2, supply: 3, brand: 2, finance: 2, it: 2 } }] },
    { question: "12. 你希望获得的核心成长是？", options: [{ text: "A. 沟通和影响力", scores: { hr: 3, sales: 3, supply: 1, brand: 2, finance: 1, it: 1 } }, { text: "B. 专业与技术能力", scores: { hr: 1, sales: 1, supply: 2, brand: 1, finance: 3, it: 3 } }, { text: "C. 创意与策划能力", scores: { hr: 1, sales: 2, supply: 1, brand: 3, finance: 1, it: 1 } }, { text: "D. 统筹与执行能力", scores: { hr: 2, sales: 2, supply: 3, brand: 2, finance: 2, it: 2 } }] }
];

// 结果图片数据
const resultsData = {
    caiwu: "caiwu.jpg",
    gongyinglian: "gongyinglian.jpg",
    jishu: "jishu.jpg",
    pinpai: "pinpai.jpg",
    renli: "renli.jpg",
    xiaoshou: "xiaoshou.jpg"
};

// ---- 下面的代码是自动运行的，你不需要修改 ----

const questionEl = document.getElementById('question');
const optionsContainerEl = document.getElementById('options-container');
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const resultImageEl = document.getElementById('result-image');
const progressBar = document.getElementById('progress-bar');

let currentQuestionIndex = 0;
let scores = { renli: 0, xiaoshou: 0, gongyinglian: 0, pinpai: 0, caiwu: 0, jishu: 0 };
const dimensionMap = { hr: 'renli', sales: 'xiaoshou', supply: 'gongyinglian', brand: 'pinpai', finance: 'caiwu', it: 'jishu' };

function loadQuestion() {
    const currentQuizData = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuizData.question;
    optionsContainerEl.innerHTML = '';

    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(option.scores));
        optionsContainerEl.appendChild(button);
    });

    const progressPercent = (currentQuestionIndex / quizData.length) * 100;
    progressBar.style.width = progressPercent + '%';
}

function selectAnswer(optionScores) {
    for (const key in optionScores) {
        if (dimensionMap[key]) {
            scores[dimensionMap[key]] += optionScores[key];
        }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        progressBar.style.width = '100%';
        setTimeout(showResults, 300);
    }
}

function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    let maxScore = -Infinity;
    let resultKey = '';
    const dimensionOrder = ['renli', 'xiaoshou', 'gongyinglian', 'pinpai', 'caiwu', 'jishu'];

    for (const key of dimensionOrder) {
        if (scores[key] > maxScore) {
            maxScore = scores[key];
            resultKey = key;
        }
    }

    resultImageEl.src = resultsData[resultKey];
}

loadQuestion();