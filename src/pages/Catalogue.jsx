import React, { Component } from "react";
import { categories, products } from "../data";
import Sidebar from "../components/Sidebar";
import ProductsList from "./../components/ProductsList";

class Catalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorie: 0,
        };
    }

    handleCategorieChanged = (catId) => {
        console.log("Changement de catégorie : " + catId);
        this.setState({ categorie: catId });
    };

    getProductsList = () => {
        const produits = products.filter(
            (product) => product.category === this.state.categorie
        );
        return produits;
    };

    render() {
        const productsList = this.getProductsList();

        return (
            <div className="row">
                <div className="col-sm-2">
                    <Sidebar
                        items={categories}
                        onCategorieChanged={(catId) =>
                            this.handleCategorieChanged(catId)
                        }
                    />
                </div>
                <div className="col-sm">
                    Liste de produits de la categorie {this.state.categorie}
                    <ProductsList items={productsList} />
                </div>
            </div>
        );
    }
}

export default Catalogue;
