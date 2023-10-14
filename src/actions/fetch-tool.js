// "use server";

export async function fetchTools(page) {
  const perPage = 10;
  const apiUrl = `http://localhost:3000/api/tools?page=${page}&limit=${perPage}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}