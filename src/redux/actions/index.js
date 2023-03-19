import * as actions from "../actionTypes";
import axios from "axios";

export const addCity = (city) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`);
    
    console.log(data)

    dispatch({
      type: actions.ADD_CITY,
      payload: data,
    });

    return "todo ok"
  } catch (error) {
    console.log(error);
  }
};

export const deleteCity = (id, array) => {

  console.log("esto es id",id)
  console.log("esto es array",array)
  
  const data = array.filter(e => e.sys.id !== id)

  console.log("esto es data",data)


    return{
      type: actions.DELETE_CITY,
      payload: data,
    };

};