import React, { createContext, useContext, useState } from "react";

const ProductsByNameContext = createContext({} as ProductsByNameProps);

interface ProductsByCategoriesProps {
    children: React.ReactNode;
};

type ProductsByNameProps = {
    productsByName: [ProductsProps];
    setProductsByName: (value: [ProductsProps]) => void;
};

type ProductsProps = {
    id: string;
    name: string;
    information: string;
    category: string;
    price: string;
    imagem: string;
    colors: string;
};

function ProductsByNameContextProvider({ children }: ProductsByCategoriesProps) {

    const [productsByName, setProductsByName] = useState<[ProductsProps]>([]);

    return (
        <ProductsByNameContext.Provider value={{
            productsByName,
            setProductsByName

        }}>
            {children}

        </ProductsByNameContext.Provider>
    )
}


function useContextSearchByName(){
    const response = useContext(ProductsByNameContext);

    return response;
}

export { ProductsByNameContextProvider, useContextSearchByName}