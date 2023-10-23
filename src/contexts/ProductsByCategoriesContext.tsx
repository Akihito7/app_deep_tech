import { createContext, useContext, useState } from "react";
import { api } from "../axios";
const ProductsByCategories = createContext({} as ProductsByCategories);

interface ProductsByCategoriesProps {
    children: React.ReactNode;
}

type ProductsByCategories = {
    productsByCategories: [ProductsProps] | undefined
    setProductsByCategories: (value: [ProductsProps]) => void;
    getProductsByCategory: (category: string) => void;
    categorySelected: string | undefined;
    isCategorySelect: boolean;
}

type ProductsProps = {
    id: string;
    name: string;
    information: string;
    category: string;
    price: string;
    imagem: string;
    colors: string;
};

function ProductsByCategoriesProvider({ children }: ProductsByCategoriesProps) {

    const [productsByCategories, setProductsByCategories] = useState<[ProductsProps] | undefined>();
    const [categorySelected, setCategorySelected] = useState<string>();
    const [isCategorySelect, setIsCategorySelected] = useState(false)


    async function getProductsByCategory(category: string) {

        setCategorySelected(category);
        try {

            if (categorySelected === category) {
                setCategorySelected(undefined)
                setProductsByCategories(undefined)
                setIsCategorySelected(false)
            }
            else {
                setIsCategorySelected(true)
                setProductsByCategories(undefined)
                const response = await api.get(`/products/category/${category}`);
                setProductsByCategories(response.data)


            }

        } catch (error) {
            console.log(error)
        }
    };



    return (
        <ProductsByCategories.Provider value={{
            productsByCategories,
            setProductsByCategories,
            getProductsByCategory,
            categorySelected,
            isCategorySelect,

        }}>
            {children}
        </ProductsByCategories.Provider>
    )
};

function useProductsByCategories() {
    const data = useContext(ProductsByCategories);
    return data;
};


export { ProductsByCategoriesProvider, useProductsByCategories }




