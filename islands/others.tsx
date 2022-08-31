/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";

import PresentContinuous from "./PresentContinuous.tsx";
import PresentContinuousPresentSimple from "./PresentContinuousPresentSimple.tsx";
import PastContinuous from "./PastContinuous.tsx";
import PastSimple from "./PastSimple.tsx";
import PresentPerfect from "./PresentPerfect.tsx";
import PresentPerfectContinuous from "./PresentPerfectContinuous.tsx";
import PresentSimple from "./PresentSimple.tsx";
import PastPerfectContinuous from "./PastPerfectContinuous.tsx";
import PastPerfect from "./PastPerfect.tsx";
import PresentPerfectPast from "./PresentPerfectPast.tsx";
import PresentPerfectContinuousSimple from "./PresentPerfectContinuousSimple.tsx";
import PresentTenses from "./PresentTenses.tsx";
import Passive from "./Passive.tsx";
import ReportedSpeech from "./ReportedSpeech.tsx";
import Questions from "./Questions.tsx";
import AuxiliaryVerbs from "./AuxiliaryVerbs.tsx";
import QuestionTags from "./QuestionTags.tsx";

export default function Topics() {
  const [topic, setTopic] = useState("");

  const [menuView, setMenuView] = useState(true);

  return (
    <div class={tw`flex flex-col`}>
      {/* Header */}
      <div
        class={tw`flex flex-row justify-between mt-1 rounded-xl border-1 p-2`}
      >
        <div
          class={tw`my-1 mx-2`}
          onClick={() => setMenuView(!menuView)}
        >
          <img
            class={tw`object-cover h-6`}
            src="/menu.svg"
            height="10px"
            alt="Uk english logo: a Red Uk"
          />
        </div>
        <div class={tw`my-1 mx-2 `}>
          <img
            class={tw`object-cover h-6`}
            src="/logo-sm.svg"
            height="10px"
            alt="Uk english logo: a Red Uk"
          />
        </div>
      </div>
      {/* Body */}
      <div class={tw`${menuView ? "" : "hidden"} flex flex-row`}>
        {/* navBar */}
        <div class={tw``}>
          <ul
            class={tw`h-screen overflow-y-scroll rounded-xl border-1 p-2 w-max`}
          >
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Can, could and (be) able to
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Could (do) and could have (done)
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Must and can't
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              May and might
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Must and have to
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Must mustn't needn't
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Had better It's time..
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Can / Could / Would you..?
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              If I do... and If I did..
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              If I knew.. I wish I knew...
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              If I had known... I wish I had known...
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Would I wish...would
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              It is said that..
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              He is said to...
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              (be) supposed to..
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Verb + -ing
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Verb + to...
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Verb + (object) + to...
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Verb + -ing or to...
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Prefer and would rather
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Preposition (in/for/about etc.) + -ing
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Be/get used to something
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Verb + preposition + -ing
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Expressions + -ing
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              To..., for... and so that...
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Adjective + to...
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              To... (afraid to do) and preposition + -ing (afraid of -ing)
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              To... (afraid to do) and preposition + -ing (afraid of -ing)
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              -ing clauses
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Countable and uncountable nouns
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Countable nouns with a/an and some
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Countable nouns with a/an and some
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              A/an and the
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              The
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Names with and without the
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Singular and plural
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              Noun + noun
            </li>
            <li
              class={tw`hidden rounded-xl border-1 pl-5 py-2 font-mono font-bold`}
              onClick={() => setTopic("xxxxxxxx")}
            >
              A friend of mine
            </li>
          </ul>
        </div>
        {/* Content */}
        <div class={tw`rounded-xl border-1 p-5`}>
          <PresentContinuous view={topic} />
          <PresentContinuousPresentSimple
            view={topic}
          />
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
