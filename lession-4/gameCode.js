//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

switch (pushAnswers(works.a00, works.a1, works.a2)) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        switch (pushAnswers(works.b00, works.b1, works.b2)) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                pushAnswers(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        switch (pushAnswers(works.c00, works.c1, works.c2)) {
            case 1: // Второе действие
            case 2: // Второе действие
                pushAnswers(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
//alert('Спасибо за игру');
var finalAnswer = +prompt('Спасибо за игру, \nВведите номер хода, чтобы узнать ответ: ');

var numAnswer = 0;
if (finalAnswer == 1) {
    numAnswer = works.a00
} else if (finalAnswer == 2) {
    numAnswer = works.b00
} else if (finalAnswer == 3) {
    numAnswer = works.c00
} else {
    numAnswer = works.d00
}

alert("Ваш ответ на вопрос №" + finalAnswer + "\n" + numAnswer + "\n" + answers[finalAnswer - 1]);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}


function pushAnswers(q, answ1, answ2) {
    var ok = false;
    do {
        event = +prompt(q + answ1 + answ2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        } else {
            ok = isAnswer(q, event);
        }
    } while (!ok);
    if (event == 1) {
        answers.push(answ1);
    } else {
        answers.push(answ2);
    }
    return event;
}