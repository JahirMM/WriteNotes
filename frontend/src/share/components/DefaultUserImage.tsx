interface DefaultUserImageProps {
  dimensionClasses: string;
  dimensionImageClasses: string;
  handleShowProfile?: () => void;
}

function DefaultUserImage({
  dimensionClasses,
  dimensionImageClasses,
  handleShowProfile,
}: DefaultUserImageProps) {
  return (
    <div
      className={`bg-backgroundSecondary flex items-center justify-center cursor-pointer ${dimensionClasses} dark:bg-backgroundSecondaryDark`}
    >
      <img
        src="/user/defaultProfilePhoto.svg"
        alt="User Image Default"
        className={dimensionImageClasses}
        onClick={handleShowProfile}
      ></img>
    </div>
  );
}

export default DefaultUserImage;
