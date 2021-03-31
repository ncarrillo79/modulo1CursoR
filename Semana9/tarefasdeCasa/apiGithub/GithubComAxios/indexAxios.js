axios
  .get('https://api.github.com/users/ncarrillo79')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.warn(error);
  });
