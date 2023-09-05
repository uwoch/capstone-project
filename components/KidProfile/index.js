import { StyledKidCard, StyledEventList, StyledName, StyledBirthDate, StyledImage } from "./KidProfile.styled";
import { formatDate } from "../../resources/dateUtils";
import EventForm from "../EventForm";
import Event from "../Event";

export default function KidProfile({
  kidData, 
  onSubmit,
  mutate }) 
  {

  return (
      <StyledKidCard>
        <StyledImage
          width={150}
          height={150}
          src={kidData.image}
          alt="Kid Photo"
        />
        <StyledName>{kidData.name}</StyledName>
        <StyledBirthDate>🎂 {formatDate(kidData.birthDate)}</StyledBirthDate>  
      <StyledEventList>
        {kidData?.events?.map((event) => (
          <Event
          key={event._id} 
          kidData={kidData} 
          mutate={mutate}
          event={event}
         />
          ))}
      </StyledEventList>
      <EventForm onSubmit={onSubmit}/>  
      </StyledKidCard>
  );
}