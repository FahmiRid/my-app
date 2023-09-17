import Axios from "axios";

export const fetchPermissions = async () => {
  const apiUrl = "http://localhost:5000/salesforce/user/role/permission/list";

  try {
    const response = await Axios.post(apiUrl, {
      product_line_id: 1,
      role_id: 1,
    });
    return response.data.data.list;
  } catch (error) {
    console.error("Error fetching permissions:", error);
    throw error;
  }
};

export const storeData = async (dataToSend) => {
  const apiUrl = "http://localhost:5000/api/storeData";

  try {
    const response = await Axios.post(apiUrl, dataToSend);
    return response.data;
  } catch (error) {
    console.error("Error storing data:", error);
    throw error;
  }
};
