/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function PresentPerfectContinuous(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Present perfect continuous' ? '' : 'hidden'}`}>
      <p>
        UNIT Present perfect continuous (I have been doing) It has been raining. Study this example situation: Is it raining? No, but the ground is
        wet. It has been raining. Have/has been -ing is the present perfect continuous: I/we/they/you have (= I've etc.) doing he/she/it has (= he's
        etc.) been waiting playing etc. We use the present perfect continuous for an activity that has recently stopped or just stopped. There is a
        connection with NOW: G e You're out of breath. Have you been running? (you're out of breath now) Paul is very tired. He's been working very
        hard. (he's tired now) © Why are your clothes so dirty? What have you been doing? 0 I've been talking to Carol about the problem and she
        thinks that... B It has been raining for two hours. Study this example situation: It is raining now. It began raining two hours ago and it is
        still raining. How long has it been raining? It has been raining for two hours. We often use the present perfect continuous in this way,
        especially with how long, for... and since... . The activity is still happening (as in this example) or has just stopped. How long have you
        been learning English? (you're still learning English) ® Tim is still watching television. He's been watching television all day. ® Where have
        you been? I've been looking for you for the last half hour. 6 George hasn't been feeling well recently. You can use the present perfect
        continuous for actions repeated over a period of time: ® Debbie is very good tennis player. She's been playing since she was eight. G Every
        morning they meet in the same café. They've been going there for years. Compare I am doing (see Unit 1) and I have been doing: I am doing have
        been doing present continuous V present perfect continuous NoW NOW @ Don't disturb me now. I'm working. I've been working hard, so now I'm
        going to have a rest. We need an umbrella. It's raining. Hurry up! We're waiting. The ground is wet. It's been raining. We've been waiting for
        an hour.
      </p>
    </div>
  );
}
