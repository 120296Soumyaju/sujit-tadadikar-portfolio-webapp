import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  fallback?: string;
  className?: string;
}

const ProfileImage = ({
  src,
  alt,
  size = "md",
  fallback,
  className = "",
}: ProfileImageProps) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-40 h-40",
    lg: "w-64 h-64",
    xl: "w-80 h-80",
  };

  return (
    <div className={`${sizeClasses[size]} relative ${className}`}>
      <Avatar className="w-full h-full">
        <AvatarImage
          src={src}
          alt={alt}
          className="object-cover"
          loading="lazy"
        />
        <AvatarFallback className="text-6xl font-bold text-primary">
          {fallback ||
            alt
              .split(" ")
              .map((name) => name[0])
              .join("")}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfileImage;
