import React, { useState } from 'react';
import Nav from './components/Nav';
import Image from 'next/image';
import Portifolio from '@/public/images/TELA PROJETO.PNG'
import Calculadora from '@/public/images/TELA.PNG'
import Place from '@/public/images/place.png'

export default function Sobre() {
  const [mostrarPrimeiroTexto, setMostrarPrimeiroTexto] = useState(true);
  const alternarTexto = () => {
    setMostrarPrimeiroTexto(!mostrarPrimeiroTexto);
  };
  return (
    <div>
        <Nav toggleTexto={alternarTexto}/>
        <div className="flex flex-wrap justify-center place-content-center bg-[#1A533F]  my-2 mx-16 p-5 rounded-[120px]">
        <div className='bg-[#062C26] flex flex-wrap flex-col m-10 p-11 rounded-3xl text-[#96a7a4] font-bold text-xl gap-10 max-w-4xl place-content-center justify-evenly'>
          <div className='text-5xl my-5 flex justify-center'>
            <h1>PROJETOS</h1>
          </div>
          <div className='flex flex-row gap-6 flex-wrap justify-evenly '>
          <div className='bg-slate-900 flex flex-col justify-center place-content-center px-5 py-5 rounded-3xl'>
            <h2 className='flex justify-center mb-2'>PORTIFOLIO</h2>
            <Image className='w-52 flex justify-center' loading='lazy' src={Portifolio}/>
          </div>
          <div className='bg-slate-900 flex flex-col justify-center place-content-center px-5 py-5 rounded-3xl'>
            <h2 className='flex justify-center mb-2'>CALCULADORA IR</h2>
            <Image className='w-52 flex justify-center' loading='lazy' src={Calculadora} />
          </div>
          <div className='bg-slate-900 flex flex-col justify-center place-content-center px-5 py-5 rounded-3xl'>
            <h2 className='flex justify-center mb-2'>EM CONSTRUÇÃO</h2>
            <Image className='w-52 flex justify-center' loading='lazy' src={Place}/>
          </div>
          <div className='bg-slate-900 flex flex-col justify-center place-content-center px-5 py-5 rounded-3xl'>
            <h2 className='flex justify-center mb-2'>EM CONSTRUÇÃO</h2>
            <Image className='w-52 flex justify-center' loading='lazy' src={Place}/>
          </div>
          <div className='bg-slate-900 flex flex-col justify-center place-content-center px-5 py-5 rounded-3xl'>
            <h2 className='flex justify-center mb-2'>EM CONSTRUÇÃO</h2>
            <Image className='w-52 flex justify-center' loading='lazy' src={Place}/>
          </div>
          <div className='bg-slate-900 flex flex-col justify-center place-content-center px-5 py-5 rounded-3xl'>
            <h2 className='flex justify-center mb-2'>EM CONSTRUÇÃO</h2>
            <Image className='w-52 flex justify-center' loading='lazy' src={Place}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
