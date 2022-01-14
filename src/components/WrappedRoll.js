import { Intro } from './rolls/Intro';
import { Duration } from './rolls/Duration';
import { Companions } from './rolls/Companions';
import { Language } from './rolls/Language';
import { Food } from './rolls/Food';
import { Attractions } from './rolls/Attractions';
import { Summary } from './rolls/Summary';

export const WrappedRoll = () => {
    return (
        <div className="h-[92vh] bg-black flex flex-wrap overflow-hidden text-white">
            <div className="h-full w-full scroll-smooth overflow-y-scroll snap-mandatory snap-y">
                <Intro />
                <Duration />
                <Companions />
                <Language />
                <Food />
                <Attractions />
                <Summary />
            </div>
        </div>
    )
}
