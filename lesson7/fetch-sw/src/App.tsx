import React, {Component} from 'react';
import {ShipType, StarShipsListItem} from './types/shipType'
import SWShipsList from "./components/SWShipsList/SWShipsList";
import Pagination from "./components/Pagination/Pagination";
import SearchShip from "./components/SerachShip/SearchShip";
import Loader from "./components/UI/Loader/Loader";
import ErrorMessage from "./components/UI/ErrorMessage/ErrorMessage";

type MyProps = {}
type MyState = {
    status: 'error' | 'loading' | 'success' | string;
    shipsList: StarShipsListItem[] | ShipType[],
    errorMessage: string;
    searchOptions: {
        value: string;
        option: string;
    },
    pagination: {
        currentPage: number,
        totalPage: number,
    }
}

class App extends Component<MyProps, MyState> {
    state = {
        status: 'loading',
        errorMessage: 'Ups something went wrong',
        shipsList: [],
        searchOptions: {
            value: '',
            option: 'name'
        },
        pagination: {
            currentPage: 1,
            totalPage: 1,
        }
    }

    searchOptionHandler = (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target

        this.setState({
            searchOptions: {
                ...this.state.searchOptions,
                value
            }
        })
    }

    changePageHandler = (index: number) => {
        this.setState({
            pagination: {
                ...this.state.pagination,
                currentPage: index
            }
        })
    }

    fetchData = async (page:string | number = '1') => {
        this.setState({
            status: 'loading'
        })

        try {
            const response = await fetch(`https://www.swapi.tech/api/starships/?page=${page}`, {
                method: "GET",
            })

            if (!response.ok) throw new Error('Server not work');

            const data = await response.json()

            this.setState(prev => {

                return {
                    shipsList: data.results,
                    status: 'success',
                    pagination: {
                        ...prev.pagination,
                        totalPage: data['total_pages']
                    }
                }
            })
        } catch (e) {
            this.setState({
                status: 'error',
                errorMessage: 'Fetch data is failed'
            })
            console.log(e)
        }
    }

    fetchShip = async () => {
        this.setState({
            status: 'loading'
        })

        const transformValue = this.state.searchOptions.value.trim()

        try {
            const response = await fetch(`https://www.swapi.tech/api/starships/?search=${transformValue}`, {
                method: "GET",
            })

            if (!response.ok) throw new Error('Server not work');

            const data = await response.json()

            console.log(data)

            this.setState(prev => {

                return {
                    shipsList: data.result,
                    status: 'success',
                    pagination: {
                        ...prev.pagination,
                        totalPage: 1,
                    }
                }
            })
        } catch (e) {
            this.setState({
                status: 'error',
                errorMessage: 'Fetch data is failed'
            })
            console.log(e)
        }
    }

    componentDidMount(): void {
        this.fetchData(this.state.pagination.currentPage)
    }

    componentDidUpdate(prevProps: Readonly<MyProps>, prevState: Readonly<MyState>): void {
        if(prevState.pagination.currentPage !== this.state.pagination.currentPage) {
            this.fetchData(this.state.pagination.currentPage)
        }
    }

    render() {
        const {status, pagination} = this.state
        return (
            <div className="container">
                <h1>Star Wars Ships</h1>
                <SearchShip options={this.state.searchOptions} onChange={this.searchOptionHandler} onClick={this.fetchShip}/>
                {status === 'loading' && <Loader/>}
                {status === 'success' && <SWShipsList list={this.state.shipsList}/>}
                {status === 'error' && <ErrorMessage message={this.state.errorMessage}/>}
                {pagination.totalPage > 1 && <Pagination pageOptions={this.state.pagination} onSetPage={this.changePageHandler}/>}
            </div>
        );
    }
}

export default App;
