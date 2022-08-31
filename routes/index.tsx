/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Body from '../islands/Body.tsx';
import { Head } from '$fresh/runtime.ts';

export default function Home() {
  return (
    //Full page
    <div class={tw`h-screen bg-[#777c7c03]`}>
      {/* Phantom */}
      <div class={tw`md:pt-10`}></div>
      {/* Heather */}
      <div class={tw`md:py-6  md:pl-14 mx-4 bg-gradient-to-t from-[#ffffff] via-[#ffffff] from-[#dc1d1d14] shadow-lg border-y-2 border-gray-100 py-6 rounded-3xl `}>
        {/* Menu */}
        <div class={tw`flex flex-row justify-between md:justify-between m-1`}>
          {/* Img */}
          <div class={tw`mt-3`}>
            <img class={tw`object-cover h-10 w-30`} src="/logo.svg" height="100px" alt="Uk english logo: a Red Uk black english letters" />
          </div>
          <div class={tw`md:pt-3`}>
            <a href={`/lessons`} class={tw`bg-[#4a9ab0] hover:bg-[#4a9ab07a] md:text-xl text-white font-bold md:py-4 md:px-8 mr-4 rounded-full`}>
              Start Now
            </a>
          </div>
        </div>
      </div>
      {/* Body */}
      <div class={tw`mx-2`}>
        {/* Main content */}
        <Body />
        {/* Footer */}
        <div class={tw``}>
          <p></p>
        </div>
      </div>
    </div>
  );
}
