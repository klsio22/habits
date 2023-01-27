import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginnig';
import { HabitDay } from './HabitDay';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDatesSize = 18 * 10;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

type Summary = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>;

export default function SummaryTable() {
  const [summary, setSummary] = useState<Summary>([]);

  useEffect(() => {
    api.get('summary').then((res) => {
      console.log(res.data);
      setSummary(res.data);
    });
  }, []);

  return (
    <div className='w-full flex overflow-x-auto scroll-m-1 scrollbar'>
      <div className='grid grid-rows-7 grid-flow-row gap-3'>
        {weekDays.map((weekDays, index) => {
          return (
            <div
              key={`${weekDays}-${index}`}
              className='text-zinc-400 text-xl h-18 w-10 flex items-center justify-center'
            >
              {weekDays}
            </div>
          );
        })}
      </div>

      <div className='grid grid-rows-7 grid-flow-col gap-3 pb-4'>
        {summary.length > 0 &&
          summaryDates.map((date) => {
            const dayInSummary = summary.find((day) => {
              return dayjs(date).isSame(day.date, 'day');
            });

            return (
              <HabitDay
                key={date.toString()}
                date={date}
                amount={dayInSummary?.amount}
                defaultCompleted={dayInSummary?.completed}
              />
            );
          })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, index) => {
            return (
              <div
                key={index}
                className='w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg 
                opacity-40 cursor-not-allowed'
              ></div>
            );
          })}
      </div>
    </div>
  );
}
