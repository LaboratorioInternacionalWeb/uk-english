/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function PastPerfect(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Past perfect' ? '' : 'hidden'}`}>
      <p>
        UNIT 15 Past perfect (I had done) Study this example situation: At 10.30 Half an hour later Sarah went to a party last week. Paul went to the
        party too but they didn't see each other. Paul went home at (Hello!) 10.30 and Sarah arrived at 11 o'clock. So: When Sarah arrived at the
        party, Paul wasn't there. He had gone home. Had gone is the past perfect (simple): I/we/they/you (= I'd etc.) gone he/she/it had (= he'd etc.)
        seen PAUL SARAH finished etc. The past perfect simple is + had + past participle (gone/seen/finished etc.). For a list of irregular verbs, see
        Appendix 1. Sometimes we talk about something that happened in the past: • Sarah arrived at the party. This is the starting point of the
        story. Then, if we want to talk about things that happened before this time, we use the past perfect (had...): • When Sarah arrived at the
        party, Paul had already gone home. Some more examples: D When we got home last night, we found that somebody had broken into the flat. Karen
        didn't want to come to the cinema with us because she had already seen the film. At first I thought I'd done the right thing, but I soon
        realised that I'd made a serious mistake. The man sitting next to me on had never flown before. the plane was very nervous. He hadn't flown
        before. / He Had done (past perfect) is the past of have done (present perfect). Compare: present perfect past perfect have done had done past
        nOW past nOw Who is that woman? I've never seen her I didn't know who she was. I'd never seen before. We aren't hungry. We've just had lunch.
        her before. (= before that time) The house is dirty. They haven't cleaned We weren't hungry. We'd just had lunch. e it for weeks. The house
        was dirty. They hadn't cleaned it for weeks. Compare the past perfect (I had done) and past simple (I did): (I "Was Tom at the party when you
        arrived?' "No, he had already gone home.' but "Was Tom there when you arrived?' 'Yes, but he went home soon afterwards.' 89 Ann wasn't at home
        when phoned. She was in London. but Ann had just got home when phoned. She had been in London.
      </p>
    </div>
  );
}
