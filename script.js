const questions = [
  {
    text: "Какое настроение у тебя бывает чаще?",
    img: "img/obl/nastr.png",
    options: [
      { text: "Можно горы свернуть, или хотя бы посуду помыть очень энергично", type: "sport" },
      { text: "Лучше не подходи, не трогай и не дыши в мою сторону", type: "angry" },
      { text: "Happy happy happy", type: "happy" },
      { text: "ХХочется сделать какую-нибудь пакость", type: "annoying" },
      { text: "Твой шок в шоке от окружающий тебя событий", type: "wonder" },
      { text: "Мозг отключился, единственная цель — добраться до подушки", type: "sleepy" },
      { text: "Бараш позавидует твоему вдохновению и желанию творить", type: "creative" },
      { text: "Бродить в пальто, заправлять волосы за ухо и быть не такой как все", type: "hoahoahoa" }
    ]
  },
  {
    text: "Выбери напиток",
    img: "img/obl/napitok.jpg",
    options: [
      { text: "Водичка с лимоном", type: "sport" },
      { text: "Энергетик", type: "angry" },
      { text: "Пивка для рывка", type: "happy" },
      { text: "Кола", type: "annoying" },
      { text: "Газировка со взрывной карамелью", type: "wonder" },
      { text: "Ромашковый чай", type: "sleepy" },
      { text: "Матча латте", type: "creative" },
      { text: "Тыквенный раф с корицей", type: "hoahoahoa" }
    ]
  },
  {
    text: "Какая была бы твоя суперсила?",
    img: "img/obl/sm.png",
    options: [
      { text: "Суперскорость, чтобы везде успевать и быть в тонусе", type: "sport" },
      { text: "Лазерный взгляд, испепеляющий врагов и попкорн", type: "angry" },
      { text: "Умение летать", type: "happy" },
      { text: "Умение читать мысли, но только самые неловкие", type: "annoying" },
      { text: "Возможность стирать память о любимых фильмах, чтобы посмотреть их заново", type: "wonder" },
      { text: "Умение засыпать на 10 минут с эффектом 8-часового сна", type: "sleepy" },
      { text: "Умение превращать сны в готовые сценарии для блокбастеров", type: "creative" },
      { text: "Бессмертие", type: "hoahoahoa" }
    ]
  },
  {
    text: "Твое типичное утро",
    img: "img/obl/utro.png",
    options: [
      { text: "Легкая разминка и водичка с лимоном натощак", type: "sport" },
      { text: "Ненавижу утро", type: "angry" },
      { text: "Бодрость и уверенность в том, день уже хороший", type: "happy" },
      { text: "Докопаться до кого-нибудь", type: "annoying" },
      { text: "Забыть поставить будильник и утром офигеть от жизни", type: "wonder" },
      { text: "Еще 5 минуточек", type: "sleepy" },
      { text: "Пересказываю сон про говорящего коня с джедайским мечом", type: "creative" },
      { text: "Гляжу в окно с чашкой кофе", type: "hoahoahoa" }
    ]
  },
  {
    text: "С каким погодным явлением ты себя ассоциируешь?",
    img: "img/obl/pogoda.png",
    options: [
      { text: "Теплый ветер с солнце", type: "sport" },
      { text: "Ураган с градом", type: "angry" },
      { text: "Яркое солнце на безоблачном небе", type: "happy" },
      { text: "Резкая смена погоды каждые 5 минут", type: "annoying" },
      { text: "Двойная радуга", type: "wonder" },
      { text: "Тихий снегопад", type: "sleepy" },
      { text: "Иней на окне", type: "creative" },
      { text: "Осенний сумеречный дождь", type: "hoahoahoa" }
    ]
  },
  {
    text: "Выбери сериал",
    img: "img/obl/serZ.png",
    options: [
      { text: "Игра в кальмара", type: "sport" },
      { text: "Тетрадь смерти", type: "angry" },
      { text: "Друзья", type: "happy" },
      { text: "Отчаянные домохозяйки", type: "annoying" },
      { text: "Очень странные дела", type: "wonder" },
      { text: "Шерлок", type: "sleepy" },
      { text: "Меломанка", type: "creative" },
      { text: "Дневники вампира", type: "hoahoahoa" }
    ]
  },
  {
    text: "Выбери досуг",
    img: "img/obl/dosug.jpg",
    options: [
      { text: "Спортзал", type: "sport" },
      { text: "Уборка с размахом", type: "angry" },
      { text: "Настолки в большой компании", type: "happy" },
      { text: "Развести парня на поход в Simple", type: "annoying" },
      { text: "Посмотреть документалку", type: "wonder" },
      { text: "Сон", type: "sleepy" },
      { text: "Организовать фотоссесию", type: "creative" },
      { text: "Прогулка под луной", type: "hoahoahoa" }
    ]
  },
  {
    text: "Ты просыпаешься и понимаешь, что стала растением. Каким?",
    img: "img/obl/rast.png",
    options: [
      { text: "Алоэ", type: "sport" },
      { text: "Венерина мухоловка", type: "angry" },
      { text: "Подсолнух", type: "happy" },
      { text: "Мандрагора", type: "annoying" },
      { text: "Подснежник", type: "wonder" },
      { text: "Мак", type: "sleepy" },
      { text: "Гипсофила", type: "creative" },
      { text: "Лаванда", type: "hoahoahoa" }
    ]
  },
  {
    text: "На город напали монстры, выбери, чем будешь обороняться",
    img: "img/obl/monster.jpg",
    options: [
      { text: "Гантеля 10кг", type: "sport" },
      { text: "Я сама стану монстром, так проще", type: "angry" },
      { text: "Подружусь с монстрами", type: "happy" },
      { text: "Заставлю парня держать оборону за двоих", type: "annoying" },
      { text: "Сковородка", type: "wonder" },
      { text: "Спрячусь под одеялом", type: "sleepy" },
      { text: "Расставлю сложные капканы", type: "creative" },
      { text: "Древней магией", type: "hoahoahoa" }
    ]
  },
  {
  text: "Выбери мем",
  img: "img/obl/mem.png",
  options: [
    { 
      text: "", 
      type: "sport",
      img: "img/meme/press.jpeg" 
    },
    { 
      text: "", 
      type: "angry",
      img: "img/meme/zloy.jpg"
    },
    { 
      text: "", 
      type: "happy",
      img: "img/meme/pedro.jpg"
    },
    { 
      text: "", 
      type: "annoying",
      img: "img/meme/cat.png"
    },
    { 
      text: "", 
      type: "wonder",
      img: "img/meme/joe.png"
    },
    { 
      text: "", 
      type: "sleepy",
      img: "img/meme/sleep.jpg"
    },
    { 
      text: "", 
      type: "creative",
      img: "img/meme/bob.jpg"
    },
    { 
      text: "", 
      type: "hoahoahoa",
      img: "img/meme/egg.jpg"
    }
  ]
}
];

