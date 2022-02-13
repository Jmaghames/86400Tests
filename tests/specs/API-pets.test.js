import axios from 'axios';
const baseUri = `http://petstore.swagger.io/#`;
const path = '/pet/{petId}';
const OK = 200;
const FormData = new URLSearchParams();

describe('Pet API Tests', () => {
  it('Get Pet details', async () => {
    {
      const config = {
        headers: {
          'Accept': 'application/json'
        },
        params: {
          petId: 991,
        },
      };
      await axios.get(`${baseUri}${path}`, config)
        .then((result) => {
          expect(result.status).toBe(OK);
        })
        .catch(
          function (error) {
            console.log('Show error notification for update pet!')
            return Promise.reject(error)
          })
    };
  })

  it('Update pet details', async () => {
    {
      FormData.append('name', 'rocky');
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'api_key': 'special-key'
        },
        params: {
          petId: 991
        },
        data: {
          data: FormData
        }
      };
      await axios.post(`${baseUri}${path}`, config)
        .then((result) => {
          expect(result.status).toBe(OK);
        })
        .catch(
          function (error) {
            console.log('Show error notification for update pet!')
            return Promise.reject(error)
          })
    };
  })

  it('Delete pet', async () => {
    {
      const config = {
        headers: {
          'Accept': 'application/json',
          'api_key': 'special-key',
        },
        params: {
          petId: 991
        },
      }
      await axios.post(`${baseUri}${path}`, config)
        .then((result) => {
          expect(result.status).toBe(OK);
        })
        .catch(
          function (error) {
            console.log('Show error notification for delete pet!')
            return Promise.reject(error)
          })
    };
  })
})