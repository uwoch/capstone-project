import KidForm from "@/components/KidForm";

export default function NewChildPage({ handleAddChild }) {
  return (
    <>
      <KidForm onAddChild={handleAddChild} />
    </>
  );
}
