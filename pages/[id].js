import KidProfile from "@/components/KidProfile";

export default function KidDetails() {

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const eventData = Object.fromEntries(formData);

    const responseEvent = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    if (responseEvent.ok) {
      const data = await responseEvent.json();
      const responseKid = await fetch(`/api/kids/${kidData?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          events: [...kidData?.events, data.data._id],
        }),
      });

      if (responseKid.ok) {
        mutate();
      }
    }
  }
  return (
    <KidProfile
      onSubmit={handleSubmit}
    />
  );
}