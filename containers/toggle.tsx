

const Toggle = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        {/* <!-- toggle --> */}
        <div className="relative">
          {/* <!-- input --> */}
          <input type="checkbox" id="toggleB" className="sr-only" />
          {/* <!-- line --> */}
          <div className="block border w-10 h-4 rounded-full"></div>
          {/* <!-- dot --> */}
          <div className="dot absolute left-1 top-0 bg-white w-4 h-4 rounded-full transition"></div>
        </div>
      </label>

    </div>
  )
}

export default Toggle