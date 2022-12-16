const featuredSelector = document.getElementById('featured-selector');
const foodSelector = document.getElementById('food-selector');
const drinkSelector = document.getElementById('drinks-selector');
const miscSelector = document.getElementById('misc-selector');

const food = document.getElementsByClassName('food');
const drinks = document.getElementsByClassName('drink');
const misc = document.getElementsByClassName('misc');

const changeFilter = (filter) => {
//     Check if filter is featured, food, drinks, or misc
//     If featured, show all items
//     If food, show only items with class food
//     If drinks, show only items with class drinks
//     If misc, show only items with class misc
        if (filter === 'featured') {
            for (let i = 0; i < food.length; i++) {
                food[i].style.display = 'inline-block';
            }
            for (let i = 0; i < drinks.length; i++) {
                drinks[i].style.display = 'inline-block';
            }
            for (let i = 0; i < misc.length; i++) {
                misc[i].style.display = 'inline-block';
            }
        } else if (filter === 'food') {
            for (let i = 0; i < food.length; i++) {
                food[i].style.display = 'inline-block';
            }
            for (let i = 0; i < drinks.length; i++) {
                drinks[i].style.display = 'none';
            }
            for (let i = 0; i < misc.length; i++) {
                misc[i].style.display = 'none';
            }
        } else if (filter === 'drinks') {
            for (let i = 0; i < food.length; i++) {
                food[i].style.display = 'none';
            }
            for (let i = 0; i < drinks.length; i++) {
                drinks[i].style.display = 'inline-block';
            }
            for (let i = 0; i < misc.length; i++) {
                misc[i].style.display = 'none';
            }
        } else if (filter === 'misc') {
            for (let i = 0; i < food.length; i++) {
                food[i].style.display = 'none';
            }
            for (let i = 0; i < drinks.length; i++) {
                drinks[i].style.display = 'none';
            }
            for (let i = 0; i < misc.length; i++) {
                misc[i].style.display = 'inline-block';
            }
        } else {
            throw new Error('Invalid filter');
        }
        return;
}

featuredSelector.addEventListener('click', () => {
    changeFilter('featured');
});
drinkSelector.addEventListener('click', () => {
    changeFilter('drinks');
});
foodSelector.addEventListener('click', () => {
    changeFilter('food');
});
miscSelector.addEventListener('click', () => {
    changeFilter('misc');
});

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
    setTimeout(function() {
        cw[i].className = 'letter out';
    }, i*80);
}

function animateLetterIn(nw, i) {
    setTimeout(function() {
        nw[i].className = 'letter in';
    }, 340+(i*80));
}

function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 3500);