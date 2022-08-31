/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";



interface peopleProps {
  people: string;
}

export default function Levels(props: peopleProps) {
  return (
          <div>
          {/* Junior Levels */}
            <div class={tw`${props.people==="Juniors"?"":"hidden"} flex flex-row justify-center`}>
            <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 `}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500`}>Basic</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>1st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Friends </span>
              </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> At school </span>
              </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Let's play! </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Pet show </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Lunchtime </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Free time </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> The old house </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Get dressed </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> The robot </span>
                </li>
              <li class={tw`flex space-x-3`}>
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> At the beach </span>
              </li>
            </div>
            <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 `}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500`}>Basic</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>2st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}>2 team members</span>
              </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Back to school</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> My day</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> The Zoo</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Where we live </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> The market</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> My bedroom </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> People</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Off we go!</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Sports club</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Holiday plans</span>
                </li>
            </div>
            <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 `}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500`}>Intermediate</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>1st</span>
              </div>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Meet the explorers </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Our school</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> The picnic</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Daily Tasks</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Around town</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Under the sea</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Gadgets</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> In the hospital</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Around the world </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Holidfay Plans</span>
                </li>
            </div>
            <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 `}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500`}>Intermediate</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>2st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}>Well done, Ben and Lucy </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> In the museum</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> The world sround us</span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Danger! </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Two return tickets </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Police! </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Mythological beasts </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Orchestra practice </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> In the planetarium </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> At the campsite</span>
                </li>
            </div>
            <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 `}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500`}>Advanced</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>1st</span>
              </div>
                {/* <!-- Icon --> */}
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> The science lesson </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Disaster! </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> In the rain forest </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> The rock 'n' roll show  </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Space restaurant </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> The Wild West </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> In Istanbul </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> The story teller </span>
                </li>
                <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Museum of the future - Mystery at sea </span>
                </li>

            </div>
            <div class={tw`p-4 w-full md:w-1/6 bg-white rounded-lg border shadow-md sm:p-8 `}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500`}>Advanced</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>2st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> The treasure  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Future transport  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Ancient Egypt  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Olympic sports  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> In London  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Crazy inventions  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> This is Houston  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> A cold place  </span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> The Jurassic Age </span>
                </li>
            </div>
          </div>

          {/* Adults Levels */}
          <div class={tw`${props.people==="Adults"?"":"hidden"} flex flex-row justify-center`}>
          <div class={tw`p-4 w-full md:w-1/5 bg-white rounded-lg border shadow-md sm:p-8 `}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500`}>Level</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>1st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Possessive Adjectives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Introducing myself -Articles</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Prepositions of Place - Clothing</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Colors</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Weather</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Seasons</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Verb to BE</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Clock time</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Simple Present</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Time Expressions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Transportation</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Family relationships</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Daily Routines</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Days of the Week</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Jobs and Workplaces</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Food</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Countable and Uncountable Nouns - Sports</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Months and dates</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Holidays</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Future be going to</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Parts of the body</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Health problems</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Have + noun; feel + adjective</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Prepositions of Place</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Chores and fun activities</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Simple Past</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Prepositional phrases</span>
                </li>
          </div>
          <div class={tw`p-4 w-full md:w-1/5 bg-white rounded-lg border shadow-md sm:p-8 `}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500`}>Level</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>2st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> P-Wh- questions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Daily Schedules</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Shopping and Prices</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Giving Opinions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Demonstratives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Music, movies, and TV programs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Questions with do</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Modal Verbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Family Members</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Present Continuous</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Adverbs of Frequency</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Asking and describing routines</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Talking about past events</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> There is / there are</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Appearance and dress</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Questions for describing people</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Past experiences</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Present Perfect</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Cities, hometowns, countries</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Conjunctions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Modifiers</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Unusual Activities</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Food and restaurants</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Expressing likes and dislikes</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> so, too, neither, and either</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Comparative and Superlative Adjectives</span>
                </li>
          </div>
          <div class={tw`p-4 w-full md:w-1/5 bg-white rounded-lg border shadow-md sm:p-8 `}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500`}>Level</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>3st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Used to for habitual actions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Expressions of quantity</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Direct and Indirect questions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Making comparisons</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Evaluations with adjectives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Comparisons with nouns</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Food recipes</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Giving step-by-step instructions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Simple Past vs Present Perfect</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Sequence Adverbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Describing vacation plans</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Future with be going to and will</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Modals for necessity and suggestion - Complaints</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Making requests; agreeing to and refusing requests</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Two-part verbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Requests with modals</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Infinitives and gerunds for uses and purposes</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Imperatives and infinitives for giving suggestions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Relative clauses of time</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Conditional sentences</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Gerunds</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Passive Voice</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Past Continuous vs Simple Past</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Participles as Adjectives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Modals and Adverbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Unreal conditional sentences</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Reported Speech</span>
                </li>
          </div>
          <div class={tw`p-4 w-full md:w-1/5 bg-white rounded-lg border shadow-md sm:p-8 `}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500`}>Level</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>4st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Relative Pronouns as subjects and objects</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Gerund phrases as subjects and objects - Requests with Modals</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Past Continuous vs Past Simple</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Past Perfect</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Noun phrases containing relative clauses</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Expectations</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Passive in the Present Continuous and Present Perfect</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Would rather and Would prefer</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> By + gerund to describe how to do things - Get or have something done</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Referring to time in the past with adverbs and prepositions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Predicting the future</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Time clauses</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Describing hypothetical situations</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Past Modals for degrees of certainty</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Past Modals for judgments and suggestions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Passive to describe process</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Tag questions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Goals</span>
                </li>
          </div>
          <div class={tw`p-4 w-full md:w-1/5 bg-white rounded-lg border shadow-md sm:p-8 `}>
              <h5 class={tw`mb-4 text-xl font-medium text-gray-500`}>Level</h5>
              <div class={tw`flex items-baseline justify-center text-gray-900`}>
                <span class={tw`text-5xl font-extrabold tracking-tight ordinal`}>5st</span>
              </div>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Phrasal Verbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Gerund and infinitive constructions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Verb Patterns (review)</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Cleft sentences with what</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Adjectives to describe style and appearance</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> ing clauses</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Reporting clauses in Active and Passive</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Sentence adverbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Double Comparatives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Will and would for habits and general truths.</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Collocations</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Idiomatic Expressions</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Optional and required relative pronouns - Prefixes to create antonyms</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Placement of direct and indirect objects - Verbs in subjunctive</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Marketing strategies</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Whenever and wherever contrasted with when and where</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Noun clauses</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Overview of Passives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Subject-verb agreement with quantifiers - Discourse Markers</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Superlative Compound Adjectives</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Phrasal Verbs</span>
                </li>
              <li class={tw`flex space-x-3`}>
                {/* <!-- Icon --> */}
                <svg aria-hidden="true" class={tw`flex-shrink-0 w-5 h-5 text-blue-600`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class={tw`text-base font-normal leading-tight text-gray-500`}> Adverb Clauses of condition</span>
                </li>
          </div>
        </div>
          </div>
  );
}
