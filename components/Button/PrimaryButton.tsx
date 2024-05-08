interface PrimaryButtonProps {
  title: string;
}
export default function PrimaryButton({ title }: PrimaryButtonProps) {
  return (
    <button className="btn-primary w-full rounded-md py-2 cursor-pointer text-sm">
      {title}
    </button>
  );
}
