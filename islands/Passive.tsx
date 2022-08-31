/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";

interface visibleProps {
  view: string;
}

export default function Passive(props: visibleProps) {
  return (
    <div class={tw`${props.view === "Passive" ? "" : "hidden"}`}>
      <p>
        UNIT Passive (1) (is done / was done) A Study this example: This house
        was built in 1930. 'Was built' is passive. Compare active and passive:
        Somebody built this house in 1930. (active) subject object This house
        was built in 1930. (passive) subject We use an active verb to say what
        the subject does: My grandfather was a builder. He built this house in
        1930. ® It's a big company. It employs two hundred people. a We use a
        passive verb to say what happens to the subject: This house is quite
        old. It was built in 1930. ® Two hundred people are employed by the
        company. B When we use the passive, who or what causes the action is
        often unknown or unimportant: • A lot of money was stolen in the
        robbery. (somebody stole it but we don't know who) 0 Is this room
        cleaned every day? (does somebody clean it? - it's not important who) If
        we want to say who does or what causes the action, we use by...: ® This
        house was built by my grandfather. O Two hundred people are employed by
        the company. C The passive is be (is/was/have been etc.) + the past
        participle (done/cleaned/seen etc.): (be) done (be) cleaned (be) seen
        (be) damaged (be) built etc. For irregular past participles
        (done/known/seen etc.), see Appendix 1. Study the active and passive
        forms of the present simple and past simple: Present simple active:
        clean(s)/see(s) etc. Somebody cleans this room every day. passive:
        am/is/are cleaned/seen etc. This room is cleaned every day. Many
        accidents are caused by careless driving. • I'm not often invited to
        parties. How is this word pronounced? Past simple active: cleaned/saw
        etc. Somebody cleaned this room yesterday. passive: was/were
        cleaned/seen etc. This room was cleaned yesterday. We were woken up by a
        loud noise during the night. •Did you go to the party?' 'No, I wasn't
        invited.' How much money was stolen?
      </p>
      <p>
        UNIT 42 Passive (2) (be/been/being done) Study the following active and
        passive forms: Infinitive active: (to) do/clean/see etc. Somebody will
        clean the room later. passive: (to) be done/cleaned/seen etc. The room
        will be cleaned later. The situation is serious. Something must be done
        before it's too late. A mystery is something that can't be explained.
        The music was very loud and could be heard from a long way away. A new
        supermarket is going to be built next year. Please go away. I want to be
        left alone. B Perfect infinitive active: have done/cleaned/seen etc.
        Somebody should have cleaned the room. passive: have been
        done/cleaned/seen etc. The room should have been cleaned. I haven't
        received the letter yet. It might have been sent to the wrong address.
        If you hadn't left the car unlocked, it wouldn't have been stolen. There
        were some problems at first but they seem to have been solved. Present
        perfect active: have/has (done) The room looks nice. Somebody has
        cleaned it. passive: have/has been (done) The room looks nice. It has
        been cleaned. Have you heard the news? The President has been shot! Have
        you ever been bitten by a dog? a 'Are you going to the party?' 'No,
        haven't been invited.' Past perfect active: had (done) The room looked
        nice. Somebody had cleaned it. passive: had been (done) The room looked
        nice. It had been cleaned. The vegetables didn't taste very good. They
        had been cooked for too long. The car was three years old but hadn't
        been used very much. Present continuous active: am/is/are (do)ing
        Somebody is cleaning the room at the moment. passive: am/is/are being
        (done) The room is being cleaned at the moment. There's somebody walking
        behind us. I think we are T being followed. (in 4 shop) 'Can I help you,
        madam?' 'No, thank you. I'm being served.' Past continuous active:
        was/were (do)ing Somebody was cleaning the room when I arrived. passive:
        was/were being (done) The room was being cleaned when I arrived. There
        was somebody walking behind us. We were being followed.
      </p>
      <p>
        UNIT 43 Passive (3) was born... We say: I was born... (not I am born'):
        e was born in Chicago. ® but Where were you born? (not 'where are you
        born') past simple 6 How many babies are born every day? present simple
        Some verbs can have two objects. For example, give: 6 We gave the police
        the information. (= We gave the information to the police.) object 1
        object 2 So it is possible to make two passive sentences: e The police
        were given the information. or Other verbs which can have two objects
        are: The information was given to the police. ask offer pay show teach
        tell When we use these verbs in the passive, most often we begin with
        the person: # I was offered the job but refused it. (= they offered me
        the job) e You will be given plenty of time to decide. (= we will give
        you plenty of time) D , Have you been shown the new machine? (= has
        anybody shown you...?) The men were paid £200 to do the work. (=
        somebody paid the men £200) I don't like being... The passive of
        doing/seeing etc. is being done being seen etc. Compare: active: I don't
        like people telling me what to do. passive: I don't like being told what
        to do. remember being given a toy drum on my fifth birthday. (= I
        remember somebody a giving me a toy drum...) D 9 Mr Miller hates being
        kept waiting. = he hates people keeping him waiting) We managed to climb
        over the wall without being seen. (= ...without anybody seeing us) Get
        Sometimes you can use get instead of be in the passive: • There was a
        fight at the party but nobody got hurt. (= nobody was hurt) don't often
        get invited to parties. = I'm not often invited) D I'm surprised Ann
        didn't get offered the job. (..Ann wasn't offered the job) You can use
        get to say that something happens to somebody or something, especially
        if this is unplanned or unexpected: ® Our dog got run over by a car. You
        can use get only when things happen or change. For example, you
        sentences: cannot use get in these Till is liked by everybody. (not
        'gets liked' this is not a 'happening') ® He was a mystery man. Nothing
        was known about him. (not 'got known') We use get mainly in informal
        spoken English. You can use be in all situations. We also use get in the
        following expressions (which are not passive in meaning): get married
        get divorced get dressed (= put on your clothes) get changed (= change
        your clothes)
      </p>
    </div>
  );
}
