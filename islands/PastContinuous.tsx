/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function PastContinuous(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Past continuous' ? '' : 'hidden'}`}>
      <p>
        INIT 6 Past continuous (I was doing) A Study this example situation: Yesterday Karen and Jim played tennis. They began at G 10 o'clock and
        finished at 11.30. So, at 10.30 they were playing tennis. They were playing they were in the middle of playing'. They had not finished
        playing. Was/were -ing IS the past continuous: I/he/she/it was playing we/you/they were doing working etc. B We use the past continuous to say
        that somebody was in the middle of doing something at a certain time. The action or situation had already started before this time but had not
        finished: started doing was doing I finished doing . past tast NOw This time last year I was living in Brazil. What were you doing at 10
        o'clock last night? G waved to her but she wasn't looking. C Compare the past continuous (I was doing) and past simple (I did): Past
        continuous (in the middle of an action) Past simple (complete action) was walking home when I met Dave. (= in the middle of walking home)
        walked home after the party last night. (= all the way, completely) Ann was watching television when the 6 Ann watched television a lot when
        she phone rang. was ill last year. D We often use the past simple and the past continuous together to say that something happened in the
        middle of something else: © Tom burnt his hand when he was cooking the dinner. Co saw you in the park yesterday. You were sitting on the grass
        and reading a book. ® While I was working in the garden,: hurt my back. But we use the past simple to say that one thing happened after
        another: @ I was walking along the road when I saw Dave. So I stopped and we had a chat. Compare: When Karen arrived, we were having When
        Karen arrived, we had dinner. dinner. (= We had already started (= First Karen arrived and then we had dinner before Karen arrived.) dinner.)
        There are some verbs (for example, know/want/believe) that are not normally used in the continuous (see Unit 4A): We were good friends. We
        knew each other well. (not 'we were knowing') 12 was enjoying the party but Chris wanted to go home. (not 'was wanting')e
      </p>
    </div>
  );
}
