/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

import PresentContinuous from './PresentContinuous.tsx';
import PresentContinuousPresentSimple from './PresentContinuousPresentSimple.tsx';
import PastContinuous from './PastContinuous.tsx';
import PastSimple from './PastSimple.tsx';
import PresentPerfect from './PresentPerfect.tsx';
import PresentPerfectContinuous from './PresentPerfectContinuous.tsx';
import PresentSimple from './PresentSimple.tsx';
import PastPerfectContinuous from './PastPerfectContinuous.tsx';
import PastPerfect from './PastPerfect.tsx';
import PresentPerfectPast from './PresentPerfectPast.tsx';
import PresentPerfectContinuousSimple from './PresentPerfectContinuousSimple.tsx';
import PresentTenses from './PresentTenses.tsx';
import Passive from './Passive.tsx';
import ReportedSpeech from './ReportedSpeech.tsx';
import Questions from './Questions.tsx';
import AuxiliaryVerbs from './AuxiliaryVerbs.tsx';
import QuestionTags from './QuestionTags.tsx';

export default function Topics() {
  const [topic, setTopic] = useState('Present simple');

  const [menuView, setMenuView] = useState(true);

  return (
    <div class={tw`flex flex-col`}>
      {/* Header */}
      <div class={tw`flex flex-row justify-between mt-1 rounded-xl border-1 p-2`}>
        <div class={tw`my-1 mx-2`} onClick={() => setMenuView(!menuView)}>
          <img class={tw`object-cover h-6`} src="/menu.svg" height="10px" alt="Uk english logo: a Red Uk" />
        </div>
        <div>{topic}</div>
        <a href={`/`} class={tw`my-1 mx-2 `}>
          <img class={tw`object-cover h-6`} src="/logo-sm.svg" height="10px" alt="Uk english logo: a Red Uk" />
        </a>
      </div>
      {/* Body */}
      <div class={tw` flex flex-row`}>
        {/* navBar */}
        <div class={tw`${menuView ? '' : 'hidden'}`}>
          <ul class={tw`h-screen overflow-y-scroll rounded-xl border-1 p-2 w-max`}>
            <div class={tw`rounded-xl border-1 p-2 mb-3 font-mono font-bold`}>Topics</div>
            {/* --------------------------------------------------------- */}
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Present simple')}>
              Present simple
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Present continuous')}>
              Present continuous
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Present perfect')}>
              Present perfect
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Present perfect continuous')}>
              Present perfect continuous
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Present continuous and present simple')}>
              Present continuous and present simple
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Past simple')}>
              Past simple
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Past continuous')}>
              Past continuous
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Past perfect')}>
              Past perfect
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Past perfect continuous')}>
              Past perfect continuous
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Present perfect continuous and simple')}>
              Present perfect continuous and simple
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Present perfect and past')}>
              Present perfect and past
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Present tenses')}>
              Present tenses
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Passive')}>
              Passive
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Reported speech')}>
              Reported speech
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Questions')}>
              Questions
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Auxiliary verbs')}>
              Auxiliary verbs
            </li>
            <li class={tw`rounded-xl border-1 pl-5 py-2 font-mono font-bold`} onClick={() => setTopic('Question tags')}>
              Question tags
            </li>
          </ul>
        </div>
        {/* Content */}
        <div class={tw`rounded-xl border-1 p-5`}>
          <PresentContinuous view={topic} />
          <PresentContinuousPresentSimple view={topic} />
          <PastContinuous view={topic} />
          <PastSimple view={topic} />
          <PresentPerfect view={topic} />
          <PresentPerfectContinuous view={topic} />
          <PastPerfectContinuous view={topic} />
          <PastPerfect view={topic} />
          <PresentPerfectPast view={topic} />
          <PresentPerfectContinuousSimple view={topic} />
          <PresentSimple view={topic} />
          <PresentTenses view={topic} />
          <Passive view={topic} />
          <ReportedSpeech view={topic} />
          <Questions view={topic} />
          <AuxiliaryVerbs view={topic} />
          <QuestionTags view={topic} />
        </div>
      </div>
    </div>
  );
}
