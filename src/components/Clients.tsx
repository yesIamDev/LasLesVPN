import React, { FunctionComponent, useState, useEffect, Fragment } from "react";
import { IoMdAdd } from "react-icons/io";
import Modal from "./Modal";
import { useForm } from "react-hook-form";

type tClient = {
  name: string;
  postname: string;
  nationalite: string;
};

const Clients: FunctionComponent = () => {
  const [Clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

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
      <div className="ml-20 flex justify-between mx-10">
        <div>
          <h1 className="font-Rubik text-lg font-extrabold">Clients</h1>
        </div>
        <Fragment>
          <div>
            <button
              data-modal-target="staticModal"
              data-modal-toggle="staticModal "
              className="block text-white bg-black focus:outline-none font-medium  rounded-lg  text-sm px-5 py-2.5 text-center"
              type="button"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <IoMdAdd />
            </button>
          </div>
        </Fragment>
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
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div className="p-2">
          <h2 className="text-lg font-Rubik text-gray-900 font-semibold text-center">
            Ajouter un nouveau client
          </h2>
        </div>
        <div className="flex flex-col justify-center mx-2">
          <div className="max-w-md w-full mx-auto mt-2 bg-white p-6">
            <form action="" className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label htmlFor="" className="text-sm font-bold text-gary-600 block">
                  Nom
                </label>
                <input
                  name="name"
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm font-bold text-gary-600 block">
                  PostNom
                </label>
                <input
                  name="postname"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm font-bold text-gary-600 block">
                  Nationalite
                </label>
                <input
                  name="nationalite"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                />
              </div>
              <div>
                <button className="w-full py-2 px-4 bg-gray-900 hover:border rounded-md text-white text-sm font-Rubik">
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Clients;
