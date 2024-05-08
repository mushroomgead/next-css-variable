import PrimaryButton from "@/components/Button/PrimaryButton";
import Card from "@/components/Card";

export default function Goal() {
  return (
    <Card>
      <h1 className="text-lg font-medium">Move Goal</h1>
      <span className="text-sm font-light">Set your daily activity goal.</span>
      <div className="flex justify-between my-4">
        <div className="flex items-center cursor-pointer">-</div>
        <div className="flex flex-col justify-center items-center">
          <div>320</div>
          <div className="text-xs font-light">CALORIES/DAY</div>
        </div>
        <div className="flex items-center cursor-pointer">+</div>
      </div>
      <PrimaryButton title="Set Goal" />
    </Card>
  );
}
