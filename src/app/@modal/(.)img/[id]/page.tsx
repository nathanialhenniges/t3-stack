import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-image-page";

export default function ImageModal({
  params: { id: ImageId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(ImageId);
  if (isNaN(idAsNumber)) throw new Error("Invalid image ID");

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
