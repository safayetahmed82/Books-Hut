import React from 'react'

const Ratings = () => {
  return (
  <>
    <div className="w-full bg-[#F6F3EC] ">
      <div className="stats stats-horizontal bg-transparent w-full divide-x divide-[#3F5C4A]">
        <div className="stat place-items-center py-8">
          <div className="stat-value text-[#B8925A] text-3xl md:text-4xl font-extrabold">
            2K+
          </div>
          <div className="stat-desc text-[#3F5C4A] text-sm md:text-base mt-1">
            Active Users
          </div>
        </div>

        <div className="stat place-items-center py-8">
          <div className="stat-value text-[#B8925A] text-3xl md:text-4xl font-extrabold">
            10+
          </div>
          <div className="stat-desc text-[#3F5C4A] text-sm md:text-base mt-1">
            Premium Books
          </div>
        </div>

        <div className="stat place-items-center py-8">
          <div className="stat-value text-[#B8925A] text-3xl md:text-4xl font-extrabold">
            4.9
          </div>
          <div className="stat-desc  text-[#3F5C4A] text-sm md:text-base mt-1">
            Rating
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Ratings