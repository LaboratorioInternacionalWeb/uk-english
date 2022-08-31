/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

interface toeflProps {
  section: string;
}

export default function ToeflSection(props: toeflProps) {
  return (
    <div id="defaultTabContent">
      {/* Reading */}
      <div class={tw`${props.section === 'Reading' ? '' : 'hidden'} p-4 bg-white rounded-lg md:p-8`} id="about" role="tabpanel" aria-labelledby="about-tab">
        <h2 class={tw`mb-3 text-3xl font-extrabold tracking-tight text-gray-900`}>Each individual sec­tion will measure several abilities.</h2>
        <p>
          There are three to four reading passages on the TOEFL, each around 700 words. Although the TOEFL test writers attempt to simulate the type of reading you will do in a
          university or graduate school program, the reading skills required on the test are very different from the skills used in an academic environment. Let’s take a look at a
          passage.
        </p>
      </div>
      {/* Listening */}
      <div class={tw`${props.section === 'Listening' ? '' : 'hidden'} p-4 bg-white rounded-lg md:p-8`} id="about" role="tabpanel" aria-labelledby="about-tab">
        <h2 class={tw`mb-3 text-3xl font-extrabold tracking-tight text-gray-900`}>The Listening section can seem like one of the most intimidating sections on the TOEFL.</h2>
        <p>
          The tasks in the Listening section require you to sort through lectures and conversations that are filled with distracting pauses and brief digressions—a very frustrating
          experience, but a very realistic scenario. Don’t be discouraged! The Listening section does follow some common pat­ terns. The key to getting a good score is to find
          these patterns; this chapter is going to teach you how to do exactly that.
        </p>
      </div>
      {/* Specking */}
      <div class={tw`${props.section === 'Specking' ? '' : 'hidden'} p-4 bg-white rounded-lg md:p-8`} id="services" role="tabpanel" aria-labelledby="services-tab">
        <h2 class={tw`mb-3 text-3xl font-extrabold tracking-tight text-gray-900`}>Guidelines for scoring it are similar sections</h2>
        <p>You’ll be learning Speaking skills that you will use in concert with the Reading, Listening, and Writing skills.</p>
      </div>
      {/* Writing */}
      <div class={tw`${props.section === 'Writing' ? '' : 'hidden'} p-4 bg-white rounded-lg md:p-8`} id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
        <h2 class={tw`mb-3 text-3xl font-extrabold tracking-tight text-gray-900`}>In the “real” world, speaking and writing are two very different skills.</h2>
        <p>
          On the TOEFL, these basic skills are graded on very similar rubrics. Many of the constructions that you used in your speaking can easily be transferred to your writing.
          Similarly, many of the forms you use when writing can also be used when speaking.
        </p>
      </div>
    </div>
  );
}
