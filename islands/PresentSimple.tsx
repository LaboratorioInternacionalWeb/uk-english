/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';

interface visibleProps {
  view: string;
}

export default function PresentSimple(props: visibleProps) {
  return (
    <div class={tw`${props.view === 'Present simple' ? '' : 'hidden'}`}>
      <h1>Present simple (I do)</h1>
      <h2>Example:</h2>
      <p>Alex is bus driver, but now he is in bed asleep. So: He is not driving a bus. (He is asleep.)</p>
      <p>He drives a bus. (He is a bus driver.)</p>
      <p>Drive(s)/work(s)/do(es) etc. is the present simple</p>
      <table class={tw`shadow-lg bg-white border-collapse`}>
        <tbody>
          <tr>
            <td class={tw`border px-8 py-4`}>I/we/you/they</td>
            <td class={tw`border px-8 py-4`}>drive/work/do</td>
          </tr>
          <tr>
            <td class={tw`border px-8 py-4`}>he/she/it</td>
            <td class={tw`border px-8 py-4`}>drives/works/does</td>
          </tr>
        </tbody>
      </table>
      <p>We use the present simple to talk about things in general</p>
      <p>We are not thinking only about now.</p>
      <p>We use it to say that something happens all the time or repeatedly, or that something is true in general.</p>
      <p>It is not important whether the action is happening at the time of speaking:</p>
      <p>• Nurses look after patients in hospitals.</p>
      <p>• I usually go away at weekends.</p>
      <p>• The earth goes round the sun.</p>
      <p>Remember that we say: he/she/it -s. Don't forget the s:</p>
      <p>I work... but He works... They teach... but My sister teaches...</p>
      <p>We use do/does to make questions and negative sentences:</p>
      <div class={tw`flex flex-row justify-around`}>
        <table class={tw`flex flex-col shadow-lg bg-white border-collapse`}>
          <thead class={tw`border-b bg-gray-50`}>
            <tr class={tw`flex justify-center`}>
              <th class={tw`text-sm font-medium text-gray-900 px-6 py-4 self-stretch`}>Question</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class={tw`border px-8 py-4`}>Do</td>
              <td class={tw`border px-8 py-4`}>I/we/you/they</td>
              <td class={tw`border px-8 py-4`}>work?</td>
            </tr>
            <tr>
              <td class={tw`border px-8 py-4`}>Does</td>
              <td class={tw`border px-8 py-4`}>he/she/it</td>
              <td class={tw`border px-8 py-4`}>come?</td>
            </tr>
          </tbody>
        </table>
        <table class={tw`flex flex-col shadow-lg bg-white border-collapse`}>
          <thead class={tw`border-b bg-gray-50`}>
            <tr class={tw`flex justify-center`}>
              <th class={tw`text-sm font-medium text-gray-900 px-6 py-4 self-stretch`}>Negation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class={tw`border px-8 py-4`}>I/we/you/they</td>
              <td class={tw`border px-8 py-4`}>don't</td>
              <td class={tw`border px-8 py-4`}>work?</td>
            </tr>
            <tr>
              <td class={tw`border px-8 py-4`}>he/she/it</td>
              <td class={tw`border px-8 py-4`}>doesn't</td>
              <td class={tw`border px-8 py-4`}>come?</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>• I come from Canada. Where do you come from?</p>
      <p>• Would you like a cigarette?. No, thanks. I don't smoke.</p>
      <p>• What does this word mean?. (not What means this word?')</p>
      <p>• Rice doesn't grow in cold climates. (not What means this word?')</p>
      <p> In the following examples do is also the main verb:</p>
      <p>• What do you do? ( = What's your job?) I work in a shop.</p>
      <p>• He's so lazy. He doesn't do anything to help me (not 'He doesn't anything')</p>
      <p>We use the present simple when we say how often we do things:</p>
      <p>• I get up at 8 o'clock every morning. (not 'I'm getting')</p>
      <p>• How often do you go to the dentist? (not 'How often are you going?')</p>
      <p>• Ann doesn't drink tea very often.</p>
      <p>• In summer John usually plays tennis once or twice a week.</p>
      <p>Promise and I apologise </p>
      <p> Sometimes we do things by saying something.</p>
      <p>For example:</p>
      <p> when you promise to do something, you can say 'I promise...'</p>
      <p> • I promise I won't be late. (not 'I'm promising')</p>
      <p> when you suggest something, you can say 'I suggest...'</p>
      <p> • What do you suggest do?' "I suggest that you...'</p>
      <p>In the same way we say: I apologise... / I advise... / I insist... / I agree... / I refuse... etc.</p>
    </div>
  );
}
