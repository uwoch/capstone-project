import KidForm from "@/components/KidForm";
import { useRouter } from "next/router";

export default function AddChildPage() {
  const router = useRouter();
  
  async function addChild(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const kidData = Object.fromEntries(formData);
  
    const res = await fetch("api/kids", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(kidData),
    });
    if (res.status === 400) 
    if (res.status === 418) 
    if (res.ok) {
      router.push("/");
    }
  }
  return (
    <>
      <KidForm onSubmit={addChild} />
    </>
  );
}
