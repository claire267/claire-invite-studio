"use client";
// Converts a selected file to base64 in the browser, then POSTs it
// to /api/upload, which forwards it to Cloudinary.
import { useState } from "react";

export default function ImageUploader({ weddingId, existingImages }: { weddingId: string; existingImages: any[] }) {
  const [images, setImages] = useState(existingImages);
  const [uploading, setUploading] = useState(false);

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const base64File = await fileToBase64(file);
    const type = file.type.startsWith("video") ? "video" : "photo";

    const res = await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ weddingId, base64File, type }),
    });
    if (res.ok) {
      const newImage = await res.json();
      setImages((imgs) => [...imgs, newImage]);
    }
    setUploading(false);
  }

  return (
    <div>
      <input type="file" accept="image/*,video/*" onChange={handleFile} disabled={uploading} className="mb-4" />
      {uploading && <p className="text-sm opacity-70">Uploading...</p>}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img) => (
          img.type === "video" ? (
            <video key={img.id} src={img.url} className="w-full h-24 object-cover rounded" controls />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={img.id} src={img.url} alt="" className="w-full h-24 object-cover rounded" />
          )
        ))}
      </div>
    </div>
  );
}
