"use client";
import { UploadButton , UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";
import {imageRemove} from "../actions/imageRemove"

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState("")
  const [imageKey, setImageKey] = useState("");

  const handleRemoveImage = async () => {
   const res = await imageRemove(imageKey);
   if(res.success){
    alert("One file is removed from server");
    setImageUrl("");
    setImageKey("");
   }
    console.log('removing image')
  }
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          setImageUrl(res[0].ufsUrl);
          setImageKey(res[0].key);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />


      <div>
        <h1>Image preview</h1>
        {
          imageUrl &&(
            <div>
              <Image src={imageUrl} alt="image" width={300} height={200} className="object-cover h-auto w-full " />
            </div>
          )
        }
        <button onClick={handleRemoveImage} className="text-white thext-sm font-bold px-2 rounded bg-red-500 " >
          Remove Image
        </button>
      </div>
    </div>
    </div>
  )
}

export default ImageUpload
