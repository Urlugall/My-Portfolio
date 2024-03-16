import Head from 'next/head';
import NavigationPanel from '@/components/navigation-panel';
import CanvasBackground from '@/components/canvas-background'
import SkillsPanel from '@/components/skills-panel'
import { promises as fs } from 'fs';

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/public/skills/data.json', 'utf8');
  const data = JSON.parse(file);
  return (
    <div className="main-container">
      <Head>
        <title>Illia Bodrov Portfolio</title>
      </Head>

      <CanvasBackground />

      <NavigationPanel />
      
      <div className="page-content container mx-auto p-4">
        <SkillsPanel items={data}/>
      </div>
    </div>
  );
};