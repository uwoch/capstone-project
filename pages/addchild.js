import KidForm from "@/components/KidForm";
import { useRouter } from "next/router";

export default function AddChildPage() {
  const router = useRouter();

  async function handleAddChild(newKid) {
    const response = await fetch("/api/kids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newKid),
    });

    if (response.ok) {
      router.push("/");
    }
  }
  return (
    <KidForm onSubmit={handleAddChild} />
  );
} 