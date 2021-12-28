import Image from 'next/image';
import Link from 'next/link';

export const Notification = (props) => {
    return (
        <div class="alert w-full fixed bottom-0">
        <input type="checkbox" class="hidden" id="footeralert"></input>
    
        <div class="flex items-center justify-between w-full p-2 bg-blue-500 shadow text-white">
    
          <label class="close cursor-pointer" title="close" for="footeralert">
            <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </label>
        </div>
      </div>
    )
}