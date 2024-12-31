"use client";
import MyDialog from "./form/MyDialog";
import AnthologyForm from "./form/AnthologyForm";

export default function PageWrapper({ title, itemName, children }) {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <div className="flex items-center space-x-2">
            <MyDialog heading={`Add a new ${itemName}`} triggerText={`Add ${itemName}`}>
              <AnthologyForm />
            </MyDialog>
          </div>
        </div>
      </div>
    </>
  );
}
