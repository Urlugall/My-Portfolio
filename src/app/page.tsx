import Head from 'next/head';
import { NextPage } from 'next';
import NavigationPanel from '../components/navigation-panel';
import CanvasBackground from '../components/canvas-background'

const MainPage: NextPage = () => {
  return (
    <div className="main-container">
      <Head>
        <title>Illia Bodrov Portfolio</title>
      </Head>

      <CanvasBackground />

      <NavigationPanel />
      
      <div className="page-content absolute bottom-0 right-0 text-right w-1/2 p-6 sm:p-8 md:p-10 lg:p-14">
        <p className="regular-text">Hope you will find what you need on this page. I develop a variety of mobile & desktop games and programs, thus increasing the number of my possibilities. Also, I try to keep pace with creativity almost every day, which is like my second weapon.</p>
      </div>
    </div>
  );
};

export default MainPage;
