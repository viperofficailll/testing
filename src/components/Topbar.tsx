import tweetimage from './images/tweet.jpg'

const Topbar = () => {
    return (
      <>
        <div className="flex justify-between items-center px-6 py-3 shadow-md bg-white w">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <div className="font-bold">𓃑</div>
            <div className="text-lg font-semibold">Test Project</div>
          </div>
  
          {/* Right side */}
          <div className="flex items-center gap-5">
            <div className="text-xl cursor-pointer">+</div>
            <div className="relative cursor-pointer">
              <span className="text-xl">🔔</span>
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </div>
            <div className="text-xl cursor-pointer">📧</div>
            <div className="text-xl cursor-pointer">⚙️</div>
            <div className="border-l h-6 border-gray-300 mx-2"></div>
            <div className="text-xl cursor-pointer">🌙</div>
            <img
  src={tweetimage}
  alt="profile"
  className="w-8 h-8 rounded-full object-cover"
/>
          </div>
        </div>
      </>
    )
  }
  
  export default Topbar;
  