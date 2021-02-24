import S from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={S.profileContainer}>
      <img src='https://github.com/alisson-amaral-silva.png' alt='eu mesmo' />
      <div>
        <strong>Alisson Amaral</strong>
        <p>
          <img src='icons/level.svg' alt="Level 1"/>
          Level 1
          </p>
      </div>
    </div>
  );
}
