let addBtn = document.querySelector('#addBtn');
let closeBtn = document.querySelector('.closeBtn');
let userInputCard = document.querySelector('.userInputCard');
let saveBtn = document.querySelector('.saveBtn');
let userQuestion = document.querySelector('#userQuestion');
let userAnswer = document.querySelector('#userAnswer');
let emptyWarningDiv = document.createElement('div');

emptyWarningDiv.classList.add('warningBox');
emptyWarningDiv.textContent = 'Neither Field Can Remain Empty';
userInputCard.appendChild(emptyWarningDiv);

addQuestion = () => {
	!userInputCard ? console.log('Question Button not working') : (userInputCard.style.display = 'inline-block');
};
closeBtn = () => {
	userInputCard.style.display = 'none';
};

newFlashCard = () => {
	//stored user enteries into newv variables
	let storedQuestion = userQuestion.value;
	let storedAnswer = userAnswer.value;

	newCardInfo = () => {
		//each time save button is clicked a new flashcard div is made
		let newCardDiv = document.createElement('div');
		//each time save button is clicked a new flashcard button is made
		let newBtnDiv = document.createElement('div');
		//each time save button is clicked a new flashcard paragrah is made
		let newParaQuestion = document.createElement('p');
		let newParaAnswer = document.createElement('p');
		//each time save button is clicked a new flashcard show/hide/edit/delete button is made
		let showHideAnswerBtn = document.createElement('button');
		let editCardBtn = document.createElement('button');
		let deleteCardBtn = document.createElement('button');

		//adds the newly created card div to class of flashCard
		newCardDiv.classList.add('flashCard');
		newCardDiv.style.display = 'flex';
		newCardDiv.style.flexDirection = 'column';

		//appends the card div to document body
		document.body.appendChild(newCardDiv);

		//constructor function for containing user question & answer
		function FillCard(question, answer) {
			this.question = question;
			this.answer = answer;
		}

		//running the constructor function each time save button is clicked to
		//create a new object with the user question & anwser as keys & values
		let newCard = new FillCard(storedQuestion, storedAnswer);
		//uses es6 destructuring to set objects values to a new variable
		let { question: savedQuestion, answer: savedAnswer } = newCard;

		//changes the text for the newly created paragraph for question & answer
		//using the values from the objects new variables created with destructuring
		newParaQuestion.textContent = savedQuestion;
		newParaAnswer.textContent = savedAnswer;

		//adds new classes to the created paragraphs in card div
		newParaQuestion.classList.add('newPara');
		// newParaAnswer.classList.add('newPara');
		newParaAnswer.classList.add('hideAnswer');

		//adds new classes to the created buttons in card div
		showHideAnswerBtn.classList.add('showBtn');
		editCardBtn.classList.add('editBtn');
		deleteCardBtn.classList.add('deleteBtn');
		newBtnDiv.classList.add('btnBox');
		newBtnDiv.style.display = 'flex';
		newBtnDiv.style.flexDirection = 'row';

		//adds new text to the created buttons
		showHideAnswerBtn.textContent = 'Show/Hide Answer';
		editCardBtn.textContent = 'Edit';
		deleteCardBtn.textContent = 'Delete';

		//appends the new paragraphs to the new card divs
		newCardDiv.appendChild(newParaQuestion);

		// appends the buttons to the new card div
		newCardDiv.appendChild(newParaAnswer);
		newCardDiv.appendChild(newBtnDiv);

		newBtnDiv.appendChild(editCardBtn);
		newBtnDiv.appendChild(showHideAnswerBtn);
		newBtnDiv.appendChild(deleteCardBtn);

		newParaAnswer.style.display = 'none';

		hideAnswer = () => {
			if (newParaAnswer.style.display == 'none') {
				newParaAnswer.style.display = 'inline-block';
			} else {
				newParaAnswer.style.display = 'none';
			}
		};
		showHideAnswerBtn.addEventListener('click', hideAnswer);

		deleteCard = () => {
			document.body.removeChild(newCardDiv);
		};
		deleteCardBtn.addEventListener('click', deleteCard);

		editCard = () => {
			deleteCard();
			userQuestion.value = savedQuestion;
		};
		editCardBtn.addEventListener('click', editCard);
	};

	//with tarnary each time save button is clicked it will check if either
	//of the fields are empty, if not empty it will run newCardInfo function
	userQuestion.value == '' || userAnswer.value == ''
		? ((emptyWarningDiv.style.display = 'inline-block'), (emptyWarningDiv.style.animation = 'fadeIn 5s 1 forwards'))
		: ((emptyWarningDiv.style.display = 'none'), newCardInfo());

	userQuestion.value = '';
	userAnswer.value = '';
};
