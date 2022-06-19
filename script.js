const fetchRandomUser = async () => {
  //
  for (var i = 0; i < 32; i++) {
    let response = await fetch('https://randomuser.me/api/');
    let parsedData = await response.json();
    // console.log(parsedData);
    try {
      const img = parsedData.results[0].picture.large;
      const name = parsedData.results[0].name;
      const fullName = `${name.first} ${name.last}`.toLowerCase();
      const nat = parsedData.results[0].nat.toLowerCase();

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

      //   // to display image
      //   const displayImg = document.querySelector('#img');
      //   const img = parsedData.results[0].picture.large;
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

      // to change color depending on gender
      const icon = document.querySelector('#icons');
      const gender = parsedData.results[0].gender;
      if (gender === 'male') icon.style.color = 'red';
      else icon.style.color = 'green';
    } catch (error) {
      console.log('Error!: ', error);
    }
  }
};

fetchRandomUser();
