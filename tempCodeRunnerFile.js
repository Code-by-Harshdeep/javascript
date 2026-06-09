const car={
    name:"Benz",
    model:2026,
    engine:"450cc",
    like: function() {
        let d=console.log(`I like ${car.name} because something it has that engine ${car.engine}`);
  return d;
    },
}
console.log(car);
console.log(car.like());