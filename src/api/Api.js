import * as axios from "axios";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";

let instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "10da0bdf-c21e-4c14-a26b-7b313ec226b3",
  },
});

export const UserApi = {
  getUser(offset) {
    return instance
      .get(
        `${baseURL}users?page=${offset}&
    count=1`
      )
      .then((response) => {
        return response.data;
      });
  },

  follow(id) {
    return instance.post(`${baseURL}follow/${id}`);
  }
};

export const ProfileApi = {
  profileId(id = 2) {
    return instance.get(`${baseURL}profile/${id}`).then((response) => {
      return response.data;
    });
  }, 

  getStatus(id = 2) {
    return instance.get(`${baseURL}profile/status/${id}`).then((response) => {
      return response.data;
    });
  },

  updateStatus(status) {
    return instance.put(`${baseURL}profile/status`, {status: status});
  }
};

export const AuthApi = {
  auth() {
    return instance.get(`${baseURL}auth/me`).then((response) => {
      return response.data;
    });
  }
};