import { get } from "http";
import React, { FunctionComponent, useState, useEffect } from "react";

type tClient = {
  name: string;
  postname: string;
  nationalite: string;
};

const Clients: FunctionComponent = () => {
  const [Clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const res = await fetch("http://localhost:3333/api/clients/", {
        method: "get",
      });
      const data = await res.json();
      setClients(data);
    };
    fetchClients();
  }, []);

  return (
    <div className="flex flex-col gap-4 m-3">
      <div className="ml-20">
        <h1 className="font-Rubik text-lg font-extrabold">Clients</h1>
      </div>
      <div className="my-1 relative overflow-x-auto shadow-sm">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-sm text-gray-700 bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Noms
              </th>
              <th scope="col" className="px-6 py-3">
                Postnoms
              </th>
              <th scope="col" className="px-6 py-3">
                Nationalite
              </th>
            </tr>
          </thead>
          <tbody>
            {Clients?.map((client: tClient) => {
              return (
                <tr className="bg-white border-b">
                  <td className="px-6 py-4">{client.name}</td>
                  <td className="px-6 py-4">{client.postname}</td>
                  <td className="px-6 py-4">{client.nationalite}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clients;
