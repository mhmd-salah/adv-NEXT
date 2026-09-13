'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Controller, useFormContext } from 'react-hook-form';
import { QuestionsFormValues } from '../types/question';
import QuestionAnswers from './question-answers';

interface QuestionBodyFormProps {
  activeQuestion: number;
}

export default function QuestionBodyForm({ activeQuestion }: QuestionBodyFormProps) {
  const form = useFormContext<QuestionsFormValues>();

  return (
    <div className='p-4 border rounded-md bg-zinc-900'>
      {/* Headline */}
      <div className='flex flex-col gap-1'>
        {/* Label */}
        <Label htmlFor='headline' className='font-medium text-lg'>Headline</Label>

        {/* Input */}
        <Controller
          name={`questions.${activeQuestion}.text`}
          control={form.control}
          render={({ field }) => <Input id='headline' {...field} />}
        />
      </div>

      {/* Answers */}
      <QuestionAnswers activeQuestion={activeQuestion} key={activeQuestion} />
    </div>
  )
}
