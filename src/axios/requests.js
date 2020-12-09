import axios from "./axios";

export const fetchMembers = async (clubName) => {
  try {
    // console.log(clubName);
    const { data } = await axios.get(`/api/${clubName}member/show`);
    // console.log(data, typeof data);
    return data.response;
  } catch (error) {}
};

export const checkLogin = async (username, password) => {
  try {
    // console.log(username, password);
    const { data } = await axios.post(`/api/admin/login`, {
      username,
      password,
    });
    if (data.message === "Login successful") {
      return data;
    } else {
      return data.message;
    }
  } catch (error) {}
};

export const fetchTransactions = async (clubname) => {
  try {
    const { data } = await axios.get(`/api/${clubname}expense/show`);
    console.log(data.response);
    return data.response;
  } catch (error) {
    console.log(error.message);
  }
};

export const sendTransactions = async ({ Name, Amount, Type }) => {
  try {
    const { data } = await axios.post(
      `/api/${sessionStorage.getItem("clubName")}expense/credit`,
      { Name, Amount, Type }
    );
    // console.log(data.message);
    return data.message;
  } catch (error) {
    console.log(error.message);
  }
};

export const removeTransactions = async ({ Name }) => {
  try {
    const { data } = await axios.post(
      `/api/${sessionStorage.getItem("clubName")}expense/destroy`,
      { Name }
    );
    // console.log(data.message);
    return data.message;
  } catch (error) {
    console.log(error.message);
  }
};
export const addMembers = async ({ Name, Sic, Branch, Contact }) => {
  try {
    const { data } = await axios.post(
      `/api/${sessionStorage.getItem("clubName")}member/add`,
      { Name, Sic, Branch, Contact }
    );
    console.log(data.message);
    return data.message;
  } catch (error) {
    console.log(error.message);
  }
};
export const removeMembers = async ({ Name, Sic }) => {
  try {
    const { data } = await axios.post(
      `/api/${sessionStorage.getItem("clubName")}member/destroy`,
      { Sic }
    );
    console.log(data.message);
    return data.message;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
