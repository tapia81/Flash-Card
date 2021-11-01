let addBtn = document.querySelector('#addBtn');
let closeBtn = document.querySelector('.closeBtn');
let userInputCard = document.querySelector('.userInputCard');
let userQuestion = document.querySelector('userQuestion');
let userAnswer = document.querySelector('userAnswer');

addQuestion = () => {
	if (!userInputCard) {
	} else {
		userInputCard.style.display = 'inline-block';
	}
};

closeBtn = () => {
	userInputCard.style.display = 'none';
};
