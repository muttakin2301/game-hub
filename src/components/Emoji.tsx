import meh from "../assets/meh.webp";
import thumbs from "../assets/thumbs-up.webp";
import bulls from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px", marginTop: 1 },
    4: { src: thumbs, alt: "recommended", boxSize: "25px", marginTop: 2 },
    5: { src: bulls, alt: "exceptional", boxSize: "35px", marginTop: 1 },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
