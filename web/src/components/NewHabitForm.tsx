import { Check } from 'phosphor-react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from 'react';
import { api } from '../lib/axios';

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
  const [weekDays, setWeekDays] = useState<number[]>([]);

  async function createNewHabit(event: FormEvent) {
    event.preventDefault();
    console.log(title, weekDays);

    if (!title || weekDays.length === 0) {
      return;
    }

    await api
      .post('/habits', {
        title,
        weekDays,
      })
      .then(() => {
        setTitle('');
        setWeekDays([]);
        // alert('habito criado com sucesso');
      })
      .catch((e) => {
        console.log('error', e);
      });
  }

  function handleToggleWeekday(weedDay: number) {
    if (weekDays.includes(weedDay)) {
      const weedDaysWithRemoveOne = weekDays.filter((day) => day !== weedDay);
      setWeekDays(weedDaysWithRemoveOne);
    } else {
      const weedDaysWithAddOne = [...weekDays, weedDay];
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
        className=' p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900'
        autoFocus
        value={title}
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
              className='flex items-center gap-3 group focus:outline-none'
              checked={weekDays.includes(index)}
              onCheckedChange={() => {
                handleToggleWeekday(index);
              }}
            >
              <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-zinc-900'>
                <Checkbox.Indicator>
                  <Check size={20} className='text-white '></Check>
                </Checkbox.Indicator>
              </div>

              <span className='text-white leading-tight '>{weedDay}</span>
            </Checkbox.Root>
          );
        })}
      </div>

      <button
        type='submit'
        className='mt-6 rounded-lg p-4 flex items-center justify-center gap-4 font-semibold bg-green-600 hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900'
      >
        <Check size={20} weight='bold'></Check>
        Confirmar
      </button>
    </form>
  );
}
