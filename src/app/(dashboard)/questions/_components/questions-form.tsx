'use client'

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import QuestionBodyForm from './question-body-form';
import { QuestionsFormValues } from '../types/question';
import { zodResolver } from '@hookform/resolvers/zod';
import { questionsSchema } from '../schemes/question.schema';

export default function QuestionsForm() {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);

  const form = useForm<QuestionsFormValues>({
    defaultValues: {
      examId: '',
      questions: [
        {
          text: '',
          answers: [],
        }
      ],
    },
    resolver: zodResolver(questionsSchema)
  })

  const onSubmit: SubmitHandler<QuestionsFormValues> = (values) => {
    console.log(values)
  }

  const { fields: questions, append } = useFieldArray({
    control: form.control,
    name: 'questions',
  })

  return (
    <FormProvider {...form}>
      <div className='flex flex-col gap-4'>
        <h1>Questions Form</h1>
        <form onSubmit={form.handleSubmit(onSubmit, (errors) => console.log('Errors: ', errors))}>
          {/* Tabs */}
          <ul className='flex'>
            {questions.map((question, i) => <li key={question.id}>
              <Button
                size='icon'
                variant={activeQuestion === i ? 'default' : 'outline'}
                onClick={() => setActiveQuestion(i)}
              >Q{i + 1}</Button>
            </li>)}

            {/* Add Question */}
            <li><Button
              size='icon'
              variant='outline'
              onClick={() => {
                append({
                  text: '',
                  answers: []
                })
              }}
            >+</Button></li>
          </ul>

          {/* Question Body */}
          <QuestionBodyForm activeQuestion={activeQuestion} />

          <Button type='submit' className='bg-green-500'>Save Questions</Button>
        </form>
      </div>
    </FormProvider>
  )
}
