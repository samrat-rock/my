import Canvas from "../Canvas/Canvas";

function Home() {
  return (
    <>
      <Canvas />
      <section className="py-2 bg-black flex flex-col items-center justify-center h-screen">
        <img
          src="https://cdn4.vectorstock.com/i/1000x1000/32/78/white-web-design-and-front-end-development-icon-vector-36723278.jpg"
          className="w-[40px] rounded-lg"
          alt="logo"
        />
        <h2 className="text-white text-[40px] font-bold">
          My Personal Site
        </h2>
        <p className="text-gray-400 mt-4">Welcome to my personal site</p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
          Contact Me
        </button>
      </section>
    </>
  );
}

export default Home;
