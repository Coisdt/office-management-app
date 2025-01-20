import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

const offices = [
  {
    id: 1,
    name: "Main Office",
    description: "Headquarters",
    occupants: 10,
    selectedColor: 9,
    phoneNumber: "123 456 7890",
    address: "123 Main St, Cityville, Country",
    email: "mainoffice@company.com",
    capacity: 20,
    staffMembersInOffice: [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        position: "Manager",
        email: "john.doe@company.com",
        imageId: 1,
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        position: "Administrator",
        email: "jane.smith@company.com",
        imageId: 2,
      },
      {
        id: 3,
        firstName: "Emily",
        lastName: "Johnson",
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
    selectedColor: 2,
    phoneNumber: "234 567 8901",
    address: "456 Elm St, Downtown, Country",
    email: "brancha@company.com",
    capacity: 10,
    staffMembersInOffice: [
      {
        id: 4,
        firstName: "Alice",
        lastName: "Brown",
        position: "Team Lead",
        email: "alice.brown@company.com",
        imageId: 4,
      },
      {
        id: 5,
        firstName: "Bob",
        lastName: "White",
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
    selectedColor: 5,
    phoneNumber: "345 678 9012",
    address: "789 Oak St, Suburbia, Country",
    email: "branchb@company.com",
    capacity: 8,
    staffMembersInOffice: [
      {
        id: 6,
        firstName: "Catherine",
        lastName: "Green",
        position: "Designer",
        email: "catherine.green@company.com",
        imageId: 1,
      },
      {
        id: 7,
        firstName: "David",
        lastName: "Black",
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
    selectedColor: 7,
    phoneNumber: "456 789 0123",
    address: "101 Pine St, Countryside, Country",
    email: "branchc@company.com",
    capacity: 15,
    staffMembersInOffice: [
      {
        id: 8,
        firstName: "Evelyn",
        lastName: "Gray",
        position: "Supervisor",
        email: "evelyn.gray@company.com",
        imageId: 3,
      },
      {
        id: 9,
        firstName: "Frank",
        lastName: "Blue",
        position: "Assistant",
        email: "frank.blue@company.com",
        imageId: 4,
      },
    ],
  },
];

// MOCK GET ALL OFFICES
mock.onGet("/api/offices").reply(200, offices);

// Mock POST ADD OFFICE
mock.onPost("/api/offices").reply((config) => {
  const newOffice = JSON.parse(config.data);
  newOffice.id = offices.length + 1;
  offices.push(newOffice);
  return [200, newOffice];
});

// Mock GET OFFICE BY ID
mock.onGet(/\/api\/offices\/\d+/).reply((config) => {
  const officeId = parseInt(config.url.match(/\/api\/offices\/(\d+)/)[1]);
  const office = offices.find((office) => office.id === officeId);
  if (office) {
    return [200, office];
  } else {
    return [404, { message: "Office not found" }];
  }
});

// MOCK DELETE STAFF MEMBER
mock.onDelete(/\/api\/offices\/\d+\/staff\/\d+/).reply((config) => {
  const match = config.url.match(/\/api\/offices\/(\d+)\/staff\/(\d+)/);
  const officeId = parseInt(match[1]);
  const staffMemberId = parseInt(match[2]);

  const office = offices.find((office) => office.id === officeId);

  if (office) {
    const staffMemberIndex = office.staffMembersInOffice.findIndex(
      (staff) => staff.id === staffMemberId
    );
    if (staffMemberIndex !== -1) {
      office.staffMembersInOffice.splice(staffMemberIndex, 1);
      return [200];
    } else {
      return [404, { message: "Staff member not found" }];
    }
  } else {
    return [404, { message: "Office not found" }];
  }
});

// Mock DELETE OFFICE
mock.onDelete(/\/api\/offices\/\d+/).reply((config) => {
  const officeId = parseInt(config.url.match(/\/api\/offices\/(\d+)/)[1]);
  const officeIndex = offices.findIndex((office) => office.id === officeId);
  if (officeIndex !== -1) {
    offices.splice(officeIndex, 1);
    return [200];
  } else {
    return [404, { message: "Office not found" }];
  }
});

// MOCK ADD STAFF MEMBER
mock.onPost(/\/api\/offices\/\d+\/staff/).reply((config) => {
  const officeId = parseInt(
    config.url.match(/\/api\/offices\/(\d+)\/staff/)[1]
  );
  const newStaffMember = JSON.parse(config.data);

  const office = offices.find((office) => office.id === officeId);
  if (office) {
    newStaffMember.id = office.staffMembersInOffice.length + 1; // Generate a new ID
    office.staffMembersInOffice.push(newStaffMember);
    return [200, newStaffMember];
  } else {
    return [404, { message: "Office not found" }];
  }
});

// MOCK EDIT STAFF MEMBER
mock.onPut(/\/api\/offices\/\d+\/staff\/\d+/).reply((config) => {
  const match = config.url.match(/\/api\/offices\/(\d+)\/staff\/(\d+)/);
  const officeId = parseInt(match[1]);
  const staffMemberId = parseInt(match[2]);
  const updatedStaffMember = JSON.parse(config.data);

  const office = offices.find((office) => office.id === officeId);
  if (office) {
    const staffMemberIndex = office.staffMembersInOffice.findIndex(
      (member) => member.id === staffMemberId
    );
    if (staffMemberIndex !== -1) {
      office.staffMembersInOffice[staffMemberIndex] = {
        ...office.staffMembersInOffice[staffMemberIndex],
        ...updatedStaffMember,
      };
      return [200, office.staffMembersInOffice[staffMemberIndex]];
    } else {
      return [404, { message: "Staff member not found" }];
    }
  } else {
    return [404, { message: "Office not found" }];
  }
});

// Mock PUT EDIT OFFICE
mock.onPut(/\/api\/offices\/\d+/).reply((config) => {
  const officeId = parseInt(config.url.match(/\/api\/offices\/(\d+)/)[1]);
  const updatedOffice = JSON.parse(config.data);

  const officeIndex = offices.findIndex((office) => office.id === officeId);
  if (officeIndex !== -1) {
    offices[officeIndex] = { ...offices[officeIndex], ...updatedOffice };
    return [200, offices[officeIndex]];
  } else {
    return [404, { message: "Office not found" }];
  }
});

export { offices };
