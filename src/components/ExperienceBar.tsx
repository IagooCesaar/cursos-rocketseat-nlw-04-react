import React, { useEffect, useState } from 'react';

import styles from '../styles/components/ExperienceBar.module.css'

const ExperienceBar: React.FC = () => {
  const maxXP = 600;
  const minXP = 0;
  const currentXP = 300;

  const [percentXP, setPercentXP] = useState('')

  useEffect(() => {
    let percent = 0;

    percent = Math.round(100 * currentXP / maxXP);
    setPercentXP(`${percent}%`)
  }, [])

  return (
    <header className={styles.experienceBar} >
      <span>{minXP} xp</span>
      <div>
        <div style={{width: `${percentXP}`}} />
        <span className={styles.currentExperience} style={{left: `${percentXP}`}}>
          {currentXP} xp
        </span>
      </div>
      <span>{maxXP} xp</span>
    </header>
  );
}

export default ExperienceBar;