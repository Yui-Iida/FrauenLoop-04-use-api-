const fetchRandomUser = async () => {
  // let userinfos = [];
  let response = await fetch(
    'https://randomuser.me/api/?results=40'
    // /?inc=gender,name,nat,picture
  );
  let parsedData = await response.json();

  const displayUser = parsedData => {
    console.log(parsedData);
    try {
      for (let i = 0; i <= parsedData.length; i++) {
        let img = parsedData[i].picture.large;
        let name = parsedData[i].name;
        let fullName = `${name.first} ${name.last}`.toLowerCase();
        let nat = parsedData[i].nat.toLowerCase();

        const users = document.querySelector('#users');
        users.insertAdjacentHTML(
          'afterbegin',
          `
        
      <div class="user">
      <img src=${img} class="img"/>
      <p>${fullName}</p>
      <span class="flag-icon flag-icon-${nat}"></span>
      <div id="icons">
      <i class="fa fa-brands fa-github"></i>
      <i class="fa fa-brands fa-facebook-f"></i>
      <i class="fa fa-brands fa-twitter"></i>
    </div>
    </div>
      `
        );
        // to change color depending on gender
        let icon = document.querySelector('#icons');
        let gender = parsedData[i].gender;
        if (gender === 'male') icon.style.color = 'red';
        else icon.style.color = 'green';
      }
      //   // to display image
      //   const displayImg = document.querySelector('#img');
      //   const img = parsedData[0].picture.large;
      //   displayImg.insertAdjacentHTML(
      //     'afterend', `<img src=${img} class="img"/>`
      //   );
      //   // to display name
      //   const displayName = document.querySelector('#name');
      //   const name = parsedData.results[0].name;
      //   const fullName = `${name.first} ${name.last}`.toLowerCase();
      //   displayName.insertAdjacentHTML('afterend', `${fullName}`);
      //   // to display flag
      //   const displayCountry = document.querySelector('#flag');
      //   // const country = parsedData.results[0].location.country;
      //   const nat = parsedData.results[0].nat.toLowerCase();
      //   // displayCountry.insertAdjacentHTML('afterend', `${country}`);
      //   console.log(nat);
      //   displayCountry.insertAdjacentHTML(
      //     'afterend', `<span class="flag-icon flag-icon-${nat}"></span>`
      //   );
    } catch (error) {
      console.log('Error!: ', error);
    }
  };

  displayUser(parsedData.results);
  // pass something only we need
};

fetchRandomUser();
