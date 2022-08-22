import { useState } from 'react';
import './App.css';
import ProgressSteps from './components/ProgressSteps';
import QuetionsList from './components/QuetionsList';

function App() {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [correct, setCorrect] = useState(0);
  const quetions = [
    {
      mainQuetion: "Машина?",
      options: [
        "Мерседес",
        "Жигуль",
        "Бмв",
        "Ауди",
        "Вольсваген",
        "Ламборгини",
        "Бугати",
      ],
      correct: 6,
    },
    {
      mainQuetion:
        "У вас был день, полный неудач и разочарований. Как проведёте вечер?",
      options: [
        "Побуду наедине с собой: включу любимый сериал, наготовлю вкусняшек или придумаю ещё какое-нибудь приятное занятие",
        "Нужно отвлечься! Позвоню друзьям и позову их куда-нибудь, вместе горести переживать веселее.",
      ],
      correct: 2,
    },
    {
      mainQuetion:
        "Вы пришли к психологу. Он задаёт вопрос: «Какое из двух утверждений описывает вас точнее?» Выбирайте.",
      options: [
        "Частенько витаю в облаках: люблю мечтать и строить великие планы на будущее. Иногда настолько ухожу в себя, что не замечаю ничего вокруг",
        "Предпочитаю жить настоящим: для меня важно то, что происходит здесь и сейчас. Меня отличает практичность и внимание к деталям",
      ],
      correct: 1,
    },
    {
      mainQuetion: "Твоя тачка ?",
      options: [
        "Мерседес",
        "Жигуль",
        "Бмв",
        "Ауди",
        "Вольсваген",
        "Ламборгини",
        "Бугати",
      ],
      correct: 2,
    },
  ];

  const setNextQuetion = () => {
   if (selectedOption === 0) {
    alert("Выберите что то")
   } else if (step !== quetions.length) {
    setStep(step + 1);
    setSelectedOption(null)
   };
  };
  
  const stepProcent = Math.round((step / quetions.length) * 100);

const quetion = quetions[step]

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <div className="quiz-container">
            {step !== quetions.length ? (
              <>
                <ProgressSteps step={step} setStep={setStep} stepProcent={stepProcent} />
                <QuetionsList
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  quetion={quetion}
                  correct={correct}
                  setCorrect={setCorrect}
                />
              </>
            ) : (
              <h1>
                Вы правильно ответили на {correct} вопросов из {quetions.length}
                !
              </h1>
            )}

            <div className="buttons">
              <button onClick={() => setSelectedOption(0)}>Отменить</button>
              <button
                onClick={setNextQuetion}
                className={selectedOption ? "button-next" : "button-gray"}
              >
                Далее
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
