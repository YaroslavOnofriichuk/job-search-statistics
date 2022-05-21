import { useState } from 'react';
import { ImageListSection } from './ImageList.Styled';
import { InView } from 'react-intersection-observer';

import { images } from '../../images/index';

export const ImageList = () => {
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
          <p>
            Для того щоб зробити процес пошуку роботи більш ефективним, записуй
            кожен свій відгук на вакансію
          </p>
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
            <img
              src="#"
              alt="create"
              height="450px"
              width="100%"
              className={imageClass.create}
            />
          </picture>
        </InView>

        <InView
          as="li"
          onChange={(inView, entry) => inView && handleEnter('list')}
        >
          <p>Тримай всі записи під рукою</p>
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
              srcSet={images.listTelWebp}
              type="image/webp"
            />
            <source media="(min-width: 200px)" srcSet={images.listTelJpg} />
            <img
              src="#"
              alt="list"
              height="450px"
              width="100%"
              className={imageClass.list}
            />
          </picture>
        </InView>

        <InView
          as="li"
          onChange={(inView, entry) => inView && handleEnter('change')}
        >
          <p>За потреби внось зміни в замітки</p>
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
            <img
              src="#"
              alt="change"
              loading="lazy"
              height="450px"
              width="100%"
              className={imageClass.change}
            />
          </picture>
        </InView>

        <InView
          as="li"
          onChange={(inView, entry) => inView && handleEnter('calendar')}
        >
          <p>Переглядай замітки в календарі</p>
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
            <img
              src="#"
              loading="lazy"
              alt="calendar"
              height="450px"
              width="100%"
              className={imageClass.calendar}
            />
          </picture>
        </InView>

        <InView
          as="li"
          onChange={(inView, entry) => inView && handleEnter('statistic')}
        >
          <p>Аналізуй статистику</p>
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
            <img
              src="#"
              loading="lazy"
              alt="statistic"
              height="450px"
              width="100%"
              className={imageClass.statistic}
            />
          </picture>
        </InView>
        <li>
          <p>Удачі в пошуках роботи твоєї мрії !!!</p>
        </li>
      </ul>
    </ImageListSection>
  );
};
