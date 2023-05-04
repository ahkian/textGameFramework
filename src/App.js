import styles from './App.module.css'
import React, { useState, useRef } from 'react';
import { Stats } from './features/stats/Stats';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
} from '@react-ui-org/react-ui';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalPrimaryButtonRef = useRef();
  const modalCloseButtonRef = useRef();

  return (
    <div className={styles.container}>
      <button
        label="Show stats"
        onClick={() => setModalOpen(true)}
       >Show Stats</button>
      <div>
        {
          modalOpen &&
          <Modal
            closeButtonRef={modalCloseButtonRef}
            primaryButtonRef={modalPrimaryButtonRef}
            className={styles.modal}
          >
            <ModalHeader>
              <ModalTitle>Stats</ModalTitle>
              <ModalCloseButton onClick={() => setModalOpen(false)}/>
            </ModalHeader>
            <ModalBody>
              <ModalContent>
                <Stats />
              </ModalContent>
            </ModalBody>
          </Modal>
        }
      </div>
    </div>
  );
}

export default App;
