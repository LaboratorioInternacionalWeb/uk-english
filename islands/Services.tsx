/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

interface peopleProps {
  people: string;
}

export default function Services(props: peopleProps) {
  return (
    <div id="defaultTabContent">
      {/* Toddlers */}
      <div class={tw`${props.people === 'Toddlers' ? '' : 'hidden'} p-4 bg-white rounded-lg md:p-8`} id="about" role="tabpanel" aria-labelledby="about-tab">
        <h2 class={tw`mb-3 text-3xl font-extrabold tracking-tight text-gray-900`}>Para los más peques de la casa.</h2>
        <p>
          En este curso tu pequeño aprenderá inglés con un método innovador sin tener que escribir una sola palabra. Nuestros niños aprenden a través de material digital como
          audios, videos, animaciones, imágenes y juegos interactivos. Especialmente diseñado para niños de 4 a 6 años de edad (preescolar)
        </p>
      </div>
      {/* Juniors */}
      <div class={tw`${props.people === 'Juniors' ? '' : 'hidden'} p-4 bg-white rounded-lg md:p-8`} id="services" role="tabpanel" aria-labelledby="services-tab">
        <h2 class={tw`mb-3 text-3xl font-extrabold tracking-tight text-gray-900`}>Para niños de entre 7 y 11 años de edad (etapa primaria)</h2>
        <p>
          En este curso tu pequeño aprenderá inglés de una manera fácil y divertida con el programa interactivo diseñado especialmente para ellos. Cuenta con 6 niveles divididos en
          cuatrimestres. De esta manera tus hijos avanzarán a través de éstos aprendiendo rápidamente y adquiriendo cada vez más fluidez y seguridad. Nuestros niños de JUNIORS
          también aprenderán a través de material digital como audios, videos, animaciones, imágenes y juegos interactivos.
        </p>
      </div>
      {/* Adults */}
      <div class={tw`${props.people === 'Adults' ? '' : 'hidden'} p-4 bg-white rounded-lg md:p-8`} id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
        <h2 class={tw`mb-3 text-3xl font-extrabold tracking-tight text-gray-900`}>Curso individual para adultos y adolescentes</h2>
        <p>
          Aprenderás a través de nuestros 6 niveles que se cursan de manera cuatrimestral (intensivo) o bien semestral (semi-intensivo); se asigna un nivel de inicio de acuerdo al
          resultado en una evaluación interna.
        </p>
      </div>
    </div>
  );
}
