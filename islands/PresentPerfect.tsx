/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function PresentPerfect(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Present perfect' ? '' : 'hidden'}`}>
      <p>
        UNIT Present perfect (1) (I have done) Study this example situation: Tom is looking for his key. He can't find it. He has lost his key. 'He
        has lost his key' = He lost it and he still hasn't got it. Have/has lost is the present perfect simple: I/we/they/you have (= I've etc.)
        finished lost he/she/it has (= he's etc.) done been etc. The present perfect simple is have/has + past participle. The past participle often
        ends in -ed (finished/decided etc.), but many important verbs are irregular (lost/done/been/written etc.). For a list of irregular verbs, see
        Appendix 1. When we use the present perfect there is always a connection with now. The action in the past has a result now: 'Where's your
        key?' $I don't know. I've lost it.' (I haven't got it now) He told me his name but I've forgotten it. (I can't remember it now) 'Is Sally
        here?' 'No, she's gone out." (she is out now) can't find my bag. Have you seen it? (do you know where it is now?) We often use the present
        perfect to give new information or to announce a recent happening: • Ow! I've cut my finger. The road is closed. There's been (= there has
        been) an accident. (from the news) The police have arrested two men in connection with the robbery. You can use. the present perfect with
        just, already and yet: Just = fa short time ago': •Would you like something to eat?' "No, thanks. I've just had lunch.' Hello. Have you just
        arrived? We use already to say that something happened sooner than expected (see also Unit 110D): *Don't forget to post the letter, will you?'
        'I've already posted it.' What time is Mark leaving?' "He's already gone.' Yet = 'until now' and shows that the speaker is expecting something
        to happen. Use yet only in questions and negative sentences (see also Unit 110C): Has it stopped raining yet? I've written the letter but
        haven't posted it yet. Note the difference between gone (to) and been (to): Jim is away on holiday. He has gone to Spain. (= he is there now
        or on his way there) Jane is back home from holiday now. She has been to Italy. (= she has now come back from Italy) For been (to) see also
        Units 8 and 125B.
      </p>
      <p>
        Present perfect (2) (I have done) Study this example conversation: DAVE: Have you travelled a lot, Jane? JANE: Yes, I've been to lots of
        places. DAVE: Really? Have you ever been to China? JANE: Yes, I've been to China twice. 2 Jane's life (a period until now) DAVE: What about
        India? JANE: No, I haven't been to India. past NoW When we talk about a period of time that continues from the past until now, we use the
        present perfect (have been / have travelled etc.). Here, Dave and Jane are talking about the places Jane has visited in her life (which is a
        period that continues until now). 6 Have you ever eaten caviar? (in your life) We've never had a car. 'Have you read Hamlet?' 'No, haven't
        read any of Shakespeare's plays.' • Susan really loves that film. She's seen it eight times! What a boring film! It's the most boring film
        I've ever seen. In the following examples too the speakers are talking about a period that continues until now (recently / in the last few
        days / so far / since breakfast etc.): G Have you heard from George recently? ----------1 ® I've met a lot of people in the last few days.
        recently ----------1 Everything is going well. We haven't had any problems so far. in the last few days - 00 I'm hungry. I haven't eaten
        anything since since breakfast breakfast. (= from breakfast until now) 9 It's nice to see you again. We haven't seen each past 1101 other for
        a long time. B We use the present perfect with today / this morning / this evening etc. when these periods are not finished at the time of
        speaking (see also Unit 14B): I've drunk four cups of coffee today. (perhaps I'll drink more before today is finished) Have you had a holiday
        this year (yet)? • I haven't seen Tom this morning. Have you? today ® Ron hasn't worked very hard this term. past nOW Note that we say 'It's
        the first time something has happened' (present perfect). For example: Don is having a driving lesson. He is because it is his first lesson.
        very nervous and unsure This is the first time ® It's the first time he has driven a car. (not 'drives') I've driven a car. or He has never
        driven a car before. Linda has lost her passport again. It's the second time this has happened. (not 'happens') a This is a lovely meal. It's
        the first good meal I've had for ages. (not 'I have') • Bill is phoning his girlfriend again. That's the third time
      </p>
    </div>
  );
}
