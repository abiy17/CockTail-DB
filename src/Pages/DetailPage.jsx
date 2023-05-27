import DetailBody from "../components/DetailBody";
import CocktailFooter from "../components/cocktailFooter";
import CocktailsNav from "../components/cocktailsNav";

function DetailPage() {
    return (
        <div className="detailpage">
            <CocktailsNav />
            <DetailBody />
            <CocktailFooter />
        </div>
      );
}

export default DetailPage;