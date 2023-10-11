"use server";

export async function fetchTools(page) {
  const perPage = 24;
  const apiUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data ;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}