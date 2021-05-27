axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        console.log(response.data);
        let table = document.getElementById('tab1');
        let HTML = `        
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>phone</th>
          <th>website</th>
          <th>company</th>
          <th>address</th>
        </tr>`;

        // console.log(Object.values(response.data[0]));
        response.data.forEach(user => {
            HTML +=
                `<tr>
                  <td> ${user.id} </td>
                  <td> ${user.name} </td>
                  <td> ${user.username} </td>
                  <td> ${user.email} </td>
                  <td> ${user.phone} </td>
                  <td> ${user.website} </td>
                  <td>
                    <ul>
                      <li>${user.company.name}</li>
                      <li>${user.company.catchPhrase}</li>
                      <li>${user.company.bs}</li> 
                    </ul>
                  </td>
                  <td>
                    <ol>
                      <li>${user.address.city}</li>
                      <li>${user.address.street}</li>
                      <li>${user.address.suite}</li> 
                      <li>${user.address.zipcode}</li> 
                      <li>
                        <ul>
                          <li>${user.address.geo.lat}</li> 
                          <li>${user.address.geo.lng}</li> 
                        </ul>
                      </li> 
                    </ol>
                  </td>
                </tr>`;
        });
        table.innerHTML = HTML;

    })
    .catch(function(error) {
        // handle error
        console.log(error);
    });