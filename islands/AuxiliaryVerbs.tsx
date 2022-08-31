/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function AuxiliaryVerbs(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Auxiliary verbs' ? '' : 'hidden'}`}>
      <p>
        UNIT 50 Auxiliary verbs (have/do/can etc.) I think so hope so etc. There are two verbs in each of these sentences: re have lost She can't my
        keys. come The hotel to the was built party. Where do you live? ten years ago. In these examples have/can't/was/do are auxiliary (= helping)
        verbs. You can use an auxiliary verb (without the rest of the sentence) when something: you don't want to repeat Have you locked the door?'
        "Yes, have.' = I have locked the door George wasn't working but Janet was. (= Janet was working) • She could lend me the money but she won't.
        (= she won't lend me the money) 'Are you angry with me?' 'Of course I'm not.' (= I'm not angry) Use do/does/did for the present and past
        simple: 'Do you like onions?' 'Yes, e do.' (= like onions) 'Does Mark smoke?' 'He did but he doesn't any more.' We use have you? isn't she? do
        they? etc. to show polite interest in what somebody has said: 'I've just met Simon.' 'Oh, have you? How is he?' "Liz isn't very well today.'
        'Oh, isn't she? What's wrong with her?' • It rained every day during our holiday.' 'Did it? What a pity!' Sometimes we use these 'short
        questions' to show surprise: Jim and Nora are getting married.' 'Are they? Really?' We use auxiliary verbs with so and neither: 'I'm feeling
        tired.' 'So am I.' (= I'm feeling tired too) 'I never read newspapers.' •Neither do I.' (= never read newspapers either) Sue hasn't got a car
        and neither has Martin. Note the word order after so and neither (verb before subject): passed the exam and so did Tom. (not 'so Tom did') You
        can use nor instead of neither: @ 'I can't remember his name.' You can also use '…..not...either': 'Nor can I.' or 'Neither can I.' E 'I
        haven't got any money.' 'Neither have I.' or 'Nor have I.' or 'I haven't either.' I think so / 1 hope so etc. After some verbs you can use so
        when you don't want to repeat something: ® @ Are those people English?' I think so.' (= think they are English) Will • you be at home tomorrow
        morning?' 'I expect so.' (= I expect I'll be at home...) 'Do you think Kate has been invited to the party?' 'I suppose so.' You can also say I
        hope so, I guess sO and I'm afraid so. The usual negative forms are: I think so / I expect so hope so / I'm afraid so / I guess so - I don't
        think so / I don't expect So suppose so hope not / I'm afraid not / I guess not 'Is that woman American?' I don't suppose so or 'I think so. /
        I don't think so.' suppose not 'Do you think it's going to rain?' 'I hope so. / hope not.' (not I don't hope so')
      </p>
    </div>
  );
}
