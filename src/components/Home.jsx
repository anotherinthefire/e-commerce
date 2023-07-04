import Search from "./search"

const Home = () => {
  return (
    <div>
      <Search />
      <div className="mt-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">Keeping It Cool, Brewing Brilliance, and Entertaining with Style!</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-center">Explore our wide range of fridges, kettles, and televisions to keep your refreshments cool, brew your favorite beverages with brilliance, and elevate your entertainment experience with style.</p>
      </div>
    </div>
  )
}

export default Home