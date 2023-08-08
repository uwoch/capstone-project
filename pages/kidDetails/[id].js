import useSWR from "swr";
import { useRouter } from "next/router";
import KidProfile from "@/components/KidProfile/KidProfile";

export default function KidDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/kids/${id}`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Where are the kids???</div>;
  }

  return (
    <KidProfile
      kidData={data}
    />
  );
}