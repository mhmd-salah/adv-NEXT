'use client';

import React, { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { QuestionsFormValues } from '../types/question';
import { Button } from '@/components/ui/button';
import { Input } from '@base-ui/react';

export default function QuestionAnswers({
  activeQuestion,
}: {
  activeQuestion: number;
}) {
  const [isAddingAnswer, setIsAddingAnswer] = useState(false);
  const [newAnswerText, setNewAnswerText] = useState('');

  const form = useFormContext<QuestionsFormValues>();
  const { fields: answers, append } = useFieldArray<QuestionsFormValues>({
    name: `questions.${activeQuestion}.answers`,
  });

  return (
    <div className="flex flex-col">
      <div className="flex justify-between bg-zinc-400 items-center p-4">
        <p>Headline</p>

        <Button
          variant="default"
          className="bg-green-500"
          onClick={() => setIsAddingAnswer(true)}
        >
          Add Answer
        </Button>
      </div>

      {/* Answers */}
      <ul className="flex flex-col gap-2 border p-2">
        {answers.map((answer, i) => (
          <li key={answer.id} className="flex bg-zinc-700">
            {/* Answer Text */}
            <p className="grow">{answer.text}</p>

            {/* Mark Correct Button */}
            <Button
              size="sm"
              onClick={() => {
                form.setValue(
                  `questions.${activeQuestion}.answers.${i}.isCorrect`,
                  !answer.isCorrect,
                );
              }}
              variant={answer.isCorrect ? 'ghost' : 'default'}
            >
              {answer.isCorrect ? 'Correct Answer' : 'Mark Correct'}
            </Button>
          </li>
        ))}
      </ul>

      {isAddingAnswer && (
        <div className="flex bg-zinc-500 p-1">
          <Input
            className="border border-green-400"
            value={newAnswerText}
            onChange={(e) => {
              const value = e.target.value;
              setNewAnswerText(value);
            }}
          />

          <Button
            onClick={() => {
              append({
                text: newAnswerText,
                isCorrect: false,
              });
              setIsAddingAnswer(false);
              setNewAnswerText('');
            }}
            variant="default"
            className="bg-green-500"
          >
            Add Answer
          </Button>
        </div>
      )}
    </div>
  );
}
