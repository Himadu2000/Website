import React, { Component } from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle
} from "@ionic/react";

export default class Log extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Change Log</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='logo'>
          <img src='/assets/img/appicon.svg' alt='Ionic Logo' height='100' />
        </div>
        <div>
          <p>This is the Change Log</p>
        </div>
      </>
    );
  }
}
