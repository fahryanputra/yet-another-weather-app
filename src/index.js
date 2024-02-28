import "Styles/style.css";
import createQuery from "Modules/queryUtils";
import renderContent from "UI/renderContent";
import renderHeader from "UI/renderHeader";
import renderFooter from "UI/renderFooter";

const query = createQuery("Jakarta");

renderHeader(query);
renderContent(query);
renderFooter();
