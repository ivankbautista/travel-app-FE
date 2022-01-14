import { RollBorder } from './RollBorder';
import axios from 'axios';

export const Summary = (props) => {
    const differenceInDays = (a, b) => Math.floor(
        (a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24))
    const duration = differenceInDays(new Date(props.headers.end_date), new Date(props.headers.start_date))

    const content = props.components.map((component) =>
        <div key={component.id} className="rounded-md w-48 h-20 m-1 bg-cover" style={{ backgroundImage:`url("${component.image}")` }}></div>
    );
    const content_rev = props.components.reverse().map((component) =>
    <div key={component.id} className="rounded-md w-48 h-20 m-1 bg-cover" style={{ backgroundImage:`url("${component.image}")` }}></div>
    );

    const attractions_arr =  props.components.filter(function(component) {
        return component.category == "attraction";
      });

    const person_arr =  props.components.filter(function(component) {
        return component.category == "person";
      });

    const food_arr =  props.components.filter(function(component) {
        return component.category == "food";
      });

      const fashion_arr =  props.components.filter(function(component) {
        return component.category == "fashion";
      });

      function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }      
      
  return (
    <div>
        <div className="h-[92vh] bg-gradient-to-b from-atlas-600 to-atlas-700 flex flex-wrap snap-center">
            <RollBorder />
            <div className="grow flex items-center justify-center w-[80vw] flex-wrap">
                <div className="w-[29vw] m-2 h-[73vh] flex flex-col items-center justify-center">
                    <div className="w-[29vw] text-center flex flex-col items-center justify-center">
                        <div className="rounded-md w-[29vw] h-[29vw] bg-cover" style={{ backgroundImage:`url("${props.headers.image}")` }}></div>
                        <div className="font-extrabold text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-atlas-300 to-atlas-100 text-center">
                            {props.headers.title.toUpperCase()}
                        </div>
                    </div>
                </div>
                <div className="rounded-md bg-atlas-100 flex flex-col font-extrabold text-6xl w-[50vw] text-left m-2 h-[73vh]">
                    <div className="flex flex-wrap items-center justify-center flex-row h-[12vh] w-[50vw] overflow-hidden">
                        {shuffleArray(content)}
                    </div>
                    <div className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-br from-atlas-600 to-atlas-300 text-left pl-5 mt-5 mb-5 w-[50vw] h-[40vh]">
                        {duration} days away<br />
                        {person_arr.length} great companins<br />
                        {food_arr.length} dishes eaten<br />
                        {fashion_arr.length} killer outfits<br />
                        {attractions_arr.length} sights seen<br />
                        1 awesome trip with Atlas<br />
                    </div>
                    <div className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-br from-atlas-600 to-atlas-300 text-left pr-5 mb-2 w-[50vw] -mt-5 h-[4.5vh] text-right">
                        ...where to next?
                    </div>
                    <div className="flex flex-wrap items-center justify-center flex-row-reverse h-[12vh] w-[50vw] overflow-hidden">
                        {shuffleArray(content_rev)}
                    </div>
                </div>
            </div>
            <RollBorder />
        </div>
    </div>
)
}