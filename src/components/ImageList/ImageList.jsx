import { useEffect, useState, lazy } from 'react';
import { ImageListSection } from './ImageList.Styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { InView } from 'react-intersection-observer';

import { images } from '../../images/index';

export const ImageList = () => {
  const [lazy] = useState('loading' in HTMLImageElement.prototype);
  const [imageClass, setImageClass] = useState({
    create: 'disappear',
    list: 'disappear',
    change: 'disappear',
    calendar: 'disappear',
    statistic: 'disappear',
  });

  const handleEnter = target => {
    setImageClass(previousState => {
      return {
        ...previousState,
        [target]: 'appear',
      };
    });
  };

  return (
    <ImageListSection>
      <ul>
        <InView
          as="li"
          onChange={(inView, entry) => inView && handleEnter('create')}
        >
          <p>1</p>

          <picture>
            <source
              media="(min-width: 1170px)"
              srcSet={images.createPCwebp}
              type="image/webp"
            />
            <source media="(min-width: 1170px)" srcSet={images.createPCJpg} />
            <source
              media="(min-width: 660px)"
              srcSet={images.createTabWebp}
              type="image/webp"
            />
            <source media="(min-width: 660px)" srcSet={images.createTabJpg} />
            <source
              media="(min-width: 200px)"
              srcSet={images.createTelWebp}
              type="image/webp"
            />
            <source media="(min-width: 200px)" srcSet={images.createTelJpg} />
            {lazy ? (
              <img
                src="#"
                loading="lazy"
                alt="create"
                // width="600px"

                className={imageClass.create}
              />
            ) : (
              <LazyLoadImage
                alt="create"
                // height="500px"
                src="#"
                // width="500px"
                className={imageClass.create}
              />
            )}
          </picture>
        </InView>

        <InView
          as="li"
          onChange={(inView, entry) => inView && handleEnter('list')}
        >
          <p>2</p>
          <picture>
            <source
              media="(min-width: 1170px)"
              srcSet={images.listPCWebp}
              type="image/webp"
            />
            <source media="(min-width: 1170px)" srcSet={images.listPCJpg} />
            <source
              media="(min-width: 660px)"
              srcSet={images.listTabWebp}
              type="image/webp"
            />
            <source media="(min-width: 660px)" srcSet={images.listTabJpg} />
            <source
              media="(min-width: 200px)"
              srcSet={images.listTabWebp}
              type="image/webp"
            />
            <source media="(min-width: 200px)" srcSet={images.listTelJpg} />
            {lazy ? (
              <img
                src="#"
                loading="lazy"
                alt="list"
                width="600px"
                className={imageClass.list}
              />
            ) : (
              <LazyLoadImage
                alt="list"
                height="500px"
                src="#"
                width="500px"
                className={imageClass.list}
              />
            )}
          </picture>
        </InView>

        <InView
          as="li"
          onChange={(inView, entry) => inView && handleEnter('calendar')}
        >
          <p>3</p>
          <picture>
            <source
              media="(min-width: 1170px)"
              srcSet={images.calendarPCWebp}
              type="image/webp"
            />
            <source media="(min-width: 1170px)" srcSet={images.calendarPCJpg} />
            <source
              media="(min-width: 660px)"
              srcSet={images.calendarTabWebp}
              type="image/webp"
            />
            <source media="(min-width: 660px)" srcSet={images.calendarTabJpg} />
            <source
              media="(min-width: 200px)"
              srcSet={images.calendarTelWebp}
              type="image/webp"
            />
            <source media="(min-width: 200px)" srcSet={images.calendarTelJpg} />
            {lazy ? (
              <img
                src="#"
                loading="lazy"
                alt="calendar"
                width="600px"
                className={imageClass.calendar}
              />
            ) : (
              <LazyLoadImage
                alt="calendar"
                height="500px"
                src="#"
                width="500px"
                className={imageClass.calendar}
              />
            )}
          </picture>
        </InView>

        <InView
          as="li"
          onChange={(inView, entry) => inView && handleEnter('change')}
        >
          <p>4</p>
          <picture>
            <source
              media="(min-width: 1170px)"
              srcSet={images.changePCWebp}
              type="image/webp"
            />
            <source media="(min-width: 1170px)" srcSet={images.changePCJpg} />
            <source
              media="(min-width: 660px)"
              srcSet={images.changeTabWebp}
              type="image/webp"
            />
            <source media="(min-width: 660px)" srcSet={images.changeTabJpg} />
            <source
              media="(min-width: 200px)"
              srcSet={images.changeTelWebp}
              type="image/webp"
            />
            <source media="(min-width: 200px)" srcSet={images.changeTelJpg} />
            {lazy ? (
              <img
                src="#"
                loading="lazy"
                alt="change"
                width="600px"
                className={imageClass.change}
              />
            ) : (
              <LazyLoadImage
                alt="change"
                height="500px"
                src="#"
                width="500px"
                className={imageClass.change}
              />
            )}
          </picture>
        </InView>

        <InView
          as="li"
          onChange={(inView, entry) => inView && handleEnter('statistic')}
        >
          <p>5</p>
          <picture>
            <source
              media="(min-width: 1170px)"
              srcSet={images.statisticPCWebp}
              type="image/webp"
            />
            <source
              media="(min-width: 1170px)"
              srcSet={images.statisticPCJpg}
            />
            <source
              media="(min-width: 660px)"
              srcSet={images.statisticTabWebp}
              type="image/webp"
            />
            <source
              media="(min-width: 660px)"
              srcSet={images.statisticTabJpg}
            />
            <source
              media="(min-width: 200px)"
              srcSet={images.statisticTelWebp}
              type="image/webp"
            />
            <source
              media="(min-width: 200px)"
              srcSet={images.statisticTelJpg}
            />
            {lazy ? (
              <img
                src="#"
                loading="lazy"
                alt="statistic"
                width="600px"
                className={imageClass.statistic}
              />
            ) : (
              <LazyLoadImage
                alt="statistic"
                height="500px"
                src="#"
                width="500px"
                className={imageClass.statistic}
              />
            )}
          </picture>
        </InView>
      </ul>
    </ImageListSection>
  );
};
