import Card from "@/components/Card";
import RecieverBubble from "./RecieverBubble";
import SenderBubble from "./SenderBubble";

export default function Chat() {
  return (
    <Card>
      <div className="flex">
        <div className="w-10 h-10 mr-3">
          <img
            src="https://ui.shadcn.com/avatars/01.png"
            className="rounded-full"
          ></img>
        </div>
        <div className="flex flex-col">
          <span className="text-sm">Sofia Davis</span>
          <span className="text-sm">m@example.com</span>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <SenderBubble />
        <RecieverBubble />
      </div>
    </Card>
  );
}
