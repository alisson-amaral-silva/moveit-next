import { useContext } from 'react';
import S from '../styles/components/Profile.module.css';
import { ChallengeContext } from '../contexts/ChallengesContext';

export function Profile() {
  const { level } = useContext(ChallengeContext);
  return (
    <div className={S.profileContainer}>
      <img src='https://github.com/alisson-amaral-silva.png' alt='eu mesmo' />
      <div>
        <strong>Alisson Amaral</strong>
        <p>
          <img src='icons/level.svg' alt='Level 1' />
          Level {level}
        </p>
      </div>
    </div>
  );
}
