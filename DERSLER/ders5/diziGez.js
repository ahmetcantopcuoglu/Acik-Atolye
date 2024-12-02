const yazdir = (x) => {
    for (let index = 0; index < x.length; index++) {
      const element = x[index];
      console.log(element);
    }
  };


  const tersyazdir = (y) => {
for (let index=y.length-1; index>=0 ; index--)
{
    const element = y[index];
    console.log(element);
 }
};
   
  module.exports = { yazdir };
  module.exports = { tersyazdir };
   
 