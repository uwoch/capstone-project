  async function handleEditEvent(e, event, mutate, setIsEditMode ) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const eventData = Object.fromEntries(formData);

    const response = await fetch(`/api/events/${event?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });
    if (response.ok) {
      mutate();
      setIsEditMode(false);
    }
  }
  async function handleDeleteEvent(event, kidData, mutate) {
    const shouldDelete = window.confirm(
      `Möchtest du das Ereignis wirklich löschen?`
    );
    if (shouldDelete) {
    const responseEvent = await fetch(`/api/events/${event?._id}`, {
      method: "DELETE"});
    
    if (responseEvent.ok) {
      const responseKid = await fetch(`/api/kids/${kidData?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          events: kidData?.events.filter((oneEvent) => {
            return oneEvent._id == event._id ? false : true;
          }),
        }),
      });
      if (responseKid.ok) {
        mutate();
      }
    }}}

    export { handleEditEvent, handleDeleteEvent };