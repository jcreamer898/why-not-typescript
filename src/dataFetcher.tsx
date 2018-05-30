import * as React from "react";

export interface IDataFetcherProps {
  url: string;
  render<T>(data: T | null): JSX.Element;
}

export interface IDataFetcherState {
  data: T | null;
}

export class DataFetcher extends React.PureComponent<IDataFetcherProps, IDataFetcherState> {
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
