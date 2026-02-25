function gradeQuiz() {

    const answers = {
        q1: "a",
        q2: "a",
        q3: "b",
        q4: "b",
        q5: "a",
        q6: "a",
        q7: "b",
        q8: "b",
        q9: "a",
        q10: "a"
    };

    let score = 0;

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    const results = document.getElementById("results");
    results.classList.add("visible");

    let percentage = (score / 10) * 100;

    if (percentage >= 80) {
        results.className = "quiz-results visible excellent";
        results.innerHTML = `Excellent! You scored ${score}/10 (${percentage}%).`;
    } else if (percentage >= 50) {
        results.className = "quiz-results visible good";
        results.innerHTML = `Good effort! You scored ${score}/10 (${percentage}%).`;
    } else {
        results.className = "quiz-results visible needs-improvement";
        results.innerHTML = `Needs Improvement. You scored ${score}/10 (${percentage}%). Review the training and try again.`;
    }
}