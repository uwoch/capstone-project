import Image from "next/image";
import { StyledKidCard, StyledEditButton, StyledBackLink, StyledEventList } from "./KidProfile.styled";
import { formatDate } from "../../resources/dateUtils";
import EventForm from "../EventForm";

export default function KidProfile({
  kidData, 
  onSubmit }) 
  {

  return (
      <StyledKidCard>
        <Image
          width={200}
          height={200}
          src={kidData.image}
          alt="Kid Photo"
        />
        <h2>{kidData.name} </h2>
        <h3>* {formatDate(kidData.birthDate)}</h3>  
      <StyledEventList>
      {kidData?.events?.map((event) => (
          <li key={event._id}>
           <p>{event.title}</p>
           <p>{formatDate(event.date)}</p>
        {/*   <p>{event.image}</p> */}
          </li>))}
      </StyledEventList>
      <EventForm onSubmit={onSubmit}/>  
      <StyledBackLink href={"/"}>Zurück</StyledBackLink>
      </StyledKidCard>
  );
}