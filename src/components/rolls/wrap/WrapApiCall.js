import { useRouter, Router } from 'next/router'

export const WrapApiCall = () => {
    axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/food`,
      })
        .then(function (response) {
          setRollFood(response.data);
        });
      axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/attraction`,
      })
        .then(function (response) {
          setRollAttraction(response.data);
        });
      axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/person`,
      })
        .then(function (response) {
          setRollPerson(response.data);
        });
      axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/fashion`,
      })
        .then(function (response) {
          setRollFashion(response.data);
        });
      axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/accommodation`,
      })
        .then(function (response) {
          setRollAccommodation(response.data);
        });
      axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/transportation`,
      })
        .then(function (response) {
          setRollTransportation(response.data);
        });
      axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/other`,
      })
        .then(function (response) {
          setRollOther(response.data);
        });
    }