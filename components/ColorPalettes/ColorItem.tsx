"use client";
interface ColorItemProps {
  isActive?: boolean;
  colorCode: string;
  colorName: string;
  onChange: (color: string) => void;
}
export default function ColorItem({
  isActive = false,
  colorCode,
  colorName,
  onChange,
}: ColorItemProps) {
  return (
    <div
      className="rounded-full w-10 h-10 mr-2 border-2 flex items-center justify-center cursor-pointer"
      style={{ borderColor: isActive ? colorCode : "transparent" }}
      onClick={() => {
        document.documentElement.style.setProperty(
          "--primary-button-color",
          colorCode
        );
        onChange(colorName);
      }}
    >
      <div
        className="flex rounded-full w-8 h-8"
        style={{ backgroundColor: colorCode }}
      ></div>
    </div>
  );
}
