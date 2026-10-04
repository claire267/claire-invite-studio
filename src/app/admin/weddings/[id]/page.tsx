// Edit an existing wedding: story, dress code, colors, publish toggle,
// and image upload. Reuses the same PATCH /api/weddings/[id] endpoint
// the couple's dashboard would use, so admin can support any client.
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditWeddingForm from "@/components/EditWeddingForm";
import ImageUploader from "@/components/ImageUploader";

export default async function AdminEditWedding({ params }: { params: { id: string } }) {
  const wedding = await prisma.wedding.findUnique({
    where: { id: params.id },
    include: { images: true, scheduleItems: true },
  });
  if (!wedding) notFound();

  return (
    <div className="max-w-2xl">
      <h1 className="font-serif text-3xl text-emerald mb-6">
        Editing: {wedding.partner1Name} &amp; {wedding.partner2Name}
      </h1>
      <EditWeddingForm wedding={wedding} />
      <div className="mt-10">
        <h2 className="font-serif text-xl text-emerald mb-4">Photos & Video</h2>
        <ImageUploader weddingId={wedding.id} existingImages={wedding.images} />
      </div>
    </div>
  );
}
