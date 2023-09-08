import KidForm from "@/components/KidForm";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AddChildPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function addChild(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const kidData = Object.fromEntries(formData);

    try {
      const res = await fetch("api/kids", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(kidData),
      });

      if (res.status === 400) {
        console.error("Bad Request");
      } else if (res.status === 418) {
        console.error("Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es erneut.");
      } else if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("Ein Fehler ist aufgetreten:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? (
        <p>Please wait...</p>
      ) : (
        <KidForm onSubmit={addChild} />
      )}
    </>
  );
}

