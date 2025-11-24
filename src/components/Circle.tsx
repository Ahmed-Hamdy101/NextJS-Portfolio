const Circles = () => {
    return (
        <div className="absolute -bottom-32 -right-40 w-[700px] h-[700px] mix-blend-color-dodge animate-pulse pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-[508px] h-[508px] bg-gradient-to-r from-red-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
    );
};

export default Circles;

