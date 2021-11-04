import React from 'react';
import Aside from '../../components/Aside/Aside';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Greating from '../../components/Greating/Greating';

function Homepage() {
  return (
    <>
      <Header />
      <main>
      <Greating text={Greating} name="Ivan"/>
        <Aside>
        </Aside>
        <Content>
        </Content>
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
