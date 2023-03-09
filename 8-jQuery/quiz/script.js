const questions = [
    {
        id: 1,
        title:
            'برای اینکه لینک در صفحه یا تب جدید باز شود، از کدام صفت استفاده میشود؟',
        options: [
            {
                key: 1,
                title: '_blank'
            },
            {
                key: 2,
                title: '_self'
            },
            {
                key: 3,
                title: '_new'
            },
            {
                key: 4,
                title: '_parent'
            }
        ],
        answerKey: 1
    },
    {
        id: 2,
        title:
            'کدام عملگر true برمیگرداند اگر دو مقداری که با هم مقایسه میشوند، برابر نباشند؟',
        options: [
            {
                key: 1,
                title: '<>'
            },
            {
                key: 2,
                title: '~'
            },
            {
                key: 3,
                title: '==!'
            },
            {
                key: 4,
                title: '!=='
            }
        ],
        answerKey: 4
    },
    {
        id: 3,
        title: 'کدام یک کلمه کلیدی در جاوااسکریپت نیست؟',
        options: [
            {
                key: 1,
                title: 'this'
            },
            {
                key: 2,
                title: 'catch'
            },
            {
                key: 3,
                title: 'function'
            },
            {
                key: 4,
                title: 'array'
            }
        ],
        answerKey: 4
    },
    {
        id: 4,
        title:
            'کدام یک راه درست برای اینکه تعداد پاراگراف‌های موجود در صفحه را بدست بیاوریم با استفاده از jquery است؟',
        options: [
            {
                key: 1,
                title: '$("p").count()'
            },
            {
                key: 2,
                title: '$("p").length'
            },
            {
                key: 3,
                title: '$("*").find("p")'
            },
            {
                key: 4,
                title: '$("p").length()'
            }
        ],
        answerKey: 2
    }
];

let quizForm = $("#quizForm").empty();

let correct = 0;
let wrong = 0;
let blank = 0;

for (question of questions) {

    let questionDiv = $("<div></div>").addClass("question");
    let h3 = $("<h3></h3>").text(question.title);
    let choicesDiv = $("<div></div>").addClass("choices");

    for (elem of question.options) {
        let choiceDiv = $("<div></div>").addClass("choice");
        let label = $("<label></label>").attr("for", "").text(elem.title);
        let input = $("<input/>").attr(
            {
                "type": "radio",
                "name": `question${question.id}`,
                "id": "",
                "value": `${elem.key}`
            }
        );

        choiceDiv.append(label, input);
        choicesDiv.append(choiceDiv);
    }


    questionDiv.append(h3, choicesDiv);
    quizForm.append(questionDiv);
}

let submitButton = $("<button></button>").attr("type", "submit").text("ثبت");
quizForm.append(submitButton);

quizForm.submit(function (event) {

    correct = 0;
    wrong = 0;
    blank = 0;

    event.preventDefault();

    for (question of questions) {
        let tmp = $(`input[name=question${question.id}]:checked`).val();
        if (tmp == question.answerKey) {
            correct++;
        }
        else if (tmp == undefined) {
            blank++
        }
        else {
            wrong++;
        }
    }

    $("#rightAnswers").text(correct);
    $("#wrongAnswers").text(wrong);
    $("#emptyAnswers").text(blank);
});
