import { HabitDay } from './HabitDay';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
export default function SummaryTable() {
  return (
    <div className='w-full flex'>
      <div className='grid grid-rows-7 grid-flow-row gap-3'>
        {weekDays.map((weekDays, index) => {
          return (
            <div
              key={index}
              className='text-zinc-400 text-xl h-18 w-10 flex items-center justify-center'
            >
              {weekDays}
            </div>
          );
        })}
      </div>

      <div className='grid grid-rows-7 grid-flow-col gap-3'>
        <HabitDay />
      </div>
    </div>
  );
}
