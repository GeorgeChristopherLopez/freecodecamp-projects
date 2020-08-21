const quotes = [
  {
    quote: "Knowing is not enough; we must apply. Willing is not enough; we must do.",
    author: "Johann Wolfgang von Goethe"},
  {
    quote: "Accept the challenges so that you can feel the exhilaration of victory.",
    author:"George S. Patton"

  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author:"Confucius"

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