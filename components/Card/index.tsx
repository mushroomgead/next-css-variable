interface CardProps {
  children: React.ReactNode;
}
export default function Card({ children }: CardProps) {
  return (
    <div className="border rounded-xl border-slate-500 mr-2 p-4">
      {children}
    </div>
  );
}
