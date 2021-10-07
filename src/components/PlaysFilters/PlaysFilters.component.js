import { Disclosure } from '@headlessui/react'
import { BiChevronDown , BiChevronUp } from "react-icons/bi";

const PlaysFilter = (props) => {
  return (
    <Disclosure>
    {({ open }) => (
      <>
      <Disclosure.Button className="p-4 flex gap-3 item-center bg-white w-5/6 mb-4">
      {open ? <BiChevronUp/>  : <BiChevronDown/> }

        <span className={open ? "text-red-600" : "text-grey-700"}>
        {props.title}
        </span>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 bg-white w-5/6 p-4 rounded-b-lg mb-4">
        <div className="flex item-center gap-3 flex-wrap text-sm">
         {props.tags.map((tag)=> (
           <>
           <div className="border-2 border-gray-200 p-2">
           <span className="text-red-600">{ tag }</span>
           </div>
           </>
         ))

       }
        </div>
      </Disclosure.Panel>
      </>
    )}

    </Disclosure>
  )
}

export default PlaysFilter;
