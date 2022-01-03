
import { RollBorder } from './RollBorder';

export const Weather = () => {
    return (
        <div>
            <div className="h-[92vh] bg-gradient-to-b from-[#51157d] to-[#3d135e] flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow">
                    weather
                </div>
                <RollBorder />
            </div>
        </div>
    )
}