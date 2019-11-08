import React, { Component } from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle
} from "@ionic/react";
type State = {
  username: string | null;
  password: string | null;
};

export default class Signup extends Component<{}, State> {
  signupFormRef: React.Ref<HTMLFormElement>;

  constructor(props: {}) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
    this.signupFormRef = React.createRef();
  }

  onSignup() {}
  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Signup</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='logo'>
          <img src='/assets/img/appicon.svg' alt='Ionic Logo' height='100' />
        </div>
        <div id='firebaseui-auth-container'></div>
      </>
    );
  }
}

/**import React, { Component } from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonRow,
  IonCol,
  IonIcon
} from "@ionic/react";
import firebase from "firebase";
import * as firebaseui from "firebaseui";

type State = {
  username: string | null;
  password: string | null;
};

export default class Signup extends Component<{}, State> {
  signupFormRef: React.Ref<HTMLFormElement>;

  constructor(props: {}) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
    this.signupFormRef = React.createRef();
  }

  onSignup() {}
  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Signup</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id='firebaseui-auth-container'></div>
        <div className='logo'>
          <img src='/assets/img/appicon.svg' alt='Ionic Logo' height='100' />
        </div>
        <form ref={this.signupFormRef}>
          <IonList no-lines>
            <IonItem>
              <IonLabel color='primary'>Username</IonLabel>
              <IonInput
                value={this.state.username}
                name='username'
                type='text'
                required></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel color='primary'>Password</IonLabel>
              <IonInput
                value={this.state.password}
                name='password'
                type='password'
                required></IonInput>
            </IonItem>
          </IonList>
          <div>
            <IonButton onClick={() => this.onSignup()} type='submit'>
              Create
            </IonButton>
          </div>
        </form>
        <IonList>
          <IonItem>
            <IonButton shape='round' fill='outline' color='warning'>
              <IonIcon slot='start' name='logo-google' />
              Log In With Google
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton shape='round' fill='outline' color='warning'>
              <IonIcon slot='start' name='logo-google' />
              Log In With GitHub
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton shape='round' fill='outline' color='warning'>
              <IonIcon slot='start' name='logo-google' />
              Log In With Mobile
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton shape='round' fill='outline' color='warning'>
              <IonIcon slot='start' name='logo-google' />
              Log In Anonymously
            </IonButton>
          </IonItem>
        </IonList>
      </>
    );
  }
}
 */
