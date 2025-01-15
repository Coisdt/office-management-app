import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

const offices = [
  {
    id: 1,
    name: "Main Office",
    description: "Headquarters",
    occupants: 10,
    selectedColor: "#489DDA",
    phoneNumber: "123 456 7890",
    address: "123 Main St, Cityville, Country",
    email: "mainoffice@company.com",
    capacity: 20,
    staffMembersInOffice: [
      {
        id: 1,
        name: "John Doe",
        position: "Manager",
        email: "john.doe@company.com",
        imageId: 1,
      },
      {
        id: 2,
        name: "Jane Smith",
        position: "Administrator",
        email: "jane.smith@company.com",
        imageId: 2,
      },
      {
        id: 3,
        name: "Emily Johnson",
        position: "Accountant",
        email: "emily.johnson@company.com",
        imageId: 3,
      },
    ],
  },
  {
    id: 2,
    name: "Branch A",
    description: "Downtown office",
    occupants: 5,
    selectedColor: "#FF9B71",
    phoneNumber: "234 567 8901",
    address: "456 Elm St, Downtown, Country",
    email: "brancha@company.com",
    capacity: 10,
    staffMembersInOffice: [
      {
        id: 4,
        name: "Alice Brown",
        position: "Team Lead",
        email: "alice.brown@company.com",
        imageId: 4,
      },
      {
        id: 5,
        name: "Bob White",
        position: "Developer",
        email: "bob.white@company.com",
        imageId: 5,
      },
    ],
  },
  {
    id: 3,
    name: "Branch B",
    description: "Suburban office",
    occupants: 8,
    selectedColor: "#DBBADD",
    phoneNumber: "345 678 9012",
    address: "789 Oak St, Suburbia, Country",
    email: "branchb@company.com",
    capacity: 8,
    staffMembersInOffice: [
      {
        id: 6,
        name: "Catherine Green",
        position: "Designer",
        email: "catherine.green@company.com",
        imageId: 1,
      },
      {
        id: 7,
        name: "David Black",
        position: "Engineer",
        email: "david.black@company.com",
        imageId: 2,
      },
    ],
  },
  {
    id: 4,
    name: "Branch C",
    description: "Rural office",
    occupants: 3,
    selectedColor: "#A9F0D1",
    phoneNumber: "456 789 0123",
    address: "101 Pine St, Countryside, Country",
    email: "branchc@company.com",
    capacity: 15,
    staffMembersInOffice: [
      {
        id: 8,
        name: "Evelyn Gray",
        position: "Supervisor",
        email: "evelyn.gray@company.com",
        imageId: 3,
      },
      {
        id: 9,
        name: "Frank Blue",
        position: "Assistant",
        email: "frank.blue@company.com",
        imageId: 4,
      },
    ],
  },
];

mock.onGet("/api/offices").reply(200, offices);

export { offices };
