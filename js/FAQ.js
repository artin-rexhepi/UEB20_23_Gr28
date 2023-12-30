document.querySelectorAll('.question').forEach(function (question) {
            question.addEventListener('click', function () {
                var answer = this.nextElementSibling;
                answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
            });
        });