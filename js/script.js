// PyLearn Hub static website script
(function () {
    'use strict';

    const contactForm = document.querySelector('#contactForm');
    const formMessage = document.querySelector('#formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                event.stopPropagation();
                contactForm.classList.add('was-validated');
                formMessage.textContent = 'Please complete all required fields correctly.';
                formMessage.className = 'feedback error mt-3';
                return;
            }

            contactForm.classList.add('was-validated');
            formMessage.textContent = 'Thank you. This static website has checked your form successfully.';
            formMessage.className = 'feedback success mt-3';
            contactForm.reset();
            contactForm.classList.remove('was-validated');
        });
    }

    const quizForm = document.querySelector('#quizForm');
    const quizResult = document.querySelector('#quizResult');

    if (quizForm) {
        quizForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const selected = quizForm.querySelector('input[name="q1"]:checked');

            if (!selected) {
                quizResult.textContent = 'Please choose an answer.';
                quizResult.className = 'feedback error mt-3';
                return;
            }

            if (selected.value === 'print') {
                quizResult.textContent = 'Correct. print() displays output on the screen.';
                quizResult.className = 'feedback success mt-3';
            } else {
                quizResult.textContent = 'Not correct. The correct answer is print().';
                quizResult.className = 'feedback error mt-3';
            }
        });
    }
})();
