const Location = {
  async getLocation() {
    try {
      const response = await fetch("https://ipapi.co/city/");
      const result = await response.text();
      return result || [];
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },
};
export default Location;
