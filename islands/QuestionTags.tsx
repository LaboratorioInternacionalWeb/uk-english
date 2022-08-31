/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function QuestionTags(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Question tags' ? '' : 'hidden'}`}>
      <p>
        UNIT 51 Question tags (do you? isn't it? etc.) Study these examples: , I really enjoyed You haven't seen Mary today, have you? was a good
        film, wasn't (No, I'm afraid not. Have you? and wasn't it? are question tags (= mini-questions that we often put on the end of a sentence in
        spoken English). In question tags, we use an auxiliary verb (have/was/will etc.). We use do/does/did for the present and past simple (see also
        Unit 50): 'Karen plays the piano, doesn't she?' 'Well, yes, but not very well.' "You didn't lock the door, did you?' 'No, forgot.' Normally we
        use a negative question tag after a positive sentence: positive sentence + negative tag Mary will be here soon, won't she? There was a lot of
        traffic, wasn't there? Jim should pass the exam, shouldn't he? ..and a positive question tag after a negative sentence: negative sentence +
        Mary won't be late, positive tag will she? They don't like us, do they? You haven't got a car, a have you? Notice the meaning of yes and no in
        a answer to a negative sentence: You're not going out today, are you? Yes. (= Yes, I am going out) No. (= No, am not going out) The meaning of
        a question tag depends on how you say it. If your voice goes down, you aren't really asking question; you are only inviting the listener to
        'It's a nice day, isn't it?' "Yes, lovely.' agree with you: Tim doesn't look well today, does he?' 'No, he looks very tired.' She's very
        pretty. She's got beautiful eyes, hasn't she? But if the voice goes up, it is a real question: 'You haven't seen Mary today, have you?' 'No,
        I'm afraid not.' (= Have you seen Mary today by any chance?) We often use a negative sentence + positive tag to ask for things or information,
        or to ask somebody to do something. The voice goes up at the end of the tag in sentences like these: 'You haven't got a pen, have you?' 'Yes,
        here you are.' 'You couldn't do me a favour, could you?' 'It depends what it is.' ® 'You don't know where Karen is, do you?' 'Sorry, I've no
        idea.' After Let's... the question tag is ...shall we?: e Let's go for a walk, shall we? After the imperative (Do... / Don't do... etc.), the
        tag is usually ...will you?: Open the door, will you? Don't be late, will you? Note that we say …aren't I? = I am I not?): • I'm late, aren't
        I?
      </p>
    </div>
  );
}
