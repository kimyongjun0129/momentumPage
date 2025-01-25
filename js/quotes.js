const quotesInfo = [
    {
        quote:"언제나 현재에 집중할수 있다면 행복할것이다.",
        author:"파울로 코엘료",
    },
    {
        quote:"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
        author:"찰리 채플린",
    },
    {
        quote:"절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author:"L.론허바드",
    },
    {
        quote:"내일은 내일의 태양이 뜬다.",
        author: "비비안 리",
    },
    {
        quote:"절대 포기하지 말라. 당신이 되고 싶은 무언가가 있다면, 그에 대해 자부심을 가져라. 당신 자신에게 기회를 주어라. 스스로가 형편없다고 생각하지 말라. 그래봐야 아무 것도 얻을 것이 없다. 목표를 높이 세워라.인생은 그렇게 살아야 한다.",
        author:"비비안 리",
    },
    {
        quote:"마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    },
    {
        quote:"자신을 내보여라. 그러면 재능이 드러날 것이다.",
        author: "발타사르 그라시안",
    },
    {
        quote:"진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
        author: "아인슈타인",
    },
    {
        quote:"고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
        author: "헬렌 켈러",
    },
    {
        quote:"세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
        author: "헬렌 켈러",
    },
    {
        quote:"용기있는 자로 살아라. 운이 따라주지 않는다면 용기 있는 가슴으로 불행에 맞서라.",
        author: "키케로",
    },
    {
        quote:"도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.",
        author: "헨리포드",
    },
    {
        quote:"실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
        author: "하버트 개서",
    },
    {
        quote:"고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
        author: "베토벤",
    },
    {
        quote:"한 번 실패와 영원한 실패를 혼동하지 마라.",
        author: "F.스콧 핏제랄드",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function randomQuote() {
    const quoteInfo = quotesInfo[Math.floor(Math.random() * quotesInfo.length)];
    quote.innerText = quoteInfo.quote;
    author.innerText = `- ${quoteInfo.author} -`;
}

randomQuote();
setInterval(randomQuote, 60000);