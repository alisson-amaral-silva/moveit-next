import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import S from '../styles/components/Countdown.module.css';

export function Countdown() {
  const {
    hasFinished,
    isActive,
    minutes,
    seconds,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={S.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <p>
          <button
            disabled
            type='button'
            onClick={resetCountdown}
            className={S.countdownButton}
          >
            Ciclo encerrado
          </button>
        </p>
      ) : (
        <>
          {isActive ? (
            <button
              type='button'
              onClick={resetCountdown}
              className={`${S.countdownButton} ${S.countdownButtonActive}`}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              type='button'
              onClick={startCountdown}
              className={S.countdownButton}
            >
              Iniciar ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
