export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Wilian',
};

const passenger2: Passenger = {
  name: 'Nicole',
  children: ['Natalia', 'Elizabet'],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;

  console.log(passenger.name, howManyChildren);
};

printChildren(passenger1);
