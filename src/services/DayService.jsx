const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
const apiKey = "b24b6c17108082809c46ccf97cf164f8";

const DayService = {
  async getAll(city) {
    try {
      const response = await fetch(
        `${apiUrl}${city}&units=metric&appid=${apiKey}`
      );
      const result = await response.json();
      return result || [];
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },
};

export default DayService;
