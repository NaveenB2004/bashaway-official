import { Fragment } from 'react';
import { SectionBadge } from '@/components/common/badges';
import prizes from './data.json';

const Prizes = () => {
  return (
    <div className="w-full flex flex-col py-6 px-10 lg:px-24 gap-y-10">
      <SectionBadge id="prizes">Prizes</SectionBadge>
      <div className="flex flex-col gap-5">
        {prizes.map((prize, index) => {
          return (
            <Fragment key={index}>
              <div className="flex gap-5 sm:gap-7">
                <div className="min-w-[70px] sm:min-w-[100px] h-fit flex justify-center items-center py-3 bg-black rounded-full">
                  <span className="uppercase text-white text-xl sm:text-4xl">{prize.place}</span>
                </div>
                <span className="uppercase text-3xl sm:text-4xl md:text-5xl md:text-[40px] lg:text-[44px] xl:text-6xl font-medium">
                  {prize.text}
                </span>
              </div>
              {prizes.length !== index + 1 && <hr className="border-black" />}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Prizes;
