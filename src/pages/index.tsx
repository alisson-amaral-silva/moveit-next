import React from 'react';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import S from '../styles/pages/Home.module.css';
import Head from 'next/head';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

export default function Home() {
  return (
    <div className={S.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
