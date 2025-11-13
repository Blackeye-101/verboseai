import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";

interface Props {
  seed: string;
  variant: "botttsNeutral" | "initials";
}

export const GenerateAvatarUri = ({ seed, variant }: Props) => {
  let avatar;

  if (variant === "botttsNeutral") {
    avatar = createAvatar(botttsNeutral, {
      seed: seed,
    });
  } else if (variant === "initials") {
    avatar = createAvatar(initials, {
      seed: seed,
      fontWeight: 500,
      fontSize: 42,
    });
  }
  return avatar!.toDataUri();
};
