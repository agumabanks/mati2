import { PlusIcon } from '@heroicons/react/20/solid'

export default function Divider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center mx-3 " aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
     
    </div>
  )
}
