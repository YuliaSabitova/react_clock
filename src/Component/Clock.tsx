import React from 'react';
interface Props {
  clockName: string;
}

interface State {
  timer: string;
}

export class Clock extends React.Component<Props, State> {
  private timerId: number | undefined;

  state: Readonly<State> = {
    timer: new Date().toLocaleTimeString('en-GB', { timeZone: 'UTC' }),
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        timer: new Date().toLocaleTimeString('en-GB', { timeZone: 'UTC' }),
      });
      //eslint-disable-next-line no-console
      console.log(new Date().toLocaleTimeString('en-GB', { timeZone: 'UTC' }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    const { timer } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}
        <span className="Clock__time">{timer}</span>
      </div>
    );
  }
}
