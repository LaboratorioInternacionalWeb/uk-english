/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function PresentContinuous(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Present continuous' ? '' : 'hidden'}`}>
      <p>
        UNIT Present continuous (I am doing) Study this example situation: Ann is in her car. She is on her way to work. She is driving to work. This
        means: she is driving now, at the time of speaking. The action is not finished. Am/is/are -ing is the present continuous: am (= I'm) driving
        he/she/it is (= he's etc.) working we/you/they are (= we're etc.) doing etc. B I am doing something = I'm in the middle of doing something;
        I've started doing it and haven't finished yet. Often the action is happening at the time of speaking: • Please don't make so much noise. I'm
        working. (not I work') 'I 'Where's Margaret?' 'She's having bath.' (not 'she has a bath') Let's go out now. It isn't raining any more. (not
        'it doesn't rain') (at a party) Hello, Jane. Are you enjoying the party? (not 'do you enjoy') • I'm tired. I'm going to bed now. Goodnight!
        But the action is not necessarily happening at the time of speaking. For example: Tom and Ann are talking in a café. Tom says: I'm reading an
        interesting book at the moment. I'll lend it to you when I've finished it. ANN TOM Tom is not reading the book at the time of speaking. He
        means that he has started it but not finished it yet. He is in the middle of reading it. Some more examples: • Catherine wants to work in
        Italy, so she is learning Italian. (but perhaps she isn't learning Italian exactly at the time of speaking) Some friends of mine are building
        their own house. They hope it will be finished before next summer. C We use the present continuous when we talk about things happening in a
        period around now (for example, today / this week / this evening etc.): 0 'You're working hard today.' "Yes, I have lot to do.' (not 'you work
        hard today') Q 'Is Susan working this week?' 'No, she's on holiday.' We use the present continuous when we talk about changes happening around
        now: O The population of the world is rising very fast. (not 'rises') O Is your English getting better? (not 'does your English get better')
        Present continuous and present simple - UNITS 3-4 Present continuous for the future - UNIT 19
      </p>
    </div>
  );
}
