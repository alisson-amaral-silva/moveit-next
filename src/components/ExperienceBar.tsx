import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import S from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengeContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <header className={S.experienceBar}>
      <span>0xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={S.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience}xp
        </span>
      </div>
      <span>{experienceToNextLevel}xp</span>
    </header>
  );
}
