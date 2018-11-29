import {Box , Icon , SearchField , IconButton , Text , Button} from 'gestalt';
import React, { Component } from 'react';

import '../styles/App.css';
import '../styles/bs/css/bootstrap-iso.css';
import '../styles/gestalt.css';

export default class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = { value: '' };
    }

    render() {
      return (

        <Box color="watermelon" padding={3} display="flex" direction="row" alignItems="center">
          <Box paddingX={3} >
             <div class="bootstrap-iso">
                 <div class="visible-lg visible-md visible-sm visible-xs">
                    <Button color="transparent" text="ثبت رایگان آگهی" />
                 </div>
             </div>
          </Box>

          <Box flex="grow" paddingX={2}  shape="rounded" >
          <div >
            <SearchField
              accessibilityLabel="Demo Search Field"
              id="searchField"
              onChange={({ value }) => this.setState({ value })}
              placeholder="جستجو: رستوران , باشگاه انقلاب"
              value={this.state.value}
            />
          </div>
                </Box>
          <Box paddingX={3}>
          <div dir="rtl" class="bootstrap-iso">
             <div class="hidden-sm hidden-xs">
             <Box alignItems="center" display="flex">
                <Box marginRight={1} padding={1}>
                   <Icon icon="location" accessibilityLabel="location" color="white" />
                </Box>
                <Text align="center" bold color="white">
                تـهــران
                </Text>
            </Box>
            </div>
          </div>

        </Box>
        <div class="bootstrap-iso">
          <div class="hidden-sm hidden-xs">
          <Box paddingX={2}>
            <Text bold color="white">LOGO</Text>
          </Box>
          </div>
         </div>
        </Box>

      );
    }
  }
