var chords = ['C7','Cm7','D7','Db7','Dm7','Dbm7','E7','Eb7','Em7','Ebm7','F7','Fm7','G7','Gb7','Gm7','Gbm7','A7','Ab7','Am7','Abm7','B7','Bb7','Bm7','Bbm7'];
var currentChord;

function generateNewChord(){
	var randomChord = getRandomChord();

	while(currentChord === randomChord){ //so that the same chord can't appear two times in a row
		randomChord = getRandomChord();
	}

	currentChord = randomChord;
	viewChord(randomChord);
}

function onKeyPressed(e){
	if(e.keyCode === 32){
		generateNewChord();
		e.preventDefault(); //to prevent page from scrolling down when pressing space
	}
}

function getRandomChord(){
	var randomPosition = Math.floor(Math.random() * chords.length)
	return chords[randomPosition];
}

function viewChord(str){
	document.getElementById('chord').innerHTML = '<h2>' + str + '</h2>';
}

document.addEventListener('keydown', onKeyPressed, false);