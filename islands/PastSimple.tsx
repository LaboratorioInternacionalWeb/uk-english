/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function PastSimple(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Past simple' ? '' : 'hidden'}`}>
      <p>
        INIT 5 Past simple (I did) Study this example: Wolfgang Amadeus Mozart was an Austrian musician and composer. He lived from 1756 IN ELEA to
        1791. He started composing at the age of 5 five and wrote more than 600 pieces of music. He was only 35 years old when he died. G
        Lived/started/wrote/was/died are all past simple. B Very often the past simple ends in -ed (regular verbs): © I work in a travel agency now.
        Before that I worked in a shop. We invited them to our party but they decided not to come. • The police stopped me on my way home last night.
        • She passed her examination because she studied very hard. For spelling (stopped, studied etc.), see Appendix 6. But many verbs are
        irregular. The past simple does not end in -ed. For example: write -› wrote Mozart wrote more than 600 pieces of music. see -› saw We saw Rose
        in town a few days ago. go -› went went to the cinema three times last week. shut -› shut It was cold, SO I shut the window. For a list of
        irregular verbs, see Appendix 1. In questions and negatives we use did/didn't + infinitive (enjoy/see/go etc.): enjoyed you enjoy? enjoy she
        saw did she see? she didn't see they went they go? they gO • A: Did you go out last night? I B: Yes, I went to the cinema but I didn't enjoy
        the film much. ® 'When did Mr Thomas die?' 'About ten years ago.' They didn't invite her to the party, so she didn't go. ® 'Did you have time
        to write the letter?' 'No, I didn't.' Be careful when do is the main verb in the sentence: What did you do at the weekend? (not "what did you
        at the weekend') 53 didn't do anything. (not 'I didn't anything') D The past of be (am/is/are) is was/were: I/he/she/it was/wasn't was
        I/he/she/it? we/you/they were/weren't were we/you/they? Note that we do not use did in negatives and questions with was/were: ® was angry
        because they were late. @ Was the weather good when you were on holiday? @ They weren't able to come because they were so busy.
      </p>
    </div>
  );
}
