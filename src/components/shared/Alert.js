export const Alert = (props) => {
    return (
        <div class="alert w-1/3 fixed top-1/4 left-1/3 transform -translate-x-1/3 -translate-y-1/4 z-50">
        <input type="checkbox" class="hidden" id="alert2"></input>
        <div class="flex items-center justify-between w-full p-2 bg-atlas-600 shadow text-white rounded-t-lg">
        { props.title }
          <label class="close cursor-pointer" title="close" for="alert2">
            <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </label>
        </div>
        <div class="flex items-center justify-between w-full p-2 bg-white shadow text-black rounded-b-lg text-xs">
        { props.body }
        </div>
      </div>
    )
}