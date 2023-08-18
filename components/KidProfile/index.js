import Image from "next/image";
import { StyledKidCard, StyledEditButton, StyledBackLink, StyledEventList } from "./KidProfile.styled";
import { formatDate } from "../../resources/dateUtils";
import EventForm from "../EventForm";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function KidProfile({ handleSubmit }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate} = useSWR(`/api/kids/${id}`);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Where are the kids???</div>;
  }

 {
  return (
      <StyledKidCard>
        <Image
          width={200}
          height={200}
          src={data.image}
          alt="Kid Photo"
        />
        <h2>{data.name} </h2>
        <h3>* {formatDate(data.birthDate)}</h3>  
      <StyledEventList>
      {data?.events?.map((event) => (
          <li key={event._id}>
           <p>{event.title}</p>
           <p>{formatDate(event.date)}</p>
        {/*   <p>{event.image}</p> */}
          </li>))}
      </StyledEventList>
      <EventForm onSubmit={handleSubmit}/>  
      <StyledBackLink href={"/"}>Zurück</StyledBackLink>
      </StyledKidCard>
  );
}}