import Controls from 'components/Controls/Controls';
import Progress from 'components/Progress/Progress';
import Publication from 'components/Publication/Publication';
import React, { Component } from 'react';

const LS_KEY = 'reader_item_index';

export default class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  changeIndex = step => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + step,
    }));
  };

  componentDidMount = () => {
    const savedIndex = localStorage.getItem(LS_KEY);

    if (savedIndex) {
      this.setState({ publicationIndex: Number(savedIndex) });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.publicationIndex !== this.state.publicationIndex) {
      localStorage.setItem(LS_KEY, this.state.publicationIndex);
    }
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const totalItems = items.length;
    const activePublication = this.props.items[this.state.publicationIndex];

    return (
      <div>
        <section>
          <Controls
            changeIndex={this.changeIndex}
            total={totalItems}
            current={publicationIndex + 1}
          />

          <Progress current={publicationIndex + 1} total={totalItems} />

          {activePublication && <Publication item={activePublication} />}
        </section>
      </div>
    );
  }
}
