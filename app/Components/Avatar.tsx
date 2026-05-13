'use client';

import Image from "next/image";

interface AvatarProps {
  src?: string | null; // This tells TypeScript src can be a string, null, or missing
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
    return ( 
        <Image
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            // If src exists, use it; otherwise, use the placeholder
            src={src || "/images/placeholder.png"} 
        />
     );
}
 
export default Avatar;