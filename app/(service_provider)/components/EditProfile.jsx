import Image from 'next/image';

export default function EditProfile() {
  return (
    <div className="flex items-center text-description justify-center ">
      <div className=" rounded-lg w-[30rem]">
        <div className="flex justify-between">
            <h1 className='text-normal font-semibold'>Edit Profile</h1>
          <button className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/profile kakapo.png" // Replace with the actual path to the uploaded image
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full w-40 h-40"
          />
        </div>
        <div className='flex gap-4 items-center'>
          <label className="block font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Try Dana"
            className="mt-1 text-normal w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-primary transition-colors focus:outline-none bg-inherit"
          />
        </div>
        <div className="mt-6 flex gap-4 items-center">
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="trydana@gmail.com"
            className="mt-1 text-normal w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-primary transition-colors focus:outline-none bg-inherit"
          />
        </div>
        
        <div className="mt-6 flex gap-4 items-center">
          <label className="block font-medium text-gray-700">Phone</label>
          <input
            type="text"
            placeholder="092837137"
            className="mt-1 text-normal w-full border-b border-gray-300 py-1 focus:border-b-2 focus:border-primary transition-colors focus:outline-none bg-inherit"
          />
        </div>
        <div className="mt-6">
          <button className="w-full hover bg-primary text-white py-2 px-4 rounded-md ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
