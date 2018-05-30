import * as React from "react";

export interface IDataFetcherProps<T> {
  url: string;
  children: (data: T | null) => JSX.Element;
}

export interface IDataFetcherState<T> {
  data: T | null;
}

export class DataFetcher<T> extends React.PureComponent<IDataFetcherProps<T>, IDataFetcherState<T>> {
  public state = {
    data: null,
  };

  async componentDidMount() {
    const response = await fetch(this.props.url)
    const data = await response.json();

    this.setState({
      data,
    })
  }

  public render() {
    return (
      this.state.data !== null ? <div>Loading</div> :
      this.props.children(this.state.data)
    )
  }
}
