import { RollBorder } from './RollBorder';
export const Transportation = (props) => {
    const content = props.transportations.map((transportation) =>
    <div key={transportation.id} className="rounded-full w-48 h-48 -rotate-6 bg-cover text-center m-2" style={{ backgroundImage:`url("${transportation.image}")` }}><span className="bg-atlas-300 p-2 rounded-sm w-10 h-5 text-white text-s">{transportation.title}</span></div>
  );
  return (
    <div>
        <div className="h-[92vh] bg-gradient-to-b from-[#26083d] to-[#3d135e] flex flex-wrap snap-center">
            <RollBorder />
            <div className="grow flex items-center justify-center w-3/4">
                    <div className="flex flex-col text-xs">
                        <div className="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-atlas-300 to-atlas-100 text-center">
                            You travelled with...
                        </div>
                        <div className="flex flex-wrap items-center justify-center flex-row h-56 w-[75vw] overflow-hidden p-5">
                            {content}
                        </div>
                    </div>
            </div>
            <RollBorder />
        </div>
    </div>
)
}