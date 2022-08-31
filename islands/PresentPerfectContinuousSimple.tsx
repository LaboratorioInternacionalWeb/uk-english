/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function PresentPerfectContinuousSimple(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Present perfect continuous and simple' ? '' : 'hidden'}`}>
      <p>
        UNIT: 10 Present perfect continuous and simple ; (I have been doing and I have done) Study these example situations: Ann's clothes are covered
        in paint. She has been painting the ceiling. The ceiling was white. Now it is blue. She has painted the ceiling. ..- Has been painting is the
        present perfect Has painted is the present perfect simple. continuous. We are interested in the activity. It does not matter whether something
        has been finished Here, the important thing is that something has been finished. 'Has painted' is a or not. In this example, the activity
        (painting completed action. We are interested in the the ceiling) has not been finished. result of the activity (the painted ceiling), not in
        the activity itself. Compare these examples: My hands are very dirty. I've been repairing the car. The car is OK again now. I've repaired it.
        She's been smoking too much recently. She should smoke less. Somebody has smoked all my cigarettes. The packet is empty. It's nice to see you
        again. What have you been doing since we last met? Where's the book I gave you? What have you done with it? Where have you been? Have you been
        Have playing tennis? you ever played tennis? We use the continuous to ask or say how long (for an activity that is still happening): We use
        the simple to ask or say how much, how many or how many times (completed actions): How long have you been reading that book? • How many pages
        of that book have you read? Mary is still writing letters. She's been D writing letters all day. Mary has written ten letters today. They've
        been playing tennis since 9 2 o'clock. They've played tennis three times this week. There are some verbs (for example, know/like/believe) that
        are normally not used in the continuous: D I've known about it for a long time. (not I've a been knowing') For a list of these verbs, see Unit
        4A.
      </p>
    </div>
  );
}
