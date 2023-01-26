import { Check } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from 'react';

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export function NewHabitForm() {
  const [title, setTitle] = useState('');
  const [weedDays, setWeekDays] = useState<number[]>([]);

  console.log('executou')

  function createNewHabit(event: FormEvent) {
    event.preventDefault();
    console.log(title, weedDays);
  }
  function handleToggleWeekday(weedDay: number) {
    if (weedDays.includes(weedDay)) {
      const weedDaysWithRemoveOne = weedDays.filter((day) => day !== weedDay);
      setWeekDays(weedDaysWithRemoveOne);
    } else {
      const weedDaysWithAddOne = [...weedDays, weedDay];
      setWeekDays(weedDaysWithAddOne);
    }
  }

  return (
    <form onSubmit={createNewHabit} className='w-full flex flex-col mt-6'>
      <label htmlFor='title' className='font-semibold leading-tight'>
        Qual seu comprometimento
      </label>

      <input
        type='text'
        id='title'
        placeholder='ex.: Exercícios , dormir bem , etc ...'
        className=' p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400'
        autoFocus
        onChange={(event) => setTitle(event.target.value)}
      />

      <label className='font-semibold leading-tight mt-4'>
        Qual a recorrência ?
      </label>

      <div className='flex flex-col gap-2 mt-3'>
        {availableWeekDays.map((weedDay, index) => {
          return (
            <Checkbox.Root
              key={weedDay}
              className='flex items-center gap-3 group'
              onCheckedChange={() => {
                handleToggleWeekday(index);
              }}
            >
              <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                <Checkbox.Indicator>
                  <Check size={20} className='text-white '></Check>
                </Checkbox.Indicator>
              </div>

              <span className=' text-white leading-tight '>{weedDay}</span>
            </Checkbox.Root>
          );
        })}
      </div>

      <button
        type='submit'
        className='mt-6 rounded-lg p-4 flex items-center justify-center gap-4 font-semibold bg-green-600 hover:bg-green-500'
      >
        <Check size={20} weight='bold'></Check>
        Confirmar
      </button>
    </form>
  );
}
