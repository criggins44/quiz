//Build a Quiz

function quizAnswers(){
	const quiz = document.getElementById('quizForm');
	const correctAnswers = ['a','b','c'];
//array that holds the correct answers as an answer key
	let userAnswers = [quizForm.q1.value,quizForm.q2.value,quizForm.q3.value];
	let result = document.getElementById('results');
	let score = 0;
//tallies the number of correct answers from the user

	userAnswers.forEach((answer,index) =>{
//function that uses the user's answer and answer key array as parameters
		if(answer === correctAnswers[index]){
//increases the score if the user answer matches the corresponding array index
			score ++;
		}
	});
	let percentage = (score/correctAnswers.length)*100;
//converts the decimal to a percentage

	let grade = percentage.toFixed(2);
//limits limits the decimal places to 2 digits in the percentage
	
	result.innerHTML = 'Your Score Is: ' + grade;
}