import { useContext } from 'react';
import S from '../styles/components/LevelUpModal.module.css';
import { ChallengeContext } from '../contexts/ChallengesContext';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);

  return (
    <div className={S.overlay}>
      <div className={S.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type='button' onClick={closeLevelUpModal}>
          <img src='/icons/close.svg' alt='Botão para fechar modal' />
        </button>
      </div>
    </div>
  );
}
