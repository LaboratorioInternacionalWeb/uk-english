/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function ReportedSpeech(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Reported speech' ? '' : 'hidden'}`}>
      <p>
        UNIT 46 Reported speech (1) (He said that...) Study this example situation: You want to tell somebody else what Tom said. There are two ways
        of doing this: _roM You can repeat Tom's words (direct speech): I'm feeling Ift. Tom said 'I'm feeling ill.' Or you can use reported speech:
        Tom said that he was feeling ill. Compare: direct: Tom said feeling ill.' In writing we use these to show direct reported: Tom said that he
        feeling ill. speech. When we use reported speech, the main verb of the sentence is usually past (Tom said that... / I told her that... etc.).
        The rest of the sentence is usually past too: Tom said that he was feeling ill. I told her that I didn't have any money. You can leave out
        that: Tom said (that) he was feeling ill. told her (that) I didn't have any money. In general, the present form in direct speech changes to
        the past form in reported speech: am/is - was do/does - did will - would are -/ were have/has -› had can - could want/like/know/go etc. -
        wanted/liked/knew/went etc. Compare direct speech and reported speech: You met Judy. Here are some of the things she said to you in direct
        speech: Later you tell somebody what Judy said. You use reported speech: 'My parents are very well.' Judy said that her parents were very
        well. I'm going to learn to drive.' JUDY She said that she was going to learn to drive. John has given up his job.' She said that John had
        given up his job. "I can't come to the party on Friday.' She said that she couldn't come to the 41 want to go away for a holiday but party on
        Friday. She said that she wanted to go away for a don't know where to go.' I'm going away for a few days. 'll holiday but (she) didn't know
        where to go. phone you when I get back.' She said that she was going away for a few days and would phone me when she got back. The past simple
        (did/saw/knew etc.) can usually stay the same in reported speech, or you can change it to the past perfect (had done / had seen / had known
        etc.): direct Tom said: •I woke up feeling ill, so I didn't go to work.' reported Tom said (that) he woke up feeling ill. 50 he didn't go to
        work. or Tom said (that) he had woken up feeling ill, so he hadn't gone to work.
      </p>
      <p>
        UNIT 47 Reported speech (2) It is not always necessary to change the verb when you use reported speech. If you report something and it is
        still true, you do not need to change the verb: direct Tom said 'New York is more lively than London.' reported Tom said that New York is more
        lively than London. (New York is still more lively. The situation hasn't changed.) direct Ann said 'I want to go to New York next year.'
        reported Ann said that she wants to go to New York next year. (Ann still wants to go to New York next year.) Note that it is also correct to
        change the verb into the past: Tom said that New York was more lively than London. Ann said that she wanted to go to New York next year. But
        you must use a past form when there is a difference between what was said and what is really true. Study this example situation: You met Sonia
        a few days ago. She said: 'Jim is ill.' (direct speech) Jim is ill. YOU SONIA Later that day you see Jim. He is looking well and carrying a
        tennis racket. You say: 'I didn't expect to see you, Jim. Sonia Sonia said said you were ill.' you were ill. (not ' Sonia said you are ill',
        because clearly he is not ill.) YOU Say and tell If you say who you are talking to, use tell: Sonia told me that you were ill. (not 'Sonia
        said me') TELL SOMEBODY What did you tell the police? (not 'say the police') Otherwise use say: Sonia said that you were ill. (not 'Sonia told
        that...') SAY SOMEBODY What did you say? But you can 'say something to somebody': Ann said goodbye to me and left. (not 'Ann said me goodbye')
        What did you say to the police? Tell/ask somebody to do something We also use the infinitive (to do / to stay etc.) in reported speech,
        especially with tell and ask (for orders and requests): direct 'Stay in bed for a few days,' the doctor said to me. reported The doctor told
        me to stay in bed for a few days. direct 'Don't shout,' I said to Jim. reported told Jim not to shout. direct "Please don't tell anybody what
        happened,' Ann said to me. reported Ann asked me not to tell anybody what (had) happened. ...said to do something' is also possible: ® The
        doctor said to stay in bed for a few days. (but not 'The doctor said me...')
      </p>
    </div>
  );
}
