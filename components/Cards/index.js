// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardHeader = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles);
    const mainTopics = Object.entries(response.data.articles);

    mainTopics.forEach(subject => {
      subject[1].forEach(data => {
        const newCard = Article(data);
        cardHeader.append(newCard);
      });
    });
  })
  .catch(error => {
    return alert(error);
  });

function Article(data) {
  const card = document.createElement("div"),
    Header = document.createElement("div"),
    cardAuthorBox = document.createElement("div"),
    cardImageContainer = document.createElement("div"),
    cardImage = document.createElement("img"),
    cardAuthor = document.createElement("span")

  card.classList.add("card");
  Header.classList.add("headline");
  Header.textContent = data.headline;

  cardAuthorBox.classList.add("author");
  cardAuthor.textContent = data.authorName;

  cardImageContainer.classList.add("img-container");
  cardImage.src = data.authorPhoto;
  

  card.append(Header);
  card.append(cardAuthorBox);
  cardAuthorBox.append(cardImageContainer);
  cardImageContainer.append(cardImage);
  cardAuthorBox.append(cardAuthor);

  return card;
}