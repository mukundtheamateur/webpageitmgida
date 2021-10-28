$(document).ready(function() {
    $('.carousel').slick({
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '60px',
        slidesToShow: 4,
        responsive: [{
            breakpoint: 2400,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },{
            breakpoint: 1600,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        }, {
            breakpoint: 880,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    $('#announcement-list').paginate({ itemsPerPage: 3 });
    $('#news-list').paginate({ itemsPerPage: 3 });
    $('#events-list').paginate({ itemsPerPage: 3 });

    if ($('#announcement-list').length <= 3) {
        $('#announcement-list-previous,#announcement-list-next').addClass('disabled');
    }

    if ($('#events-list').children().length <= 3) {
        $('#events-list-previous,#events-list-next').addClass('disabled');
    }

    if ($('#news-list').length <= 3) {
        $('#news-list-previous,#news-list-next').addClass('disabled');
    }
});

function contributors($arg){

    if ($arg === undefined || $arg == '' || $arg == 'all')
        console.log("%cContributors List\n\n"+"%c--Designed by--"+
        "%c\nMofid Ansari (ansarimofid@gmail.com)\nPratyush Singh (singh.pratyush96@gmail.com)\n\n %c--Core Developers--\n%cMofid Ansari (ansarimofid@gmail.com)\nPratyush Singh (singh.pratyush96@gmail.com)\nSaurabh Jain (saurabhjn76@gmail.com)\n\n%c--Supporting Developers--\n%cRajuKoushik (g.rajukoushik@gmail.com)\nKamal Awasthi (kamalawasthi97@gmail.com)\nAvi Aryan (avi.aryan123@gmail.com)\n\n%c--Contribution through reporting issues--\n%cHarish Krupo (harishkrupo@gmail.com)\nShalinee Singh (shalinee43@gmail.com)\nMayank Maurya (mayankm522@gmail.com)\nNavneet Nandan (navneet.nandan8@gmail.com)\nPrem Chand Saini (premchandsaini779@gmail.com)\nUnni Rajendra (unni332265@gmail.com)\nRavi Kishan Jha (ravikishan77@gmail.com)\nAnkit Kumar (ankit.kumar071460@yahoo.com)",'color:rgb(163,169,72);text-align:center;font-size:2em','color: rgb(15,108,107);font-size:1.5em;text-align:center','color:rgb(50,50,50);font-size:1.0.5em','color: rgb(15,108,107);font-size:1.5em;','color:rgb(50,50,50);font-size:1.0.5em','color: rgb(15,108,107);font-size:1.5em;','color:rgb(50,50,50);font-size:1.0.5em','color: rgb(15,108,107);font-size:1.2em;','color:rgb(50,50,50);font-size:1.0.5em');
    else if($arg == 'designer' || $arg =='design' || $arg =='designers')
        console.log("%c--Designed by--%c\nMofid Ansari (ansarimofid@gmail.com)\nPratyush Singh (singh.pratyush96@gmail.com)",'color: rgb(15,108,107);font-size:1.5em;text-align:center','color:rgb(50,50,50);font-size:1.0.5em');
    else if($arg == 'devs' || $arg == 'dev' || $arg == 'developers' || $arg == 'developer')
    console.log("%c--Core Developers--\n%cMofid Ansari (ansarimofid@gmail.com)\nPratyush Singh (singh.pratyush96@gmail.com)\nSaurabh Jain (saurabhjn76@gmail.com)\n\n%c--Supporting Developers--\n%cRajuKoushik (g.rajukoushik@gmail.com)\nKamal Awasthi (kamalawasthi97@gmail.com)\nAvi Aryan (avi.aryan123@gmail.com)",'color: rgb(15,108,107);font-size:1.5em;','color:rgb(50,50,50);font-size:1.0.5em','color: rgb(15,108,107);font-size:1.5em;','color:rgb(50,50,50);');

    return "Thank You";
}

console.log("Type %c contributors()%c to get list of contributors.\n %carguments(optional):all,devs,designers",'color:rgb(15,108,107)','color:rgb(50,50,50);','color:blue');

const carouselFrame = document.querySelector('.carousel-frame');
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = getImagesPlusClones();
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const navDots = Array.from(document.querySelectorAll('.carousel-dots li'));

let imageCounter = 1;

function getImagesPlusClones() {
  let images = document.querySelectorAll('.carousel-slide img');

  const firstClone = images[0].cloneNode();
  const lastClone = images[images.length - 1].cloneNode();

  firstClone.className = 'first-clone';
  lastClone.className = 'last-clone';

  // we need clones to make an infinite loop effect
  carouselSlide.append(firstClone);
  carouselSlide.prepend(lastClone);

  // must reassign images to include the newly cloned images
  images = document.querySelectorAll('.carousel-slide img');

  return images;
}

function initializeNavDots() {
  if (navDots.length) navDots[0].classList.add('active-dot');
}

function initializeCarousel() {
  carouselSlide.style.transform = 'translateX(-100%)';
}

function slideForward() {
  // first limit counter to prevent fast-change bugs
  if (imageCounter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 400ms';
  imageCounter++;
  carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
}

function slideBack() {
  // first limit counter to prevent fast-change bugs
  if (imageCounter <= 0) return;
  carouselSlide.style.transition = 'transform 400ms';
  imageCounter--;
  carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
}

function makeLoop() {
  // instantly move from clones to originals to produce 'infinite-loop' effect
  if (carouselImages[imageCounter].classList.contains('last-clone')) {
    carouselSlide.style.transition = 'none';
    imageCounter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
  }

  if (carouselImages[imageCounter].classList.contains('first-clone')) {
    carouselSlide.style.transition = 'none';
    imageCounter = carouselImages.length - imageCounter;
    carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
  }
}

function goToImage(e) {
  carouselSlide.style.transition = 'transform 400ms';
  imageCounter = 1 + navDots.indexOf(e.target);
  carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
}

function highlightCurrentDot() {
  navDots.forEach((dot) => {
    if (navDots.indexOf(dot) === imageCounter - 1) {
      dot.classList.add('active-dot');
    } else {
      dot.classList.remove('active-dot');
    }
  });
}

function addBtnListeners() {
  nextBtn.addEventListener('click', slideForward);
  prevBtn.addEventListener('click', slideBack);
}

function addNavDotListeners() {
  navDots.forEach((dot) => {
    dot.addEventListener('click', goToImage);
  });
}

function addTransitionListener() {
  carouselSlide.addEventListener('transitionend', () => {
    makeLoop();
    highlightCurrentDot();
  });
}

function autoAdvance() {
  let play = setInterval(slideForward, 10000);

  carouselFrame.addEventListener('mouseover', () => {
    clearInterval(play); // pause when mouse enters carousel
  });

  carouselFrame.addEventListener('mouseout', () => {
    play = setInterval(slideForward, 5000); // resume when mouse leaves carousel
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(play); // pause when user leaves page
    } else {
      play = setInterval(slideForward, 5000); // resume when user returns to page
    }
  });
}

function buildCarousel() {
  initializeCarousel();
  initializeNavDots();
  addNavDotListeners();
  addBtnListeners();
  addTransitionListener();
  autoAdvance();
}

buildCarousel();