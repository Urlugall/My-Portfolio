import Head from 'next/head';
import { NextPage } from 'next';
import NavigationPanel from '@/components/navigation-panel';
import ContactsPanel from '@/components/contacts-panel'
import CanvasBackground from '@/components/canvas-background'

const Page: NextPage = () => {
  return (
    <div className="main-container">
      <Head>
        <title>Illia Bodrov Portfolio</title>
      </Head>

      <CanvasBackground />
      
      <NavigationPanel />
      <ContactsPanel />
    </div>
  );
};


export default Page;