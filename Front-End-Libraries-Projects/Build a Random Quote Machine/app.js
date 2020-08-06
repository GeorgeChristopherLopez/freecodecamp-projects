const quotes = [
  {
    quote: "always darkests before the dawn",
    author: "Harvey Dent"},
  {
    quote: "I pee's on my head, but don't call me a pee head",
    author:"Andy Mils"
  
}
               
               
               ];
const author = document.getElementById("author");
const text = document.getElementById("text");
const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", function () {
  
  done();
})

function done(){
  let rn = Math.floor(Math.random()*(quotes.length));
  text.innerHTML = `<p>${quotes[rn].quote}</p>`;
  author.innerHTML =  `${quotes[rn].author}`;
  return quotes[rn];
}