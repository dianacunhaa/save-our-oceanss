

// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  'https://i.pinimg.com/564x/f6/a5/1a/f6a51a14b4be138a29ec32e0a27e526d.jpg',
  'https://e1.pxfuel.com/desktop-wallpaper/100/377/desktop-wallpaper-3840x2535-hawksbill-sea-turtle-sea-turtle-computer.jpg',
  'https://i.pinimg.com/564x/44/fb/20/44fb209e9d37828e4357c37692debcd2.jpg',
  'https://wallpapers.com/images/high/funny-turtle-pictures-hek9gpdaijymx0cc.webp',
  'https://e1.pxfuel.com/desktop-wallpaper/100/377/desktop-wallpaper-3840x2535-hawksbill-sea-turtle-sea-turtle-computer.jpg',
  'https://i.redd.it/60urd8kfzyo71.jpg',
  'https://www.treehugger.com/thmb/ILwBSiqKno2E6LhCZbl2a_WPDyo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2016__06__hammerhead-shark-92888380437241ae860ed959dccb97d8.jpg',
  'https://pbs.twimg.com/profile_images/603061085571190784/rOwJSIIi_400x400.jpg'
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 5],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}

//video play and stop

