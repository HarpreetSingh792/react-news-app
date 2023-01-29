import React, { Component } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Items from './Items';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            country: 'in',
            category: 'general',
            empty: true,
            internetWorking: '',
            q: ''
        }
        document.title = this.toCapitalize(this.props.category) + " - Treshhon News"

    }
    static defaultProps = {
        country: 'in',
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }
    async componentDidMount() {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5eb5d1a89b914460b34e3b7f8307d322&page=${this.state.page}&pageSize=24`;
            this.setState(
                {
                    loading: true,
                    empty: true
                }
            )
            let fetchData = await fetch(url);
            let parsedData = await fetchData.json()
            this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
            console.log(parsedData.totalResults)
            this.state.totalResults ? this.setState({ empty: true }) : this.setState({ empty: false })
        }
        catch (e) {
            this.setState({
                internetWorking: "Connection to Network Failed !"
            })
        }
        let input = document.querySelector('#search-news-input');
        let btn = document.querySelector('#search-news-btn');
        btn.addEventListener('click', async () => {
            this.setState({
                q: input.value
            })
            console.log(this.state.q)
            if (this.state.q) {
                let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&q=${this.state.q}&apiKey=5eb5d1a89b914460b34e3b7f8307d322&page=${this.state.page}&pageSize=24`;
                this.setState(
                    {
                        loading: true,
                        empty: true
                    }
                )
                let fetchData = await fetch(url);
                let parsedData = await fetchData.json()
                this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
                console.log(parsedData.totalResults,"Total-Results");
                console.log(parsedData.articles)
                this.state.totalResults ? this.setState({ empty: true }) : this.setState({ empty: false })
            }

        })

    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&q=${this.state.q}&apiKey=5eb5d1a89b914460b34e3b7f8307d322&page=${this.state.page + 1}&pageSize=24`;
        this.setState(
            {
                loading: true,
                empty: true
            }
        )
        let fetchData = await fetch(url);
        let parsedData = await fetchData.json();
        setTimeout(
            ()=>{
                this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false })
                this.state.totalResults ? this.setState({ empty: true }) : this.setState({ empty: false })
                console.log(this.state.articles.length)
                console.log(this.state.totalResults,"Total Result")
            }
        )

    };
    toCapitalize(word) {
        return word[0].toUpperCase() + word.slice(1, word.length);
    }
    render() {
        return (
            <>
                <div className='search-nav'>
                    <input id="search-news-input" placeholder='Search' name='search' value={this.state.q} onChange={(e) => {
                        this.setState({ q: e.target.value })
                    }} />
                    <button id="search-news-btn">Search</button>
                </div>
                {this.state.internetWorking ? <h3 id="connection-to-internet">{this.state.internetWorking} </h3> :
                    <div id="item-heading">
                        <h1
                            id="title-content">Treshhon News </h1>
                        <p>Top Headlines - {this.toCapitalize(this.props.category)}</p>
                    </div>
                }

                {this.state.internetWorking ? "" : <div>{this.state.loading && <Spinner />}</div>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='news-items'>
                        {
                            this.state.articles.map((article) => {
                                return <Items key={article.url} title={article.title} urlToImage={article.urlToImage} description={article.description} url={article.url} source={article.source.name} author={article.author} published={article.publishedAt} />
                            })
                        }
                    </div>
                </InfiniteScroll>
                {this.state.empty ? '' : <h1 style={{ textAlign: 'center' }}>No Result Found</h1>}
            </>
        )
    }
}

export default Container
