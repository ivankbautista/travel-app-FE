import { RollBorder } from './RollBorder';

export const Duration = () => {
    return (
        <div>
            <div className="h-[92vh] bg-atlas-700 flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow">
                    duration
                </div>
                <RollBorder />
            </div>
        </div>
    )
}