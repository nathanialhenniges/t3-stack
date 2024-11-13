import FullPageImageView from "~/app/components/full-image-page";

export default function ImagePage({
  params: { id: ImageId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(ImageId);
  if (isNaN(idAsNumber)) throw new Error("Invalid image ID");

  return <FullPageImageView id={idAsNumber} />;
}
