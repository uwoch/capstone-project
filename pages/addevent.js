import Form from "@/components/AddEventForm/AddEventForm";
import { useRouter } from "next/router";

export default function AddEvent() {
  const router = useRouter();

  async function addEvent(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const res = await fetch("api/kids", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.status === 400) {
      alert("This coffee already exists");
    }
    if (res.status === 418) {
      alert("You can't submit empty fields and/or just numbers.");
    }
    if (res.ok) {
      router.push("/");
    }
  
  }
  return <Form 
    onSubmit={addEvent}
    />;
}