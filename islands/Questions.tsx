/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";

interface visibleProps {
  view: string;
}

export default function Questions(props: visibleProps) {
  return (
    <div class={tw`${props.view === "Questions" ? "" : "hidden"}`}>
      <p>
        UNIT 48 Questions (1) We usually make questions by changing the word
        order: we before the subject (S): put the first auxiliary verb (AV) S +
        AV AV+S Tom will will Tom? Will Tom be here tomorrow? you have have you?
        Have you been working hard? can can I? What can the house was do? (not
        'What I can do?') - was the house? F When was the house built? (not When
        was built the house?') In present simple questions, we use do/does: you
        live do live? the film you Do you live near here? begins › does the film
        begin? What time does the film begin? (not What time begins...?) In past
        simple questions, we use did: you sold - did you sell? the accident
        happened -› did the accident happen? Did you sell your car? How did the
        accident happen? But do not use do/does/did in questions if
        who/what/which is the subject of the sentence. Compare: who object who
        subject Emma telephoned somebody. object Somebody telephoned Emma.
        subject Who did Emma telephone? Who telephoned Emma? In these examples,
        who/what/which is the subject: Who wants something to eat? (not 'Who
        does want') What happened to you last night? (not 'What did happen')
        Which bus goes to the city centre? (not 'Which bus does go') Note the
        position of prepositions in questions beginning
        Who/What/Which/Where...?: Who do you want to speak to? • Which job has
        Jane applied for? What was the weather like yesterday? • Where do you
        come from? Negative questions (isn't it...? / didn't you...?) We use
        negative questions especially to show surprise: G Didn't you hear the
        bell? I rang it four times. or when we expect the listener to agree with
        us: • 'Haven't we met somewhere before?' 'Yes, I think we have.' e Isn't
        it a beautiful day! (= It's a beautiful day, isn't it?) Note the meaning
        of yes and no in answers to negative questions: e Don't you want to go
        to the party? / Kes Yes. (= Yes, I want to go) (= No, I don't want to
        go) Note the word order in negative questions beginning Why...?: Why
        don't we go out for a meal tonight? (not Why we don't...') Why wasn't
        Mary at work yesterday? (not 'Why Mary wasn't...')
      </p>
      <p>
        UNIT 49 Questions (2) (Do you know where...? She asked me where...) When
        we ask for information, we often say Do you know...? / Could you tell
        me...? etc. If you a begin a question like this, the word order is
        different from a simple question. Compare: Where has Tom gone? (simple
        question) but Do you know where Tom has gone? (not 'Do you know where
        has Tom gone?') When the question (Where has Tom gone?) is part of a
        longer sentence (Do you know...?/ don't know... / Can you tell me...?
        etc.), it loses the normal question word order. Compare: What time is
        it? but Do you know what time it is? Who is that woman? don't know who
        that woman is. Where can find Linda? Can you tell me where I can find
        Linda? How much will it cost? Have you any idea how much it will cost?
        Be careful with do/does/did questions: What time does the film begin?
        but Do you know what time the film begins? (not 'Do you know what time
        does...') What do you mean? Why did Ann leave early? Please explain what
        you mean. wonder why Ann left early. Use if or whether where there is no
        other question word (what, why etc.): 8 Did anybody see you? but Do you
        know if (or whether) anybody saw you? The same changes in word order
        happen in reported questions: direct The police officer said to us,
        'Where are you going ?* reported The police officer asked us where we
        were going. direct Clare said, 'What time do the banks close ?* reported
        Clare wanted to know what time the banks closed. In reported questions,
        the verb usually changes to the past (were, closed). See Unit 46. Study
        these examples. You had an interview for a job and these were some of
        the questions the interviewer asked you: How old What do you do How long
        have you are you? in your spare time? been working in your present job?
        Why did you apply for the job? Can you speak any YOU INTERVIEWER Have
        you got a driving licence? foreign languages? Later you tell a friend
        what the interviewer asked you. You use reported speech: ® She asked
        (me) how old I was. 9 She wanted to know what I did in my spare time.
        She asked (me) how long had been working in my present job. She asked
        (me) why I had applied for the job. (or ... why applied) She wanted to
        know whether (or if) I could speak any foreign languages. She asked
        whether (or if) I had a driving licence. (or ...I had got...)
      </p>
    </div>
  );
}
