//Build a Quiz

function quizAnswers(){
	const quiz = document.getElementById('quizForm');
	const correctAnswers = ['a','b','c'];
	let userAnswers = [quizForm.q1.value,quizForm.q2.value,quizForm.q3.value];
	let result = document.getElementById('results');
	let score = 0;

	userAnswers.forEach((answer,index) =>{
		if(answer === correctAnswers[index]){
			score ++;
		}
	});
	let percentage = (score/correctAnswers.length)*100;
	let grade = percentage.toFixed(2);
	result.innerHTML = 'Your Score Is: ' + grade;
}