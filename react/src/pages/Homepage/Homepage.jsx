import React from 'react';
import Aside from '../../components/Aside/Aside';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Greating from '../../components/Greating/Greating';
import Numbers from '../../components/Numbers/Numbers';


function Homepage() {
  return (
    <>
      <Header />
      <main>
        <Aside>
        </Aside>
        <Content>
          <Greating text={Greating} name="Vasya!"/>
          <Numbers start={5} end={7}/>
        </Content>

      </main>
      <Footer />
    </>
  );
}

export default Homepage;
