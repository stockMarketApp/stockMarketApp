function initReviews() {
  console.log("initReview()");

  var reviewIndex = 0,
    reviewElement = document.getElementById('review'),
    reviewStarsElement = reviewElement.querySelector('.stars'),
    reviewTextElement = reviewElement.querySelector('.explanation'),

    reviews = [
    {
      author: 'Qilin Gu',
      explanation: 'Code is clean and working perfectly. Explanation is concise and clear. Highly recommend!',
      stars: 5
    },
    {
      author: 'Nate Waddell',
      explanation: '...the instructor is both an excellent orator as well as a knowledgeable developer. There is plenty of explanation at the beginning of each section, and then the videos break into learning through experience.',
      stars: 5
    },
    {
      author: 'Jacob Sander Klan',
      explanation: 'Good project with a lot of meat on it, and yet you get sufficient in depth explanation.',
      stars: 4.5
    },
    {
      author: 'Brian Nolan',
      explanation: 'Great course with lots of step by step coding and brief introductions to third-party plugins that make the app look even better.',
      stars: 5
    },
    {
      author: 'Teoh Soo Beng',
      explanation: 'This course shows me not only topics regarding ionic, but a whole bunch of useful tools and best practices that benefit me so much.',
      stars: 5
    }
  ];

  function incrementReview() {
    console.log('incrementReview()');

    reviewIndex++;
    if( reviews.length <= reviewIndex ) {
      reviewIndex = 0;
    }

    reviewElement.classList.add('transition');

    reviewElement.addEventListener('transitionend', function(e) {
      reviewElement.setAttribute('name', reviews[reviewIndex].author);
      reviewStarsElement.setAttribute('stars', reviews[reviewIndex].stars);
      reviewTextElement.innerText = reviews[reviewIndex].explanation;

      reviewElement.classList.remove('transition');
    });

  }

  var interval = setInterval(function() {
    incrementReview();
  }, 5000);

}

function init() {
  console.log("init()");
  initReviews();
}

window.onload = init();
