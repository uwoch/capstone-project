import Image from "next/image";
import { StyledKidCard, StyledGoBackButton, StyledEditButton, StyledAddEventLink } from "./KidProfile.styled";
import { formatDate } from "../../resources/dateUtils";
import EventForm from "../EventForm/index";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function KidProfile() {
 /*  const [isEditMode, setIsEditMode] = useState(false); */
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate} = useSWR(`/api/kids/${id}`);
  
  async function handleEditKid(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const kidData = Object.fromEntries(formData);
    
    const response = await fetch(`/api/kids/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(kidData),
    });

    if (response.ok) {
      mutate();
    }
  }
  async function handleDeleteKid() {
    const response = await fetch(`/api/kids/${id}`, { method: "DELETE" });

    if (!response.ok) {
      console.log(response.status);
      return <h1>Something gone wrong!</h1>;
    }

    router.push("/");
  }
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
      <ul>
      {data?.events?.map((event) => (
          <li key={event._id}>
           <p>{event.title}</p>
           <p>{event.date}</p>
          <p>{event.image}</p>
          </li>))}
      </ul>
      <EventForm kidData={data}/>  
     {/*  <StyledGoBackButton onClick={onGoBack}>Zurück</StyledGoBackButton> */}
     {/*  <StyledEditButton>Infos bearbeiten</StyledEditButton> */}
      <StyledAddEventLink href={"/"}>Zurück</StyledAddEventLink>
      </StyledKidCard>
  );
}}