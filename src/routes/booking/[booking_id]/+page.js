// @ts-nocheck
export const load = async ({fetch, params}) => {
    
    const fetchBooking = async (id) => {
      const res = await fetch(`${import.meta.env.VITE_SVELTE_APP_API_URL}/retrieve-appointment/${id}`);
      const data = await res.json();
      return data;
    }
  
    const booking = await fetchBooking(params.booking_id);
  
    return {
      booking: booking
    }
  
} 