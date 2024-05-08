import ColorPalettes from "@/components/ColorPalettes";
import PrimaryButton from "@/components/Button/PrimaryButton";
import Payment from "./Payment";
import Goal from "./Goal";
import Chat from "./Chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Add colors. Make it yours.</h1>
      <span className="font-light">
        Hand-picked themes that you can copy and paste into your apps.
      </span>
      <div className="mt-4">
        <ColorPalettes />
      </div>
      <div className="flex flex-wrap mt-6">
        <Payment />
        <Goal />
        <Chat />
      </div>
    </main>
  );
}
