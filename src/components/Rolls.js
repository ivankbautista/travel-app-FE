import { Intro } from './rolls/AIntro';
import { Distance } from './rolls/BDistance';
import { Duration } from './rolls/CDuration';
import { Companions } from './rolls/DCompanions';
import { Language } from './rolls/ELanguage';
import { Weather } from './rolls/FWeather';
import { Food } from './rolls/GFood';
import { Attractions } from './rolls/HAttractions';
import { Summary } from './rolls/ISummary';

export const Rolls = () => {
    return (
        <div className="h-[92vh] bg-atlas-700 flex flex-wrap overflow-hidden">
            <div className="h-full w-full scroll-smooth overflow-y-scroll snap-mandatory snap-y">
                <Intro />
                <Distance />
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
