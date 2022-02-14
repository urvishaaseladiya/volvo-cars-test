import React from 'react'
import { CarsHomeComponent } from '../Components/CarsHomeComponent'
import { Header } from '../Components/Header'

export const Home = () => {

    const [searchValue, setSearchValue] = React.useState('all');

    const setSearchTextValue = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div>
            <Header value={searchValue} setValue={setSearchTextValue.bind(this)} />
            <CarsHomeComponent searchText={searchValue}/>
        </div>
    )
}