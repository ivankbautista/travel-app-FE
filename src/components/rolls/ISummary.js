import { RollBorder } from './RollBorder';

export const Summary = () => {
    return (
        <div>
            <div className="h-[92vh] bg-atlas-700 flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow">
                    summary
                </div>
                <RollBorder />
            </div>
        </div>
    )
}