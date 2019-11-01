import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBTreeview,
  MDBTreeviewList,
  MDBTreeviewItem
} from "mdbreact";
import "./Style.css";

const SiteMap = () => {
  return (
    <div className='chat-padding'>
      <MDBContainer header='Animated' className='Site1'>
        <MDBCol md='4'>
          <MDBTreeview
            theme='colorful'
            header='HimaduSirimannax'
            className='border-secondary w-20 '
            getValue={value => console.log(value)}>
            <MDBTreeviewItem icon='trash-alt' title='Home' />
            <MDBTreeviewList icon='envelope-open' title='Empty2' far>
              <MDBTreeviewItem icon='address-book' title='Empty3' far />
              <MDBTreeviewItem icon='bell' title='Empty4' far />
              <MDBTreeviewList icon='calendar' title='Empty5' far>
                <MDBTreeviewItem icon='clock' title='Empty6' far />
                <MDBTreeviewItem icon='users' title='Emppty7' />
                <MDBTreeviewItem icon='basketball-ball' title='Empty8' />
                <MDBTreeviewItem icon='mug-hot' title='Empty9' />
              </MDBTreeviewList>
            </MDBTreeviewList>
            <MDBTreeviewList title='Empty10' far>
              <MDBTreeviewItem title='Empty11' far />
              <MDBTreeviewItem title='Empty12' far />
              <MDBTreeviewItem title='Empty13' far />
              <MDBTreeviewItem title='Empty14' far />
            </MDBTreeviewList>
            <MDBTreeviewList icon='gem' title='Empty15' far>
              <MDBTreeviewItem icon='pepper-hot' title='Empty16' />
              <MDBTreeviewItem icon='eye' title='Empty17' far />
              <MDBTreeviewItem icon='gamepad' title='Empty18' />
              <MDBTreeviewItem icon='cocktail' title='Empty19' />
              <MDBTreeviewItem icon='pizza-slice' title='Empty20' />
            </MDBTreeviewList>
            <MDBTreeviewItem icon='comment' title='Empty21' far />
            <MDBTreeviewItem icon='cog' title='Empty22' />
            <MDBTreeviewItem icon='desktop' title='Empty23' />
          </MDBTreeview>
        </MDBCol>
      </MDBContainer>
    </div>
  );
};

export default SiteMap;
