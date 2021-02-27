import { useContext } from 'react';
import S from '../styles/components/ChallengeBox.module.css';
import { ChallengeContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengeContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={S.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={S.challengeActive}>
          <header>Ganhe {activeChallenge.amount}</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              className={S.challengeFailedButton}
              onClick={handleChallengeFailed}
              type='button'
            >
              Falhei
            </button>
            <button
              className={S.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
              type='button'
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={S.challengeNotActive}>
          <strong>Finalize um ciclo para receber desafios</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level Up' />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
