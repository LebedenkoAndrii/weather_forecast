const apiUrl = "https://api.weatherbit.io/v2.0/forecast/daily?";
const apiKey = "3d66fe9a50a840e7aa5ade137f065004";

const DayService = {
  async getAll(city) {
    try {
      const response = await fetch(
        `${apiUrl}city=${city}&days=7&NC&key=${apiKey}`
      );
      const result = await response.json();
      return result.data || [];
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },
};

export default DayService;
