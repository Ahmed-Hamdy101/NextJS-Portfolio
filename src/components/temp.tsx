// import Image from "next/image";
// import { useState, useEffect } from "react";
//
// const Avatar = () => {
//   const [imageError, setImageError] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);
//
//   useEffect(() => {
//     const img = new window.Image();
//     img.onload = () => setImageLoaded(true);
//     img.onerror = () => setImageError(true);
//     img.src = "/avater.png"; // ✅ FIXED PATH
//   }, []);
//
//   return (
//     <div className="relative w-full h-full">
//       <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
//         {imageLoaded && !imageError ? (
//           <Image src="/avater.png" alt="Avatar" width={100} height={100} />
//         ) : (
//           <div className="w-full h-full bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 backdrop-blur-sm flex items-center justify-center relative">
//             <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-purple-600/10 to-blue-500/10 animate-pulse"></div>
//             <div className="relative z-10 text-center">
//               <div className="text-white text-7xl font-bold bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
//                 AI
//               </div>
//               <div className="text-gray-400 text-sm mt-2">Avatar</div>
//             </div>
//           </div>
//         )}
//         <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
//       </div>
//     </div>
//   );
// };
//
// export default Avatar;