import KidProfile from "@/components/KidProfile";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function KidDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, mutate} = useSWR(`/api/kids/${id}`);
  
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
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Where are the kids???</div>;
  }

  return (
    <KidProfile
       onSubmit={handleSubmit}
       kidData={data} />
  );
}