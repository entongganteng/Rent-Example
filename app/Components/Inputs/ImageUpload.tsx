'use client';

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
    var cloudinary: any;
}

interface ImageUploadProps {
    onChange : (value: string) => void;
    value : string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    value
}) => {
    const handleUpload = useCallback((result : any) => {
        const info = result?.info;
    
        if (typeof info === 'object' && info?.secure_url) {
            // Success: We found the secure URL in the object
            onChange(info.secure_url);
        } else if (typeof info === 'string' && info !== "") {
            // Success: The info itself is the string URL
            onChange(info);
        } else {
            console.error("Upload failed or returned invalid data:", result);
        }
    }, [onChange]);

    return ( 
        <CldUploadWidget
            onSuccess={handleUpload}
            uploadPreset="biuftebu"
            options={{
                maxFiles: 1
            }}
        >
            {({open}) => {
                return (
                   <div
                        onClick={() => open?.()}
                        className="
                            relative
                            cursor-pointer
                            hover:opacity-79
                            transition
                            border-dashed
                            border-2
                            p-20
                            border-neutral-300
                            flex
                            flex-col
                            justify-center
                            items-center
                            gap-4
                            text-neutral-600
                        "
                   >
                        <TbPhotoPlus size={50}/>
                        <div className="font-semibold text-lg">
                            Click to Upload
                        </div>
                    {
                        value && (
                            <div
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    alt="Upload"
                                    fill
                                    style={{ objectFit: 'cover'}}
                                    src={value}
                                />
                            </div>
                        )
                    }
                   </div> 
                )
            }}
        </CldUploadWidget>
     );
}
 
export default ImageUpload;