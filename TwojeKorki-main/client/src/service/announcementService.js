import axios from 'axios';

export const addAnnouncement= async (form) => {
  try {
    return await axios.post(`http://localhost:5000/annoucements`, form);
  } catch (err) {
    return err.response.data;
  }
};

export const getAnnoucements = async(filters) => {
  let url="?";
  if(filters){
    if(filters.category){
      url += `category=${filters.category}&`
    }
    if(filters.location){
      url += `location=${filters.location}&`
    }
    if(filters.option){
      url += `option=${filters.option}&`
    }
    if(filters.minPrice){
      url += `minPrice=${filters.minPrice}&`
    }
    if(filters.maxPrice){
      url += `maxPrice=${filters.maxPrice}&`
    }
    if(filters.sortOption){
      url += `sortOption=${filters.sortOption}`
    }
  }
  console.log(url);
  try{
    return await axios.get(`http://localhost:5000/annoucements${url}`)
  }catch(err){
    return err.response.data;
  }
}

export const deleteAnnoucement = async(id) => {
  try{
    return await axios.delete(`http://localhost:5000/annoucements/${id}`)
  }catch(err) {
    return err.response.data;
  }
}

export const getAnnoucementById = async(id) => {
  try{
    return await axios.get(`http://localhost:5000/annoucements/${id}`)
  }catch(err){
    return err.message;
  }
}

export const updateAnnoucement = async(id, data) => {
  try {
    console.log(data);
      return await axios.put(`http://localhost:5000/annoucements/${id}`, data)
  } catch (err) {
    return err.message;
  }
}