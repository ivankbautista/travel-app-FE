import { RollBorder } from './RollBorder';
export const Accommodation = (props) => {
    const array =  props.accommodations.filter(function(accommodation) {
        return accommodation.category == "accommodation";
      });
    const content = array.map((accommodation) =>
    <div key={accommodation.id} className="rounded-md w-[25rem] h-[16rem] -rotate-3 p-2 pt-3 text-right m-2 bg-cover" style={{ backgroundImage:`url("${accommodation.image}")` }}></div>
  );
  return (
        <div>
            <div className="h-[92vh] bg-gradient-to-b from-[#381254] to-atlas-600 flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow flex items-center justify-center w-3/4">
                    <div className="flex flex-col text-xs">
                        <div className="font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-tr from-atlas-300 to-atlas-100 text-center mt-5 mb-5 w-[75vw]">
                            Enjoy your stay?
                        </div>
                        <div className="flex flex-wrap items-center justify-center flex-row h-[18rem] w-[75vw] overflow-hidden">
                            {content}
                        </div>
                    </div>
                </div>
                <RollBorder />
            </div>
        </div>
)
}