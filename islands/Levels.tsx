/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

import { Button } from "../components/Button.tsx";

interface peopleProps {
  people: string;
}

export default function Levels(props: peopleProps) {
  return (
          <div>
          {/* Junior Levels */}
            <div class={tw`${props.people==="Juniors"?"":"hidden"} flex flex-row justify-center`}>
            <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700`}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500 dark:text-gray-400`}>Basic</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900 dark:text-white`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>1st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Friends </span>
              </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> At school </span>
              </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Let's play! </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Pet show </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Lunchtime </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Free time </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> The old house </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Get dressed </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> The robot </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> At the beach </span>
              </li>
            </div>
            <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700`}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500 dark:text-gray-400`}>Basic</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900 dark:text-white`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>2st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}>2 team members</span>
              </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Back to school</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> My day</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> The Zoo</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Where we live </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> The market</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> My bedroom </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> People</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Off we go!</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Sports club</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Holiday plans</span>
                </li>
            </div>
            <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700`}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500 dark:text-gray-400`}>Intermediate</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900 dark:text-white`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>1st</span>
              </div>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Meet the explorers </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Our school</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> The picnic</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Daily Tasks</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Around town</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Under the sea</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Gadgets</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> In the hospital</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Around the world </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Holidfay Plans</span>
                </li>
            </div>
            <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700`}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500 dark:text-gray-400`}>Intermediate</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900 dark:text-white`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>2st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}>Well done, Ben and Lucy </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> In the museum</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> The world sround us</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Danger! </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Two return tickets </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Police! </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Mythological beasts </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Orchestra practice </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> In the planetarium </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> At the campsite</span>
                </li>
            </div>
            <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700`}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500 dark:text-gray-400`}>Advanced</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900 dark:text-white`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>1st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> The science lesson </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Disaster! </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> In the rain forest </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> The rock 'n' roll show  </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Space restaurant </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> The Wild West </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> In Istanbul </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> The story teller </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Museum of the future - Mystery at sea </span>
                </li>
              </li>
            </div>
            <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700`}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500 dark:text-gray-400`}>Advanced</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900 dark:text-white`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>2st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> The treasure  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Future transport  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Ancient Egypt  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Olympic sports  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> In London  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Crazy inventions  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> This is Houston  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> A cold place  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> The Jurassic Age </span>
                </li>
            </div>
          </div>

          {/* Adults Levels */}
          <div class={tw`${props.people==="Adults"?"":"hidden"} flex flex-row justify-center`}>
          <div class={tw`p-4 w-full md:w-1/5 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700`}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500 dark:text-gray-400`}>Level</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900 dark:text-white`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>1st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Possessive Adjectives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Introducing myself -Articles</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Prepositions of Place - Clothing</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Colors</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Weather</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Seasons</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Verb to BE</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Clock time</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Simple Present</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Time Expressions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Transportation</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Family relationships</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Daily Routines</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Days of the Week</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Jobs and Workplaces</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Food</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Countable and Uncountable Nouns - Sports</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Months and dates</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Holidays</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Future be going to</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Parts of the body</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Health problems</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Have + noun; feel + adjective</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Prepositions of Place</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Chores and fun activities</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Simple Past</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Prepositional phrases</span>
                </li>
          </div>
          <div class={tw`p-4 w-full md:w-1/5 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700`}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500 dark:text-gray-400`}>Level</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900 dark:text-white`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>2st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> P-Wh- questions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Daily Schedules</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Shopping and Prices</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Giving Opinions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Demonstratives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Music, movies, and TV programs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Questions with do</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Modal Verbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Family Members</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Present Continuous</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Adverbs of Frequency</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Asking and describing routines</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Talking about past events</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> There is / there are</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Appearance and dress</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Questions for describing people</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Past experiences</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Present Perfect</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Cities, hometowns, countries</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Conjunctions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Modifiers</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Unusual Activities</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Food and restaurants</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Expressing likes and dislikes</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> so, too, neither, and either</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Comparative and Superlative Adjectives</span>
                </li>
          </div>
          <div class={tw`p-4 w-full md:w-1/5 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700`}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500 dark:text-gray-400`}>Level</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900 dark:text-white`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>3st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Used to for habitual actions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Expressions of quantity</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Direct and Indirect questions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Making comparisons</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Evaluations with adjectives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Comparisons with nouns</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Food recipes</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Giving step-by-step instructions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Simple Past vs Present Perfect</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Sequence Adverbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Describing vacation plans</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Future with be going to and will</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Modals for necessity and suggestion - Complaints</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Making requests; agreeing to and refusing requests</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Two-part verbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Requests with modals</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Infinitives and gerunds for uses and purposes</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Imperatives and infinitives for giving suggestions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Relative clauses of time</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Conditional sentences</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Gerunds</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Passive Voice</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Past Continuous vs Simple Past</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Participles as Adjectives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Modals and Adverbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Unreal conditional sentences</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Reported Speech</span>
                </li>
          </div>
          <div class={tw`p-4 w-full md:w-1/5 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700`}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500 dark:text-gray-400`}>Level</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900 dark:text-white`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>4st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Relative Pronouns as subjects and objects</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Gerund phrases as subjects and objects - Requests with Modals</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Past Continuous vs Past Simple</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Past Perfect</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Noun phrases containing relative clauses</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Expectations</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Passive in the Present Continuous and Present Perfect</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Would rather and Would prefer</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> By + gerund to describe how to do things - Get or have something done</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Referring to time in the past with adverbs and prepositions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Predicting the future</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Time clauses</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Describing hypothetical situations</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Past Modals for degrees of certainty</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Past Modals for judgments and suggestions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Passive to describe process</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Tag questions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Goals</span>
                </li>
          </div>
          <div class={tw`p-4 w-full md:w-1/5 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700`}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500 dark:text-gray-400`}>Level</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900 dark:text-white`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>5st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Phrasal Verbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Gerund and infinitive constructions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Verb Patterns (review)</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Cleft sentences with what</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Adjectives to describe style and appearance</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> ing clauses</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Reporting clauses in Active and Passive</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Sentence adverbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Double Comparatives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Will and would for habits and general truths.</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Collocations</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Idiomatic Expressions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Optional and required relative pronouns - Prefixes to create antonyms</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Placement of direct and indirect objects - Verbs in subjunctive</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Marketing strategies</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Whenever and wherever contrasted with when and where</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Noun clauses</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Overview of Passives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Subject-verb agreement with quantifiers - Discourse Markers</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Superlative Compound Adjectives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Phrasal Verbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500 dark:text-gray-400`}> Adverb Clauses of condition</span>
                </li>
          </div>
        </div>
          </div>
  );
}
