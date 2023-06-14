let elevators = [];
let blocked = false;
let obj = null;
let last_floor = 0;
let new_floor = false;

const [
  nb_floors,
  width,
  nb_rounds,
  exit_floor,
  exit_pos,
  nb_total_clones,
  nb_additional_elevators,
  nb_elevators,
] = readline().split(" ").map(Number);
for (let i = 0; i < nb_elevators; i++) {
  const [elevator_floor, elevator_pos] = readline().split(" ").map(Number);
  elevators.push({
    floor: elevator_floor,
    pos: elevator_pos,
  });
}

while (true) {
  const [clone_floor, clone_pos, direction] = readline().split(" ");
  const floor = parseInt(clone_floor);
  const pos = parseInt(clone_pos);

  if (last_floor < floor) {
    new_floor = true;
  }

  let closest_elevator = null;
  const reachable_elevators = elevators.filter(
    (elevator) => elevator.floor === floor
  );
  let closest = 999999;

  if (reachable_elevators.length > 0) {
    for (let i = 0; i < reachable_elevators.length; i++) {
      if (Math.abs(pos - reachable_elevators[i].pos) < closest) {
        closest = Math.abs(pos - reachable_elevators[i].pos);
        closest_elevator = reachable_elevators[i];
      }
    }
    obj = closest_elevator;
  } else {
    obj = {
      floor: exit_floor,
      pos: exit_pos,
    };
  }

  if (direction === "LEFT") {
    if (obj.pos > pos && !blocked) {
      console.log("BLOCK");
      blocked = true;
    } else {
      console.log("WAIT");
    }
  } else {
    if (obj.pos < pos && !blocked) {
      console.log("BLOCK");
      blocked = true;
    } else {
      console.log("WAIT");
    }
  }

  if (new_floor) {
    blocked = false;
    last_floor = floor;
    new_floor = false;
  }
}
