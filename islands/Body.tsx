/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { tw } from '@twind';
import Services from './Services.tsx';
import Levels from './Levels.tsx';
import ToeflSection from './ToeflSection.tsx';
import Stages from './Stages.tsx';

export default function Body() {
  const [topic, setTopic] = useState('');
  const [people, setPeople] = useState('Toddlers');
  const [toeflSection, setToeflSection] = useState('');

  useEffect(() => {
    if (people === 'Juniors' || people === 'Adults' || topic === 'English') {
      document.getElementById('Scroll')?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end',
      });
    }
  }, [people, topic]);

  useEffect(() => {
    if (toeflSection === 'Reading' || toeflSection === 'Listening' || toeflSection === 'Specking' || toeflSection === 'Writing') {
      document.getElementById('ScrollToefl')?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end',
      });
    }
  }, [toeflSection, topic]);

  function handleEnglishButtonClick() {
    setTopic('English');
    setToeflSection('');
  }

  function handleToeflButtonClick() {
    setTopic('Toefl');
    setPeople('Toddlers');
    setToeflSection('Reading');
  }

  return (
    <div>
      {/* Main content */}
      <div class={tw`flex flex-col md:flex-row md:pr-20`}>
        {/* Image */}
        <div class={tw`md:mx-20 md:mt-5 h-full w-full rounded-b-3xl md:py-10`}>
          <img class={tw`object-cover `} src="/british.png" height="100px" alt="Uk english logo: a Red Uk black english letters" />
        </div>
        {/* Title */}
        <div class={tw`md:mt-5 md:pl-30 md:pt-10 flex flex-col justify-center`}>
          <h1 class={tw`font-mono subpixel-antialiased text-4xl md:text-5xl font-bold uppercase text-center`}>Study English Online</h1>
          <p class={tw`font-mono subpixel-antialiased text-xl md:text-xl md:mt-10 font-bold text-center`}>
            We offer you step-by-step courses of English for making you learning process easier and your skills more proficient. Chose the program that suits you the best by
            checking the program that suits you best by checking your level of English.
          </p>
          {/* Buttons */}
          <div class={tw`flex flex-col md:flex-row md:mt-10 justify-around`}>
            <button class={tw`bg-[#c83a3d] hover:bg-[#de5357] md:text-2xl text-white font-bold md:py-8 md:px-20 rounded-full`} onClick={handleToeflButtonClick}>
              Toefl
            </button>
            <button class={tw`bg-[#c83a3d] hover:bg-[#de5357] md:text-2xl text-white font-bold md:py-8 md:px-16 rounded-full`} onClick={handleEnglishButtonClick} href="English">
              English
            </button>
          </div>
        </div>
      </div>
      {/* English Services */}
      <div id="Scroll">
        <div class={tw`${topic === 'English' ? '' : 'hidden'} w-full md:w-3/4 md:ml-40 md:mb-8 bg-white rounded-lg border shadow-md `}>
          <ul
            class={tw`flex flex-wrap text-sm font-medium text-center text-gray-500 bg-gray-50 rounded-t-lg border-b border-gray-200`}
            id="defaultTab"
            data-tabs-toggle="#defaultTabContent"
            role="tablist"
          >
            <li class={tw`mr-2`}>
              <button
                onClick={() => setPeople('Toddlers')}
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="true"
                class={tw`inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100`}
              >
                Toddlers
              </button>
            </li>
            <li class={tw`mr-2`}>
              <button
                onClick={() => setPeople('Juniors')}
                id="services-tab"
                data-tabs-target="#services"
                type="button"
                role="tab"
                aria-controls="services"
                aria-selected="false"
                class={tw`inline-block p-4 hover:text-gray-600 hover:bg-gray-100 `}
              >
                Juniors
              </button>
            </li>
            <li class={tw`mr-2`}>
              <button
                onClick={() => setPeople('Adults')}
                id="statistics-tab"
                data-tabs-target="#statistics"
                type="button"
                role="tab"
                aria-controls="statistics"
                aria-selected="false"
                class={tw`inline-block p-4 hover:text-gray-600 hover:bg-gray-100`}
              >
                Adults
              </button>
            </li>
          </ul>
          <Services people={people} />
        </div>
        <Levels people={people} />
        {/* Phantom */}
        <div class={tw`m-10`}></div>
      </div>
      {/* Toefl Services */}
      <div id="ScrollToefl">
        <div class={tw`${topic === 'Toefl' ? '' : 'hidden'} w-full md:w-3/4 md:ml-40 md:mb-8 bg-white rounded-lg border shadow-md `}>
          <ul
            class={tw`flex flex-wrap text-sm font-medium text-center text-gray-500 bg-gray-50 rounded-t-lg border-b border-gray-200`}
            id="defaultTab"
            data-tabs-toggle="#defaultTabContent"
            role="tablist"
          >
            <li class={tw`mr-2`}>
              <button
                onClick={() => setToeflSection('Reading')}
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="true"
                class={tw`inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100`}
              >
                Reading
              </button>
            </li>
            <li class={tw`mr-2`}>
              <button
                onClick={() => setToeflSection('Listening')}
                id="services-tab"
                data-tabs-target="#services"
                type="button"
                role="tab"
                aria-controls="services"
                aria-selected="false"
                class={tw`inline-block p-4 hover:text-gray-600 hover:bg-gray-100 `}
              >
                Listening
              </button>
            </li>
            <li class={tw`mr-2`}>
              <button
                onClick={() => setToeflSection('Specking')}
                id="statistics-tab"
                data-tabs-target="#statistics"
                type="button"
                role="tab"
                aria-controls="statistics"
                aria-selected="false"
                class={tw`inline-block p-4 hover:text-gray-600 hover:bg-gray-100`}
              >
                Specking
              </button>
            </li>
            <li class={tw`mr-2`}>
              <button
                onClick={() => setToeflSection('Writing')}
                id="statistics-tab"
                data-tabs-target="#statistics"
                type="button"
                role="tab"
                aria-controls="statistics"
                aria-selected="false"
                class={tw`inline-block p-4 hover:text-gray-600 hover:bg-gray-100`}
              >
                Writing
              </button>
            </li>
          </ul>
          <ToeflSection section={toeflSection} />
        </div>
        <Stages section={toeflSection} />
        {/* Phantom */}
        <div class={tw`m-10`}></div>
      </div>
    </div>
  );
}
