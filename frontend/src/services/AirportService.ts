import axios from 'axios'


async function getAirports() {
    try {
      const response = await axios.get('/api/v1/airports');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }













export default {
  getAirports
}




