import { Intro } from './rolls/wrap/Intro';
import { Duration } from './rolls/wrap/Duration';
import { Companions } from './rolls/wrap/Companions';
import { Language } from './rolls/wrap/Language';
import { Food } from './rolls/wrap/Food';
import { Attractions } from './rolls/wrap/Attractions';
import { Summary } from './rolls/wrap/Summary';

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
