import styles from '../styles/App.module.css'
import React, { useState, useRef } from 'react';
import { Stats } from '../features/stats/Stats';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  ScrollView,
} from '@react-ui-org/react-ui';
import { Outlet, Link } from "react-router-dom";

function Layout() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalPrimaryButtonRef = useRef();
  const modalCloseButtonRef = useRef();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        label="Show stats"
        onClick={() => setModalOpen(true)}
       >Show Stats</button>
      <div>
        {
          modalOpen &&
          <Modal
            closeButtonRef={modalCloseButtonRef}
            primaryButtonRef={modalPrimaryButtonRef}
            className="modal"
          >
            <ModalHeader className="header">
              <ModalTitle>Stats</ModalTitle>
              <ModalCloseButton onClick={() => setModalOpen(false)}/>
            </ModalHeader>
            <ModalBody>
              <ScrollView>
                <ModalContent>
                  <Stats />
                </ModalContent>
              </ScrollView>
            </ModalBody>
          </Modal>
        }
      </div>
      <div style={{padding: "2%"}}>
      <Outlet />
      </div>
    </div>
  );
}

export default Layout;
