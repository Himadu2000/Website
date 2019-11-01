import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import {
  calendar,
  contacts,
  hammer,
  help,
  logIn,
  logOut,
  map,
  person,
  personAdd,
  informationCircle
} from "ionicons/icons";
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { RootState } from "../store";

const routes = {
  appPages: [
    { title: "Schedule", path: "/", icon: calendar },
    { title: "Daily Images", path: "/Images", icon: calendar },
    { title: "Speakers", path: "/speakers", icon: contacts },
    { title: "Map", path: "/map", icon: map },
    { title: "About", path: "/about", icon: informationCircle },
    { title: "Footer", path: "/footer", icon: calendar },
    { title: "Downloads", path: "/downloads", icon: calendar },
    { title: "Articles", path: "/articles", icon: calendar },
    { title: "Alerts", path: "/alerts", icon: calendar },
    { title: "Blog", path: "/blog", icon: calendar },
    { title: "Home", path: "/home", icon: calendar },
    { title: "Comments", path: "/comments", icon: calendar },
    { title: "Contacts", path: "/contacts", icon: calendar },
    { title: "News", path: "/news", icon: calendar },
    { title: "Privacy", path: "/privacy", icon: calendar },
    { title: "Log", path: "/log", icon: calendar },
    { title: "Terns", path: "/terms", icon: calendar }
  ],
  loggedInPages: [
    { title: "Account", path: "/account", icon: person },
    { title: "Support", path: "/support", icon: help },
    { title: "Logout", path: "/logout", icon: logOut },
    { title: "Chat", path: "/chat", icon: logOut }
  ],
  loggedOutPages: [
    { title: "Login", path: "/login", icon: logIn },
    { title: "Support", path: "/support", icon: help },
    { title: "Signup", path: "/signup", icon: personAdd }
  ]
};

type Props = RouteComponentProps<{}> & ReturnType<typeof mapStateToProps>;

const Menu: React.SFC<Props> = ({ isAuthenticated, history }) => {
  function renderlistItems(list: any[]) {
    return list
      .filter(route => !!route.path)
      .map(p => (
        <IonMenuToggle key={p.title} auto-hide='false'>
          <IonItem button onClick={() => history.push(p.path)}>
            <IonIcon slot='start' icon={p.icon} />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  return (
    <IonMenu contentId='main'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class='outer-content'>
        <IonList>
          <IonListHeader>Navigate</IonListHeader>
          {renderlistItems(routes.appPages)}
        </IonList>
        <IonList>
          <IonListHeader>Account</IonListHeader>
          {isAuthenticated
            ? renderlistItems(routes.loggedOutPages)
            : renderlistItems(routes.loggedInPages)}
        </IonList>
        <IonList>
          <IonListHeader>Tutorial</IonListHeader>
          <IonItem onClick={() => {}}>
            <IonIcon slot='start' icon={hammer} />
            Show Tutorial
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.user.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(Menu));
