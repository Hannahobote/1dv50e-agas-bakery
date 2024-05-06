export async function fetchFromAPI (url, bearerToken) {
  const response = await fetch(url, {
    headers: {
      'Authorization' : `Bearer ${bearerToken}`
    }
  })

  if (!response.ok) {
   return response.status
  }

  const data = await response.json();
  return data;
}