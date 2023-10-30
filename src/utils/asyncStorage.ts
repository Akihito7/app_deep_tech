import AsyncStorage from '@react-native-async-storage/async-storage';


type ItemProps = {
    id: string;
    name: string;
    information: string;
    category: string;
    price: string;
    imagem: string;
    colors: string;

};

const asyncStorageItemName = "@deepTech:item";

export async function setItemAsyncStorage(item: ItemProps) {

    const itensString = await AsyncStorage.getItem(asyncStorageItemName);

    const itensParse = itensString ? JSON.parse(itensString) : [];

    const itensSetAsyncStorage = [...itensParse, item]

    await AsyncStorage.setItem(asyncStorageItemName, JSON.stringify(itensSetAsyncStorage))
};

export async function getItensAsyncStorage() {

    const itensString = await AsyncStorage.getItem(asyncStorageItemName);

    const itensParse = itensString ? JSON.parse(itensString) : [];

    return itensParse;
};

export async function deleteItemAsyncStorage(id: string) {
    
    const itensString = await AsyncStorage.getItem(asyncStorageItemName);

    const itensParse = itensString ? JSON.parse(itensString) : [];

    const itensFiltered = itensParse.filter((item: ItemProps) => item.id != id);

    await AsyncStorage.setItem(asyncStorageItemName, JSON.stringify(itensFiltered))

};


