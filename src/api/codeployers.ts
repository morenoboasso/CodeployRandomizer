export interface Codeployer {
  name: string;
  photoUrl: string;
}

export const fetchCodeployers = async (): Promise<Codeployer[]> => {
  try {
    const response = await fetch("codeployers.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Error fetching codeployers:", error);
    return [];
  }
};