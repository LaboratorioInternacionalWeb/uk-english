/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function PresentPerfectPast(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Present perfect and past' ? '' : 'hidden'}`}>
      <p>
        UNIT 13 Present perfect and past (1) (I have done and I did) Study this example situation: Tom is looking for his key. He can't find it. He
        has lost his key. (present perfect) This means that he doesn't have his key now. Ten minutes later: Now Tom has found his key. He has it now.
        Has he lost his key? (present perfect) No, he hasn't. He has found it. Did he lose his key? (past simple) Yes, he did. He lost his key (past
        simple) but now he has found it. (present perfect) The present perfect is a present tense. It always tells us something about now. "Tom has
        lost his key' = he doesn't have his key now (see Unit 7). The past simple tells us only about the past. If somebody says 'Tom lost his key',
        we don't know whether he has it now or not. We only know that he lost it at some time in the past. Two more examples: @ a Jack grew a beard
        but now he has shaved it off. (so he doesn't have a beard now) They went out after lunch and they've just come back. (so they are back now) Do
        not use the present perfect if there is no connection with the present (for example, things that happened a long time ago): The Chinese
        invented printing. (not 'have invented') How many plays did Shakespeare write? (not 'has Shakespeare written') Beethoven was a great composer.
        (not 'has been') Compare: @ Shakespeare wrote many plays. , My sister is a writer. She has written many books. (she still writes books) We use
        the present perfect to give new information (see Unit 7). But if we continue to talk about it, we normally use the past simple: A: Ow! I've
        burnt myself. B: How did you do that? (not 'have you done') A: I picked up a hot dish. (not 'have picked') A: Look! Somebody has spilt milk on
        the carpet. B: Well, it wasn't me. I didn't do it. (not 'hasn't been..haven't done') A: wonder who it was then. (not who it has been')
      </p>
      <p>
        UNIT 14 Present perfect and past (2) (I have done and I did) A Do not use the present perfect (I have done) when you talk about a finished
        time (for example, yesterday / ten minutes ago / in 1985 / when I was a child). Use a past tense: The weather was nice yesterday. (not 'has
        been nice') They arrived ten minutes ago. (not 'have arrived') O ate a lot of sweets when I was a child. (not 'have eaten') A: Did you see the
        news on television last night? (not Have you seen') B: No, went to bed early. (not 'have gone') Use a past tense to ask When...? or What
        time...?: + When did they arrive? (not have they arrived') 0 What time did you finish work? Compare: Present pertect Tom has lost his key. He
        can't get into Past simple e the house. Tom lost his key yesterday. He couldn't get into the house. Here, we are not thinking of the past
        action. We are thinking of the present result of the Here, we are thinking of the action in the action: Tom doesn't have his key now. past. We
        don't know from this sentence whether Tom has his key now. B Compare present perfect and past: Present perfect (have done) Past simple (did) ®
        I've done a lot of work today. @ I did a lot of work yesterday. We use the present perfect for a period of a time that continues from the past
        until now. We use the past simple a for a finished time For example, today, this week, since 1985. in the past. For example, yesterday, last
        week, from 1985 to 1991. r unfinished- - finished - lay vesterdav E past now past NOW It hasn't rained this week. It didn't rain last week.
        Have you seen Ann this morning? (it is still morning) ® Did you see Ann this morning? Have you seen Ann recently? (it is now afternoon or
        evening) don't know where Ann is. I haven't Did you see Ann on Sunday? ® A: seen her. (= I haven't seen her recently) Was Ann at the party on
        Sunday? B: I don't think so. I didn't see her. We've been waiting for an hour. (we are still waiting now) We waited (or were waiting) for an
        Ian lives in London. He has lived there hour. (we are no longer waiting) for seven years. • Ian lived in Scotland for ten years. Now he lives
        in London. © I have never played golf. (in my life) • didn't play golf when was on The present perfect always has a connection holiday last
        summer. with now. See Units 7-12. The past simple tells us only about the past. See Units 5-6.
      </p>
    </div>
  );
}
