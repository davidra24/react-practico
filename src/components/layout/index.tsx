import React from 'react';
import { Header } from '../header';
import { Footer } from '../footer';

export const Layout = (props: any) => (
  <div className='App'>
    <Header></Header>
    {props.children}
    <Footer></Footer>
  </div>
);