const results = {
  sport: { title: "На спорте", text: "Ты — Ната, купившая абонемент в спортзал, даже если не любит спортзал.", img: "img/res/sport.jpg" },
  angry:     { title: "Злая",      text: "Ты — Ната, испепеляющая взглядом (просто еще утро).", img: "img/res/zl.jpg" },
  happy:     { title: "Счастливая",text: "Кофе из симпла выпит, лиды приходят, а ногти всегда получаются ровно, одним словом — счастье.", img: "img/res/hp.png" },
  annoying:  { title: "Вредная",   text: "Желание совершить какую-нибудь гадость >>> все остальное", img: "img/res/vred.jpg" },
  wonder:    { title: "Удивлённая",text: "Жизнь каждый день готовит все новые истории для голосовых.", img: "img/res/ud.jpg" },
  sleepy:    { title: "Сонная",    text: "Zzz Zzz Zzz", img: "img/res/son.png" },
  creative:  { title: "Творческая",text: "К тебе пришла настоящая Муза. Пока что без остальных фей Винкс.", img: "img/res/tvorc.jpg" },
  hoahoahoa: { title: "Хоахоахоа", text: "Мир покрылся синим фильтром, наступила осень, а твой вампир где-то прохлаждается, так что пока будь загадочной без него", img: "img/res/hoah.jpg" }
};

let current = 0;
let score = {};

const startScreen = document.getElementById('startScreen');
const startBtn = document.getElementById('startBtn');
const quizCard = document.getElementById('quizCard');
const cardImage = document.getElementById('cardImage');
const content = document.getElementById('content');
const counter = document.getElementById('questionCounter');

startBtn.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  quizCard.classList.remove('hidden');
  current = 0;
  score = {};
  renderQuestion();
});

function renderQuestion() {
  const q = questions[current];
  counter.textContent = `${current + 1} / ${questions.length}`;
  cardImage.style.backgroundImage = `url(${q.img})`;

  content.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.textContent = q.text;
  content.appendChild(h2);

  const optsContainer = document.createElement('div');
  optsContainer.className = 'options-container';
  
  const opts = document.createElement('div');
  
  if (current === questions.length - 1) {
    opts.className = 'meme-grid';
    
    q.options.forEach(opt => {
      const b = document.createElement('button');
      b.className = 'meme-option';
      b.type = 'button';
      
      const img = document.createElement('img');
      img.src = opt.img;
      img.alt = opt.type;
      img.className = 'meme-img';
      b.appendChild(img);
      
      b.addEventListener('click', () => selectOption(opt.type));
      opts.appendChild(b);
    });
  } else {
    opts.className = 'options';
    q.options.forEach(opt => {
      const b = document.createElement('button');
      b.className = 'option';
      b.type = 'button';
      b.textContent = opt.text;
      b.addEventListener('click', () => selectOption(opt.type));
      opts.appendChild(b);
    });
  }
  
  optsContainer.appendChild(opts);
  content.appendChild(optsContainer);
}

function selectOption(type) {
  score[type] = (score[type] || 0) + 1;
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const winner = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
  const r = results[winner];

  cardImage.style.backgroundImage = `url(${r.img})`;
  counter.textContent = `Результат `;

  content.innerHTML = '';
  const title = document.createElement('div');
  title.className = 'result-title';
  title.textContent = r.title;
  content.appendChild(title);

  const p = document.createElement('p');
  p.className = 'result-text';
  p.textContent = r.text;
  content.appendChild(p);

  const restartBtn = document.createElement('button');
  restartBtn.className = 'btn primary';
  restartBtn.textContent = 'Пройти ещё раз';
  restartBtn.addEventListener('click', () => {
    quizCard.classList.add('hidden');
    startScreen.classList.remove('hidden');
  });
  content.appendChild(restartBtn);
}

