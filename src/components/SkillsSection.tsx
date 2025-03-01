import React from 'react';
import styles from '../styles/SkillsSection.module.css';

const skills = [
  { name: 'Letterpress', level: 95 },
  { name: 'Screen Printing', level: 90 },
  { name: 'Digital Printing', level: 85 },
  { name: 'Offset Printing', level: 92 },
  { name: 'Binding & Finishing', level: 88 },
  { name: 'Design', level: 80 }
];

export default function SkillsSection() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Expertise</h2>
        
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillInfo}>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <span className={styles.skillPercentage}>{skill.level}%</span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progress} 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 