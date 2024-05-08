"use client";
import PrimaryButton from "@/components/Button/PrimaryButton";
import Card from "@/components/Card";
import PaymentMethod from "./PaymentMethod";
import { useState } from "react";

export default function Payment() {
  const [currentMethod, setCurrentMethod] = useState("card");
  const onMethodChange = (type: string) => {
    setCurrentMethod(type);
  };
  return (
    <Card>
      <h1 className="text-lg font-medium">Payment Method</h1>
      <span className="text-sm font-light">
        Add a new payment method to your account.
      </span>

      <div className="flex flex-wrap gap-2 my-4">
        <PaymentMethod
          type="card"
          onChange={onMethodChange}
          isActive={currentMethod === "card"}
        />
        <PaymentMethod
          type="paypal"
          onChange={onMethodChange}
          isActive={currentMethod === "paypal"}
        />
        <PaymentMethod
          type="apple"
          onChange={onMethodChange}
          isActive={currentMethod === "apple"}
        />
      </div>
      <PrimaryButton title="Continue" />
    </Card>
  );
}
