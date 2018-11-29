import React, { Component } from 'react';
import {Box , Flyout , Button , Text} from 'gestalt';

import '../styles/gestalt.css';

export default class Flyout1 extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this._handleClick.bind(this);
    this.handleDismiss = this._handleDismiss.bind(this);
  }
  _handleClick() {
    this.setState(() => ({ open: !this.state.open }));
  }
  _handleDismiss() {
    this.setState(() => ({ open: false }));
  }
  render() {
    return (
      <Box>
        <div
          style={{ display: "inline-block" }}
          ref={c => {
            this.anchor = c;
          }}
        >
        <Box marginTop={10} marginLeft={7}>
          <Button
            accessibilityExpanded={!!this.state.open}
            accessibilityHaspopup
            onClick={this.handleClick}
            text="اشتراک گذاری"
            color="darkGray"
          />
        </Box>
        </div>
        {this.state.open &&
          <Flyout
            anchor={this.anchor}
            idealDirection="down"
            onDismiss={this.handleDismiss}
            size="sm"
          >
            <Box padding={3}>
              <Box marginLeft={10}>
                <Text bold>اشتراک گذاری صفحه</Text>
              </Box>
              <Box paddingX={10} marginTop={3}>
                <Button color="red" text="اشتراک با تلگرام" />
                <Button color="red" text="اشتراک با توییتر" />
              </Box>
            </Box>
          </Flyout>}
      </Box>
    );
  }
}
