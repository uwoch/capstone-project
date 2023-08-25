import KidProfile from "@/components/KidProfile";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function KidDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data: kidData, isLoading, mutate} = useSWR(`/api/kids/${id}`);
  
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
      const eventData = await responseEvent.json();

      if (kidData) {
      const responseKid = await fetch(`/api/kids/${kidData?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          events: [...kidData?.events, eventData.data._id],
        }),
      });

      if (responseKid.ok) {
        mutate();
        
      }
    }
    event.target.reset();
  }
}
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!kidData) {
    return <div>Where are the kids???</div>;
  }

  return (
    <KidProfile
       onSubmit={handleSubmit}
       kidData={kidData}
       mutate={mutate} />
  );
}