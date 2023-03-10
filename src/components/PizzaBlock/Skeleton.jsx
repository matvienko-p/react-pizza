import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={500}
    viewBox='0 0 280 500'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'>
    <circle cx='125' cy='125' r='125' />
    <rect x='0' y='269' rx='10' ry='10' width='280' height='23' />
    <rect x='0' y='313' rx='10' ry='10' width='280' height='88' />
    <rect x='0' y='426' rx='10' ry='10' width='75' height='30' />
    <rect x='130' y='421' rx='24' ry='24' width='152' height='45' />
  </ContentLoader>
);

export default Skeleton;
