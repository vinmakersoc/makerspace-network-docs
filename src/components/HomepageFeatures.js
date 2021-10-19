import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'For Learners',
    Svg: require('../../static/img/learn.svg').default,
    description: (
      <>
        This documentations was made for learners, either students or staff, to get to know all available features and how to get started.
      </>
    ),
  },
  {
    title: 'For Prototype Instructors',
    Svg: require('../../static/img/instructor.svg').default,
    description: (
      <>
        Everything you need to know to become a Prototype Instructors. Spend your time helping newcomers to use available machines and resources.
      </>
    ),
  },
  {
    title: 'For Developers',
    Svg: require('../../static/img/developer.svg').default,
    description: (
      <>
        For maintainers and developers to extend or customize the website. This project is open-source and all contribution is appreciated.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
