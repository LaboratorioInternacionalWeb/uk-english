/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function PastPerfectContinuous(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Past perfect continuous' ? '' : 'hidden'}`}>
      <p>
        UNIT 16 Past perfect continuous (I had been doing) A Study this example situation: Yesterday morning I got up and looked out of the window.
        The sun was shining but the ground was very wet. It had been raining. not raining when I looked out of the window; the sun It was was shining.
        But it had been raining before. That's why the ground was wet. Had been -ing is the past perfect continuous: (= I'd etc.) doing Yesterday
        morning I/we/you/they he/she/it had (= he'd etc.) been working playing etc. Some more examples: 0 When the boys came into the house, their
        clothes were dirty, their hair was untidy and one of them had a black eye. They'd been fighting. 13 I was very tired when I arrived home. I'd
        been working hard all day. B You can say that something had been happening for a period of time before something else happened: § Our game of
        tennis was interrupted. We'd been playing for about half an hour when it started to rain very heavily. O Ken gave up smoking two years ago.
        He'd been smoking for 30 years. Had been -ing (past perfect continuous) is the past of have been -ing (present perfect continuous). Compare:
        present perfect continuous past perfect continuous I have been -Ing I had been -ing NoW past NOW past hope the bus comes soon. I've been At
        last the bus came. I'd been waiting waiting for 20 minutes. (before now) for 20 minutes. (before the bus came) He's out of breath. He has been
        He was out of breath. He had been running. running. Compare had been doing and was doing (past continuous): e It wasn't raining when we went
        out. The sun was shining. But it had been raining, SO the ground was wet. 9 Ann was sitting in an armchair watching television. She was tired
        because she'd been working very hard. EL Some verbs (for example, know and want) are not normally used in the continuous: 0 We were good
        friends. We had known each other for years. (not 'had been knowing') For a list of these verbs, see Unit 4A.
      </p>
    </div>
  );
}
