import React from 'react';
import geekbank from '../../../asset/images/geekbank.png'
import casaguide from '../../../asset/images/casaguide.png'
import mylionsgeek from '../../../asset/images/mylionsgeek.png'
import lionsgeek from '../../../asset/images/lionsgeek.png'



export const Container = () => {
    return (
        <div>
            <section class=" py-[24vh]">

{/* {{-- GeekBank --}} */}
<div class="flex xl:flex-row flex-col items-center justify-around py-[5vh] mb-[10vh]">
    <div class="flex flex-col">
        <p class="text-white xl:text-4xl text-3xl py-4 text-center font-semibold text-primary-color">GeekBank</p>
        <p class="text-white xl:text-xl xl:w-[40vw] text-center items-center border-primary-color border-r-[3px] px-4">I developed a full Bank System with
            transfers, exchanges, credit cards, a crypto system, an investments page, and loans.</p>
    </div>

    <img src={geekbank} alt="" class="xl:w-[40vw] w-[80vw] xl:mt-0 mt-8  rounded-xl border-4 hover:scale-105 duration-300 transition-all animated-border"/>
</div>
{/* {{-- Casa guide --}} */}
<div class="flex xl:flex-row-reverse flex-col items-center justify-around py-[5vh]">
    <div class="flex flex-col">
        <p class="text-white xl:text-4xl text-3xl py-4 text-center font-semibold">Casa Guide</p>
        <p class="text-white xl:text-xl xl:w-[40vw] text-center items-center border-primary-color border-l-[3px] px-4"> I developed Casa Guide, featuring a
            responsive back-end website and a user-friendly mobile app front-end. This project ensures seamless
            functionality across web and mobile platforms</p>

    </div>

    <img src={casaguide} alt="" class="xl:w-[40vw] w-[80vw] xl:mt-0 mt-8 rounded-xl border-4 hover:scale-105 duration-300 transition-all animated-border"/>
</div>
{/* {{-- Mylionsgeek --}} */}
<div class="flex xl:flex-row flex-col items-center justify-around py-[5vh] mb-[10vh]">
    <div class="flex flex-col">
        <p class="text-white xl:text-4xl text-3xl py-4 text-center font-semibold text-primary-color">MyLionsgeek.ma</p>
        <p class="text-white xl:text-xl xl:w-[40vw] text-center items-center border-primary-color border-r-[3px] px-4">I developed a full Bank System with
            transfers, exchanges, credit cards, a crypto system, an investments page, and loans.</p>
    </div>

    <img src={mylionsgeek} alt="" class="xl:w-[40vw] w-[80vw] xl:mt-0 mt-8  rounded-xl border-4 hover:scale-105 duration-300 transition-all animated-border"/>
</div>
{/* lionsgeek */}
<div class="flex xl:flex-row-reverse flex-col items-center justify-around py-[5vh]">
    <div class="flex flex-col">
        <p class="text-white xl:text-4xl text-3xl py-4 text-center font-semibold">Lionsgeek</p>
        <p class="text-white xl:text-xl xl:w-[40vw] text-center items-center border-primary-color border-l-[3px] px-4"> I developed Casa Guide, featuring a
            responsive back-end website and a user-friendly mobile app front-end. This project ensures seamless
            functionality across web and mobile platforms</p>

    </div>

    <img src={lionsgeek} alt="" class="xl:w-[40vw] w-[80vw] xl:mt-0 mt-8 rounded-xl border-4 hover:scale-105 duration-300 transition-all animated-border"/>
</div>
{/* {{-- E-Comm --}} */}
<div class="flex xl:flex-row flex-col items-center justify-around py-[5vh] mb-[10vh]">
    <div class="flex flex-col">
        <p class="text-white xl:text-4xl text-3xl py-4 text-center font-semibold text-primary-color">E-Commerce</p>
        <p class="text-white xl:text-xl xl:w-[40vw] text-center items-center border-primary-color border-r-[3px] px-4">I developed a full Bank System with
            transfers, exchanges, credit cards, a crypto system, an investments page, and loans.</p>
    </div>

    <img src={geekbank} alt="" class="xl:w-[40vw] w-[80vw] xl:mt-0 mt-8  rounded-xl border-4 hover:scale-105 duration-300 transition-all animated-border"/>
</div>

</section>

        </div>
    );
};

