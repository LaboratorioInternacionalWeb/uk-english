/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Topics from '../islands/Topics.tsx';

export default function englishLessons() {
  return (
    <div class={tw`flex flex-col`}>
      {/* Phantom */}
      <Topics />
    </div>
  );
}
