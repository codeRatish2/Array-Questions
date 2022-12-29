const user = [
    {
       name: 'Ratish Dalvi',
       email: 'ratishdalvi2@gmail.com',
       age: 26,
       dob: '30/11/1996',
       active: true
    },
    {
      name: 'Raj Dalvi',
      email: 'rajdalvi2676@gmail.com',
      age: 23,
      dob: '13/06/1999',
      active: true


    }
];

for (const key in user) {

    console.log(`${key}: ${user[key]}`);
}
