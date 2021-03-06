import { RollBorder } from './RollBorder';
export const Attractions = (props) => {
    const array =  props.attractions.filter(function(attraction) {
        return attraction.category == "attraction";
      });
    const content = array.map((attraction) =>
    <div key={attraction.id} className="rounded-md flex-grow w-60 h-40 p-2 pt-3 text-right m-0.5 bg-cover" style={{ backgroundImage:`url("${attraction.image}")` }}><span className="bg-atlas-300 p-2 rounded-sm">{attraction.title}</span></div>
  );
    const content_rev = array.reverse().map((attraction) =>
    <div key={attraction.id} className="rounded-md flex-grow w-60 h-40 p-2 pt-3 text-right m-0.5 bg-cover" style={{ backgroundImage:`url("${attraction.image}")` }}><span className="bg-atlas-300 p-2 rounded-sm">{attraction.title}</span></div>
);
  return (
        <div>
            <div className="h-[92vh] bg-gradient-to-b from-atlas-500 to-atlas-600 flex flex-wrap snap-center">
                <RollBorder />
                <div className="grow flex items-center justify-center w-3/4">
                    <div className="flex flex-col text-xs">
                        <div className="flex flex-wrap items-center justify-center flex-row h-40 w-[75vw] overflow-hidden">
                            {content}
                        </div>
                        <div className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-atlas-300 to-atlas-100 text-center mt-5 mb-5 w-[75vw]">
                            Enjoy sightseeing?
                        </div>
                        <div className="flex flex-wrap items-center justify-center flex-row h-40 w-[75vw] overflow-hidden">
                            {content_rev}
                        </div>
                    </div>
                </div>
                <RollBorder />
            </div>
        </div>
)
}