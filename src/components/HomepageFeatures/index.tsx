import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Advanced AI Core',
    
    image: '/img/logo.svg', 
    description: (
      <>
        Powered by state-of-the-art neural networks. The robot can process visual 
        data, recognize faces, and adapt to dynamic environments in real-time.
      </>
    ),
  },
  {
    title: 'Fluid Humanoid Motion',
  
    image: '/img/logo.svg',
    description: (
      <>
        Engineered with 34 degrees of freedom. Our actuators allow for seamless, 
        natural walking, running, and precise hand gestures similar to humans.
      </>
    ),
  },
  {
    title: 'Human-Robot Interaction',

    image: '/img/logo.svg',
    description: (
      <>
        Designed for safe collaboration. With Natural Language Processing (NLP), 
        the robot understands voice commands and responds with emotional intelligence.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
  
        <img 
          src={image} 
          className={styles.featureSvg} 
          alt={title} 
       
          style={{ width: 'auto', height: '150px', objectFit: 'contain' }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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