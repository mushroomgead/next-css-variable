interface PaymentMethodProps {
  type: string;
  isActive?: boolean;
  onChange: (type: string) => void;
}
export default function PaymentMethod({
  type,
  isActive = false,
  onChange,
}: PaymentMethodProps) {
  return (
    <div
      className="flex items-center justify-center flex-1 border-2 rounded-xl border-slate-500 h-20 cursor-pointer"
      style={{
        borderColor: isActive ? "var(--primary-button-color)" : "inherit",
      }}
      onClick={() => onChange(type)}
    >
      {type}
    </div>
  );
}
