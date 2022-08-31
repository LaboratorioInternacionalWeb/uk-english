/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { tw } from '@twind';

interface sectionProps {
  section: string;
}

export default function Stages(props: sectionProps) {
  return (
    <div>
      {/* Reading Levels */}
      <div class={tw`${props.section === 'Reading' ? '' : 'hidden'} flex flex-row justify-center`}>
        <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 `}>
          <div class={tw`flex justify-center text-gray-900 mb-3`}>
            <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>Reading</span>
          </div>
          <li class={tw`flex space-x-3`}>
            {/* <!-- Icon --> */}
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Reading on the TOEFL </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Steps to Mastering Active Reading </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Dealing with Difficult Passage </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Cracking the Reading Section: Basic Principle </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Cracking the Reading Section: Basic Approach </span>
          </li>
        </div>
      </div>
      {/* Reading Levels */}
      <div class={tw`${props.section === 'Listening' ? '' : 'hidden'} flex flex-row justify-center`}>
        <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 `}>
          <div class={tw`flex justify-center text-gray-900 mb-3`}>
            <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>Listening</span>
          </div>
          <li class={tw`flex space-x-3`}>
            {/* <!-- Icon --> */}
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Listening on the TOEF </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Challenges in the Listening Section </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Taking Notes </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Active Listening </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Listening Section Directions </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Cracking the Listening Section: Basic Principle </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Cracking the Listening Section: Basic Approach </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Final Tips for the Listening Section </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Note Taking </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> The Five R's of Note Takin </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> 6 Habits of Bad Listener </span>
          </li>
        </div>
      </div>
      {/* Reading Levels */}
      <div class={tw`${props.section === 'Specking' ? '' : 'hidden'} flex flex-row justify-center`}>
        <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 `}>
          <div class={tw`flex justify-center text-gray-900 mb-3`}>
            <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>Specking</span>
          </div>
          <li class={tw`flex space-x-3`}>
            {/* <!-- Icon --> */}
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Scoring for the Speaking Section </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Parti: Stating Your Purpose </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Part 2: Organizing Your Ideas </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Putting It All Togethe </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Wrapping Things Up: The Conclusion </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Speaking Section Direction </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> How the Speaking Section Is Scored </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Cracking the Speaking Section: Basic Principles </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Practice: Using Transitions </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Answers and Explanations for Practice: Using Transitions </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Cracking the Speaking Section: Basic Approach </span>
          </li>
        </div>
      </div>
      {/* Reading Levels */}
      <div class={tw`${props.section === 'Writing' ? '' : 'hidden'} flex flex-row justify-center`}>
        <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 `}>
          <div class={tw`flex justify-center text-gray-900 mb-3`}>
            <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>Writing</span>
          </div>
          <li class={tw`flex space-x-3`}>
            {/* <!-- Icon --> */}
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Scoring for the Writing Sectio </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Part 1: Expressing Your Purpose </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Part 2: Organizing Your Ideas </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Part 3: Writing the Perfect Body Paragraph </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Part 4: Concluding Your Response </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Grammar Review </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Writing Section Directions </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> How the Writing Section Is Scored </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Cracking the Writing Section: Basic Principle </span>
          </li>
          <li class={tw`flex space-x-3`}>
            <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Check icon</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class={tw`text-base font-normal leading-tight text-gray-500`}> Cracking the Writing Section: Basic Approach </span>
          </li>
        </div>
      </div>
    </div>
  );
}
