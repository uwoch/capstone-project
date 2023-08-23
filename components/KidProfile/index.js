import Image from "next/image";
import { StyledKidCard, StyledBackLink, StyledEditButton, StyledEventList } from "./KidProfile.styled";
import { formatDate } from "../../resources/dateUtils";
import EventForm from "../EventForm";
import Event from "../Event";

export default function KidProfile({
  kidData, 
  onSubmit,
  events,
  mutate }) 
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
          <Event
          key={event._id} 
         />
          ))}
      </StyledEventList>
      <EventForm onSubmit={onSubmit}/>  
      <StyledBackLink href={"/"}>Zurück</StyledBackLink>
      </StyledKidCard>
  );
}