// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
let button = document.getElementById('loadQuote');

const quotes = [
  {
    quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    citation: "",
    date: "",
    category: "philosophy"
  },
  {
    quote:"So many books, so little time.",
    source: "Frank Zappa",
    citation: "",
    date: "",
    category: "humor"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    source: "Mark Twain",
    citation: "",
    date: "",
    category: "truth"
  },
  {
    quote: "Sometimes life hits you in the head with a brick. Don't lose faith.",
    source: "Steve Jobs",
    citation: "",
    date:"" ,
    category: "life"
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    source: "Elon Musk",
    citation: "",
    date: "",
    category: "motivation"
  },
];
const colors = ["#731D1D", "#000047", "#434343", "#0d0d0d", "#36b55c"]

//getting an array and returning one random component
let randomQuote = (data) => {
  return data[Math.floor(Math.random() *5)];
};

//printing quote
let printQuote = () => {
  //getting one random qoute object
  const data = randomQuote(quotes);
  const div = document.getElementById("quote-box");
  //displaying qoutes
  div.innerHTML = `<p class="quote">${data.quote}</p>
                  <p class="source">${data.source}<span class="citation">${data.citation}</span>
                  <span class="year">${data.date}</span><span class="category">${data.category}</span></p>`;
  //getting one random color
  const color = randomQuote(colors);
  //changing bakcground color
  document.body.style.backgroundColor = color;
  button.style.backgroundColor = color;
};

//printing quote on click
button.addEventListener("click", printQuote, false);
//printing qoute each 10 seconds
window.setInterval(printQuote, 10000);
