import { Intro } from './rolls/AIntro';
import { Duration } from './rolls/BDuration';
import { Companions } from './rolls/CCompanions';
import { Language } from './rolls/ELanguage';
import { Weather } from './rolls/FWeather';
import { Food } from './rolls/GFood';
import { Attractions } from './rolls/HAttractions';
import { Summary } from './rolls/ISummary';

export const Rolls = () => {
    return (
        <div className="h-[92vh] bg-black flex flex-wrap overflow-hidden text-white">
            <div className="h-full w-full scroll-smooth overflow-y-scroll snap-mandatory snap-y">
                <Intro />
                <Duration />
                <Companions />
                <Language />
                <Weather />
                <Food />
                <Attractions />
                <Summary />
            </div>
        </div>
    )
}
