import { User,columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<User[]> => {
 
return [
  {
    id: "728ed521",
    avatar: "/users/34.png",
    status: "active",
    fullName: "John Doe",
    email: "johndoe@gmail.com",
  },
  {
    id: "728ed522",
    avatar: "/users/12.png",
    status: "active",
    fullName: "Sarah Wilson",
    email: "sarahwilson@gmail.com",
  },
  {
    id: "728ed523",
    avatar: "/users/7.png",
    status: "inactive",
    fullName: "Michael Brown",
    email: "michaelbrown@gmail.com",
  },
  {
    id: "728ed524",
    avatar: "/users/21.png",
    status: "active",
    fullName: "Emily Davis",
    email: "emilydavis@gmail.com",
  },
  {
    id: "728ed525",
    avatar: "/users/45.png",
    status: "active",
    fullName: "David Miller",
    email: "davidmiller@gmail.com",
  },
  {
    id: "728ed526",
    avatar: "/users/18.png",
    status: "inactive",
    fullName: "Sophia Anderson",
    email: "sophiaanderson@gmail.com",
  },
  {
    id: "728ed527",
    avatar: "/users/29.png",
    status: "active",
    fullName: "James Taylor",
    email: "jamestaylor@gmail.com",
  },
  {
    id: "728ed528",
    avatar: "/users/3.png",
    status: "active",
    fullName: "Olivia Martinez",
    email: "oliviamartinez@gmail.com",
  },
  {
    id: "728ed529",
    avatar: "/users/41.png",
    status: "inactive",
    fullName: "Daniel Thompson",
    email: "danielthompson@gmail.com",
  },
  {
    id: "728ed52a",
    avatar: "/users/16.png",
    status: "active",
    fullName: "Emma Robinson",
    email: "emmarobinson@gmail.com",
  },
]




};

const UsersPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Users</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  );
};

export default UsersPage;
