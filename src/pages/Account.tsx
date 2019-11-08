import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { RootState, actions } from "../store";
import {
  IonAlert,
  IonHeader,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonToolbar
} from "@ionic/react";

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrQEupm_MrUm1eXRHVL6SJ6fHyS89Yxak",
  authDomain: "fir-32d38.firebaseapp.com",
  databaseURL: "https://fir-32d38.firebaseio.com",
  projectId: "fir-32d38",
  storageBucket: "fir-32d38.appspot.com",
  messagingSenderId: "785847414044",
  appId: "1:785847414044:web:1a7589d76c9ae57f969ed9",
  measurementId: "G-XVZXW5QXM6"
};
//firebase.initializeApp(firebaseConfig);

type Props = RouteComponentProps<{}> &
  typeof mapDispatchToProps &
  ReturnType<typeof mapStateToProps>;

type State = {
  showAlert: boolean;
};

class Account extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showAlert: false
    };
  }

  updatePicture = () => {
    console.log("Clicked to update picture");
  };

  changeUsername = () => {
    this.setState(() => ({
      showAlert: true
    }));
  };

  changePassword = () => {
    console.log("Clicked to change password");
  };

  support = () => {
    this.props.history.push("/support");
  };

  logout = () => {
    // this.props.logOutUser();

    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        alert("LoggedOut");
      })
      .catch(function(error) {
        // An error happened.
      });

    this.props.history.push("/login");
  };

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Account</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonAlert
          isOpen={this.state.showAlert}
          header={"Change Username"}
          buttons={[
            "Cancel",
            {
              text: "Ok",
              handler: ({ username }: { username: string }) => {
                this.props.setUsername(username);
              }
            }
          ]}
          inputs={[
            {
              type: "text",
              name: "username",
              value: this.props.user.userName,
              placeholder: "username"
            }
          ]}
          onDidDismiss={() => this.setState(() => ({ showAlert: false }))}
        />

        <IonContent class='outer-content page-account'>
          <div>
            <img
              style={{
                maxWidth: "140px",
                borderRadius: "50%"
              }}
              src='http://www.gravatar.com/avatar?d=mm&s=140'
              alt='avatar'
            />
            <h2>{this.props.user.userName}</h2>

            <IonList inset>
              <IonItem href='#' onClick={this.updatePicture}>
                Update Picture
              </IonItem>
              <IonItem href='#' onClick={this.changeUsername}>
                Change Username
              </IonItem>
              <IonItem href='#' onClick={this.changePassword}>
                Change Password
              </IonItem>
              <IonItem href='#' onClick={this.support}>
                Support
              </IonItem>
              <IonItem href='#' onClick={this.logout}>
                Logout
              </IonItem>
            </IonList>
          </div>
        </IonContent>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.user
});

const mapDispatchToProps = {
  logOutUser: () => actions.user.logOut(),
  setUsername: (username: string) => actions.user.setUsername(username)
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Account)
);
