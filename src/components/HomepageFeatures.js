import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({
      id: 'learners',
      message: 'For Learners',
      description: 'Learners description',
    }),
    Svg: require('../../static/img/learn.svg').default,
    description: (
      <>
       <Translate
        id="feature.learners"
        description="The feature learners message">
          This documentations was made for learners, either students or staff, to get to know all available features and how to get started.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'prototypeInstructors',
      message: 'For Prototype Instructors',
      description: 'Prototype Instructors description',
    }),
    Svg: require('../../static/img/instructor.svg').default,
    description: (
      <>
       <Translate
        id="feature.prototypeInstructors"
        description="The feature prototype instructors message">
          Everything you need to know to become a Prototype Instructors. Spend your time helping newcomers to use available machines and resources.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: 'developers',
      message: 'For Developers',
      description: 'Developers description',
    }),
    Svg: require('../../static/img/developer.svg').default,
    description: (
      <>
        <Translate
        id="feature.developers"
        description="The feature developers message">
          For maintainers and developers to extend or customize the website. This project is open-source and all contribution is appreciated.
        </Translate>
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
