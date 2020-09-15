import axios from "axios";

const Base_URL = 'https://iunaptk810.execute-api.ap-southeast-1.amazonaws.com/dev/api/';

export default {
  getUsers: async () => {
    try {
      const res = await axios.get(`${Base_URL}users`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      console.log('error while fetching users', err);
    }
  },
};