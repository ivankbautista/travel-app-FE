
import { RollBorder } from './RollBorder';

export const Weather = () => {
    return (
        <div>
            <div className="h-[92vh] bg-atlas-700 flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow">
                    weather
                </div>
                <RollBorder />
            </div>
        </div>
    )
}