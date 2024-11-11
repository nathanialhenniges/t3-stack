import { getImage } from "~/server/queries";

export default async function ImageModal({
  params: { id: ImageId },
}: {
  params: { id: string };
}) {
  const image = await getImage(parseInt(ImageId));
  return (
    <div>
      <img src={image.url} className="h-96" />
    </div>
  );
}
