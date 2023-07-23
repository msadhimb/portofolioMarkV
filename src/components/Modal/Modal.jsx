import { Button } from "flowbite-react";
import { Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import data from "../../data/data";

const Modals = ({ show, handleModal, id }) => {
  const [dataById, setDataById] = useState(data.find((item) => item.id === id));

  useEffect(() => {
    setDataById(data.find((item) => item.id === id));
  }, [id]);
  return (
    <>
      <Modal show={show} onClose={() => handleModal(false)}>
        <Modal.Header className="bg-gray-800 border-b-0" color="white">
          <h2 className="text-white">{dataById?.name}</h2>
        </Modal.Header>
        <Modal.Body className=" bg-slate-800">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => handleModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
