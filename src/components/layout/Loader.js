const Loader = () => {
  return (
    <div
      style={{ zIndex: 111111 }}
      className="fixed bg-white/30 w-full h-full top-0 flex items-center justify-center"
    >
      <img
        src={process.env.PUBLIC_URL + "/assets/gifs/loader.gif"}
        alt="Loading..."
        width={100}
        height={100}
      />
    </div>
  );
};

export default Loader;
