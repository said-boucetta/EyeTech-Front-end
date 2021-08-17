import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Nouveaux Membres</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Boucetta Said</span>
            <span className="widgetSmUserTitle">Developpeur web</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Afficher
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Moulla Smail</span>
            <span className="widgetSmUserTitle">Etudiant</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Afficher
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hydra Rachid</span>
            <span className="widgetSmUserTitle">Employé</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Afficher
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Harrache Karim</span>
            <span className="widgetSmUserTitle">Paintre</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Afficher
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Bacha Abderaouf</span>
            <span className="widgetSmUserTitle">Vétérinaire</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Afficher
          </button>
        </li>
      </ul>
    </div>
  );
}
