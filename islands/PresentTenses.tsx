/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function PresentTenses(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Present tenses' ? '' : 'hidden'}`}>
      <p>
        19 Present tenses (I am doing / I do) for the future Present continuous (I am doing) with a future meaning Study this example situation: This
        is Tom's diary for next week. 20 00 c DOT S MONDAY- 3 go Tensi Gutier He is playing tennis on Monday afternoon. He is going to the dentist on
        Tuesday morning. He is having dinner with Ann on Friday. In all these examples, Tom has already decided and arranged to do these things. Use
        the present continuous simple (I do): to say what you have already arranged to do. Do not use the present A: What are you doing on Saturday
        evening? (not 'what do you do') B: I'm going to the theatre. (not 'I go') D A: What time is Cathy arriving tomorrow? B: At 10.30. I'm meeting
        her at the station. I'm not working tomorrow, so we can g0 out somewhere. Ian isn't playing football on Saturday. He's hurt his leg. '(I'm)
        going to (do)' is also possible in these sentences: © What are you going to do on Saturday evening? But the present continuous is more natural
        for arrangements. See also Unit 20B. Do not use will to talk about what you have arranged to do: What are you doing this evening? (not 'what
        will you do') Alex is getting married next month. (not will get') Present simple (I do) with a future meaning We use the present simple when
        we talk about timetables, programmes etc. (for example, for public transport, cinemas etc.): The train leaves Plymouth at 11.30 and arrives in
        London at 14.45. What time does the film begin? 6 It's Wednesday tomorrow. You can use the present simple for people if their plans are fixed
        like a timetable: I start my new job on Monday. What time do you finish work tomorrow? But the continuous is more usual for personal
        arrangements: What time are you meeting Ann tomorrow? (not *do you meet') Compare: 0 What time are you leaving tomorrow? but • What time does
        the train leave tomorrow? • I'm going to the cinema this evening. but 6 The film starts at 8.15 (this evening).
      </p>
    </div>
  );
}
