import React from 'react';
import Aside from '../../components/Aside/Aside';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Greating from '../../components/Greating/Greating';
import Numbers from '../../components/Numbers/Numbers';
import Users from '../../components/Users/Users';
//import List from '../../components/List/List';
// import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import Show from '../../components/Show/Show';
import Clock from '../../components/Clock/Clock';


function Homepage() {
  return (
    <>
      <Header />
      <main>
        {/* <Modal content='Lorem ipsum'/> */}

        <Aside />

        <Content>
          {/* <List /> */}
          <Clock />
          <Greating text={Greating} name="Vasya!"/>
          <Numbers start={5} end={7}/>
          <Numbers start={5} end={7} odd/>
          <Numbers start={5} end={7} even/>
          <Users/>
          <Button />
          <Show />
        </Content>
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
