import axios from "axios";
import { useForm } from "react-hook-form";

const GetRolls = (props) => {
  const API = "http://localhost:3001"
  const { handleSubmit } = useForm({});
  const submitForm = (data) => {
    axios({
      method: 'GET',
      url: `${API}/api/v1/rolls`,
    })
      .then(function (response) {
        console.log(response.data)
      });
  }
  
  return (
    <div className="login-container">
        <form className="form" onSubmit={handleSubmit(submitForm)}>
          <button className="bg-white p-2 m-2" type="submit">
            Test getting rolls here
          </button>
        </form>
    </div>
  );
};

export default GetRolls;