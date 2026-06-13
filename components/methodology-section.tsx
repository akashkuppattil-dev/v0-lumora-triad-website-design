import React from 'react';
import styles from './methodology-section.module.css';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We deeply understand your business, goals, and target audience.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Crafting intuitive, beautiful experiences that solve real problems.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Building scalable, performant digital products with modern tech.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Strategic release and optimization for maximum impact.',
  },
  {
    number: '05',
    title: 'Support',
    description: 'Ongoing optimization, maintenance, and growth partnerships.',
  },
];

export function MethodologySection() {
  return (
    <section className={styles.section} id="methodology">
      <div className={styles.container}>
        <h2 className={styles.heading}>How We Work</h2>
        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.card}>
              <div className={styles.number}>{step.number}</div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
