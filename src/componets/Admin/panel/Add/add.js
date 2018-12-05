import React , {Component} from 'react';
import  {Box} from 'gestalt';
import Offers from '../../../Home/componets/offers.js';


export default class Add extends Component {
  render() {
    return (
      <Box marginTop={4}>
        <div class="bootstrap-iso">
              <div >
                  <Offers/>
              </div>
              <div class="col-lg-8 col-md-8">
                <Box marginTop={3}>
                  <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">عنوان</span>
                    <input type="text" class="form-control" placeholder="Username" />
                  </div><br/>
                  <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">لوکیشین</span>
                    <input type="text" class="form-control" placeholder="Username" />
                  </div><br/>
                  <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">ستاره</span>
                    <input type="text" class="form-control" placeholder="Username" />
                  </div><br/>
                  <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1">عکس</span>
                    <input type="text" class="form-control" placeholder="Username" />
                  </div><br/>
                  <div class="col-lg-5 col-md-5"></div>
                  <div class="col-lg-2 col-md-2">
                      <button type="button" class="btn btn-danger">اضافه</button>
                  </div>
                  <div class="col-lg-5 col-md-5"></div>
                </Box>
              </div>
        </div>
      </Box>
    );
  }
}
